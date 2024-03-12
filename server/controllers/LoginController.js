import LoginModel from '../models/Login.js'

export class LoginController {
  static async login (req, res) {
    const { userName, userPassword } = req.body

    const response = await LoginModel.login({ userName, userPassword })
    if (response instanceof Error) {
      res.status(500).json({ message: 'Error interno del servidor ' })
    } else {
      res.json({
        success: true,
        message: 'Inicio de sesion exitoso'
      })
    }
  }
}
