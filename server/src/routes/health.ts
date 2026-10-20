import type { FastifyInstance } from 'fastify'

export async function healthRoutes(app: FastifyInstance) {
  app.get(
    '/api/health',
    { config: { rateLimit: false } },
    async () => ({
      ok: true,
    }),
  )
}
