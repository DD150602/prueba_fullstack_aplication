import axios from 'axios'
import storage from '../utils/storage'

const ApiDelivery = axios.create({
  baseURL: 'http://localhost:4321/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: storage.getItem('accessToken')
  }
})

export const getAllProducts = async () =>
  await ApiDelivery.get('/')

export const getProductById = async (id) =>
  await ApiDelivery.get(`/${id}`)

export const createProduct = async (product) =>
  await ApiDelivery.post('/create', product)

export const deleteProduct = async (id) =>
  await ApiDelivery.delete(`/delete/${id}`)

export const updateProduct = async ({ id, product }) =>
  await ApiDelivery.patch(`/update/${id}`, product)

export const authLogin = async (keys) =>
  await ApiDelivery.post('/login', keys)
