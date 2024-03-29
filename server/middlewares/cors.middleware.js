import cors from 'cors'
import { CorsNotAllowed } from '../schemas/errorSchema'

const ACCEPTED_ORIGINS = [
  'http://localhost:5173'
]

export default function corsMiddleware ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) {
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) return callback(null, true)
      if (!origin) return callback(null, true)

      return callback(new CorsNotAllowed())
    }
  })
}
