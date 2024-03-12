import bd from './db.js'

export default class LoginModel {
  static async login ({ userName, userPassword }) {
    try {
      const [usuario] = await bd.query(
        'SELECT nombre_usuario, contrasena_usuario FROM users WHERE nombre_usuario = ?',
        [userName]
      )
      if (!usuario) throw new Error()
      if (usuario.length === 0) throw new Error()

      const validacion = () => {
        if (userPassword === usuario.contrasena_usuario) return true
        return false
      }

      if (!validacion) throw new Error()

      return usuario[0]
    } catch (err) {
      return err
    }
  }
}
