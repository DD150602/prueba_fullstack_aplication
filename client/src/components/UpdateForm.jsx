/* eslint-disable camelcase */
import { updateProduct, getProductById } from '../api/productApi'
import { useState } from 'react'
import useForm from '../hooks/useForm'
import ReactModal from 'react-modal'
import '../assets/forms.css'

import dayjs from 'dayjs'

const dafaultValues = {
  codigo: 0,
  nombre: '',
  descripcion: '',
  fecha_compra: dayjs(),
  valor_compra: 0,
  proveedor: ''
}

export default function Updateform (props) {
  const { idProduct } = props
  const { values, setValues, handelInputCange } = useForm(dafaultValues)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const afterOpen = async () => {
    try {
      const response = await getProductById(idProduct)
      setValues(response.data[0])
    } catch (error) {
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { fecha_compra, valor_compra } = values
      const envio = {
        ...values,
        fechaCompra: dayjs(fecha_compra).format('YYYY-MM-DD'),
        valorCompra: valor_compra
      }
      await updateProduct({ id: idProduct, product: envio })
      window.location.reload(true)
    } catch (error) {
    }
  }

  return (
    <div>
      <button onClick={openModal}>Actualizar</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            border: '1px solid #ccc',
            background: '#000'
          }
        }}
      >
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
              name='fecha_compra'
              id='fecha_compra'
              value={values.fecha_compra instanceof dayjs ? values.fecha_compra : dayjs(values.fecha_compra).format('YYYY-MM-DD')}
              onChange={handelInputCange}
            />
          </label>
          <label>
            valor compra
            <input
              type='number'
              name='valor_compra'
              id='valor_compra'
              value={values.valor_compra}
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

      </ReactModal>
    </div>
  )
}
