import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import electronics from "../assets/shopByCategories/electronics.png";
import beauty from "../assets/shopByCategories/beauty.png";
import accessories from "../assets/shopByCategories/accessories.png";
import fashions from "../assets/shopByCategories/fashions.png";
import home_living from "../assets/shopByCategories/home_living.png";
import sports from "../assets/shopByCategories/sports.png";

import bg1 from "../assets/bg1.png";

import {useNavigate} from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate()
  const categories = [
    {
      name: "Electronics",
      image: electronics,
    },
    {
      name: "Fashions",
      image: fashions,
    },
    {
      name: "Home & Living",
      image: home_living,
    },
    {
      name: "Beauty",
      image: beauty,
    },
    {
      name: "Sports",
      image: sports,
    },
    {
      name: "Accessories",
      image: accessories,
    },
  ];

  const features = [
    {
      icon: LocalShippingOutlinedIcon,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: AssignmentReturnOutlinedIcon,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: AccountBalanceWalletOutlinedIcon,
      title: "Secure Payment",
      description: "100% secure payment",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$49.99",
      oldPrice: "$69.99",
      image: electronics,
      discount: "29% OFF",
    },
    {
      id: 2,
      title: "Premium Fashion",
      price: "$39.99",
      oldPrice: "$59.99",
      image: fashions,
      discount: "33% OFF",
    },
    {
      id: 3,
      title: "Modern Home Decor",
      price: "$29.99",
      oldPrice: "$44.99",
      image: home_living,
      discount: "33% OFF",
    },
    {
      id: 4,
      title: "Beauty Essentials",
      price: "$24.99",
      oldPrice: "$34.99",
      image: beauty,
      discount: "28% OFF",
    },
  ];

  return (
    <main className="min-h-screen bg-background">

      {/* ====================== HERO SECTION ====================== */}

      <section className="px-4 py-5 sm:px-6 lg:px-10">

        <div className="relative min-h-140 overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary-light via-background-section to-background px-6 py-10 shadow-md sm:px-10 lg:px-14">

          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 flex min-h-120 items-center">

            {/* Hero Content */}

            <div className="w-full lg:w-[52%]">

              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary">
                Best Quality · Best Price
              </span>

              <h1 className="mt-6 max-w-155 text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                Amazing Products,
                <br />
                Amazing Price
                <br />
                <span className="text-info">
                  Everyday
                </span>
              </h1>

              <p className="mt-5 max-w-130 text-base leading-7 text-text-muted sm:text-lg">
                Shop the latest trends and best deals on electronics,
                fashion, home & living, beauty, sports and more.
              </p>

              {/* Buttons */}

              <div className="mt-7 flex flex-wrap gap-4">

                <button className="flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md">
                  Shop Now
                </button>

                <button className="flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 font-semibold text-text-primary shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary-light hover:text-primary">
                  Explore Deals
                  <ArrowForwardOutlinedIcon
                    className="text-primary"
                    fontSize="small"
                  />
                </button>

              </div>

              {/* Features */}

              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">

                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                        <Icon fontSize="small" />
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-text-primary">
                          {feature.title}
                        </h4>

                        <p className="mt-0.5 text-xs text-text-muted">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>

            </div>

            {/* Hero Image */}

            <div className="absolute -right-10 top-1/2 hidden w-[48%] -translate-y-1/2 lg:block xl:-right-5">

              <img
                src={bg1}
                alt="ShopBazaar products"
                className="w-full rounded-lg object-contain drop-shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

        {/* ================ SHOP BY CATEGORY ================ */}

      <section className="px-4 py-8 sm:px-6 lg:px-10">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Shop by Categories
            </h2>

            <p className="mt-1 text-sm text-text-muted">
              Explore products from your favorite categories
            </p>
          </div>

          <button className="hidden items-center gap-1 font-semibold text-primary transition hover:text-primary-dark sm:flex">
            View All
            <ArrowForwardOutlinedIcon fontSize="small" />
          </button>

        </div>


        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">

          {categories.map((category) => (

            <button
              key={category.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary-light hover:shadow-md"
            >

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background-soft p-2 transition-transform duration-300 group-hover:scale-105">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full rounded-full object-cover"
                />

              </div>

              <p className="mt-3 text-sm font-semibold text-text-primary group-hover:text-primary">
                {category.name}
              </p>

            </button>

          ))}

        </div>

      </section>

        {/* =================  FEATURED PRODUCTS ================= */}

      <section className="px-4 py-8 sm:px-6 lg:px-10">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Featured Products
            </h2>

            <p className="mt-1 text-sm text-text-muted">
              Handpicked products just for you
            </p>
          </div>

          <button className="hidden items-center gap-1 font-semibold text-primary transition hover:text-primary-dark sm:flex">
            View All
            <ArrowForwardOutlinedIcon fontSize="small" />
          </button>

        </div>


        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Product Image */}

              <div className="relative flex h-56 items-center justify-center bg-background-soft p-5">

                <span className="absolute left-3 top-3 rounded-md bg-sale px-2.5 py-1 text-xs font-bold text-white">
                  {product.discount}
                </span>

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background text-text-secondary shadow-sm transition hover:bg-danger-light hover:text-danger">
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </button>

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain transition-transform duration-300 rounded"
                />

              </div>


              {/* Product Info */}

              <div className="p-4">

                <h3 className="truncate text-[15px] font-semibold text-text-primary">
                  {product.title}
                </h3>

                <div className="mt-2 flex items-center gap-1">

                  <span className="text-rating">
                    ★
                  </span>

                  <span className="text-xs font-medium text-text-secondary">
                    4.5
                  </span>

                  <span className="text-xs text-text-light">
                    (120)
                  </span>

                </div>


                <div className="mt-3 flex items-center gap-2">

                  <span className="text-lg font-bold text-text-primary">
                    {product.price}
                  </span>

                  <span className="text-sm text-text-light line-through">
                    {product.oldPrice}
                  </span>

                </div>


                <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary font-semibold text-white transition hover:bg-primary-dark">

                  <ShoppingCartOutlinedIcon fontSize="small" />

                  Add to Cart

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          DEAL BANNER
      ===================================================== */}

      <section className="px-4 py-8 sm:px-6 lg:px-10">

        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary to-secondary px-6 py-10 sm:px-10">

          <div className="relative z-10 max-w-xl">

            <span className="text-sm font-semibold text-white/80">
              LIMITED TIME OFFER
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Get Up To 50% Off
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Discover amazing deals across selected products.
              Grab your favorites before the offer ends.
            </p>

            <button onClick={() => navigate('/shop')} className="mt-6 rounded-md bg-white px-6 py-3 font-semibold text-primary transition hover:bg-primary-light">
              Shop Deals
            </button>

          </div>

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-28 right-32 h-72 w-72 rounded-full bg-white/10" />

        </div>

      </section>


      {/* =====================================================
          WHY SHOP WITH US
      ===================================================== */}

      <section className="px-4 py-10 sm:px-6 lg:px-10">

        <div className="rounded-2xl border border-border bg-background-section p-6 sm:p-10">

          <div className="text-center">

            <h2 className="text-2xl font-bold text-text-primary">
              Why Shop With ShopBazaar?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-text-muted">
              Everything you need for a simple, secure and enjoyable
              shopping experience.
            </p>

          </div>


          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: LocalShippingOutlinedIcon,
                title: "Fast Delivery",
                text: "Quick and reliable delivery to your doorstep.",
              },
              {
                icon: AccountBalanceWalletOutlinedIcon,
                title: "Secure Payment",
                text: "Your payments are protected with secure checkout.",
              },
              {
                icon: AssignmentReturnOutlinedIcon,
                title: "Easy Returns",
                text: "Simple 30-day return policy for eligible products.",
              },
              {
                icon: FavoriteBorderOutlinedIcon,
                title: "Trusted Shopping",
                text: "Quality products and customer-focused service.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Icon fontSize="small" />
                  </div>

                  <h3 className="mt-4 font-bold text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
};

export default HomePage;