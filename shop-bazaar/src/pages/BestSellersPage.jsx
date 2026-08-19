import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';

const DealsPage = () => {

  const [products, setProducts] = useState();

  return (
    <div  className='w-screen h-full'>
      {
        products?.length > 0 ? products.map((products) => <ProductCard/>) : <div  className=' h-full  w-full flex flex-wrap items-center py-[35vh] px-[30vw]'>
          <h3 className=' text-[20px] font-semibold text-slate-800 items-center'>
            Best Sellers page are under development
          </h3>
        </div>
      }
    </div>
  )
}

export default DealsPage