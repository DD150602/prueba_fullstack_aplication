import express, { json } from 'express'
import cors from 'cors'
import { PruebasModel } from './conction.js'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')
app.use(cors())
app.use(json())

app.get('/', async (req, res) => {
  const allPiesas = await PruebasModel.getPiezas()
  res.json(allPiesas.flat())
})

app.get('/categorias', async (req, res) => {
  const categories = await PruebasModel.getCategorias()
  res.json(categories.flat())
})

app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto http://localhost:${PORT}`)
})
