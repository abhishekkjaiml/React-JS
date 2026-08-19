import { useEffect, useState } from "react";
import getAllCategories from "../api/getAllCategories";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

import { useShopFilter } from "../context/shop-filter-context";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  const { selectedCategory, onCategoryClick, clearFilters } = useShopFilter();

  const [openSection, setOpenSection] = useState({
    price: true,
    category: true,
    brand: true,
    rating: true,
    availability: true,
  });

  useEffect(() => {
    (async () => {
      const data = await getAllCategories();

      setCategories(data);
    })();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-[19vw] min-w-60 shrink-0 border-r border-border bg-background">
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-light text-primary">
            <TuneOutlinedIcon fontSize="small" />
          </div>

          <h2 className="text-base font-bold text-text-primary">Filter By</h2>
        </div>

        <button
          onClick={clearFilters}
          className="flex items-center gap-1 text-xs font-semibold text-primary transition hover:text-primary-dark"
        >
          <RestartAltOutlinedIcon fontSize="inherit" />
          Clear
        </button>
      </div>

      {/* ================= FILTER CONTENT ================= */}

      <div className="max-h-[calc(100vh-180px)] overflow-y-auto px-5">
        {/* ================= PRICE ================= */}

        <div className="border-b border-border py-5">
          <button
            onClick={() => toggleSection("price")}
            className="flex w-full items-center justify-between"
          >
            <span className="text-sm font-semibold text-text-primary">
              Price
            </span>

            {openSection.price ? (
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
            )}
          </button>

          {openSection.price && (
            <div className="mt-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 flex-1 items-center rounded-md border border-border px-2">
                  <span className="text-xs text-text-muted">$</span>

                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full bg-transparent px-1 text-xs outline-none"
                  />
                </div>

                <span className="text-text-light">—</span>

                <div className="flex h-9 flex-1 items-center rounded-md border border-border px-2">
                  <span className="text-xs text-text-muted">$</span>

                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full bg-transparent px-1 text-xs outline-none"
                  />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="1000"
                className="mt-5 w-full accent-primary"
              />

              <div className="mt-2 flex justify-between text-xs text-text-muted">
                <span>$0</span>

                <span>$1000+</span>
              </div>
            </div>
          )}
        </div>

        {/* ================= CATEGORY ================= */}

        <div className="border-b border-border py-5">
          <button
            onClick={() => toggleSection("category")}
            className="flex w-full items-center justify-between"
          >
            <span className="text-sm font-semibold text-text-primary">
              Category
            </span>

            {openSection.category ? (
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
            )}
          </button>

          {openSection.category && (
            <div className="mt-4 flex flex-col gap-2">
              {/* ================= ALL ================= */}

              <button
                onClick={() => onCategoryClick("All")}
                className={`
                    w-full rounded-md px-3 py-2 text-left text-sm font-semibold
                    transition duration-200
                    ${
                      selectedCategory === "All"
                        ? "bg-primary text-white"
                        : "text-text-secondary hover:bg-primary-light hover:text-primary"
                    }
                  `}
              >
                All
              </button>

              {/* ================= API CATEGORIES ================= */}

              {categories?.length > 0 &&
                categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onCategoryClick(category.name)}
                    className={`
                        w-full rounded-md px-3 py-2 text-left text-sm font-semibold
                        transition duration-200
                        ${
                          selectedCategory === category.name
                            ? "bg-primary text-white"
                            : "text-text-secondary hover:bg-primary-light hover:text-primary"
                        }
                      `}
                  >
                    {category.name}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* ================= BRAND ================= */}

        <div className="border-b border-border py-5">
          <button
            onClick={() => toggleSection("brand")}
            className="flex w-full items-center justify-between"
          >
            <span className="text-sm font-semibold text-text-primary">
              Brand
            </span>

            {openSection.brand ? (
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
            )}
          </button>

          {openSection.brand && (
            <div className="mt-4">
              <p className="text-sm text-text-muted">
                Brand filter coming soon...
              </p>
            </div>
          )}
        </div>

        {/* ================= RATING ================= */}

        <div className="border-b border-border py-5">
          <button
            onClick={() => toggleSection("rating")}
            className="flex w-full items-center justify-between"
          >
            <span className="text-sm font-semibold text-text-primary">
              Customer Rating
            </span>

            {openSection.rating ? (
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
            )}
          </button>

          {openSection.rating && (
            <div className="mt-4 flex flex-col gap-3">
              {["4★ & above", "3★ & above", "2★ & above", "1★ & above"].map(
                (rating) => (
                  <label
                    key={rating}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type="radio"
                      name="rating"
                      className="h-4 w-4 accent-primary"
                    />

                    <span className="text-sm text-text-secondary">
                      {rating}
                    </span>
                  </label>
                ),
              )}
            </div>
          )}
        </div>

        {/* ================= AVAILABILITY ================= */}

        <div className="py-5">
          <button
            onClick={() => toggleSection("availability")}
            className="flex w-full items-center justify-between"
          >
            <span className="text-sm font-semibold text-text-primary">
              Availability
            </span>

            {openSection.availability ? (
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
            )}
          </button>

          {openSection.availability && (
            <label className="mt-4 flex cursor-pointer items-center gap-3">
              <input type="checkbox" className="h-4 w-4 accent-primary" />

              <span className="text-sm text-text-secondary">In Stock Only</span>
            </label>
          )}
        </div>
      </div>

      {/* ================= APPLY ================= */}

      <div className="border-t border-border bg-background px-5 py-4">
        <button className="h-10 w-full rounded-md bg-primary text-sm font-semibold text-white transition hover:bg-primary-dark">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
