import { useEffect, useState } from "react";
import getAllProducts from "../api/getAllProducts";
import ProductCard from "../components/ProductCard";
import getProductsByCategory from "../utility/getProductsByCategory";
import { useShopFilter } from "../context/shop-filter-context";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const { selectedCategory } = useShopFilter();

  const [currentPage, setCurrentPage] = useState(1);

  // ================= PAGINATION SETTINGS =================

  const productsPerPage = 12;

  const pageNumbersToShow = 5;

  // ================= GET PRODUCTS =================

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();

      setProducts(data);
    })();
  }, []);

  // ================= FILTER BY CATEGORY =================

  const filteredProducts = getProductsByCategory(products, selectedCategory);

  // ================= RESET PAGE =================

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // ================= TOTAL PAGES =================

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // ================= CURRENT PRODUCTS =================

  const lastProductIndex = currentPage * productsPerPage;

  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex,
  );

  // ================= PAGE NUMBER START =================

  const startPage =
    Math.floor((currentPage - 1) / pageNumbersToShow) * pageNumbersToShow + 1;

  // ================= PAGE NUMBER END =================

  const endPage = Math.min(startPage + pageNumbersToShow - 1, totalPages);

  // ================= PAGE NUMBERS =================

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // ================= PREVIOUS =================

  const onPreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  // ================= NEXT =================

  const onNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  // ================= PAGE CLICK =================

  const onPageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col">
      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <div className="flex flex-wrap items-center justify-center gap-8 p-5">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center  py-[35vh] px-[30vw]">
            <p className="text-[20px] font-semibold text-text-primary">
              {products.length === 0
                ? "Products are loading..."
                : "Products not found"}
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          PAGINATION
      ===================================================== */}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pb-8">
          {/* ================= PREVIOUS ================= */}

          <button
            onClick={onPreviousClick}
            disabled={currentPage === 1}
            className="rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-primary hover:bg-primary-light hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {/* ================= PAGE NUMBERS ================= */}

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => onPageClick(page)}
              className={`flex h-9 w-9 items-center justify-center rounded-md border text-sm font-semibold transition

              ${
                currentPage === page
                  ? `
                    border-primary
                    bg-primary
                    text-white
                  `
                  : `
                    border-border
                    bg-background
                    text-text-secondary
                    hover:border-primary
                    hover:bg-primary-light
                    hover:text-primary
                  `
              }
            `}
            >
              {page}
            </button>
          ))}

          {/* ================= NEXT ================= */}

          <button
            onClick={onNextClick}
            disabled={currentPage === totalPages}
            className="rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-primary hover:bg-primary-light hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
