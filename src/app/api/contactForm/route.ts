import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";   // SMTP needs Node, not Edge
export const dynamic = "force-dynamic";

interface EmailRequestBody {
  name?: string;
  email: string;
  phone?: string;
  description?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EmailRequestBody = await req.json();
    if (!body?.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // env → exactly as you provided
    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = (process.env.SMTP_SECURE || "true").toLowerCase() === "true" || port === 465;
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASS!;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,                // true for 465 (SMTPS)
      auth: { user, pass },  // WorkMail mailbox + password
      tls: { minVersion: "TLSv1.2", rejectUnauthorized: false,  },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#222">
        <h2 style="color:#5d51af;margin:0 0 8px">New Contact Form Submission</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><strong>Name:</strong></td><td>${body.name || "Not provided"}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${body.email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${body.phone || "Not provided"}</td></tr>
        </table>
        <p style="margin:14px 0 4px"><strong>Description:</strong></p>
        <div style="white-space:pre-wrap">${body.description || "Not provided"}</div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Kogents" <${user}>`,  // must be the WorkMail address
      to: "info@kogents.ai",
      replyTo: body.email,          // so you can reply to the sender
      subject: "Customer Query - Contact Form",
      html,
    });

    return NextResponse.json({ message: "Email sent", messageId: info.messageId });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: "Failed to send email",
        code: err?.code || "UNKNOWN",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}