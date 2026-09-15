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
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

import {
  ArrowLeft,
  Check,
  ChevronRight,
  Clock3,
  Heart,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
  Undo2,
} from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("details");

  // =====================================================
  // FETCH PRODUCT
  // =====================================================

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

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-border border-t-primary" />

          <p className="mt-4 text-sm font-semibold text-text-primary">
            Loading product
          </p>

          <p className="mt-1 text-xs text-text-muted">
            Please wait while we prepare the product details.
          </p>
        </div>
      </main>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error || !product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background-soft">
            <PackageCheck size={25} className="text-text-muted" />
          </div>

          <h2 className="mt-5 text-xl font-bold text-text-primary">
            Product Not Found
          </h2>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            {error || "This product is no longer available."}
          </p>

          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
          >
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  // =====================================================
  // PRODUCT IMAGES
  // =====================================================

  const images = Array.isArray(product.images)
    ? product.images.filter(Boolean)
    : product.images
      ? [product.images]
      : [];

  const fallbackImage = "https://placehold.co/700x700?text=Product";

  const mainImage = images[selectedImage] || images[0] || fallbackImage;

  // =====================================================
  // CART / WISHLIST
  // =====================================================

  const isProductInCart = findProductInCart(cart, product.id);

  const isProductInWishlist = findProductInWishlist(wishlist, product.id);

  // =====================================================
  // PRICE
  // =====================================================

  const price = Number(product.price) || 0;

  const discountPercentage = Number(product.discountPercentage || 20);

  const originalPrice = price / (1 - discountPercentage / 100);

  const savings = originalPrice - price;

  const totalPrice = price * quantity;

  // =====================================================
  // QUANTITY
  // =====================================================

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => Math.max(1, previous - 1));
  };

  // =====================================================
  // CART
  // =====================================================

  const onCartClick = () => {
    !isProductInCart ? cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity,
      },
    }): cartDispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: product.id
      }
    })
  };

  // =====================================================
  // WISHLIST
  // =====================================================

  const onWishlistClick = () => {
    !isProductInWishlist ? wishDispatch({
      type: "ADD_TO_Wishlist",
      payload: {
        product,
      },
    }): wishDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        id: product.id,
      },
    })
  };

  // =====================================================
  // BUY NOW
  // =====================================================

  const onBuyNow = () => {
    navigate(`/shop/buy/${id}`);
  };

  // =====================================================
  // TABS
  // =====================================================

  const tabs = [
    {
      id: "details",
      label: "Product Details",
    },
    {
      id: "specifications",
      label: "Specifications",
    },
    {
      id: "reviews",
      label: "Reviews (120)",
    },
    {
      id: "shipping",
      label: "Shipping & Returns",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          TOP NAVIGATION / BREADCRUMB
      ===================================================== */}

      <div className="border-b border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-hidden text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="shrink-0 text-text-muted transition hover:text-primary"
            >
              Home
            </button>

            <ChevronRight size={14} className="shrink-0 text-text-light" />

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="shrink-0 text-text-muted transition hover:text-primary"
            >
              Shop
            </button>

            <ChevronRight size={14} className="shrink-0 text-text-light" />

            <span className="truncate font-medium text-text-primary">
              {product.title}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT AREA
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* BACK */}

        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-text-muted transition hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </button>

        <section className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)_280px]">
          {/* =================================================
              IMAGE GALLERY
          ================================================= */}

          <div className="flex min-w-0 gap-4">
            {/* THUMBNAILS */}

            <div className="hidden w-[76px] shrink-0 flex-col gap-3 sm:flex">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`relative flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-xl border bg-background-soft p-2.5 transition ${
                      selectedImage === index
                        ? "border-primary ring-2 ring-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="h-full w-full object-contain"
                    />

                    {selectedImage === index && (
                      <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white">
                        <Check size={10} />
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-xl border border-border bg-background-soft text-[10px] text-text-muted">
                  No Image
                </div>
              )}
            </div>

            {/* MAIN IMAGE */}

            <div className="min-w-0 flex-1">
              <div className="group relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-background-soft p-8 sm:min-h-[520px]">
                {/* BADGE */}

                <div className="absolute left-5 top-5 z-10 rounded-full bg-background px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-text-primary shadow-sm">
                  Best Seller
                </div>

                {/* WISHLIST */}

                <button
                  type="button"
                  onClick={onWishlistClick}
                  className={`absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition ${
                    isProductInWishlist
                      ? "border-red-200 bg-red-50 text-red-500"
                      : "border-border bg-background text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {isProductInWishlist ? (
                    <FavoriteOutlinedIcon fontSize="small" />
                  ) : (
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  )}
                </button>

                {/* IMAGE */}

                <img
                  src={mainImage}
                  alt={product.title}
                  className="max-h-[410px] w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                />

                {/* IMAGE COUNT */}

                {images.length > 1 && (
                  <div className="absolute bottom-5 right-5 rounded-full border border-border bg-background/90 px-3 py-1.5 text-[11px] font-semibold text-text-muted backdrop-blur">
                    {selectedImage + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* MOBILE THUMBNAILS */}

              {images.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:hidden">
                  {images.map((image, index) => (
                    <button
                      key={`mobile-${image}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border bg-background-soft p-2 ${
                        selectedImage === index
                          ? "border-primary ring-1 ring-primary"
                          : "border-border"
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}

          <div className="min-w-0">
            {/* CATEGORY */}

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                {product.category?.name || "Premium Product"}
              </span>

              <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-bold text-green-600">
                <Check size={11} />
                In Stock
              </span>
            </div>

            {/* TITLE */}

            <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-3xl lg:text-[34px]">
              {product.title}
            </h1>

            {/* RATING */}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-1 rounded-md bg-green-600 px-2.5 py-1.5 text-xs font-bold text-white">
                  4.5
                  <Star size={12} fill="currentColor" />
                </span>

                <span className="text-xs font-medium text-text-muted">
                  Excellent Rating
                </span>
              </div>

              <span className="h-4 w-px bg-border" />

              <span className="text-xs font-medium text-text-muted">
                120 verified reviews
              </span>
            </div>

            {/* DIVIDER */}

            <div className="my-6 h-px bg-border" />

            {/* PRICE */}

            <div>
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-3xl font-bold tracking-tight text-text-primary">
                   ${price.toFixed(2)}
                </span>

                <span className="pb-1 text-base text-text-light line-through">
                   ${originalPrice.toFixed(2)}
                </span>

                <span className="mb-1 rounded-md bg-green-500/10 px-2.5 py-1 text-xs font-bold text-green-600">
                  {discountPercentage}% OFF
                </span>
              </div>

              <p className="mt-2 text-xs text-text-muted">
                Inclusive of all applicable taxes
              </p>
            </div>

            {/* SAVINGS */}

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3">
              <Check size={16} className="shrink-0 text-green-600" />

              <p className="text-xs font-semibold text-green-600">
                You save  ${savings.toFixed(2)} on this purchase
              </p>
            </div>

            {/* DESCRIPTION */}

            <div className="mt-6">
              <h2 className="text-sm font-bold text-text-primary">
                About this product
              </h2>

              <p className="mt-2 line-clamp-4 text-sm leading-7 text-text-secondary">
                {product.description}
              </p>
            </div>

            {/* QUANTITY */}

            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-bold text-text-primary">Quantity</p>

                <p className="text-xs text-text-muted">
                  Maximum available stock
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex h-11 overflow-hidden rounded-lg border border-border">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="flex w-11 items-center justify-center text-text-secondary transition hover:bg-background-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <RemoveOutlinedIcon fontSize="small" />
                  </button>

                  <span className="flex w-12 items-center justify-center border-x border-border text-sm font-bold text-text-primary">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="flex w-11 items-center justify-center text-text-secondary transition hover:bg-background-soft hover:text-primary"
                  >
                    <AddOutlinedIcon fontSize="small" />
                  </button>
                </div>

                <p className="text-sm font-semibold text-text-primary">
                   ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onCartClick}
                className="group flex h-13 min-w-0 flex-1 basis-[45%] items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg active:scale-[0.99]"
              >
                {isProductInCart ? (
                  <RemoveShoppingCartOutlinedIcon fontSize="small" />
                ) : (
                  <ShoppingCartOutlinedIcon fontSize="small" />
                )}

                <span>{isProductInCart ? "Remove From Cart" : "Add to Cart"}</span>
              </button>

              <button
                type="button"
                onClick={onBuyNow}
                className="group flex h-13 min-w-0 flex-1 basis-[45%] items-center justify-center gap-2 rounded-xl border-2 bg-gray-900 px-4 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-700 hover:text-white hover:shadow-lg active:scale-[0.99]"
              >
                <span>Buy Now</span>

                <ChevronRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* SMALL TRUST MESSAGE */}

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-text-muted">
              <ShieldCheck size={15} className="text-green-500" />

              <span>Secure checkout • 100% genuine product</span>
            </div>
          </div>

          {/* =================================================
              SERVICE / TRUST CARD
          ================================================= */}

          <aside className="xl:pt-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              {/* DELIVERY */}

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-text-primary">
                    Delivery Information
                  </h3>

                  <Truck size={18} className="text-primary" />
                </div>

                <div className="rounded-xl border border-border bg-background-soft p-4">
                  <div className="flex gap-3">
                    <MapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <div>
                      <p className="text-xs font-bold text-text-primary">
                        Deliver to your location
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-text-muted">
                        Enter your address at checkout to confirm delivery
                        availability.
                      </p>

                      <button
                        type="button"
                        className="mt-2 text-[11px] font-bold text-primary hover:underline"
                      >
                        Check availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* BENEFITS */}

              <div className="space-y-5 p-5">
                <ServiceItem
                  icon={<LocalShippingOutlinedIcon fontSize="small" />}
                  title="Free Shipping"
                  description="Fast delivery on eligible orders"
                  iconClass="bg-primary/10 text-primary"
                />

                <ServiceItem
                  icon={<AssignmentReturnOutlinedIcon fontSize="small" />}
                  title="Easy Returns"
                  description="30-day hassle-free return policy"
                  iconClass="bg-green-500/10 text-green-600"
                />

                <ServiceItem
                  icon={<SecurityOutlinedIcon fontSize="small" />}
                  title="Secure Payments"
                  description="Your payment data stays protected"
                  iconClass="bg-blue-500/10 text-blue-600"
                />

                <ServiceItem
                  icon={<VerifiedOutlinedIcon fontSize="small" />}
                  title="100% Genuine"
                  description="Quality checked and verified product"
                  iconClass="bg-orange-500/10 text-orange-600"
                />
              </div>

              <div className="border-t border-border" />

              {/* SUPPORT */}

              <div className="p-5">
                <div className="flex items-center gap-3 rounded-xl bg-background-soft p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock3 size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-text-primary">
                      Need help?
                    </p>

                    <p className="mt-1 text-[11px] text-text-muted">
                      Our support team is here for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* =====================================================
            PRODUCT DETAILS SECTION
        ===================================================== */}

        <section className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-sm lg:mt-14">
          {/* TABS */}

          <div className="overflow-x-auto border-b border-border">
            <div className="flex min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-4 text-sm font-semibold transition sm:px-7 ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {tab.label}

                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* TAB CONTENT */}

          <div className="p-5 sm:p-7 lg:p-8">
            {/* =================================================
                DETAILS
            ================================================= */}

            {activeTab === "details" && (
              <div>
                <div className="max-w-3xl">
                  <h2 className="text-xl font-bold text-text-primary">
                    Product Details
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {product.description}
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <DetailCard label="Product ID" value={`#${product.id}`} />

                  <DetailCard
                    label="Category"
                    value={product.category?.name || "N/A"}
                  />

                  <DetailCard label="Customer Rating" value="★ 4.5 / 5" />

                  <DetailCard
                    label="Availability"
                    value="In Stock"
                    valueClass="text-green-600"
                  />
                </div>
              </div>
            )}

            {/* =================================================
                SPECIFICATIONS
            ================================================= */}

            {activeTab === "specifications" && (
              <div>
                <h2 className="text-xl font-bold text-text-primary">
                  Specifications
                </h2>

                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  <SpecificationRow label="Product" value={product.title} />

                  <SpecificationRow
                    label="Category"
                    value={product.category?.name || "N/A"}
                  />

                  <SpecificationRow
                    label="Price"
                    value={` $${price.toFixed(2)}`}
                  />

                  <SpecificationRow label="Availability" value="In Stock" />

                  <SpecificationRow label="Customer Rating" value="4.5 / 5" />

                  <SpecificationRow label="Reviews" value="120 Reviews" />
                </div>
              </div>
            )}

            {/* =================================================
                REVIEWS
            ================================================= */}

            {activeTab === "reviews" && (
              <div>
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  {/* RATING */}

                  <div className="rounded-xl border border-border bg-background-soft p-6 text-center md:w-52">
                    <p className="text-4xl font-bold text-text-primary">4.5</p>

                    <div className="mt-2 flex justify-center gap-1 text-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={15} fill="currentColor" />
                      ))}
                    </div>

                    <p className="mt-2 text-xs text-text-muted">
                      Based on 120 reviews
                    </p>
                  </div>

                  {/* REVIEW BREAKDOWN */}

                  <div className="flex-1 space-y-3">
                    <RatingBar stars="5" percentage="78%" />

                    <RatingBar stars="4" percentage="15%" />

                    <RatingBar stars="3" percentage="5%" />

                    <RatingBar stars="2" percentage="1%" />

                    <RatingBar stars="1" percentage="1%" />
                  </div>
                </div>

                {/* REVIEW */}

                <div className="mt-8 border-t border-border pt-7">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      JM
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-bold text-text-primary">
                          John Max
                        </p>

                        <span className="rounded bg-green-500/10 px-2 py-0.5 text-[10px] font-bold text-green-600">
                          Verified Purchase
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={13}
                            className="text-rating"
                            fill="currentColor"
                          />
                        ))}
                      </div>

                      <p className="mt-3 max-w-3xl text-sm leading-6 text-text-secondary">
                        Great product quality and fast delivery. The product
                        looks exactly as shown and works perfectly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================
                SHIPPING
            ================================================= */}

            {activeTab === "shipping" && (
              <div className="grid gap-5 md:grid-cols-2">
                <PolicyCard
                  icon={<Truck size={20} />}
                  title="Fast Delivery"
                  description="Orders are usually delivered within 3–5 business days depending on your location."
                />

                <PolicyCard
                  icon={<Undo2 size={20} />}
                  title="30-Day Returns"
                  description="Return eligible products within 30 days according to our return policy."
                />

                <PolicyCard
                  icon={<ShieldCheck size={20} />}
                  title="Secure Checkout"
                  description="Your payment information is encrypted and securely processed."
                />

                <PolicyCard
                  icon={<PackageCheck size={20} />}
                  title="Quality Assurance"
                  description="Every product is checked to ensure a reliable shopping experience."
                />
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            BOTTOM TRUST STRIP
        ===================================================== */}

        <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <TrustStrip
            icon={<Truck size={18} />}
            title="Fast Delivery"
            description="Delivered in 3–5 days"
          />

          <TrustStrip
            icon={<Undo2 size={18} />}
            title="Easy Returns"
            description="30-day return policy"
          />

          <TrustStrip
            icon={<ShieldCheck size={18} />}
            title="Secure Payment"
            description="100% secure checkout"
          />

          <TrustStrip
            icon={<VerifiedOutlinedIcon fontSize="small" />}
            title="Genuine Product"
            description="Quality assured"
          />
        </section>
      </div>
    </main>
  );
};

/* =====================================================
   SERVICE ITEM
===================================================== */

const ServiceItem = ({ icon, title, description, iconClass }) => {
  return (
    <div className="flex gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="text-xs font-bold text-text-primary">{title}</h4>

        <p className="mt-1 text-[11px] leading-5 text-text-muted">
          {description}
        </p>
      </div>
    </div>
  );
};

/* =====================================================
   DETAIL CARD
===================================================== */

const DetailCard = ({ label, value, valueClass = "text-text-primary" }) => {
  return (
    <div className="rounded-xl border border-border bg-background-soft p-4">
      <p className="text-xs text-text-muted">{label}</p>

      <p className={`mt-2 text-sm font-bold ${valueClass}`}>{value}</p>
    </div>
  );
};

/* =====================================================
   SPECIFICATION ROW
===================================================== */

const SpecificationRow = ({ label, value }) => {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-border px-4 py-4 last:border-b-0 sm:grid-cols-[220px_1fr]">
      <p className="text-xs font-medium text-text-muted">{label}</p>

      <p className="text-sm font-semibold text-text-primary">{value}</p>
    </div>
  );
};

/* =====================================================
   RATING BAR
===================================================== */

const RatingBar = ({ stars, percentage }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="w-7 text-xs font-semibold text-text-secondary">
        {stars} ★
      </span>

      <div className="h-2 flex-1 overflow-hidden rounded-full bg-background-soft">
        <div
          className="h-full rounded-full bg-rating"
          style={{ width: percentage }}
        />
      </div>

      <span className="w-10 text-right text-xs text-text-muted">
        {percentage}
      </span>
    </div>
  );
};

/* =====================================================
   POLICY CARD
===================================================== */

const PolicyCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-xl border border-border bg-background-soft p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-bold text-text-primary">{title}</h3>

      <p className="mt-2 text-xs leading-6 text-text-muted">{description}</p>
    </div>
  );
};

/* =====================================================
   TRUST STRIP
===================================================== */

const TrustStrip = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold text-text-primary">{title}</p>

        <p className="mt-0.5 text-[10px] text-text-muted">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
