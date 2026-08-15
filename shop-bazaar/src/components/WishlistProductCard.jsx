import { useWishlist } from "../context/wishlist-context";
import { useCart } from "../context/cart-context";
import { useState } from "react";

import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { findProductInCart } from "../utility/findProductIn";
import { useNavigate } from "react-router-dom";

const WishlistProductCard = ({ product }) => {

  const navigate = useNavigate()

  const [productQuantity, setProductQuantity] = useState(1);

  const { wishDispatch } = useWishlist();
  const { cart ,cartDispatch } = useCart();


  // ================= QUANTITY =================

  const onAddQuantityClick = () => {
    setProductQuantity((count) => count + 1);
  };


  const onRemoveQuantityClick = () => {
    setProductQuantity((count) => (count > 1 ? count - 1 : 1));
  };


  // ================= REMOVE =================

  const onRemoveWishlistClick = () => {

    wishDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        id: product.id,
      },
    });

  };


  // ================= ADD TO CART =================

  const isProductInCart = findProductInCart(cart, product.id)

  const onAddToCartClick = () => {

    !isProductInCart ? cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity: productQuantity,
      },
    }): navigate('/cart')

  };


  return (
    <div className="group flex w-full max-w-3xl overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">

      {/* ================= PRODUCT IMAGE ================= */}

      <div className="flex w-44 shrink-0 items-center justify-center bg-background-soft p-4">

        <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background p-3">

          <img
            src={product.images}
            alt={product.title}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />

        </div>

      </div>


      {/* ================= PRODUCT CONTENT ================= */}

      <div className="flex min-w-0 flex-1 flex-col justify-between p-5">

        {/* Product Details */}

        <div>

          <div className="flex items-start justify-between gap-4">

            <div className="min-w-0">

              <h3 className="truncate text-lg font-semibold text-text-primary">
                {product.title}
              </h3>

              <p className="mt-1 text-sm capitalize text-text-muted">
                {product.category?.name}
              </p>

            </div>


            {/* Price */}

            <div className="shrink-0 text-right">

              <p className="text-xl font-bold text-text-primary">
                ${(product.price * productQuantity).toFixed(2)}
              </p>

              <p className="text-xs text-text-light">
                ${product.price} / item
              </p>

            </div>

          </div>


          {/* Rating */}

          <div className="mt-3 flex items-center gap-1">

            <span className="text-sm text-rating">
              ★
            </span>

            <span className="text-xs font-medium text-text-secondary">
              4.5
            </span>

            <span className="text-xs text-text-light">
              (120 reviews)
            </span>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

          {/* Quantity */}

          <div className="flex items-center gap-3">

            <span className="text-sm font-medium text-text-secondary">
              Quantity
            </span>


            <div className="flex h-9 items-center overflow-hidden rounded-md border border-border bg-background">

              {/* Minus */}

              <button
                onClick={onRemoveQuantityClick}
                disabled={productQuantity === 1}
                className="flex h-full w-9 items-center justify-center text-text-secondary transition hover:bg-background-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RemoveOutlinedIcon fontSize="small" />
              </button>


              {/* Quantity */}

              <span className="flex h-full w-10 items-center justify-center border-x border-border text-sm font-semibold text-text-primary">
                {productQuantity}
              </span>


              {/* Plus */}

              <button
                onClick={onAddQuantityClick}
                className="flex h-full w-9 items-center justify-center text-text-secondary transition hover:bg-background-soft hover:text-primary"
              >
                <AddOutlinedIcon fontSize="small" />
              </button>

            </div>

          </div>


          {/* Actions */}

          <div className="flex items-center gap-2">

            {/* Remove */}

            <button
              onClick={onRemoveWishlistClick}
              className="flex h-9 items-center gap-1.5 rounded-md border border-danger/30 px-3 text-sm font-semibold text-danger transition hover:bg-danger-light"
            >

              <DeleteOutlineOutlinedIcon fontSize="small" />

              Remove

            </button>


            {/* Add To Cart */}

            <button
              onClick={onAddToCartClick}
              className="flex h-9 items-center gap-1.5 rounded-md bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >

              {
                !isProductInCart ? <ShoppingCartOutlinedIcon fontSize="small" /> : <ShoppingCartCheckoutOutlinedIcon  fontSize="small" />
              }

              {
                !isProductInCart ? 'Add to Cart' : 'Go to Cart'
              }

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WishlistProductCard;