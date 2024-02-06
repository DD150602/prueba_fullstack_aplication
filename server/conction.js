import mysql from 'mysql2/promise'
import 'dotenv/config'

const config = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASWORD,
  database: 'prueba_clase'
}

const connection = await mysql.createConnection(config)

export class PruebasModel {
  static async getPiezas () {
    const piezas = await connection.query('SELECT id_pieza, pieza.descripcion, fecha_compra, valor_compra, categorias.descripcion as categoria, colecciones.descripcion as coleccion, link_foto FROM pieza INNER JOIN categorias on pieza.id_categoria = categorias.id_categoria RIGHT JOIN colecciones  on pieza.id_coleccion = colecciones.id_coleccion;')

    return piezas
  }

  static async getCategorias () {
    const categorias = await connection.query('SELECT descripcion FROM categorias')
    return categorias
  }
};
