import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import {
  Sparkles,
  ArrowRight,
  Clock3,
  Package,
  ShoppingBag,
} from "lucide-react";

const DealsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 101,
      title: "Premium Wireless Headphones",
      price: 89.99,
      images:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 102,
      title: "Smart Fitness Watch",
      price: 74.99,
      images:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 103,
      title: "Classic White Sneakers",
      price: 64.99,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 104,
      title: "Modern Travel Backpack",
      price: 54.99,
      images:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 105,
      title: "Premium Black Sunglasses",
      price: 34.99,
      images:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 106,
      title: "Minimal Classic Watch",
      price: 94.99,
      images:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 107,
      title: "Oversized Cotton T-Shirt",
      price: 27.99,
      images:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 108,
      title: "Premium Casual Sneakers",
      price: 69.99,
      images:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-background-soft">
          <div className="relative px-5 py-9 sm:px-8 sm:py-12 lg:px-12">
            {/* Decorative Elements */}

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5" />

            <div className="absolute -bottom-20 right-40 h-44 w-44 rounded-full bg-primary/5" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* LEFT */}

              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  <Sparkles size={14} />
                  NEW COLLECTION
                </div>

                <h1 className="mt-4 text-3xl font-black text-text-primary sm:text-4xl lg:text-5xl">
                  Discover Our
                  <span className="text-primary"> New Arrivals</span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-text-muted sm:text-base">
                  Be the first to explore our latest products. Fresh styles,
                  new technology and exciting products are waiting for you.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-dark">
                    Explore New Arrivals
                    <ArrowRight size={17} />
                  </button>

                  <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-text-secondary">
                    <Clock3 size={16} className="text-primary" />
                    Updated Weekly
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="flex shrink-0 justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-primary/10 sm:h-44 sm:w-44">
                  <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-background shadow-md sm:h-36 sm:w-36">
                    <Sparkles
                      size={27}
                      className="text-primary"
                    />

                    <p className="mt-2 text-xl font-black text-text-primary">
                      NEW
                    </p>

                    <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                      Arrivals
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
                <Package size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">50+</p>
                <p className="text-xs text-text-muted">New Products</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">Fresh</p>
                <p className="text-xs text-text-muted">Collections</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShoppingBag size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">100%</p>
                <p className="text-xs text-text-muted">Original</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock3 size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">Weekly</p>
                <p className="text-xs text-text-muted">New Arrivals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS SECTION
      ===================================================== */}

      <section className="px-4 pb-10 pt-3 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={20} className="text-primary" />

                <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                  Just Arrived
                </h2>
              </div>

              <p className="mt-1 text-sm text-text-muted">
                Check out the latest products added to our store
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
                  <Package size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  New Arrivals Coming Soon
                </h3>

                <p className="mt-2 text-sm text-text-muted">
                  We're preparing something exciting for you.
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
        <div className="mx-auto max-w-7xl rounded-2xl bg-primary px-6 py-8 text-center text-white sm:px-10 sm:py-10">
          <Sparkles size={28} className="mx-auto" />

          <h2 className="mt-3 text-2xl font-bold">
            Don't Miss What's New
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">
            New products are added regularly. Keep exploring and discover
            something you'll love.
          </p>

          <button className="mt-5 rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-white/90">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;