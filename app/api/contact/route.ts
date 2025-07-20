import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    })

    // Email to Praveen Kumar
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "praveen03561@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 10px; font-size: 18px;">Contact Details:</h3>
              <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 10px; font-size: 18px;">Message:</h3>
              <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; color: #334155; line-height: 1.6;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
            <p>This message was sent from your portfolio website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              Thank you for your message regarding "<strong>${subject}</strong>". I've received your inquiry and will get back to you within 24 hours.
            </p>
            
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to connect with me on LinkedIn or check out my latest projects on GitHub.
            </p>
            
            <div style="margin: 30px 0; padding: 20px; background: #f1f5f9; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #065f46; font-weight: 600;">Quick Response Promise:</p>
              <p style="margin: 5px 0 0 0; color: #047857;">I typically respond to all inquiries within 24 hours during business days.</p>
            </div>
            
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>Praveen Kumar</strong><br>
              <span style="color: #64748b;">IT Professional & System Engineer</span>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
            <p>📧 praveen03561@gmail.com | 📱 +91 8318693067 | 📍 Delhi, India</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    console.log("Contact form emails sent successfully:", {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
