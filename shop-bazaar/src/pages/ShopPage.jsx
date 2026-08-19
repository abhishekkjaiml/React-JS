import { useEffect, useState } from "react"
import getAllProducts from "../api/getAllProducts"
import ProductCard from "../components/ProductCard"
import getProductsByCategory from "../utility/getProductsByCategory";
import { useShopFilter } from "../context/shop-filter-context";

const ShopPage = () => {

  const [products, setProducts] = useState([])

  const { selectedCategory } = useShopFilter();

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();
  }, [])

  const filteredProducts = getProductsByCategory(products, selectedCategory);

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-5">

      {
        filteredProducts?.length > 0 ? filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )) : (

          <div className="flex h-full w-full items-center  py-[35vh] px-[30vw]">

            <p className="text-[20px] font-semibold text-text-primary">
              Products not found
            </p>

          </div>

        )
      }

    </div>
  )
}

export default ShopPage