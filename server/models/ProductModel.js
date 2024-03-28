import db from '../config/dataBase.js'

export default class ProductModel {
  static async getAllProducts () {
    try {
      const [res] = await db.query('SELECT codigo, nombre, descripcion, fecha_compra, valor_compra, proveedor FROM products')

      return res
    } catch (error) {
      return error
    }
  }

  static async getProductById ({ id }) {
    try {
      const [res] = await db.query('SELECT codigo, nombre, descripcion, fecha_compra, valor_compra, proveedor FROM products WHERE codigo = ?', [id])

      return res
    } catch (error) {
      return error
    }
  }

  static async createProduct ({ input }) {
    try {
      const { nombre, descripcion, fechaCompra, valorCompra, proveedor } = input

      const [res] = await db.query('INSERT INTO products (nombre, descripcion, fecha_compra, valor_compra, proveedor) VALUES (?,?,?,?,?)', [nombre, descripcion, fechaCompra, valorCompra, proveedor])

      return 'producto agregado con exito'
    } catch (error) {
      return error
    }
  }

  static async updateProduct ({ id, input }) {
    try {
      const { nombre, descripcion, fechaCompra, valorCompra, proveedor } = input
      const [res] = await db.query('UPDATE products SET nombre = ?, descripcion = ?, fecha_compra = ?, valor_compra = ?, proveedor = ? WHERE codigo = ?', [nombre, descripcion, fechaCompra, valorCompra, proveedor, id])

      return 'articulo actualizado con exito'
    } catch (error) {
      console.log(error)
      return error
    }
  }

  static async deleteProduct ({ id }) {
    try {
      const [res] = await db.query('DELETE FROM products WHERE codigo = ?', [id])

      return 'producto eliminado con exito'
    } catch (error) {
      return error
    }
  }
};
