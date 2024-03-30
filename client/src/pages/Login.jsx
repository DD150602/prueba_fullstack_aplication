import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../api/productApi'
import useForm from '../hooks/useForm'
import '../assets/login.css'
import storage from '../utils/storage'

const defaultValues = {
  userName: '',
  userPassword: ''
}

export default function Login () {
  const { values, handelInputCange } = useForm(defaultValues)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await authLogin(values)
      storage.setItem('accessToken', response.data.accessToken)
      if (response.data.success) navigate('/products')
    } catch (error) {
      setErrorMessage(error)
    }
  }

  return (
    <div className='container'>
      <h2>Iniciar sesión</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre de usuario:
            <input
              type='text'
              id='userName'
              name='userName'
              value={values.userName}
              onChange={handelInputCange}
            />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input
              type='password'
              id='userPassword'
              name='userPassword'
              value={values.userPassword}
              onChange={handelInputCange}
            />
          </label>
        </div>
        <button type='submit'>Iniciar sesión</button>
      </form>
    </div>
  )
}
