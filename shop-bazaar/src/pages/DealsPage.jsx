import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import {
  Clock3,
  Flame,
  Percent,
  ShoppingBag,
  ArrowRight,
  Zap,
  Gift,
  Tag,
} from "lucide-react";

const DealsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 49.99,
      images:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Smart Watch Series 8",
      price: 79.99,
      images:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Premium Running Shoes",
      price: 59.99,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Classic Leather Backpack",
      price: 44.99,
      images:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Modern Sunglasses",
      price: 29.99,
      images:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Minimalist Analog Watch",
      price: 69.99,
      images:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      title: "Casual Cotton T-Shirt",
      price: 24.99,
      images:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      title: "Premium Sports Shoes",
      price: 64.99,
      images:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  const categories = [
    {
      id: 1,
      title: "Up to 50% OFF",
      subtitle: "Limited time offers",
      icon: Percent,
    },
    {
      id: 2,
      title: "Flash Deals",
      subtitle: "Grab before they're gone",
      icon: Zap,
    },
    {
      id: 3,
      title: "Under $50",
      subtitle: "Best budget picks",
      icon: Tag,
    },
    {
      id: 4,
      title: "Gift Deals",
      subtitle: "Special offers for you",
      icon: Gift,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="px-4 pt-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-primary shadow-sm">
          <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-16">
            {/* Decorative circles */}

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 right-24 h-56 w-56 rounded-full bg-white/5" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT */}

              <div className="max-w-2xl text-white">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  <Flame size={14} />

                  <span className="text-xs font-semibold">
                    HOT DEALS ARE LIVE
                  </span>
                </div>

                <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Deals you don't
                  <br />
                  want to miss.
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Discover amazing discounts on your favorite products.
                  Limited-time offers, exclusive prices and unbeatable savings.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary transition hover:bg-white/90">
                    Shop Deals
                    <ArrowRight size={17} />
                  </button>

                  <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3">
                    <Clock3 size={17} />

                    <span className="text-sm font-semibold">
                      Ending Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT DEAL BADGE */}

              <div className="flex shrink-0 justify-center lg:pr-10">
                <div className="relative flex h-40 w-40 rotate-3 items-center justify-center rounded-full border-2 border-dashed border-white/50 bg-white/10 sm:h-48 sm:w-48">
                  <div className="text-center text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                      Save up to
                    </p>

                    <p className="mt-1 text-5xl font-black sm:text-6xl">
                      50%
                    </p>

                    <p className="mt-1 text-sm font-bold uppercase tracking-widest">
                      OFF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEAL STATS
      ===================================================== */}

      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Percent size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">50%</p>
                <p className="text-xs text-text-muted">Max Discount</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Flame size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">25+</p>
                <p className="text-xs text-text-muted">Hot Deals</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShoppingBag size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">100+</p>
                <p className="text-xs text-text-muted">Products</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">Today</p>
                <p className="text-xs text-text-muted">Only Offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEAL CATEGORIES
      ===================================================== */}

      <section className="px-4 py-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
              Explore Deals
            </h2>

            <p className="mt-1 text-sm text-text-muted">
              Find the perfect offer for you
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.id}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background-soft p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-text-primary group-hover:text-primary">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-xs text-text-muted">
                      {category.subtitle}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-text-light transition group-hover:translate-x-1 group-hover:text-primary"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FLASH DEAL BANNER
      ===================================================== */}

      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-background-soft">
          <div className="flex flex-col gap-5 p-5 sm:p-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <Zap size={22} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-text-primary">
                    Flash Sale
                  </h2>

                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase text-primary">
                    Live
                  </span>
                </div>

                <p className="mt-1 text-xs text-text-muted">
                  Extra discounts available for a limited time
                </p>
              </div>
            </div>

            {/* COUNTDOWN */}

            <div className="flex items-center gap-2">
              <div className="rounded-lg border border-border bg-background px-3 py-2 text-center">
                <p className="text-lg font-bold text-text-primary">08</p>
                <p className="text-[9px] uppercase text-text-muted">Hours</p>
              </div>

              <span className="font-bold text-text-muted">:</span>

              <div className="rounded-lg border border-border bg-background px-3 py-2 text-center">
                <p className="text-lg font-bold text-text-primary">42</p>
                <p className="text-[9px] uppercase text-text-muted">Min</p>
              </div>

              <span className="font-bold text-text-muted">:</span>

              <div className="rounded-lg border border-border bg-background px-3 py-2 text-center">
                <p className="text-lg font-bold text-text-primary">19</p>
                <p className="text-[9px] uppercase text-text-muted">Sec</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="px-4 pb-10 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Flame size={20} className="text-primary" />

                <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                  Hot Deals
                </h2>
              </div>

              <p className="mt-1 text-sm text-text-muted">
                Grab these products before the offers disappear
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[45vh] w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Tag size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  No Deals Available
                </h3>

                <p className="mt-2 text-sm text-text-muted">
                  Check back soon for exciting deals and offers.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          BOTTOM OFFER
      ===================================================== */}

      <section className="px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-background-soft p-6 text-center sm:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Gift size={22} />
          </div>

          <h2 className="mt-4 text-xl font-bold text-text-primary">
            More Amazing Deals Coming Soon
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-muted">
            Keep checking this page for new discounts, flash sales and
            exclusive offers on your favorite products.
          </p>

          <button className="mt-5 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark">
            Continue Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;