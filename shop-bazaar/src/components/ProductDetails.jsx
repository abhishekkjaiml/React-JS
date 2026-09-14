import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import getProductById from "../api/getProductById";

import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

import {
  findProductInCart,
  findProductInWishlist,
} from "../utility/findProductIn";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { cart, cartDispatch } = useCart();
  const { wishlist, wishDispatch } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // ================= FETCH PRODUCT =================

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        setProduct(data);
        setSelectedImage(0);
        setQuantity(1);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Unable to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ================= LOADING =================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        {" "}
        <div className="text-center">
          {" "}
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-border border-t-primary" />
          <p className="mt-4 text-sm text-text-muted">Loading product...</p>
        </div>
      </main>
    );
  }

  // ================= ERROR =================

  if (error || !product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        {" "}
        <div className="text-center">
          {" "}
          <h2 className="text-xl font-bold text-text-primary">
            Product Not Found{" "}
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            {error || "This product is no longer available."}
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  // ================= PRODUCT IMAGES =================

  const images = product.images?.filter(Boolean) || [];

  const mainImage =
    images[selectedImage] ||
    images[0] ||
    "https://placehold.co/600x600?text=Product";

  // ================= CART / WISHLIST =================

  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWishlist = findProductInWishlist(wishlist, product.id);

  // ================= PRICE =================

  const price = Number(product.price) || 0;
  const originalPrice = (price * 1.2).toFixed(2);
  const discountPercentage = 20;

  // ================= QUANTITY =================

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => Math.max(1, previous - 1));
  };

  // ================= CART =================

  const onCartClick = () => {
    if (isProductInCart) {
      navigate("/cart");
      return;
    }

    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity,
      },
    });
  };

  // ================= WISHLIST =================

  const onWishlistClick = () => {
    if (isProductInWishlist) {
      navigate("/wishlist");
      return;
    }

    wishDispatch({
      type: "ADD_TO_Wishlist",
      payload: {
        product,
      },
    });
  };

  // ================= BUY NOW =================

  const onBuyNow = () => {
    // if (!isProductInCart) {
    //   cartDispatch({
    //     type: "ADD_TO_CART",
    //     payload: {
    //       product,
    //       quantity,
    //     },
    //   });
    // }
    
    navigate(`shop/buy/${id}`)
  };

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
      {" "}
      <div className="mx-auto max-w-7xl">
        
        {/* ================= BREADCRUMB ================= */}
        <div className="mb-7 flex flex-wrap items-center gap-2 text-sm">
          <button
            onClick={() => navigate("/")}
            className="text-text-muted transition hover:text-primary"
          >
            Home
          </button>

          <span className="text-text-light">/</span>

          <button
            onClick={() => navigate("/shop")}
            className="text-text-muted transition hover:text-primary"
          >
            Shop
          </button>

          <span className="text-text-light">/</span>

          <span className="max-w-72 truncate font-medium text-text-primary">
            {product.title}
          </span>
        </div>
        {/* ================= TOP PRODUCT SECTION ================= */}
        <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(380px,1fr)_280px]">
          {/* ================= IMAGE GALLERY ================= */}

          <div className="flex gap-4">
            {/* THUMBNAILS */}

            <div className="flex w-[72px] shrink-0 flex-col gap-3">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-md border bg-background-soft p-2 transition-all ${
                      selectedImage === index
                        ? "border-primary ring-1 ring-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))
              ) : (
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-md border border-border bg-background-soft text-xs text-text-muted">
                  No Image
                </div>
              )}
            </div>

            {/* MAIN IMAGE */}

            <div className="relative flex min-h-[450px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-border bg-background-soft p-8">
              <img
                src={mainImage}
                alt={product.title}
                className="max-h-[400px] w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* ================= PRODUCT INFORMATION ================= */}

          <div className="flex flex-col">
            {/* BADGE */}

            <div className="mb-3">
              <span className="inline-flex rounded-md bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600">
                Best Seller
              </span>
            </div>

            {/* TITLE */}

            <h1 className="text-3xl font-bold leading-tight text-text-primary">
              {product.title}
            </h1>

            {/* CATEGORY */}

            <p className="mt-2 text-sm capitalize text-text-muted">
              {product.category?.name || "Premium Product"}
            </p>

            {/* RATING */}

            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-lg text-rating">★</span>

                <span className="text-sm font-semibold text-text-primary">
                  4.5
                </span>
              </div>

              <span className="text-text-light">|</span>

              <span className="text-sm text-text-muted">120 Reviews</span>
            </div>

            {/* PRICE */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-text-primary">
                ${price.toFixed(2)}
              </span>

              <span className="text-base text-text-light line-through">
                ${originalPrice}
              </span>

              <span className="rounded-md bg-success/10 px-2.5 py-1 text-xs font-bold text-success">
                {discountPercentage}% OFF
              </span>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-5 text-sm leading-7 text-text-secondary">
              {product.description}
            </p>

            <div className="my-6 h-px bg-border" />

            {/* QUANTITY */}

            <div>
              <p className="mb-3 text-sm font-semibold text-text-primary">
                Quantity
              </p>

              <div className="flex h-11 w-fit items-center overflow-hidden rounded-md border border-border">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-full w-11 items-center justify-center text-text-secondary transition hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <RemoveOutlinedIcon fontSize="small" />
                </button>

                <span className="flex h-full w-12 items-center justify-center border-x border-border text-sm font-semibold text-text-primary">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="flex h-full w-11 items-center justify-center text-text-secondary transition hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <AddOutlinedIcon fontSize="small" />
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}

            <div className="mt-6 flex gap-3">
              {/* ADD TO CART */}

              <button
                onClick={onCartClick}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
              >
                {isProductInCart ? (
                  <ShoppingCartCheckoutOutlinedIcon fontSize="small" />
                ) : (
                  <ShoppingCartOutlinedIcon fontSize="small" />
                )}

                {isProductInCart ? "Go to Cart" : "Add to Cart"}
              </button>

              {/* WISHLIST */}

              <button
                onClick={onWishlistClick}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-violet-300 bg-violet-50 text-violet-600 transition-all hover:border-violet-500 hover:bg-violet-100"
              >
                {isProductInWishlist ? (
                  <FavoriteOutlinedIcon />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </button>
            </div>

            {/* BUY NOW */}

            <button
              onClick={onBuyNow}
              className="mt-3 h-12 w-full rounded-md border border-indigo-200 bg-indigo-50 text-sm font-semibold text-indigo-700 transition-all hover:border-indigo-300 hover:bg-indigo-100"
            >
              Buy Now
            </button>
          </div>

          {/* ================= RIGHT INFORMATION CARD ================= */}

          <aside>
            <div className="rounded-lg border border-border bg-background-soft p-5">
              {/* FREE SHIPPING */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                  <LocalShippingOutlinedIcon fontSize="small" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    Free Shipping
                  </h4>

                  <p className="mt-0.5 text-xs text-text-muted">
                    On orders over $50
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-border" />

              {/* EASY RETURNS */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-green-50 text-green-600">
                  <AssignmentReturnOutlinedIcon fontSize="small" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    Easy Returns
                  </h4>

                  <p className="mt-0.5 text-xs text-text-muted">
                    30 days return policy
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-border" />

              {/* SECURE PAYMENT */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                  <SecurityOutlinedIcon fontSize="small" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    Secure Payment
                  </h4>

                  <p className="mt-0.5 text-xs text-text-muted">
                    100% secure checkout
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-border" />

              {/* VERIFIED PRODUCT */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                  <VerifiedOutlinedIcon fontSize="small" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    Verified Product
                  </h4>

                  <p className="mt-0.5 text-xs text-text-muted">
                    Quality assured
                  </p>
                </div>
              </div>

              {/* PAYMENT METHODS */}

              <div className="mt-6 border-t border-border pt-5">
                <p className="mb-3 text-xs font-semibold text-text-muted">
                  WE ACCEPT
                </p>

                <div className="grid grid-cols-4 gap-2">
                  <div className="flex h-8 items-center justify-center rounded border border-border bg-background text-[10px] font-bold text-blue-700">
                    VISA
                  </div>

                  <div className="flex h-8 items-center justify-center rounded border border-border bg-background text-[10px] font-bold text-orange-600">
                    MC
                  </div>

                  <div className="flex h-8 items-center justify-center rounded border border-border bg-background text-[10px] font-bold text-blue-500">
                    AMEX
                  </div>

                  <div className="flex h-8 items-center justify-center rounded border border-border bg-background text-[10px] font-bold text-indigo-600">
                    PAY
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
        {/* ================= BOTTOM SECTION ================= */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* PRODUCT DETAILS */}

          <div className="rounded-lg border border-border bg-background">
            {/* TABS */}

            <div className="flex overflow-x-auto border-b border-border">
              <button className="shrink-0 border-b-2 border-indigo-600 px-5 py-4 text-sm font-semibold text-indigo-600">
                Product Details
              </button>

              <button className="shrink-0 px-5 py-4 text-sm font-medium text-text-muted transition hover:text-text-primary">
                Specifications
              </button>

              <button className="shrink-0 px-5 py-4 text-sm font-medium text-text-muted transition hover:text-text-primary">
                Reviews (120)
              </button>

              <button className="shrink-0 px-5 py-4 text-sm font-medium text-text-muted transition hover:text-text-primary">
                Shipping & Returns
              </button>
            </div>

            {/* CONTENT */}

            <div className="p-6">
              <h2 className="text-xl font-bold text-text-primary">
                About this product
              </h2>

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {product.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* PRODUCT ID */}

                <div className="rounded-md border border-border bg-background-soft p-4">
                  <p className="text-xs text-text-muted">Product ID</p>

                  <p className="mt-1 text-sm font-semibold text-text-primary">
                    #{product.id}
                  </p>
                </div>

                {/* CATEGORY */}

                <div className="rounded-md border border-border bg-background-soft p-4">
                  <p className="text-xs text-text-muted">Category</p>

                  <p className="mt-1 text-sm font-semibold capitalize text-text-primary">
                    {product.category?.name || "N/A"}
                  </p>
                </div>

                {/* RATING */}

                <div className="rounded-md border border-border bg-background-soft p-4">
                  <p className="text-xs text-text-muted">Customer Rating</p>

                  <p className="mt-1 text-sm font-semibold text-text-primary">
                    ★ 4.5 / 5
                  </p>
                </div>

                {/* AVAILABILITY */}

                <div className="rounded-md border border-border bg-background-soft p-4">
                  <p className="text-xs text-text-muted">Availability</p>

                  <p className="mt-1 text-sm font-semibold text-success">
                    In Stock
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* YOU MAY ALSO LIKE */}

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-text-primary">
                You May Also Like
              </h2>

              <button
                onClick={() => navigate("/shop")}
                className="text-xs font-semibold text-indigo-600 transition hover:text-indigo-700"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              {/* RELATED PRODUCT 1 */}

              <button
                onClick={() => navigate(`/shop/${product.id}`)}
                className="flex w-full gap-3 rounded-md border border-border bg-background p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-background-soft p-2">
                  <img
                    src={mainImage}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-text-primary">
                    {product.title}
                  </h3>

                  <p className="mt-1 text-xs capitalize text-text-muted">
                    {product.category?.name}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-text-primary">
                      ${price.toFixed(2)}
                    </span>

                    <span className="text-xs text-rating">★ 4.5</span>
                  </div>
                </div>
              </button>

              {/* RELATED PRODUCT 2 */}

              <button
                onClick={() => navigate("/shop")}
                className="flex w-full gap-3 rounded-md border border-border bg-background p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-background-soft p-2">
                  <img
                    src={mainImage}
                    alt="Similar product"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-text-primary">
                    Similar Product
                  </h3>

                  <p className="mt-1 text-xs capitalize text-text-muted">
                    {product.category?.name}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-text-primary">
                      ${(price * 0.9).toFixed(2)}
                    </span>

                    <span className="text-xs text-rating">★ 4.4</span>
                  </div>
                </div>
              </button>

              {/* RELATED PRODUCT 3 */}

              <button
                onClick={() => navigate("/shop")}
                className="flex w-full gap-3 rounded-md border border-border bg-background p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-background-soft p-2">
                  <img
                    src={mainImage}
                    alt="Recommended product"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-text-primary">
                    Recommended Product
                  </h3>

                  <p className="mt-1 text-xs capitalize text-text-muted">
                    {product.category?.name}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-text-primary">
                      ${(price * 1.1).toFixed(2)}
                    </span>

                    <span className="text-xs text-rating">★ 4.6</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
