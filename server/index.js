import express, { json, urlencoded } from 'express'
import { router } from './routes/routes.js'
import 'dotenv/config'
import { PORT } from './config/envVariables.js'
import cookieParser from 'cookie-parser'
import corsMiddleware from './middlewares/cors.middleware.js'

const app = express()

app.disable('x-powered-by')
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(corsMiddleware())
app.use(cookieParser())

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`server in http://localhost:${PORT ?? 1234}`)
})
