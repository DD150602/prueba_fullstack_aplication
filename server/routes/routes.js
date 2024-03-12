import { Router } from 'express'
import ProductController from '../controllers/ProductController.js'
import { LoginController } from '../controllers/LoginController.js'

export const router = Router()

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getProductById)
router.post('/create', ProductController.createProduct)
router.patch('/update/:id', ProductController.updateProduct)
router.delete('/delete/:id', ProductController.deleteProduct)
router.post('/login', LoginController.login)
