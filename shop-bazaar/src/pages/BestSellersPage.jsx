import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import {
  Trophy,
  Flame,
  Star,
  TrendingUp,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const DealsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 201,
      title: "Apple AirPods Pro Wireless Earbuds",
      price: 129.99,
      images:
        "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 202,
      title: "Premium Smart Watch",
      price: 89.99,
      images:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 203,
      title: "Nike Air Running Shoes",
      price: 79.99,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 204,
      title: "Premium Leather Backpack",
      price: 59.99,
      images:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 205,
      title: "Wireless Over Ear Headphones",
      price: 69.99,
      images:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 206,
      title: "Classic Analog Wrist Watch",
      price: 74.99,
      images:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 207,
      title: "Premium Cotton T-Shirt",
      price: 29.99,
      images:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 208,
      title: "Modern Fashion Sunglasses",
      price: 34.99,
      images:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-primary">
          <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            {/* Decorative Circles */}

            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10" />

            <div className="absolute -bottom-28 right-32 h-64 w-64 rounded-full bg-white/5" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* LEFT CONTENT */}

              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  <Trophy size={14} />

                  <span className="text-xs font-bold uppercase tracking-wide">
                    Customer Favorites
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Our Best
                  <br />
                  <span className="text-white/80">Sellers</span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Discover the products our customers love the most. These
                  popular picks are trusted, loved and bought again and again.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary transition hover:bg-white/90">
                    Shop Best Sellers
                    <ArrowRight size={17} />
                  </button>

                  <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3">
                    <Star size={16} />

                    <span className="text-sm font-semibold">
                      Top Rated Products
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT TROPHY */}

              <div className="flex shrink-0 justify-center md:pr-8">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 sm:h-48 sm:w-48">
                  <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-primary shadow-xl sm:h-36 sm:w-36">
                    <Trophy size={30} />

                    <p className="mt-2 text-xl font-black">#1</p>

                    <p className="text-[9px] font-bold uppercase tracking-widest">
                      Best Sellers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Trophy size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">Top 10</p>
                <p className="text-xs text-text-muted">Popular Picks</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Star size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">4.8+</p>
                <p className="text-xs text-text-muted">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TrendingUp size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">10K+</p>
                <p className="text-xs text-text-muted">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShoppingBag size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">Loved</p>
                <p className="text-xs text-text-muted">By Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR CATEGORIES
      ===================================================== */}

      <section className="px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
              Why These Products?
            </h2>

            <p className="mt-1 text-sm text-text-muted">
              The products customers keep coming back for
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-background-soft p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Star size={21} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-text-primary">
                Highly Rated
              </h3>

              <p className="mt-1 text-xs leading-5 text-text-muted">
                Products loved and highly rated by our customers.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background-soft p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Flame size={21} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-text-primary">
                Trending Now
              </h3>

              <p className="mt-1 text-xs leading-5 text-text-muted">
                Some of the most popular products people are buying right now.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background-soft p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TrendingUp size={21} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-text-primary">
                Top Choices
              </h3>

              <p className="mt-1 text-xs leading-5 text-text-muted">
                Carefully selected products based on customer popularity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="px-4 pb-10 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Flame size={20} className="text-primary" />

                <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                  Best Sellers
                </h2>
              </div>

              <p className="mt-1 text-sm text-text-muted">
                Our most popular products, loved by thousands of customers
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
              View All
              <ArrowRight size={16} />
            </button>
          </div>

          {/* PRODUCT GRID */}

          {products?.length > 0 ? (
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[45vh] w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Trophy size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  Best Sellers Coming Soon
                </h3>

                <p className="mt-2 text-sm text-text-muted">
                  We're preparing our most popular products for you.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-background-soft px-6 py-8 text-center sm:px-10 sm:py-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Trophy size={23} />
          </div>

          <h2 className="mt-4 text-2xl font-bold text-text-primary">
            Loved by Our Customers
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-muted">
            These aren't just popular products — they're customer favorites.
            Find your next favorite today.
          </p>

          <button className="mt-5 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark">
            Explore All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;