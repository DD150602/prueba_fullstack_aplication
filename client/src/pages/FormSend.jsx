import { createProduct } from '../api/productApi'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import '../assets/forms.css'

const dafaultValues = {
  nombre: '',
  descripcion: '',
  fechaCompra: new Date('YYYY-MM-DD'),
  valorCompra: 0,
  proveedor: ''
}

export default function FormSend () {
  const { values, handelInputCange } = useForm(dafaultValues)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createProduct(values)
      navigate('/products')
    } catch (error) {
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          nombre
          <input
            type='text'
            name='nombre'
            id='nombre'
            value={values.nombre}
            onChange={handelInputCange}
          />
        </label>
        <label>
          descripcion
          <input
            type='text'
            name='descripcion'
            id='descripcion'
            value={values.descripcion}
            onChange={handelInputCange}
          />
        </label>
        <label>
          fecha compra
          <input
            type='date'
            name='fechaCompra'
            id='fechaCompra'
            value={values.fechaCompra}
            onChange={handelInputCange}
          />
        </label>
        <label>
          valor compra
          <input
            type='number'
            name='valorCompra'
            id='valorCompra'
            value={values.valorCompra}
            onChange={handelInputCange}
          />
        </label>
        <label>
          proveedor
          <input
            type='text'
            name='proveedor'
            id='proveedor'
            value={values.proveedor}
            onChange={handelInputCange}
          />
        </label>

        <button type='submit'>enviar</button>
      </form>

    </div>
  )
}
