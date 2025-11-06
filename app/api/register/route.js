import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const serviceNames = {
  'group-kinesiotherapy': 'Grupinė kineziterapija vaikams',
  'individual-kinesiotherapy': 'Individuali kineziterapija',
  'functional-training': 'Funkcinės treniruotės',
  'family-training': 'Šeimos treniruotės',
}

export async function POST(request) {
  try {
    const { parentName, email, phone, childName, childAge, service, message } = await request.json()

    // Create a transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'your-email@example.com',
        pass: process.env.SMTP_PASSWORD || 'your-password',
      },
    })

    const serviceName = serviceNames[service] || service

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@sportogalia.lt',
      to: process.env.CONTACT_EMAIL || 'info@sportogalia.lt',
      subject: `Nauja registracija: ${childName}`,
      html: `
        <h2>Nauja registracija</h2>
        <h3>Tėvų/Globėjų informacija</h3>
        <p><strong>Vardas ir pavardė:</strong> ${parentName}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Telefonas:</strong> ${phone}</p>

        <h3>Vaiko informacija</h3>
        <p><strong>Vardas ir pavardė:</strong> ${childName}</p>
        <p><strong>Amžius:</strong> ${childAge} metų</p>

        <h3>Pasirinkta paslauga</h3>
        <p>${serviceName}</p>

        ${message ? `
          <h3>Papildoma informacija</h3>
          <p>${message}</p>
        ` : ''}
      `,
      text: `
        Nauja registracija

        Tėvų/Globėjų informacija:
        Vardas ir pavardė: ${parentName}
        El. paštas: ${email}
        Telefonas: ${phone}

        Vaiko informacija:
        Vardas ir pavardė: ${childName}
        Amžius: ${childAge} metų

        Pasirinkta paslauga:
        ${serviceName}

        ${message ? `Papildoma informacija:\n${message}` : ''}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Registracija sėkminga' })
  } catch (error) {
    console.error('Error sending registration:', error)
    return NextResponse.json(
      { error: 'Klaida registruojantis' },
      { status: 500 }
    )
  }
}
