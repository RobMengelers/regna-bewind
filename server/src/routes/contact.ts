import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { sendContactMessage } from '../email.js'

const bodySchema = z.object({
  name: z.string().min(1).max(200),
  email: z.email(),
  message: z.string().min(3).max(5000),
  // Honeypot: hidden from real visitors, filled in by naive bots. The route
  // pretends to succeed so bots get no signal that they were filtered.
  company: z.string().max(200).optional().default(''),
})

export async function contactRoutes(app: FastifyInstance) {
  app.post(
    '/api/contact',
    { config: { rateLimit: { max: 3, timeWindow: '1 minute' } } },
    async (request, reply) => {
      const parsed = bodySchema.safeParse(request.body)
      if (!parsed.success) {
        return reply
          .code(400)
          .send({ error: parsed.error.issues[0]?.message ?? 'Invalid request' })
      }

      if (parsed.data.company) {
        return reply.send({ ok: true })
      }

      try {
        await sendContactMessage(parsed.data)
        return reply.send({ ok: true })
      } catch (error) {
        request.log.error({ err: error }, 'Contact message send failed')
        return reply
          .code(503)
          .send({ error: 'Bericht kon nu niet worden verzonden, probeer het later opnieuw' })
      }
    },
  )
}
