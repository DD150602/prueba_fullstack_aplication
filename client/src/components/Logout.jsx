import React from 'react'
import { useNavigate } from 'react-router-dom'
import storage from '../utils/storage'

export default function Logout () {
  const navigate = useNavigate()
  const handleClick = () => {
    storage.removeItem('accessToken')
    navigate('/login')
  }
  return (
    <button onClick={handleClick}>
      Logout
    </button>
  )
}
