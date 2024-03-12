import express, { json } from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')
app.use(json())
app.use(cors())

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`server in http://localhost${PORT}`)
})
