import ProductModel from '../models/ProductModel.js'

export default class ProductController {
  static async getAllProducts (req, res) {
    const response = await ProductModel.getAllProducts()
    res.json(response)
  }

  static async getProductById (req, res) {
    const { id } = req.params
    const response = await ProductModel.getProductById({ id })
    if (response instanceof Error) {
      res.status(500).json({ message: 'Error interno del servidor ' })
    } else {
      res.json(response)
    }
  }

  static async createProduct (req, res) {
    const data = req.body

    const response = await ProductModel.createProduct({ input: data })
    if (response instanceof Error) {
      res.status(500).json({ message: 'Error interno del servidor ' })
    } else {
      res.json(response)
    }
  }

  static async updateProduct (req, res) {
    const { id } = req.params
    const data = req.body
    const response = await ProductModel.updateProduct({ id, input: data })
    if (response instanceof Error) {
      res.status(500).json({ message: 'Error interno del servidor ' })
    } else {
      res.json(response)
    }
  }

  static async deleteProduct (req, res) {
    const { id } = req.params
    const response = await ProductModel.deleteProduct({ id })
    if (response instanceof Error) {
      res.status(500).json({ message: 'Error interno del servidor ' })
    } else {
      res.json(response)
    }
  }
};
