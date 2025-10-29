import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";   // SMTP needs Node, not Edge
export const dynamic = "force-dynamic";
export const maxDuration = 30;     // 30 seconds for Vercel/serverless (Pro plan allows up to 60s)

interface EmailRequestBody {
  name?: string;
  email: string;
  phone?: string;
  description?: string;
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  
  try {
    console.log("📧 Contact Form API Request Received");
    
    const body: EmailRequestBody = await req.json();
    console.log("📝 Request Body:", { 
      name: body.name, 
      email: body.email, 
      phone: body.phone,
      hasDescription: !!body.description 
    });

    if (!body?.email) {
      console.error("❌ Validation Error: Email is missing");
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Environment variables check
    console.log("🔍 Checking Environment Variables...");
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = (process.env.SMTP_SECURE || "true").toLowerCase() === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    console.log("SMTP Config:", {
      host: host ? "✅ Set" : "❌ Missing",
      port,
      secure,
      user: user ? "✅ Set" : "❌ Missing",
      pass: pass ? "✅ Set (hidden)" : "❌ Missing",
    });

    if (!host || !user || !pass) {
      console.error("❌ SMTP Configuration Error: Missing required environment variables");
      return NextResponse.json(
        { 
          error: "SMTP configuration is incomplete. Please check server environment variables.",
          details: "Missing: " + (!host ? "SMTP_HOST " : "") + (!user ? "SMTP_USER " : "") + (!pass ? "SMTP_PASS" : "")
        },
        { status: 500 }
      );
    }

    console.log("🔧 Creating Nodemailer Transporter...");
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      tls: { 
        minVersion: "TLSv1.2", 
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,  // Reduced for faster failure in production
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Verify transporter connection (but with timeout)
    console.log("🔐 Verifying SMTP Connection...");
    try {
      await Promise.race([
        transporter.verify(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error("SMTP verification timeout")), 8000)
        )
      ]);
      console.log("✅ SMTP Connection Verified Successfully");
    } catch (verifyError: any) {
      console.error("❌ SMTP Verification Failed:");
      console.error("- Error Code:", verifyError.code);
      console.error("- Error Message:", verifyError.message);
      
      return NextResponse.json(
        {
          error: "SMTP connection failed",
          code: verifyError.code || "VERIFY_TIMEOUT",
          details: verifyError.message,
        },
        { status: 500 }
      );
    }

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

    console.log("📤 Sending Email...");
    console.log("- From:", user);
    console.log("- To: info@kogents.ai");
    console.log("- Subject: Customer Query - Contact Form");

    // Send email with timeout
    const info = await Promise.race([
      transporter.sendMail({
        from: `"Kogents" <${user}>`,
        to: "info@kogents.ai",
        replyTo: body.email,
        subject: "Customer Query - Contact Form",
        html,
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Email sending timeout")), 20000)
      )
    ]) as any;

    const duration = Date.now() - startTime;
    console.log("✅ Email Sent Successfully!");
    console.log("- Message ID:", info.messageId);
    console.log("- Duration:", duration + "ms");

    return NextResponse.json({ 
      message: "Email sent successfully", 
      messageId: info.messageId 
    });
  } catch (err: any) {
    const duration = Date.now() - startTime;
    console.error("❌ ERROR SENDING CONTACT FORM EMAIL:");
    console.error("==================================");
    console.error("- Duration:", duration + "ms");
    console.error("- Error Type:", err?.constructor?.name || typeof err);
    console.error("- Error Message:", err?.message);
    console.error("- Error Code:", err?.code);
    console.error("- Error Response:", err?.response);
    console.error("- Full Error:", JSON.stringify(err, Object.getOwnPropertyNames(err || {}), 2));
    console.error("==================================");

    let errorMessage = "Failed to send email";
    let errorDetails = err?.message || String(err);
    let errorCode = err?.code || "UNKNOWN";

    if (err?.message?.includes("timeout")) {
      errorMessage = "Request timeout - SMTP server took too long to respond";
      errorCode = "ETIMEDOUT";
    } else if (err?.code === "EAUTH") {
      errorMessage = "Authentication failed. Please check SMTP credentials.";
      errorDetails = "Invalid username or password";
    } else if (err?.code === "ECONNECTION") {
      errorMessage = "Connection failed. Please check SMTP host and port.";
      errorDetails = "Could not connect to SMTP server";
    }

    return NextResponse.json(
      {
        error: errorMessage,
        code: errorCode,
        details: errorDetails,
      },
      { status: 500 }
    );
  }
}