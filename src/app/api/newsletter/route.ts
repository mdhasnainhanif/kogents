import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequestBody {
    to: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: EmailRequestBody = await req.json();
        const { to } = body;

        if (!to) {
            return NextResponse.json(
                { error: "Missing required fields: to or name" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // e.g. smtp.gmail.com or smtp.mail.us-east-1.awsapps.com
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `Kogents <${process.env.SMTP_USER}>`,
            to,
            cc: process.env.SMTP_USER,
            subject: "Thank You for Getting in Touch!",
            html: `
                <div style="font-family:sans-serif; line-height:1.5; color:#333;">
                <h2>Hi,</h2>
                <p>Thank you for reaching out to us! We truly appreciate your interest.</p>
                <p>Our team will get back to you shortly.</p>
                <br/>
                <p>Warm regards,</p>
                <p><strong>Kogents Team</strong></p>
                </div>
      `,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: "Email sent successfully",
            messageId: info.messageId,
        });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: error.message || "Failed to send email" },
            { status: 500 }
        );
    }
}
