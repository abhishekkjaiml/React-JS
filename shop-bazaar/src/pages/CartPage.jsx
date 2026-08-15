import { useCart } from "../context/cart-context";
import HorizontalProductCard from "../components/HorizontalProductCard";
import PriceDetails from "../components/PriceDetails";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background-soft px-4 py-6 sm:px-6 lg:px-10">

      {/* ================= HEADER ================= */}

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>
            <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
              My Cart
            </h1>

            <p className="mt-1 text-sm text-text-muted">
              Review your items before placing your order
            </p>
          </div>

          {cart.length > 0 && (
            <div className="flex items-center gap-2 rounded-full bg-primary-light px-4 py-2">

              <ShoppingCartOutlinedIcon
                fontSize="small"
                className="text-primary"
              />

              <span className="text-sm font-semibold text-primary">
                {cart.length} {cart.length === 1 ? "Item" : "Items"}
              </span>

            </div>
          )}

        </div>


        {/* ================= CART ================= */}

        {cart?.length > 0 ? (

          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">

            {/* ================= PRODUCTS ================= */}

            <section>

              <div className="rounded-xl border border-border bg-background p-4 shadow-sm sm:p-5">

                <div className="mb-5 flex items-center justify-between border-b border-border pb-4">

                  <div>

                    <h2 className="font-semibold text-text-primary">
                      Cart Items
                    </h2>

                    <p className="mt-1 text-xs text-text-muted">
                      Your selected products
                    </p>

                  </div>

                  <span className="text-sm font-medium text-text-secondary">
                    {cart.length} products
                  </span>

                </div>


                {/* Product Cards */}

                <div className="flex flex-col gap-4">

                  {cart.map((product) => (
                    <HorizontalProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}

                </div>

              </div>


              {/* Continue Shopping */}

              <button
                onClick={() => navigate("/shop")}
                className="mt-5 flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:border-primary hover:bg-primary-light hover:text-primary"
              >

                <ArrowBackOutlinedIcon fontSize="small" />

                Continue Shopping

              </button>

            </section>


            {/* ================= PRICE DETAILS ================= */}

            <aside className="lg:sticky lg:top-5 lg:self-start">

              <PriceDetails />

            </aside>

          </div>

        ) : (

          /* ================= EMPTY CART ================= */

          <div className="mt-10 flex min-h-[55vh] items-center justify-center">

            <div className="flex w-full max-w-md flex-col items-center rounded-2xl border border-border bg-background px-6 py-12 text-center shadow-sm">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-light">

                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: 40 }}
                  className="text-primary"
                />

              </div>

              <h2 className="mt-6 text-2xl font-bold text-text-primary">
                Your Cart is Empty
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
                Looks like you haven't added anything to your cart yet.
                Explore our products and find something you love.
              </p>

              <button
                onClick={() => navigate("/shop")}
                className="mt-6 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark hover:shadow-md"
              >
                Start Shopping
              </button>

            </div>

          </div>

        )}

      </div>

    </main>
  );
};

export default CartPage;