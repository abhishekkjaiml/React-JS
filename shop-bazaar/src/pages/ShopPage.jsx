import React, { useEffect, useState } from 'react'
import getAllProducts from '../api/getAllProducts'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/cart-context'

const ShopPage = () => {

    const { cart } = useCart()
    console.log({cart})

    const [products, setPeoducts] = useState([])

    useEffect(() => {
        (async () => {
            const data = await getAllProducts()
            setPeoducts(data)
        })()
    }, [])
  return (
    <div    className='flex flex-wrap p-5 items-center justify-center gap-8'>
        {
            products?.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : <div className=' h-[50vh] w-full flex flex-wrap items-center justify-center'>
                <p  className='text-[20px] font-semibold text-slate-800'>Products are loading...</p>
            </div>
        }
    </div>
  )
}

export default ShopPage