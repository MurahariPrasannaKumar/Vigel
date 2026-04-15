"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const heroImages = [
  "/hero-images/01.jpg",
  "/hero-images/02.jpg",
  "/hero-images/03.jpg",
  "/hero-images/04.jpg",
  "/hero-images/05.jpg",
  "/hero-images/06.jpg",
  "/hero-images/07.jpg",
  "/hero-images/08.jpg",
  "/hero-images/09.jpg",
];

// Duplicated for the seamless infinite loop
const loopImages = [...heroImages, ...heroImages];

type HeroOrbitCarouselProps = {
  onHorizontalStart?: () => void;
  onActiveImageChange?: (imageSrc: string) => void;
};

export function HeroOrbitCarousel({
  onHorizontalStart,
  onActiveImageChange,
}: HeroOrbitCarouselProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const hasShownContentRef = useRef(false);
  const activeIndexRef = useRef(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const items = itemsRef.current.filter(
      (item): item is HTMLDivElement => item !== null,
    );

    if (!root || !stage || items.length === 0) return;

    const cardWidth = items[0].offsetWidth || 236;
    const gap = window.innerWidth < 768 ? 16 : 24;
    const step = cardWidth + gap;

    const halfItems = items.length / 2;
    const totalTrackWidth = halfItems * step;
    const finalLineYOffset = root.offsetHeight * 0.34;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ellipseRadiusX = Math.min(window.innerWidth * 0.36, 360);
    const ellipseRadiusY = Math.min(window.innerHeight * 0.15, 120);
    const startEllipseRadiusX = ellipseRadiusX * 0.18;
    const startEllipseRadiusY = ellipseRadiusY * 0.18;

    let activeImageTicker: number | null = null;

    const ctx = gsap.context(() => {
      // 1. Scene Setup
      gsap.set(root, { perspective: 1200 });
      gsap.set(stage, { transformStyle: "preserve-3d" });

      const orbitState = {
        radiusX: startEllipseRadiusX,
        radiusY: startEllipseRadiusY,
        rotation: -Math.PI / 3,
        z: -1800,
        scale: 0.46,
        opacity: 0,
        tilt: 62,
      };

      const renderOrbit = () => {
        items.forEach((item, index) => {
          const angle =
            (index / items.length) * Math.PI * 2 + orbitState.rotation;
          const depthFactor = (Math.sin(angle) + 1) / 2;
          const itemScale = orbitState.scale * (0.8 + depthFactor * 0.22);
          const itemZ = orbitState.z + depthFactor * 260;
          const itemOpacity = Math.min(
            1,
            orbitState.opacity * (0.76 + depthFactor * 0.24),
          );
          const itemZIndex = Math.round(20 + depthFactor * 80);

          gsap.set(item, {
            xPercent: -50,
            yPercent: -50,
            x: Math.cos(angle) * orbitState.radiusX,
            y: Math.sin(angle) * orbitState.radiusY,
            z: itemZ,
            scale: itemScale,
            opacity: itemOpacity,
            rotateX: orbitState.tilt,
            rotateY: angle * (180 / Math.PI),
            zIndex: itemZIndex,
            force3D: true,
          });
        });
      };

      // 2. Position items in a small circular orbit
      renderOrbit();

      const syncActiveBackground = (index: number) => {
        const normalizedIndex =
          ((index % heroImages.length) + heroImages.length) % heroImages.length;
        if (normalizedIndex !== activeIndexRef.current) {
          activeIndexRef.current = normalizedIndex;
          onActiveImageChange?.(heroImages[normalizedIndex]);
        }
      };

      const startBackgroundTicker = (intervalMs: number) => {
        syncActiveBackground(0);
        activeImageTicker = window.setInterval(() => {
          syncActiveBackground(activeIndexRef.current + 1);
        }, intervalMs);
      };

      // Start background updates as soon as the ellipse carousel animation starts.
      startBackgroundTicker(prefersReducedMotion ? 3600 : 3200);

      const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

      if (prefersReducedMotion) {
        gsap.set(items, {
          xPercent: -50,
          yPercent: -50,
          y: finalLineYOffset,
          z: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          zIndex: 30,
          x: (index) => (index - halfItems) * step,
          force3D: true,
        });

        if (!hasShownContentRef.current) {
          hasShownContentRef.current = true;
          onHorizontalStart?.();
        }

        gsap.to(items, {
          x: `-=${totalTrackWidth}`,
          duration: 45,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalTrackWidth),
          },
        });

        return;
      }

      tl.to(
        orbitState,
        {
          // Phase 1: expand and rotate in an elliptical orbit
          radiusX: ellipseRadiusX,
          radiusY: ellipseRadiusY,
          rotation: Math.PI * 1.15,
          z: 0,
          scale: 1,
          opacity: 1,
          tilt: 16,
          duration: 3.1,
          ease: "power3.out",
          onUpdate: renderOrbit,
        },
        0,
      )
        .to(
          items,
          {
            // Phase 2: Unwrap the orbit into a flat horizontal line
            y: finalLineYOffset,
            z: 0,
            scale: 1,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            zIndex: 30,
            x: (index) => (index - halfItems) * step,
            duration: 2,
            ease: "expo.inOut", // Expo ease makes the "snap" into a line look incredibly smooth and deliberate
            stagger: 0.015, // A tiny micro-stagger makes the unwrap look like a smooth wave
          },
          "-=1.2",
        ) // Heavy overlap (-1.2s) so it starts unwrapping right as the orbit gets close
        .add(() => {
          if (!hasShownContentRef.current) {
            hasShownContentRef.current = true;
            onHorizontalStart?.();
          }

          // Phase 3: The infinite seamless marquee loop
          gsap.to(items, {
            x: `-=${totalTrackWidth}`,
            duration: 35,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => parseFloat(x) % totalTrackWidth),
            },
          });

        });
    }, root);

    return () => {
      if (activeImageTicker !== null) {
        window.clearInterval(activeImageTicker);
      }
      ctx.revert();
    };
  }, [onActiveImageChange, onHorizontalStart]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-2 overflow-hidden"
    >
      {/* Dynamic lighting/fog backgrounds */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_38%,rgba(16,185,129,0.08),transparent_34%),radial-gradient(circle_at_50%_55%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_50%_55%,rgba(0,0,0,0)_0%,rgba(5,9,12,0.84)_70%,rgba(5,9,12,1)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-[35%] bg-linear-to-t from-[#05090c] via-[#05090c]/80 to-transparent" />

      <div
        ref={stageRef}
        className="absolute inset-0 z-20 transform-[translateZ(0)] will-change-transform"
      >
        {loopImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            ref={(node) => {
              itemsRef.current[index] = node;
            }}
            className="absolute left-1/2 top-1/2 contain-[layout_paint_style] will-change-transform"
          >
            <div className="relative h-[96px] w-[168px] overflow-hidden rounded-[14px] border border-white/10 bg-white/6 shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:h-[112px] sm:w-[196px] lg:h-[140px] lg:w-[240px]">
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_30%,transparent_68%,rgba(16,185,129,0.18))]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
