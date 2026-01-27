import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = (await req.json()) as {
      name?: string
      email?: string
      message?: string
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.CONTACT_TO_EMAIL || user

    if (!host || !port || !user || !pass || !to) {
      console.error("SMTP configuration is incomplete")
      return NextResponse.json(
        { error: "Email service is not configured correctly on the server." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: {
        user,
        pass,
      },
    })

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to,
      subject: `New message from portfolio contact form`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}

