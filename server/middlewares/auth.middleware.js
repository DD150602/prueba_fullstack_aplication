import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/envVariables.js'

export default function validateAccesToken (req, res, next) {
  const accessToken = req.headers.authorization ?? req.cookies.accessToken
  if (!accessToken) {
    return res.status(401).json({
      message: 'No existe token valido',
      success: false
    })
  }
  try {
    const verifyJwt = jwt.verify(accessToken, JWT_SECRET)
    req.user = verifyJwt.user
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Acceso no permitido, token invalido o ya expirado',
      success: false
    })
  }
}
