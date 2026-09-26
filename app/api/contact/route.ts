import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, message } = body ?? {}

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 },
            )
        }

        const apiKey = process.env.RESEND_API_KEY
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
        const toEmail = process.env.CONTACT_TO_EMAIL || 'ziadmegahed074@gmail.com'

        if (!apiKey) {
            return NextResponse.json(
                { error: 'Email is not configured yet. Set RESEND_API_KEY in your environment variables.' },
                { status: 500 },
            )
        }

        const resend = new Resend(apiKey)
        const visitorName = String(name).trim()
        const visitorEmail = String(email).trim()
        const visitorMessage = String(message).trim()

        await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            reply_to: visitorEmail,
            subject: `New Portfolio Contact: ${visitorName}`,
            text: `Name: ${visitorName}\nEmail: ${visitorEmail}\n\nMessage:\n${visitorMessage}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 12px;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${visitorName}</p>
          <p><strong>Email:</strong> ${visitorEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${visitorMessage.replace(/\n/g, '<br />')}</p>
        </div>
      `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form email error:', error)
        return NextResponse.json(
            { error: 'Failed to send the message. Please try again later.' },
            { status: 500 },
        )
    }
}
