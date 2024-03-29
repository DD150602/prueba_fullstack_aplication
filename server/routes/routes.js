import { Router } from 'express'
import ProductController from '../controllers/ProductController.js'
import { LoginController } from '../controllers/LoginController.js'
import validateAccesToken from '../middlewares/auth.middleware.js'

export const router = Router()

router.get('/', validateAccesToken, ProductController.getAllProducts)
router.get('/:id', validateAccesToken, ProductController.getProductById)
router.post('/create', validateAccesToken, ProductController.createProduct)
router.patch('/update/:id', validateAccesToken, ProductController.updateProduct)
router.delete('/delete/:id', validateAccesToken, ProductController.deleteProduct)
router.post('/login', LoginController.login)
