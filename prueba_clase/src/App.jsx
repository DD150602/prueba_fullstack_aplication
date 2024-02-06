import { useState, useState } from 'react'
import './App.css'

const getData = async () => {
  const res = await fetch('http://localhost:3000/')
  const data = await res.json()
  return {id_pieza, descripcion, fecha_compra, valor_compra, catego}=data
}

function useInfo(){
  const[info, setInfo]=useState()
}

function App () {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>descripcion</th>
            <th>fecha de compra</th>
            <th>valor compra</th>
            <th>categoria</th>
            <th>coleccion</th>
            <th>foto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>

        </tbody>
      </table>
    </>
  )
}

export default App
