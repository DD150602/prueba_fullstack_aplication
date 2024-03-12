import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Login from './pages/Login'
import FormSend from './pages/FormSend'
import AllProducts from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'create',
        element: <FormSend />
      },
      {
        path: 'products',
        element: <AllProducts />
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
