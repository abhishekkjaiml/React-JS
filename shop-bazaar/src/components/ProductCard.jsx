import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { useCart } from "../context/cart-context";
import findProductInCart from "../utility/findProductInCart";
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate()

  const isProductInCart = findProductInCart(cart, product.id)

  const onCardClick = (product) => {
    !isProductInCart ?
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: { product }
    }) : navigate('/cart')
  }
  
  return (
    <div className="group w-50 overflow-hidden rounded-md border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative flex h-55 items-center justify-center bg-background-soft p-4">
        <img
          src={product.images}
          alt={product.title}
          className="rounded-sm  object-contain transition-transform duration-300 "
        />
      </div>

      {/* Product Information */}
      <div className="px-4 pt-4">
        {/* Product Title */}
        <h3 className="line-clamp-2 min-h-10.5 text-[15px] font-semibold leading-5 text-text-primary">
          {product.title.length > 21
            ? product.title.slice(0, 21) + "..."
            : product.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-rating text-sm">★</span>

          <span className="text-xs text-text-muted">4.5</span>

          <span className="text-xs text-text-light">(120)</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-text-primary">
            ${product.price}
          </span>

          <span className="text-sm text-text-light line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>

          <span className="text-xs font-semibold text-success">20% OFF</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 px-4 py-4">
        {/* Wishlist */}
        <button className=" flex h-10 w-full items-center justify-center gap-2 rounded-md border border-primary text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary-light "
        >
          <FavoriteBorderOutlinedIcon fontSize="small" />
          Add to Wishlist
        </button>

        {/* Cart */}
        <button
          onClick={() => onCardClick(product)}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark"
        >
          {
            !isProductInCart ? <ShoppingCartOutlinedIcon fontSize="small" /> : <ShoppingCartCheckoutOutlinedIcon />
          }
          {
            !isProductInCart ? 'Add to Cart' : 'Go to Cart'
          }
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
