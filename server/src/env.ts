import 'dotenv/config'
import { z } from 'zod'

const schema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().default(4020),
  RESEND_API_KEY: z.string().default(''),
  EMAIL_FROM: z.string().default(''),
  CONTACT_EMAIL: z.string().default('info@regnabewind.nl'),
  FRONTEND_URL: z.string().default('http://localhost:5174'),
})

export const env = schema.parse(process.env)

export const isProduction = env.NODE_ENV === 'production'
