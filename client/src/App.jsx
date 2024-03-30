import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Login from './pages/Login'
import FormSend from './pages/FormSend'
import AllProducts from './pages/Products'
import { ProtectedRoute } from './utils/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'create',
        element: <ProtectedRoute element={<FormSend />} />
      },
      {
        path: 'products',
        element: <ProtectedRoute element={<AllProducts />} />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App () {
  return (
    <RouterProvider router={router} />
  )
}

export default App
