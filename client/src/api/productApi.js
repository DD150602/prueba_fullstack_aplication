import axios from 'axios'

export const getAllProducts = async () =>
  await axios.get('http://localhost:1234/api')

export const getProductById = async (id) =>
  await axios.get(`http://localhost:1234/api/${id}`)

export const createProduct = async (product) =>
  await axios.post('http://localhost:1234/api/create', product)

export const deleteProduct = async (id) =>
  await axios.delete(`http://localhost:1234/api/delete/${id}`)

export const updateProduct = async ({ id, product }) =>
  await axios.patch(`http://localhost:1234/api/update/${id}`, product)

export const authLogin = async (keys) =>
  await axios.post('http://localhost:1234/api/login', keys)
