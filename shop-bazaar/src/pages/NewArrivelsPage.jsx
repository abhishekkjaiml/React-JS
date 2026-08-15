import { useState } from 'react'

const NewArrivelsPage = () => {
  const [products, setProducts] = useState();

  return (
    <div>
      {
        products?.length > 0 ? products.map((products) => <ProductCard/>) : <div  className=' h-[50vh] w-full flex flex-wrap items-center justify-center'>
          <h3 className='text-[20px] font-semibold text-slate-800'>
            New Arrivels page are under development
          </h3>
        </div>
      }
    </div>
  )
}

export default NewArrivelsPage