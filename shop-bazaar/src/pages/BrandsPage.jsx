import React, { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Crown,
  Gem,
  Globe,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
} from "lucide-react";

const DealsPage = () => {
  const [brands, setBrands] = useState([
    {
      id: 1,
      name: "Apple",
      category: "Technology",
      description: "Premium devices and innovative technology.",
      logo: "A",
      products: "120+ Products",
    },
    {
      id: 2,
      name: "Nike",
      category: "Fashion & Sports",
      description: "Performance, style and everyday essentials.",
      logo: "N",
      products: "180+ Products",
    },
    {
      id: 3,
      name: "Adidas",
      category: "Sports & Fashion",
      description: "Sportswear designed for every lifestyle.",
      logo: "A",
      products: "150+ Products",
    },
    {
      id: 4,
      name: "Samsung",
      category: "Technology",
      description: "Smart technology for a connected life.",
      logo: "S",
      products: "200+ Products",
    },
    {
      id: 5,
      name: "Sony",
      category: "Electronics",
      description: "Entertainment and technology redefined.",
      logo: "S",
      products: "95+ Products",
    },
    {
      id: 6,
      name: "Puma",
      category: "Sports & Fashion",
      description: "Forever faster with modern sports style.",
      logo: "P",
      products: "110+ Products",
    },
    {
      id: 7,
      name: "Zara",
      category: "Fashion",
      description: "Contemporary fashion for modern lifestyles.",
      logo: "Z",
      products: "140+ Products",
    },
    {
      id: 8,
      name: "Levi's",
      category: "Fashion",
      description: "Iconic denim and timeless everyday style.",
      logo: "L",
      products: "85+ Products",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-primary">
          <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            {/* Decorative Elements */}

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

            <div className="absolute -bottom-32 right-40 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              {/* LEFT CONTENT */}

              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  <Crown size={14} />

                  <span className="text-xs font-bold uppercase tracking-wide">
                    Trusted Brands
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Shop Your
                  <br />
                  <span className="text-white/80">Favorite Brands</span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Explore products from the brands you know and love. Discover
                  trusted names, premium quality and the latest collections all
                  in one place.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary transition hover:bg-white/90">
                    Explore Brands
                    <ArrowRight size={17} />
                  </button>

                  <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3">
                    <BadgeCheck size={17} />

                    <span className="text-sm font-semibold">
                      100% Authentic
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT ICON */}

              <div className="flex shrink-0 justify-center md:pr-8">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 sm:h-48 sm:w-48">
                  <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-primary shadow-xl sm:h-36 sm:w-36">
                    <Gem size={30} />

                    <p className="mt-2 text-xl font-black">100+</p>

                    <p className="text-[9px] font-bold uppercase tracking-widest">
                      Brands
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
                <Gem size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">100+</p>
                <p className="text-xs text-text-muted">Brands</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShoppingBag size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">2K+</p>
                <p className="text-xs text-text-muted">Products</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BadgeCheck size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">100%</p>
                <p className="text-xs text-text-muted">Authentic</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background-soft p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Globe size={19} />
              </div>

              <div>
                <p className="text-lg font-bold text-text-primary">50+</p>
                <p className="text-xs text-text-muted">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED BRANDS
      ===================================================== */}

      <section className="px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-primary" />

              <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                Featured Brands
              </h2>
            </div>

            <p className="mt-1 text-sm text-text-muted">
              Discover some of our most popular and trusted brands
            </p>
          </div>

          {/* FEATURED BRAND GRID */}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.slice(0, 4).map((brand) => (
              <button
                key={brand.id}
                className="group rounded-xl border border-border bg-background-soft p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-black text-white">
                    {brand.logo}
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-text-light transition group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold text-text-primary group-hover:text-primary">
                  {brand.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-primary">
                  {brand.category}
                </p>

                <p className="mt-2 text-xs leading-5 text-text-muted">
                  {brand.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
                  <ShoppingBag size={14} />
                  {brand.products}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL BRANDS
      ===================================================== */}

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Tag size={20} className="text-primary" />

                <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                  All Brands
                </h2>
              </div>

              <p className="mt-1 text-sm text-text-muted">
                Browse products by your favorite brand
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-border bg-background-soft px-3 py-2">
              <span className="text-xs font-semibold text-text-secondary">
                {brands.length} Popular Brands
              </span>
            </div>
          </div>

          {/* BRAND GRID */}

          {brands?.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {brands.map((brand, index) => (
                <button
                  key={brand.id}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background-soft p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                >
                  {/* LOGO */}

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-background text-xl font-black text-primary shadow-sm transition group-hover:bg-primary group-hover:text-white">
                    {brand.logo}
                  </div>

                  {/* INFO */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="truncate text-sm font-bold text-text-primary group-hover:text-primary">
                        {brand.name}
                      </h3>

                      <BadgeCheck
                        size={14}
                        className="shrink-0 text-primary"
                      />
                    </div>

                    <p className="mt-1 text-[11px] text-text-muted">
                      {brand.category}
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-text-secondary">
                      {brand.products}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="shrink-0 text-text-light transition group-hover:translate-x-1 group-hover:text-primary"
                  />
                </button>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */

            <div className="flex min-h-[45vh] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Gem size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  Brands Coming Soon
                </h3>

                <p className="mt-2 text-sm text-text-muted">
                  We're adding more amazing brands for you.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          WHY SHOP BRANDS
      ===================================================== */}

      <section className="px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border bg-background-soft p-6 sm:p-8">
            <div className="text-center">
              <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                Why Shop From Our Brands?
              </h2>

              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-muted">
                We bring together trusted brands so you can shop confidently
                and find everything you need in one place.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BadgeCheck size={22} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-text-primary">
                  Authentic Products
                </h3>

                <p className="mt-1 text-xs leading-5 text-text-muted">
                  Shop genuine products from trusted brands.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Star size={22} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-text-primary">
                  Trusted Quality
                </h3>

                <p className="mt-1 text-xs leading-5 text-text-muted">
                  Quality products chosen for our customers.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <TrendingUp size={22} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-text-primary">
                  Latest Collections
                </h3>

                <p className="mt-1 text-xs leading-5 text-text-muted">
                  Discover the newest products and collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-2xl bg-primary px-6 py-9 text-center text-white sm:px-10 sm:py-11">
          <Crown size={28} className="mx-auto" />

          <h2 className="mt-4 text-2xl font-bold">
            Find Your Favorite Brand
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">
            From technology and fashion to sports and lifestyle, discover
            everything from brands you trust.
          </p>

          <button className="mt-5 flex mx-auto items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-white/90">
            Start Shopping
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;