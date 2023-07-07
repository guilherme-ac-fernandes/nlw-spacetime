import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'nlw_spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

const serverMessage: string =
  '🚀 HTTP server running on port http://localhost:3333'

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => console.log(serverMessage))
