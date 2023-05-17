import fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
// import { memoriesRoutes } from './routes/memories';

const app = fastify()
const prisma = new PrismaClient()

app.register(cors, {
  origin: true,
})

// app.register(memoriesRoutes);

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

const serverMessage: string =
  '🚀 HTTP server running on port http://localhost:3333'

app.listen({ port: 3333 }).then(() => console.log(serverMessage))
