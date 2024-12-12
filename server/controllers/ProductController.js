import ProductModel from '../models/ProductModel.js'
import { CantCreate, NoData } from '../schemas/errorSchema.js'

export default class ProductController {
  static async getAllProducts (req, res, next) {
    const response = await ProductModel.getAllProducts()
    if (response.length === 0) {
      const error = NoData
      return next(error)
    }
    return res.json(response)
  }

  static async getProductById (req, res, next) {
    const { id } = req.params
    const response = await ProductModel.getProductById({ id })
    if (!response) {
      const error = NoData
      return next(error)
    }
    if (response.length === 0) {
      const error = NoData
      return next(error)
    }
    return res.json(response)
  }

  static async createProduct (req, res, next) {
    const data = req.body

    const response = await ProductModel.createProduct({ input: data })
    if (response instanceof Error) {
      const error = new CantCreate({
        message: response.message,
        name: response.name,
        statusCode: 400
      })
      return next(error)
    }
    return res.json(response)
  }

  static async updateProduct (req, res) {
    const { id } = req.params
    const data = req.body
    const response = await ProductModel.updateProduct({ id, input: data })
    if (response instanceof Error) return res.status(500).json({ message: 'Ha ocurrido un error' })
    res.json(response)
  }

  static async deleteProduct (req, res) {
    const { id } = req.params
    const response = await ProductModel.deleteProduct({ id })
    if (response instanceof Error) return res.status(500).json({ message: 'Error interno del servidor ' })
    res.json(response)
  }
};
