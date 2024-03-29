import db from '../config/dataBase.js'
import { NoData } from '../schemas/errorSchema.js'

export default class ProductModel {
  static async getAllProducts () {
    try {
      const [res] = await db.query('SELECT codigo, nombre, descripcion, fecha_compra, valor_compra, proveedor FROM products')
      if (!res) throw new NoData()
      if (res.length === 0) throw new NoData()

      return res
    } catch (error) {
      return error
    }
  }

  static async getProductById ({ id }) {
    try {
      const [[res]] = await db.query('SELECT codigo, nombre, descripcion, fecha_compra, valor_compra, proveedor FROM products WHERE codigo = ?', [id])
      if (!res) throw new NoData()
      if (res.length === 0) throw new NoData()

      return res
    } catch (error) {
      return error
    }
  }

  static async createProduct ({ input }) {
    try {
      const { nombre, descripcion, fechaCompra, valorCompra, proveedor } = input

      await db.query('INSERT INTO products (nombre, descripcion, fecha_compra, valor_compra, proveedor) VALUES (?,?,?,?,?)', [nombre, descripcion, fechaCompra, valorCompra, proveedor])

      return 'producto agregado con exito'
    } catch (error) {
      return error
    }
  }

  static async updateProduct ({ id, input }) {
    try {
      const { nombre, descripcion, fechaCompra, valorCompra, proveedor } = input
      await db.query('UPDATE products SET nombre = ?, descripcion = ?, fecha_compra = ?, valor_compra = ?, proveedor = ? WHERE codigo = ?', [nombre, descripcion, fechaCompra, valorCompra, proveedor, id])

      return 'articulo actualizado con exito'
    } catch (error) {
      return error
    }
  }

  static async deleteProduct ({ id }) {
    try {
      await db.query('DELETE FROM products WHERE codigo = ?', [id])

      return 'producto eliminado con exito'
    } catch (error) {
      return error
    }
  }
};
