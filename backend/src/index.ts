import cors from 'cors'
import express, { Application } from 'express'

import connectToDB from './utils/mongoDb.js'
import routes from './routes.js'

const PORT: number = parseInt((process.env.PORT as string) || '3000')

const bootstrap = async () => {
  const app: Application = express()
  app.use(cors())
  app.use(express.json())

  await connectToDB()

  routes(app)

  app.listen(PORT, () => {
    console.log(`
Server running successfully.
You can access it here:
Local:            http://localhost:${PORT}
On Your Network:  http://192.168.1.9:${PORT}
Press Ctrl+C to quit.
`)
  })
}
bootstrap()
