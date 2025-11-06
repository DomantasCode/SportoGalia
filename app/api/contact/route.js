import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Create a transporter (configure with your email service)
    // For development, you can use services like Ethereal Email or Gmail
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'your-email@example.com',
        pass: process.env.SMTP_PASSWORD || 'your-password',
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@sportogalia.lt',
      to: process.env.CONTACT_EMAIL || 'info@sportogalia.lt',
      subject: `Nauja kontaktinė žinutė nuo ${name}`,
      html: `
        <h2>Nauja kontaktinė žinutė</h2>
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Telefonas:</strong> ${phone || 'Nenurodytas'}</p>
        <p><strong>Žinutė:</strong></p>
        <p>${message}</p>
      `,
      text: `
        Nauja kontaktinė žinutė

        Vardas: ${name}
        El. paštas: ${email}
        Telefonas: ${phone || 'Nenurodytas'}

        Žinutė:
        ${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Žinutė išsiųsta' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Klaida siunčiant žinutę' },
      { status: 500 }
    )
  }
}
