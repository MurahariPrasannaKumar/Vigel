/**
 * VIGEL auth API — Express + JWT
 * Verifies Firebase ID tokens, issues short-lived access JWT + refresh JWT.
 */
import { config as loadEnv } from "dotenv";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

loadEnv({ path: resolve(process.cwd(), ".env") });
loadEnv({ path: resolve(process.cwd(), ".env.local"), override: true });

import cors from "cors";
import express from "express";
import admin from "firebase-admin";
import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";
import { randomUUID } from "node:crypto";

function loadServiceAccount(): admin.ServiceAccount {
  const pathEnv = process.env.FIREBASE_SERVICE_ACCOUNT_PATH?.trim();
  if (pathEnv) {
    const filePath = resolve(process.cwd(), pathEnv);
    try {
      const raw = readFileSync(filePath, "utf8");
      const parsed = JSON.parse(raw) as admin.ServiceAccount & {
        type?: string;
      };
      if (parsed.type !== "service_account") {
        throw new Error("JSON must be a Firebase service account key (type: service_account).");
      }
      return parsed;
    } catch (e) {
      console.error(
        `Failed to read FIREBASE_SERVICE_ACCOUNT_PATH (${filePath}):`,
        e instanceof Error ? e.message : e,
      );
      process.exit(1);
    }
  }

  let inline = process.env.FIREBASE_SERVICE_ACCOUNT?.trim();
  if (!inline) {
    console.error(
      "Set FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json (recommended)\n" +
        "or FIREBASE_SERVICE_ACCOUNT to the full minified JSON from Firebase (not just the private key).",
    );
    process.exit(1);
  }

  if (
    (inline.startsWith("'") && inline.endsWith("'")) ||
    (inline.startsWith('"') && inline.endsWith('"'))
  ) {
    inline = inline.slice(1, -1);
  }

  if (inline.startsWith("-----BEGIN")) {
    console.error(
      "FIREBASE_SERVICE_ACCOUNT looks like a PEM key only. Download the full JSON key from\n" +
        "Firebase Console → Project settings → Service accounts → Generate new private key,\n" +
        "save it as firebase-service-account.json in the project root, and set:\n" +
        "  FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json",
    );
    process.exit(1);
  }

  try {
    const parsed = JSON.parse(inline) as admin.ServiceAccount & {
      type?: string;
    };
    if (parsed.type !== "service_account") {
      throw new Error("Not a service account JSON");
    }
    return parsed;
  } catch (e) {
    console.error(
      "Invalid FIREBASE_SERVICE_ACCOUNT JSON. Use FIREBASE_SERVICE_ACCOUNT_PATH pointing to the .json file from Firebase.",
      e instanceof Error ? e.message : e,
    );
    process.exit(1);
  }
}

const PORT = Number(process.env.AUTH_SERVER_PORT) || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ?? JWT_SECRET;
const ACCESS_EXPIRES =
  (process.env.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"]) || "15m";
const REFRESH_EXPIRES =
  (process.env.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"]) || "7d";

if (!JWT_SECRET || !JWT_REFRESH_SECRET) {
  console.error("Missing JWT_SECRET (and optional JWT_REFRESH_SECRET) in environment.");
  process.exit(1);
}

const ACCESS_SECRET = JWT_SECRET;
const REFRESH_SECRET = JWT_REFRESH_SECRET;

try {
  const cred = loadServiceAccount();
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(cred),
    });
  }
} catch (e) {
  console.error(e);
  process.exit(1);
}

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://vigel.vercel.app",
      "https://vigel-git-main-murahariprasannakumars-projects.vercel.app",
      "https://vigel-brk1npxcl-murahariprasannakumars-projects.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());
app.use(express.json({ limit: "32kb" }));

import contactRouter from "./routes/contact";

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/contact", contactRouter);

/** Exchange Firebase ID token for app JWT pair */
app.post("/auth/login", async (req, res) => {
  const idToken = req.body?.idToken as string | undefined;
  if (!idToken || typeof idToken !== "string") {
    return res.status(400).json({ error: "idToken required" });
  }
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const email = decoded.email ?? "";
    const accessToken = jwt.sign(
      { sub: decoded.uid, email, typ: "access" },
      ACCESS_SECRET,
      { expiresIn: ACCESS_EXPIRES },
    );
    const refreshToken = jwt.sign(
      {
        sub: decoded.uid,
        email: decoded.email ?? "",
        typ: "refresh",
        jti: randomUUID(),
      },
      REFRESH_SECRET,
      { expiresIn: REFRESH_EXPIRES },
    );
    return res.json({ accessToken, refreshToken });
  } catch {
    return res.status(401).json({ error: "invalid_firebase_token" });
  }
});

/** New access token from refresh JWT */
app.post("/auth/refresh", (req, res) => {
  const refreshToken = req.body?.refreshToken as string | undefined;
  if (!refreshToken || typeof refreshToken !== "string") {
    return res.status(400).json({ error: "refreshToken required" });
  }
  try {
    const payload = jwt.verify(refreshToken, REFRESH_SECRET) as JwtPayload & {
      typ?: string;
      sub?: string;
      email?: string;
    };
    if (payload.typ !== "refresh" || !payload.sub) {
      return res.status(401).json({ error: "invalid_refresh" });
    }
    const accessToken = jwt.sign(
      {
        sub: payload.sub,
        email: typeof payload.email === "string" ? payload.email : "",
        typ: "access",
      },
      ACCESS_SECRET,
      { expiresIn: ACCESS_EXPIRES },
    );
    return res.json({ accessToken });
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "refresh_expired" });
    }
    return res.status(401).json({ error: "invalid_refresh" });
  }
});

/** Validate access JWT */
app.get("/auth/me", (req, res) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "missing_bearer" });
  }
  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, ACCESS_SECRET) as JwtPayload & {
      typ?: string;
      email?: string;
    };
    if (payload.typ !== "access") {
      return res.status(401).json({ error: "wrong_token_type" });
    }
    return res.json({
      uid: payload.sub,
      email: payload.email ?? null,
    });
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "token_expired" });
    }
    return res.status(401).json({ error: "invalid_token" });
  }
});

app.listen(PORT, () => {
  console.log(`Auth server listening on http://localhost:${PORT}`);
});
