import { useState } from 'react'
import { deleteProduct } from '../api/productApi'
import Updateform from './UpdateForm'
import '../assets/productCard.css'
import dayjs from 'dayjs'

export default function ProductCard (props) {
  const [notificacion, setNotificacion] = useState('')
  const { product } = props

  const handleDelete = async () => {
    try {
      const response = await deleteProduct(product.codigo)
      setNotificacion(`${response}`)
      window.location.reload(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='card'>
      {notificacion}
      <h1>{product.nombre}</h1>
      <p>{product.descripcion}</p>
      <p>{dayjs(product.fecha_compra).format('YYYY-MM-DD')}</p>
      <p>$ {product.valor_compra}</p>
      <p>{product.proveedor}</p>
      <button onClick={handleDelete}>Borrar</button>
      <Updateform idProduct={product.codigo} />
    </div>
  )
}
