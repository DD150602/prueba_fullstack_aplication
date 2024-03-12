import mysql2 from 'mysql2/promise'

const CONNECTION_STRING = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'products',
  password: 'Carlotapokemon0630201506'
}

let db

try {
  db = await mysql2.createConnection(CONNECTION_STRING)
  console.log('conectado con exito')
} catch (error) {
  console.log('no se pudo conectar')
}

export default db
