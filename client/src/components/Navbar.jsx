import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'
import Logout from './Logout'

export default function Navbar () {
  return (
    <div className='navbar'>
      <h1>Inicio</h1>
      <div className='links'>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/create'>Nuevo Producto</Link></li>
          <li><Link to='/products'>Productos</Link></li>
        </ul>
        <Logout />
      </div>
    </div>
  )
}
