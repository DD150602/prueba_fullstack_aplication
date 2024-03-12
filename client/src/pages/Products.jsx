import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getAllProducts } from '../api/productApi'

export default function AllProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProduct () {
      const response = await getAllProducts()
      setProducts(response.data)
    }
    loadProduct()
  }, [])
  return (
    <div>
      <h1>Prinsipal</h1>
      {
        products?.map((product) => <ProductCard key={product.codigo} product={product} />)
      }
    </div>
  )
}
