"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function SolarCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      ringRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* Core Energy Sphere */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 8]} />
          <meshPhysicalMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.9}
            wireframe={true}
            transparent={true}
            opacity={0.85}
          />
        </mesh>
        
        {/* Outer Ring System */}
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.85, 0.012, 16, 100]} />
            <meshBasicMaterial color="#34d399" transparent opacity={0.45} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1.15, 1.15, 1.15]}>
            <torusGeometry args={[1.85, 0.006, 16, 100]} />
            <meshBasicMaterial color="#a7f3d0" transparent opacity={0.25} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export function PremiumHeroSceneCanvas() {
  return (
    <div className="h-full w-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 6, 5]} intensity={1.8} penumbra={1} color="#34d399" />
        <spotLight position={[-5, -5, -5]} intensity={0.6} color="#10b981" />
        <Environment preset="city" />
        <SolarCore />
      </Canvas>
    </div>
  );
}
