import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Banknote,
  Check,
  ChevronRight,
  CircleCheck,
  CreditCard,
  Mail,
  MapPin,
  Minus,
  Pencil,
  Phone,
  Plus,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import getProductById from "../api/getProductById";

const PlaceOrderPage = () => {
  const { id } = useParams();

  const [orderProduct, setOrderProduct] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [quantity, setQuantity] = useState(1);

  /* =====================================================
     USER
  ===================================================== */

  const user = {
    name: "John Max",
    email: "john@mail.com",
    contact: "+91 98765 43210",

    address: {
      houseNo: "42",
      street: "MG Road",
      area: "Indira Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      pincode: "226016",
    },
  };

  /* =====================================================
     FETCH PRODUCT
  ===================================================== */

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

  /* =====================================================
     QUANTITY
  ===================================================== */

  const onAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const onRemoveQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  /* =====================================================
     PRICE
  ===================================================== */

  const deliveryCharge = 49;

  const productPrice = orderProduct?.price ? orderProduct.price * quantity : 0;

  const totalAmount = productPrice + deliveryCharge;

  /* =====================================================
     PAYMENT OPTIONS
  ===================================================== */

  const paymentOptions = [
    {
      id: "upi",
      title: "UPI",
      description: "Google Pay, PhonePe, Paytm & more",
      icon: Wallet,
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      description: "Visa, Mastercard, RuPay & more",
      icon: CreditCard,
    },
    {
      id: "cod",
      title: "Cash on Delivery",
      description: "Pay when your order arrives",
      icon: Banknote,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <header className="border-b border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Checkout
            </h1>

            <p className="text-sm text-text-muted">
              Review your order and complete your purchase securely.
            </p>
          </div>

          {/* CHECKOUT PROGRESS */}

          <div className="mt-6 hidden items-center md:flex">
            <CheckoutProgress number="1" label="Login" completed />

            <ProgressLine completed />

            <CheckoutProgress number="2" label="Delivery" completed />

            <ProgressLine completed />

            <CheckoutProgress number="3" label="Order Summary" active />

            <ProgressLine />

            <CheckoutProgress number="4" label="Payment" />
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="space-y-5">
            {/* =================================================
                STEP 1 - LOGIN
            ================================================= */}

            <CheckoutSection
              number="1"
              title="LOGIN"
              subtitle="Your account information"
              completed
              action={
                <button
                  type="button"
                  className="rounded-lg border border-border px-4 py-2 text-xs font-bold text-primary transition hover:bg-primary/5"
                >
                  CHANGE
                </button>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoItem
                  icon={<Phone size={15} />}
                  label="Mobile Number"
                  value={user.contact}
                />

                <InfoItem
                  icon={<Mail size={15} />}
                  label="Email Address"
                  value={user.email}
                />
              </div>
            </CheckoutSection>

            {/* =================================================
                STEP 2 - ADDRESS
            ================================================= */}

            <CheckoutSection
              number="2"
              title="DELIVERY ADDRESS"
              subtitle="Where should we deliver your order?"
              completed
              action={
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-bold text-primary transition hover:bg-primary/5"
                >
                  <Pencil size={13} />
                  CHANGE
                </button>
              }
            >
              <div className="rounded-xl border border-border bg-background-soft p-4 sm:p-5">
                <div className="flex gap-4">
                  {/* ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>

                  {/* ADDRESS */}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-text-primary">
                        {user.name}
                      </h3>

                      <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
                        Home
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      House No. {user.address.houseNo}, {user.address.street},{" "}
                      {user.address.area}, {user.address.city},{" "}
                      {user.address.state}, {user.address.country}{" "}
                      <span className="font-bold text-text-primary">
                        - {user.address.pincode}
                      </span>
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
                      <Phone size={13} />
                      <span>{user.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CheckoutSection>

            {/* =================================================
                STEP 3 - ORDER SUMMARY
            ================================================= */}

            <CheckoutSection
              number="3"
              title="ORDER SUMMARY"
              subtitle="Review your selected product"
            >
              {orderProduct ? (
                <div>
                  <div className="flex flex-col gap-5 sm:flex-row">
                    {/* PRODUCT IMAGE */}

                    <div className="relative flex h-48 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background-soft sm:h-40 sm:w-40">
                      <img
                        src={
                          Array.isArray(orderProduct.images)
                            ? orderProduct.images[0]
                            : orderProduct.images
                        }
                        alt={orderProduct.title}
                        className="h-full w-full object-contain p-5 transition duration-300 hover:scale-105"
                      />

                      <span className="absolute left-3 top-3 rounded-md bg-background px-2 py-1 text-[10px] font-bold uppercase text-text-muted shadow-sm">
                        1 Item
                      </span>
                    </div>

                    {/* PRODUCT DETAILS */}

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div>
                        <h3 className="line-clamp-2 text-base font-bold leading-6 text-text-primary sm:text-lg">
                          {orderProduct.title}
                        </h3>

                        {/* RATING */}

                        <div className="mt-2 flex items-center gap-2">
                          <span className="rounded-md bg-green-600 px-2 py-1 text-xs font-bold text-white">
                            4.5 ★
                          </span>

                          <span className="text-xs text-text-muted">
                            120 Reviews
                          </span>
                        </div>

                        {/* CATEGORY */}

                        {orderProduct.category && (
                          <p className="mt-2 text-xs text-text-muted">
                            Category:{" "}
                            <span className="font-semibold text-text-secondary">
                              {orderProduct.category.name}
                            </span>
                          </p>
                        )}

                        {/* PRICE */}

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <span className="text-xl font-bold text-text-primary">
                            ₹{productPrice.toFixed(2)}
                          </span>

                          {orderProduct.discountPercentage && (
                            <span className="text-xs font-bold text-green-600">
                              {orderProduct.discountPercentage}% off
                            </span>
                          )}
                        </div>
                      </div>

                      {/* BOTTOM */}

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 sm:mt-auto">
                        {/* QUANTITY */}

                        <div className="flex items-center overflow-hidden rounded-lg border border-border">
                          <button
                            type="button"
                            onClick={onRemoveQuantity}
                            disabled={quantity === 1}
                            className="flex h-9 w-9 items-center justify-center text-text-secondary transition hover:bg-background-soft disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="flex h-9 min-w-10 items-center justify-center border-x border-border px-3 text-sm font-bold text-text-primary">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={onAddQuantity}
                            className="flex h-9 w-9 items-center justify-center text-text-secondary transition hover:bg-background-soft"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* DELIVERY */}

                        <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
                          <Truck size={15} />
                          Free Delivery
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DELIVERY INFO */}

                  <div className="mt-5 flex gap-3 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                      <Truck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-text-primary">
                        Delivery in 3–5 days
                      </p>

                      <p className="mt-1 text-xs leading-5 text-text-muted">
                        Your order will be delivered to the selected address.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <LoadingProduct />
              )}

              {/* INVOICE */}

              <div className="mt-5 border-t border-border pt-5">
                <div className="flex gap-3">
                  <ShieldCheck
                    size={17}
                    className="mt-0.5 shrink-0 text-green-500"
                  />

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-text-primary">
                      GST Invoice Available
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-text-muted">
                      Your invoice will be available after successful delivery.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            </CheckoutSection>

            {/* =================================================
                MOBILE PAYMENT
            ================================================= */}

            <div className="lg:hidden">
              <PaymentSection
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
                paymentOptions={paymentOptions}
              />
            </div>
          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
            <div className="space-y-5">
              {/* PAYMENT */}

              <div className="hidden lg:block">
                <PaymentSection
                  selectedPayment={selectedPayment}
                  setSelectedPayment={setSelectedPayment}
                  paymentOptions={paymentOptions}
                />
              </div>

              {/* PRICE DETAILS */}

              <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
                {/* HEADER */}

                <div className="border-b border-border bg-background-soft px-5 py-4">
                  <h2 className="text-base font-bold text-text-primary">
                    Price Details
                  </h2>

                  <p className="mt-1 text-xs text-text-muted">
                    {quantity} {quantity === 1 ? "item" : "items"} in your order
                  </p>
                </div>

                {/* PRICE */}

                <div className="space-y-4 p-5">
                  <PriceRow
                    label={`Price (${quantity} ${
                      quantity === 1 ? "item" : "items"
                    })`}
                    value={`₹${productPrice.toFixed(2)}`}
                  />

                  <PriceRow
                    icon={<LocalShippingOutlinedIcon fontSize="small" />}
                    label="Delivery Charge"
                    value={
                      deliveryCharge === 0
                        ? "FREE"
                        : `₹${deliveryCharge.toFixed(2)}`
                    }
                    valueClass={
                      deliveryCharge === 0
                        ? "text-green-600"
                        : "text-text-primary"
                    }
                  />

                  <div className="border-t border-dashed border-border" />

                  <div className="flex items-center justify-between">
                    <p className="text-base font-bold text-text-primary">
                      Total Amount
                    </p>

                    <p className="text-xl font-bold text-primary">
                      ₹{totalAmount.toFixed(2)}
                    </p>
                  </div>

                  {/* SAVINGS */}

                  <div className="flex items-center gap-2 rounded-lg bg-green-500/5 px-3 py-2.5">
                    <Check size={15} className="text-green-600" />

                    <p className="text-xs font-semibold text-green-600">
                      Safe and secure checkout
                    </p>
                  </div>

                  {/* SECURITY */}

                  <div className="flex gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-green-500"
                    />

                    <p className="text-[11px] leading-5 text-text-muted">
                      Your payment information is protected with
                      industry-standard security and encryption.
                    </p>
                  </div>

                  {/* PLACE ORDER */}

                  <button
                    type="button"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark active:scale-[0.99]"
                  >
                    <span>PLACE ORDER</span>

                    <ChevronRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>

                  <p className="text-center text-[10px] leading-4 text-text-muted">
                    By placing this order, you agree to our terms and
                    conditions.
                  </p>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

/* =====================================================
   CHECKOUT SECTION
===================================================== */

const CheckoutSection = ({
  number,
  title,
  subtitle,
  completed = false,
  action,
  children,
}) => {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      {/* HEADER */}

      <div className="flex items-center justify-between gap-4 border-b border-border bg-background-soft px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
              completed ? "bg-green-500 text-white" : "bg-primary text-white"
            }`}
          >
            {completed ? <Check size={15} /> : number}
          </span>

          <div className="min-w-0">
            <h2 className="truncate text-sm font-bold tracking-wide text-text-primary">
              {title}
            </h2>

            <p className="mt-0.5 truncate text-xs text-text-muted">
              {subtitle}
            </p>
          </div>

          {completed && (
            <CircleCheck
              size={18}
              className="hidden shrink-0 text-green-500 sm:block"
            />
          )}
        </div>

        {action}
      </div>

      {/* CONTENT */}

      <div className="p-5">{children}</div>
    </section>
  );
};

/* =====================================================
   PAYMENT SECTION
===================================================== */

const PaymentSection = ({
  selectedPayment,
  setSelectedPayment,
  paymentOptions,
}) => {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      {/* HEADER */}

      <div className="border-b border-border bg-background-soft px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
            4
          </span>

          <div>
            <h2 className="text-sm font-bold tracking-wide text-text-primary">
              PAYMENT OPTIONS
            </h2>

            <p className="mt-0.5 text-xs text-text-muted">
              Choose your preferred payment method
            </p>
          </div>
        </div>
      </div>

      {/* OPTIONS */}

      <div className="space-y-2 p-3">
        {paymentOptions.map((payment) => {
          const Icon = payment.icon;
          const isSelected = selectedPayment === payment.id;

          return (
            <button
              key={payment.id}
              type="button"
              onClick={() => setSelectedPayment(payment.id)}
              className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition ${
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-transparent hover:bg-background-soft"
              }`}
            >
              {/* ICON */}

              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  isSelected
                    ? "bg-primary/10 text-primary"
                    : "bg-background-soft text-text-secondary"
                }`}
              >
                <Icon size={18} />
              </div>

              {/* TEXT */}

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-text-primary">
                  {payment.title}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-text-muted">
                  {payment.description}
                </p>
              </div>

              {/* RADIO */}

              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  isSelected ? "border-primary" : "border-border"
                }`}
              >
                {isSelected && (
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

/* =====================================================
   INFO ITEM
===================================================== */

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="rounded-xl border border-border bg-background-soft p-4">
      <div className="flex items-center gap-2 text-text-muted">
        {icon}

        <span className="text-[11px] font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold text-text-primary">{value}</p>
    </div>
  );
};

/* =====================================================
   PRICE ROW
===================================================== */

const PriceRow = ({ icon, label, value, valueClass = "text-text-primary" }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-2">
        {icon && <span className="shrink-0 text-text-muted">{icon}</span>}

        <p className="truncate text-sm text-text-secondary">{label}</p>
      </div>

      <p className={`shrink-0 text-sm font-semibold ${valueClass}`}>{value}</p>
    </div>
  );
};

/* =====================================================
   PROGRESS
===================================================== */

const CheckoutProgress = ({
  number,
  label,
  active = false,
  completed = false,
}) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${
          completed
            ? "bg-green-500 text-white"
            : active
              ? "bg-primary text-white"
              : "bg-background text-text-muted ring-1 ring-border"
        }`}
      >
        {completed ? <Check size={13} /> : number}
      </span>

      <span
        className={`text-xs font-semibold ${
          active || completed ? "text-text-primary" : "text-text-muted"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

const ProgressLine = ({ completed = false }) => {
  return (
    <div
      className={`mx-4 h-px flex-1 ${completed ? "bg-green-500" : "bg-border"}`}
    />
  );
};

/* =====================================================
   LOADING PRODUCT
===================================================== */

const LoadingProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" />

      <p className="mt-4 text-sm font-semibold text-text-primary">
        Loading product...
      </p>

      <p className="mt-1 text-xs text-text-muted">
        Please wait while we fetch your product.
      </p>
    </div>
  );
};

export default PlaceOrderPage;
