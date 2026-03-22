import nodemailer from "nodemailer";

interface ContactEmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  phone,
  message,
}: ContactEmailParams) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const receiver = process.env.CONTACT_RECEIVER || process.env.EMAIL_USER;
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !receiver) {
    console.error("Missing email configuration (EMAIL_USER, EMAIL_PASS).");
    throw new Error("Email configuration is missing.");
  }

  const mailOptions = {
    from: `"VIGEL Contact" <${process.env.EMAIL_USER}>`,
    to: receiver,
    replyTo: email,
    subject: "New Inquiry — VIGEL",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #111;">New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #22c55e; margin: 10px 0;">
          ${message.replace(/\n/g, "<br/>")}
        </div>
        <p style="font-size: 0.85em; color: #888; margin-top: 20px;">
          Received at: ${new Date().toISOString()}
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
