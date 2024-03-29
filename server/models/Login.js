import db from '../config/dataBase.js'
import { InvalidCredential, NotFoundUser } from '../schemas/errorSchema.js'

export default class LoginModel {
  static async login ({ userName, userPassword }) {
    try {
      const [[usuario]] = await db.query(
        'SELECT nombre_usuario, contrasena_usuario FROM users WHERE nombre_usuario = ?',
        [userName]
      )
      if (!usuario) throw new NotFoundUser()
      if (usuario.length === 0) throw new NotFoundUser()

      const validacion = () => {
        if (userPassword === usuario.contrasena_usuario) return true
        return false
      }

      if (!validacion) throw new InvalidCredential()

      return usuario
    } catch (err) {
      return err
    }
  }
}
