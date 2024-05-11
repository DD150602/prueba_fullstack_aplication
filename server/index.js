import express, { json, urlencoded } from 'express'
import { router } from './routes/routes.js'
import { PORT } from './config/envVariables.js'
import cookieParser from 'cookie-parser'
import corsMiddleware from './middlewares/cors.middleware.js'
import errorMiddleware from './middlewares/errors.middleware.js'

const app = express()

app.disable('x-powered-by')
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(corsMiddleware())
app.use(cookieParser())

app.use('/api', router)

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`server in http://localhost:${PORT ?? 1234}`)
})
