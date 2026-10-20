import { Resend } from 'resend'
import { env } from './env.js'

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null
const emailEnabled = Boolean(resend && env.EMAIL_FROM)

// ---- Website palette (src/styles/global.css custom properties) ----
const CREAM = '#f8f6f1' // --bg
const INK = '#202120' // --ink
const MUTED = '#67645e' // --muted
const BRASS = '#bc925a' // --brass
const BRASS_DARK = '#906832' // eyebrow brass
const LINE = '#ded9cf' // --line

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function sendContactMessage(input: {
  name: string
  email: string
  message: string
}): Promise<void> {
  if (!resend || !emailEnabled) {
    throw new Error('Email is not configured')
  }

  const text = `Name: ${input.name}\nEmail: ${input.email}\n\nMessage:\n${input.message}`
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif; background:${CREAM}; color:${INK}; max-width:600px; margin:0 auto; padding:32px 24px;">
      <p style="margin:0 0 6px; color:${BRASS_DARK}; font-size:11px; font-weight:bold; letter-spacing:2.5px; text-transform:uppercase;">Contactformulier</p>
      <h2 style="margin:0 0 20px; font-family:Georgia,serif; font-size:28px; font-weight:normal; color:${INK};">Nieuw bericht van ${escapeHtml(input.name)}</h2>
      <table style="border-collapse:collapse; color:${INK}; font-size:14px; margin-bottom:18px;">
        <tr>
          <td style="padding:4px 16px 4px 0; color:${MUTED};">Naam</td>
          <td style="padding:4px 0;">${escapeHtml(input.name)}</td>
        </tr>
        <tr>
          <td style="padding:4px 16px 4px 0; color:${MUTED};">E-mail</td>
          <td style="padding:4px 0;">${escapeHtml(input.email)}</td>
        </tr>
      </table>
      <blockquote style="margin:0; padding:14px 18px; border-left:3px solid ${BRASS}; background:#eeebe3; color:${INK}; font-size:14px; line-height:1.7; white-space:pre-wrap;">${escapeHtml(input.message)}</blockquote>
      <p style="margin:22px 0 0; padding-top:16px; border-top:1px solid ${LINE}; color:${MUTED}; font-size:12px;">Verzonden via het contactformulier op regnabewind.nl. Reageer op dit bericht door de afzender te antwoorden.</p>
    </div>
  `

  const { error } = await resend.emails.send({
    from: env.EMAIL_FROM,
    to: [env.CONTACT_EMAIL],
    replyTo: input.email,
    subject: `Nieuw bericht van ${input.name} via regnabewind.nl`,
    text,
    html,
  })

  if (error) {
    throw new Error(`Resend rejected contact message: ${error.message}`)
  }
}
