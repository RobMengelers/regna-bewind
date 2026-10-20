import cors from '@fastify/cors'
import rateLimit from '@fastify/rate-limit'
import Fastify, { type FastifyError } from 'fastify'
import { env } from './env.js'
import { contactRoutes } from './routes/contact.js'
import { healthRoutes } from './routes/health.js'

// trustProxy is required so rate limits are keyed on the real client IP that
// Railway's reverse proxy reports via X-Forwarded-For, rather than proxy IPs.
const app = Fastify({ logger: true, trustProxy: true })

// Only the website (and its deploy previews) may call the API from a browser.
// FRONTEND_URL accepts a comma-separated list so a single service can allow
// the canonical domain plus previews without opening CORS to everyone.
const allowedOrigins = env.FRONTEND_URL.split(',')
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0)

await app.register(cors, {
  origin: allowedOrigins,
  methods: ['GET', 'HEAD', 'POST'],
})
await app.register(rateLimit, {
  max: 120,
  timeWindow: '1 minute',
})

await app.register(healthRoutes)
await app.register(contactRoutes)

app.setErrorHandler((error: FastifyError, request, reply) => {
  request.log.error(error)
  const status =
    error.statusCode && error.statusCode < 500 ? error.statusCode : 500
  reply
    .code(status)
    .send({ error: status === 500 ? 'Internal server error' : error.message })
})

try {
  await app.listen({ port: env.PORT, host: '0.0.0.0' })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}

// Drain in-flight requests on a deploy/restart signal so Railway's rolling
// restarts never cut a request off.
let shuttingDown = false
async function shutdown(signal: string): Promise<void> {
  if (shuttingDown) return
  shuttingDown = true
  app.log.info({ signal }, 'Shutting down')
  try {
    await app.close()
  } catch (error) {
    app.log.error({ err: error }, 'Error during shutdown')
    process.exit(1)
  }
}

for (const signal of ['SIGTERM', 'SIGINT'] as const) {
  process.on(signal, () => {
    shutdown(signal)
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  })
}
