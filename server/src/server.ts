import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)

const serverMessage: string =
  '🚀 HTTP server running on port http://localhost:3333'

app.listen({ port: 3333 }).then(() => console.log(serverMessage))
