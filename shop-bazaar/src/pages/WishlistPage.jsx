import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";

import WishlistProductCard from "../components/WishlistProductCard";
import { useWishlist } from "../context/wishlist-context";

const WishlistPage = () => {

  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">

      {/* ================= HEADER ================= */}

      <section className="border-b border-border bg-background-section">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7 sm:px-8">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-danger-light text-danger">
              <FavoriteOutlinedIcon />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-text-primary">
                My Wishlist
              </h1>

              <p className="mt-1 text-sm text-text-muted">
                Save your favorite products for later
              </p>
            </div>

          </div>


          {wishlist?.length > 0 && (
            <div className="hidden rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary sm:block">
              {wishlist.length}{" "}
              {wishlist.length === 1 ? "Product" : "Products"}
            </div>
          )}

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

        {wishlist?.length > 0 ? (

          <>

            {/* Top Bar */}

            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

              <div>

                <h2 className="text-lg font-bold text-text-primary">
                  Saved Products
                </h2>

                <p className="mt-1 text-sm text-text-muted">
                  Your favorite products are waiting for you
                </p>

              </div>


              <button
                onClick={() => navigate("/shop")}
                className="flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:border-primary hover:bg-primary-light hover:text-primary"
              >
                <ShoppingBagOutlinedIcon fontSize="small" />
                Continue Shopping
              </button>

            </div>


            {/* Wishlist Products */}

            <div className="flex flex-col items-center gap-5">

              {wishlist.map((product) => (

                <WishlistProductCard
                  key={product.id}
                  product={product}
                />

              ))}

            </div>

          </>

        ) : (

          /* ================= EMPTY WISHLIST ================= */

          <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-danger-light text-danger">

              <FavoriteOutlinedIcon sx={{ fontSize: 42 }} />

            </div>


            <h2 className="mt-6 text-2xl font-bold text-text-primary">
              Your Wishlist is Empty
            </h2>


            <p className="mt-2 max-w-md text-sm leading-6 text-text-muted">
              You haven't added any products to your wishlist yet.
              Explore our collection and save your favorite products here.
            </p>


            <button
              onClick={() => navigate("/shop")}
              className="mt-6 flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              <ShoppingBagOutlinedIcon fontSize="small" />
              Start Shopping
            </button>

          </div>

        )}

      </section>

    </main>
  );
};

export default WishlistPage;