import { useEffect, useState } from "react";
import getProductById from "../api/getProductById";
import { useParams } from "react-router-dom";
import {
  CircleCheck,
  MapPin,
  Phone,
  Mail,
  Pencil,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Wallet,
  Banknote,
  Truck,
  Tag,
  Plus,
  Minus,
} from "lucide-react";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PriceDetails from "../components/PriceDetails";
import getTotalCartAmmount from "../utility/getTotalCartAmmount";
import { useCart } from "../context/cart-context";

const PlaceOrderPage = () => {
  const { cart } = useCart();

  const users = [
    {
      id: 1,
      name: "John Max",
      email: "john@mail.com",
      mailto: "john.max@example.com",
      contact: "+91 98765 43210",
      gender: "Male",
      dateOfBirth: "1998-06-15",

      address: {
        houseNo: "42",
        street: "MG Road",
        area: "Indira Nagar",
        city: "Lucknow",
        state: "Uttar Pradesh",
        country: "India",
        pincode: "226016",
      },

      profileImage: "https://i.pravatar.cc/150?img=12",

      role: "Customer",

      orders: {
        total: 12,
        completed: 9,
        pending: 2,
        cancelled: 1,
      },

      wishlistCount: 8,
      cartItems: 4,

      joinedAt: "2024-05-18",
      lastLogin: "2026-09-14",

      isVerified: true,
      isActive: true,
    },
  ];

  const { id } = useParams();

  const [orderProduct, setOrderProduct] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);
        setOrderProduct(product);
      } catch (error) {
        console.error("Product fetch error:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const user = users[0];

  const onAddQuantitybtnClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const onRemoveQuantitybtnClick = () => {
    setQuantity((prev) => prev - 1);
  };

  const deliveryCharge = 49;
  const productPrice = orderProduct?.price * quantity;
  const totalAmount = deliveryCharge + productPrice;

  // console.log(typeof(productPrice))

  return (
    <div className="min-h-screen bg-background">
      {/* =====================================================
      PAGE HEADER
  ===================================================== */}

      <div className="border-b border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-text-primary sm:text-2xl">
            Checkout
          </h1>

          <p className="mt-1 text-sm text-text-muted">
            Review your order and complete your purchase
          </p>
        </div>
      </div>

      {/* =====================================================
      MAIN CONTENT
  ===================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          {/* =================================================
          LEFT SECTION
      ================================================= */}

          <div className="space-y-5">
            {/* =================================================
            STEP 1 - LOGIN
        ================================================= */}

            <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
              <div className="flex items-center justify-between border-b border-border bg-background-soft px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
                    1
                  </span>

                  <div>
                    <h2 className="text-sm font-bold tracking-wide text-text-primary">
                      LOGIN
                    </h2>

                    <p className="text-xs text-text-muted">
                      Account information
                    </p>
                  </div>

                  <CircleCheck size={19} className="text-green-500" />
                </div>

                <button
                  type="button"
                  className="rounded-md border border-border px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
                >
                  CHANGE
                </button>
              </div>

              <div className="px-5 py-5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {user.name}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-xs text-text-muted">
                      <Phone size={13} />
                      <span>{user.contact}</span>
                    </div>
                  </div>

                  <div className="hidden h-8 w-px bg-border sm:block" />

                  <div>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <Mail size={13} />
                      <span>{user.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
            STEP 2 - DELIVERY ADDRESS
        ================================================= */}

            <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
              <div className="flex items-center justify-between border-b border-border bg-background-soft px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
                    2
                  </span>

                  <div>
                    <h2 className="text-sm font-bold tracking-wide text-text-primary">
                      DELIVERY ADDRESS
                    </h2>

                    <p className="text-xs text-text-muted">
                      Where should we deliver your order?
                    </p>
                  </div>

                  <CircleCheck size={19} className="text-green-500" />
                </div>

                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md border border-border px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
                >
                  <Pencil size={13} />
                  CHANGE
                </button>
              </div>

              <div className="px-5 py-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin size={19} />
                  </div>

                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-text-primary">
                        {user.name}
                      </h3>

                      <span className="rounded bg-background-soft px-2 py-0.5 text-[10px] font-semibold uppercase text-text-muted">
                        Home
                      </span>
                    </div>

                    <p className="max-w-2xl text-sm leading-6 text-text-secondary">
                      House No. {user.address.houseNo}, {user.address.street},{" "}
                      {user.address.area}, {user.address.city},{" "}
                      {user.address.state}, {user.address.country} -{" "}
                      <span className="font-semibold text-text-primary">
                        {user.address.pincode}
                      </span>
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
                      <Phone size={13} />
                      <span>{user.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
            STEP 3 - ORDER SUMMARY
        ================================================= */}

            <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
              <div className="border-b border-border bg-background-soft px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
                    3
                  </span>

                  <div>
                    <h2 className="text-sm font-bold tracking-wide text-text-primary">
                      ORDER SUMMARY
                    </h2>

                    <p className="text-xs text-text-muted">
                      Review your selected product
                    </p>
                  </div>
                </div>
              </div>

              {orderProduct ? (
                <div className="p-5">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    {/* PRODUCT IMAGE */}

                    <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl border border-border bg-background-soft sm:h-36 sm:w-36">
                      <img
                        src={
                          Array.isArray(orderProduct.images)
                            ? orderProduct.images[0]
                            : orderProduct.images
                        }
                        alt={orderProduct.title}
                        className="h-full w-full object-contain p-3"
                      />
                    </div>

                    {/* PRODUCT DETAILS */}

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className=" flex items-start justify-between gap-3">
                          <h3 className="line-clamp-2 text-base font-semibold text-text-primary">
                            {orderProduct.title}
                          </h3>
                        </div>

                        <div className=" flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <span className="text-lg text-rating">★</span>

                            <span className="text-sm font-semibold text-text-primary">
                              4.5
                            </span>
                          </div>

                          <span className="text-text-light">|</span>

                          <span className="text-sm text-text-muted">
                            120 Reviews
                          </span>
                        </div>

                        {orderProduct.category && (
                          <p className="text-xs text-text-muted">
                            Brand:{" "}
                            <span className="font-medium text-text-secondary">
                              {orderProduct.category.name}
                            </span>
                          </p>
                        )}

                        <div className="mt-3 flex items-center gap-3">
                          {orderProduct.price && (
                            <span className="text-lg font-bold text-text-primary">
                              ${productPrice}
                            </span>
                          )}

                          {orderProduct.discountPercentage && (
                            <span className="text-xs font-semibold text-green-600">
                              {orderProduct.discountPercentage}% off
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs text-text-secondary">
                          <span className="text-text-muted">Quantity</span>
                          <button onClick={onRemoveQuantitybtnClick}>
                            <Minus />
                          </button>
                          <span className="font-semibold">{quantity}</span>
                          <button onClick={onAddQuantitybtnClick}>
                            <Plus fontSize={"10"} />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <Truck size={14} />
                          <span>Free Delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DELIVERY INFO */}

                  <div className="mt-5 flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/5 px-4 py-3">
                    <Truck size={17} className="shrink-0 text-green-600" />

                    <p className="text-xs text-text-secondary">
                      <span className="font-semibold text-text-primary">
                        Delivery in 3–5 days
                      </span>{" "}
                      to your selected address.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background-soft">
                    <ShoppingBagIcon />
                  </div>

                  <p className="mt-3 text-sm font-medium text-text-primary">
                    Loading product...
                  </p>

                  <p className="mt-1 text-xs text-text-muted">
                    Please wait while we fetch your product.
                  </p>
                </div>
              )}

              {/* INVOICE */}

              <div className="border-t border-border px-5 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-green-500" />

                    <p className="text-xs text-text-muted">
                      GST Invoice will be available after the product is
                      delivered.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            </section>

            {/* =================================================
            STEP 4 - PAYMENT
        ================================================= */}
          </div>

          {/* =================================================
          RIGHT SECTION - PRICE DETAILS
      ================================================= */}

          <aside className="lg:sticky lg:top-24 lg:h-fit ">
            {/* PLACE ORDER */}

            <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
              <div className="border-b border-border bg-background-soft px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
                    4
                  </span>

                  <div>
                    <h2 className="text-sm font-bold tracking-wide text-text-primary">
                      PAYMENT OPTIONS
                    </h2>

                    <p className="text-xs text-text-muted">
                      Choose your preferred payment method
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3">
                {/* UPI */}

                <button
                  type="button"
                  onClick={() => setSelectedPayment("upi")}
                  className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition ${
                    selectedPayment === "upi"
                      ? "bg-primary/5 ring-1 ring-primary"
                      : "hover:bg-background-soft"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Wallet size={19} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-text-primary">
                      UPI
                    </p>

                    <p className="mt-0.5 text-xs text-text-muted">
                      Google Pay, PhonePe, Paytm and more
                    </p>
                  </div>

                  <span
                    className={`h-4 w-4 rounded-full border-2 ${
                      selectedPayment === "upi"
                        ? "border-primary bg-primary"
                        : "border-border"
                    }`}
                  />
                </button>

                {/* CARD */}

                <button
                  type="button"
                  onClick={() => setSelectedPayment("card")}
                  className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition ${
                    selectedPayment === "card"
                      ? "bg-primary/5 ring-1 ring-primary"
                      : "hover:bg-background-soft"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-soft text-text-secondary">
                    <CreditCard size={19} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-text-primary">
                      Credit / Debit Card
                    </p>

                    <p className="mt-0.5 text-xs text-text-muted">
                      Visa, Mastercard, RuPay and more
                    </p>
                  </div>

                  <span
                    className={`h-4 w-4 rounded-full border-2 ${
                      selectedPayment === "card"
                        ? "border-primary bg-primary"
                        : "border-border"
                    }`}
                  />
                </button>

                {/* COD */}

                <button
                  type="button"
                  onClick={() => setSelectedPayment("cod")}
                  className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition ${
                    selectedPayment === "cod"
                      ? "bg-primary/5 ring-1 ring-primary"
                      : "hover:bg-background-soft"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-soft text-text-secondary">
                    <Banknote size={19} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-text-primary">
                      Cash on Delivery
                    </p>

                    <p className="mt-0.5 text-xs text-text-muted">
                      Pay when your order arrives
                    </p>
                  </div>

                  <span
                    className={`h-4 w-4 rounded-full border-2 ${
                      selectedPayment === "cod"
                        ? "border-primary bg-primary"
                        : "border-border"
                    }`}
                  />
                </button>
              </div>
            </section>

            <section className="mb-8">
              <div className=" rounded-xl border border-border bg-background p-4 shadow-sm">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="text-lg font-bold text-text-primary">
                    Price Details
                  </h2>

                  <p className="mt-1 text-xs text-text-muted">
                    {orderProduct?.length}{" "}
                    {orderProduct?.length === 1 ? "item" : "items"} in your cart
                  </p>
                </div>

                {/* Details */}

                <div className="p-5">
                  <div className="flex flex-col gap-5">
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-text-secondary">
                        Price ({orderProduct?.length} items)
                      </p>

                      <p className="font-medium text-text-primary">
                        ${productPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  {/* Delivery */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LocalShippingOutlinedIcon
                      fontSize="small"
                      className="text-text-muted"
                    />

                    <p className="text-sm text-text-secondary">
                      Delivery Charge
                    </p>
                  </div>

                  {deliveryCharge === 0 ? (
                    <span className="font-semibold text-success">FREE</span>
                  ) : (
                    <span className="font-medium text-text-primary">
                      ${deliveryCharge.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Divider */}

          <div className="border-t border-dashed border-border" />


          {/* Total */}

          <div className="flex items-center justify-between">

            <p className="text-base font-bold text-text-primary">
              Total Amount
            </p>

            <p className="text-xl font-bold text-gray-800">
              ${totalAmount.toFixed(2)}
            </p>

          </div>
                </div>

                

                <div className="mb-4 flex items-start gap-3">
                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-green-500"
                  />

                  <p className="text-[11px] leading-5 text-text-muted">
                    Safe and secure payments. Your payment information is
                    protected with industry-standard encryption.
                  </p>
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark active:scale-[0.99]"
                >
                  <span>PLACE ORDER</span>
                  <ChevronRight size={17} />
                </button>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

/* =====================================================
FALLBACK ICON
===================================================== */

const ShoppingBagIcon = () => {
  return (
    <svg
      className="h-6 w-6 text-text-muted"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {" "}
      <path d="M6 8h12l1 13H5L6 8Z" /> <path d="M9 8V6a3 3 0 016 0v2" />{" "}
    </svg>
  );
};

export default PlaceOrderPage;
