import { Router } from "express";
import { sendContactEmail } from "../services/mailer";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await sendContactEmail({ name, email, phone, message });

    return res.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
