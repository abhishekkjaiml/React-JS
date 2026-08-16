import React, { useEffect, useState } from "react";
import getAllProducts from "../api/getAllProducts";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

const ShopPage = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;
  const pagesPerGroup = 5;

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();
  }, []);

  // Total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Current page products
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  // Page group
  const currentPageGroup = Math.ceil(currentPage / pagesPerGroup);

  const firstPage = (currentPageGroup - 1) * pagesPerGroup + 1;

  const lastPage = Math.min(firstPage + pagesPerGroup - 1, totalPages);

  const pageNumbers = [];

  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  // Page change
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Next page
  const onNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Previous page
  const onPreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* ================= PRODUCTS ================= */}

      <div className="flex flex-wrap items-center justify-center gap-8 p-5">
        {products.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="flex h-[50vh] w-full items-center justify-center">
            <p className="text-[20px] font-semibold text-slate-800">
              Products are loading...
            </p>
          </div>
        )}
      </div>

      {/* ================= PAGINATION ================= */}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pb-8">
          {/* Previous */}

          <button
            onClick={onPreviousClick}
            disabled={currentPage === 1}
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {/* Page Numbers */}

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`h-9 w-9 rounded-md border text-sm font-semibold transition ${
                currentPage === page
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-background text-text-primary hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}

          <button
            onClick={onNextClick}
            disabled={currentPage === totalPages}
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
