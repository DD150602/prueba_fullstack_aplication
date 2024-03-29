import { JWT_EXPIRES, JWT_SECRET } from '../config/envVariables.js'
import LoginModel from '../models/Login.js'
import { InvalidCredential, NotFoundUser } from '../schemas/errorSchema.js'
import jwt from 'jsonwebtoken'

export class LoginController {
  static async login (req, res) {
    const { userName, userPassword } = req.body

    const response = await LoginModel.login({ userName, userPassword })
    if (response instanceof NotFoundUser) {
      return res.status(404).json({
        message: 'No existe este usuario',
        success: false
      })
    }
    if (response instanceof InvalidCredential) {
      return res.status(401).json({
        message: 'Contrasena incorrecta',
        success: false
      })
    }
    if (response instanceof Error) {
      return res.status(500).json({
        message: 'ha ocurrido un error al iniciar sesion',
        success: false
      })
    }

    const accessToken = jwt.sign({ userName }, JWT_SECRET, { expiresIn: JWT_EXPIRES })
    res.json({
      success: true,
      message: 'Inicio de sesion exitoso',
      accessToken
    })
  }
}
