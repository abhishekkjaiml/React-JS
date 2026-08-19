import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {

  const navigate = useNavigate();

  const features = [
    {
      icon: ShoppingBagOutlinedIcon,
      title: "Quality Products",
      description:
        "We provide quality products across different categories at affordable prices.",
    },
    {
      icon: SecurityOutlinedIcon,
      title: "Secure Shopping",
      description:
        "Your security and privacy are important to us. Shop with confidence.",
    },
    {
      icon: LocalShippingOutlinedIcon,
      title: "Fast Delivery",
      description:
        "Get your favorite products delivered quickly and safely to your doorstep.",
    },
    {
      icon: SupportAgentOutlinedIcon,
      title: "Customer Support",
      description:
        "Our support team is always focused on providing a better shopping experience.",
    },
  ];

  const values = [
    {
      icon: FavoriteBorderOutlinedIcon,
      title: "Customer First",
      description:
        "Our customers are at the heart of everything we do.",
    },
    {
      icon: VerifiedOutlinedIcon,
      title: "Trust & Quality",
      description:
        "We believe in providing reliable products and a trustworthy shopping experience.",
    },
    {
      icon: AssignmentReturnOutlinedIcon,
      title: "Easy Returns",
      description:
        "We make the return process simple and convenient for our customers.",
    },
    {
      icon: AccountBalanceWalletOutlinedIcon,
      title: "Secure Payment",
      description:
        "Enjoy a safe and secure payment experience every time you shop.",
    },
  ];

  const stats = [
    {
      number: "10K+",
      title: "Happy Customers",
    },
    {
      number: "5K+",
      title: "Products",
    },
    {
      number: "50+",
      title: "Brands",
    },
    {
      number: "99%",
      title: "Satisfaction",
    },
  ];

  return (
    <main className="min-h-screen bg-background">

      {/* ====================== HERO SECTION ====================== */}

      <section className="px-4 py-8 sm:px-6 lg:px-10">

        <div className="relative overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary-light via-background-section to-background px-6 py-16 shadow-md sm:px-10 lg:px-14">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 text-center">

            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary">
              About ShopBazaar
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">

              Making Shopping

              <br />

              <span className="text-info">
                Simple & Enjoyable
              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
              ShopBazaar is your everyday shopping destination where quality
              products, great prices and a simple shopping experience come
              together.
            </p>

          </div>

        </div>

      </section>


      {/* ====================== OUR STORY ====================== */}

      <section className="px-4 py-10 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

          <div>

            <span className="text-sm font-semibold text-primary">
              OUR STORY
            </span>

            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
              Shopping Made
              <span className="text-primary">
                {" "}Better
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-text-muted">
              ShopBazaar was created with a simple idea — shopping online
              should be easy, convenient and enjoyable.
            </p>

            <p className="mt-4 text-base leading-7 text-text-muted">
              From electronics and fashion to home & living, beauty, sports
              and accessories, we bring everything together in one convenient
              place.
            </p>

            <p className="mt-4 text-base leading-7 text-text-muted">
              Our goal is to help customers discover great products while
              providing a smooth, secure and reliable shopping experience.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-6 flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md"
            >
              Start Shopping
            </button>

          </div>


          {/* ====================== STATS ====================== */}

          <div className="rounded-2xl border border-border bg-background-section p-6 shadow-sm sm:p-8">

            <div className="grid grid-cols-2 gap-5">

              {stats.map((stat) => (

                <div
                  key={stat.title}
                  className="rounded-xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <h3 className="text-3xl font-bold text-primary">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-text-muted">
                    {stat.title}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ====================== WHY SHOP WITH US ====================== */}

      <section className="px-4 py-10 sm:px-6 lg:px-10">

        <div className="text-center">

          <span className="text-sm font-semibold text-primary">
            WHY SHOPBAZAAR
          </span>

          <h2 className="mt-3 text-3xl font-bold text-text-primary">
            Why Shop With Us?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-muted">
            Everything you need for a simple, secure and enjoyable shopping
            experience.
          </p>

        </div>


        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Icon fontSize="small" />
                </div>

                <h3 className="mt-4 font-bold text-text-primary">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </section>


      {/* ====================== OUR VALUES ====================== */}

      <section className="px-4 py-10 sm:px-6 lg:px-10">

        <div className="rounded-2xl border border-border bg-background-section p-6 sm:p-10">

          <div className="text-center">

            <span className="text-sm font-semibold text-primary">
              OUR VALUES
            </span>

            <h2 className="mt-3 text-3xl font-bold text-text-primary">
              What We Believe In
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-muted">
              Our values guide us in creating a better shopping experience.
            </p>

          </div>


          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

            {values.map((value) => {

              const Icon = value.icon;

              return (

                <div
                  key={value.title}
                  className="flex gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Icon fontSize="small" />
                  </div>

                  <div>

                    <h3 className="font-bold text-text-primary">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {value.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* ====================== CTA ====================== */}

      <section className="px-4 py-10 sm:px-6 lg:px-10">

        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary to-secondary px-6 py-12 text-center sm:px-10">

          <div className="relative z-10">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Start Shopping?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Discover amazing products, great deals and your favorite brands
              at ShopBazaar.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-6 rounded-md bg-white px-6 py-3 font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-light"
            >
              Explore Shop
            </button>

          </div>

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-28 right-32 h-72 w-72 rounded-full bg-white/10" />

        </div>

      </section>

    </main>
  );
};

export default AboutUsPage;