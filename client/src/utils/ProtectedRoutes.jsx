import { Navigate } from 'react-router-dom'
import storage from './storage'

const isAuthenticated = () => {
  const user = storage.getItem('accessToken')
  return user !== null
}

export const ProtectedRoute = ({
  element,
  path,
  redirectPath
}) => {
  if ((isAuthenticated())) {
    return element
  } else {
    return <Navigate to={redirectPath || '/login'} />
  }
}
