import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'

export default function Navbar () {
  return (
    <div className='navbar'>
      <h1>Inicio</h1>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/create'>Nuevo Producto</Link></li>
        <li><Link to='/products'>Productos</Link></li>
      </ul>
    </div>
  )
}
