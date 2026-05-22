import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // ── Option A: Resend ────────────────────────────────────────────────────
    // Uncomment and install `resend` package: npm install resend
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    //
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: [process.env.CONTACT_EMAIL!],
    //   subject: `New message from ${name}`,
    //   html: `
    //     <h2>New Portfolio Contact</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // })
    //
    // ── Option B: Formspree ─────────────────────────────────────────────────
    // Just set NEXT_PUBLIC_FORMSPREE_ID in .env.local and call Formspree
    // directly from the client in Contact.tsx — no API route needed.

    // Placeholder success response (remove when wiring up real email service)
    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
