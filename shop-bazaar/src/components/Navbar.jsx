import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import {
  UserRound,
  LogIn,
  LogOut,
  UserCircle,
  Package,
  Heart,
  ShoppingBag,
} from "lucide-react";

import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useLogin } from "../context/login-context";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

const Navbar = () => {
  const navigate = useNavigate();

  const { token, loginDispatch } = useLogin();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);

  const onLoginClick = () => {
    if (!token.access_token) {
      setIsAccountDropDownOpen(false);
      navigate("/auth/login");
    } else {
      loginDispatch({
        type: "LOGOUT",
      });

      setIsAccountDropDownOpen(false);
      navigate("/auth/login");
    }
  };

  const onAccountClick = () => {
    setIsAccountDropDownOpen((previous) => !previous);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* =====================================================
            LOGO
        ===================================================== */}

        <div
          onClick={() => navigate("/")}
          className="flex shrink-0 cursor-pointer items-center"
        >
          <img
            src={logo}
            alt="ShopBazaar"
            className="w-28 object-contain sm:w-32 lg:w-36"
          />
        </div>

        {/* =====================================================
            SEARCH
        ===================================================== */}

        <div className="ml-30 hidden h-11 flex-1 md:flex md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <div className="relative w-full">
            <SearchOutlinedIcon
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              fontSize="small"
            />

            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="h-full  w-[85%] rounded-lg border border-border bg-background-soft pl-11 pr-14 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-light focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10"
            />

            <button
              type="button"
              className="absolute right-26 top-1/2 flex h-9 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-primary text-white transition-all duration-200 hover:bg-primary-dark active:scale-95"
            >
              <SearchOutlinedIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* =====================================================
            RIGHT ACTIONS
        ===================================================== */}

        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
          {/* =================================================
              MOBILE SEARCH
          ================================================= */}

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition hover:bg-background-soft hover:text-primary md:hidden"
          >
            <SearchOutlinedIcon />
          </button>

          {/* =================================================
              WISHLIST
          ================================================= */}

          <button
            type="button"
            onClick={() => navigate("/wishlist")}
            className="group relative flex h-11 w-11 items-center justify-center rounded-lg text-text-secondary transition-all duration-200 hover:bg-primary/10 hover:text-primary"
          >
            <FavoriteBorderOutlinedIcon className="transition-transform duration-200 group-hover:scale-110" />

            {wishlist.length > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-white shadow-sm">
                {wishlist.length > 99 ? "99+" : wishlist.length}
              </span>
            )}
          </button>

          {/* =================================================
              CART
          ================================================= */}

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="group relative flex h-11 w-11 items-center justify-center rounded-lg text-text-secondary transition-all duration-200 hover:bg-primary/10 hover:text-primary"
          >
            <ShoppingCartOutlinedIcon className="transition-transform duration-200 group-hover:scale-110" />

            {cart.length > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-white shadow-sm">
                {cart.length > 99 ? "99+" : cart.length}
              </span>
            )}
          </button>

          {/* =================================================
              ACCOUNT
          ================================================= */}

          <div className="relative ml-1">
            {/* Account Button */}

            <button
              type="button"
              onClick={onAccountClick}
              className={`flex h-11 items-center gap-2 rounded-lg px-2 transition-all duration-200 sm:px-3 ${
                isAccountDropDownOpen
                  ? "bg-primary/10 text-primary"
                  : "text-text-secondary hover:bg-background-soft hover:text-primary"
              }`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background-soft">
                {
                        token.access_token ? <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="snj" className="size-8 rounded-full" /> : <UserCircle size={20} strokeWidth={1.8} />
                      }
              </span>

              <span className="hidden text-sm font-medium lg:block">
                Account
              </span>

              <svg
                className={`hidden h-4 w-4 transition-transform duration-200 lg:block ${
                  isAccountDropDownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* =================================================
                DROPDOWN
            ================================================= */}

            {isAccountDropDownOpen && (
              <div className="absolute right-0 top-[54px] z-50 w-[290px] overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-black/10">
                {/* ================= HEADER ================= */}

                <div className="border-b border-border bg-background-soft px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border-border">
                      {
                        token.access_token ? <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="snj" className="size-10.5 rounded-full" /> : <UserCircle size={26} strokeWidth={1.7} />
                      }
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-text-primary">
                        {token.access_token
                          ? "Welcome back! John"
                          : "Welcome to ShopBazaar"}
                      </p>

                      <p className="mt-1 text-xs text-text-muted">
                        {token.access_token
                          ? "Manage your account and orders"
                          : "Login to access your account"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= MENU ================= */}

                <div className="p-2.5">
                  {/* ==========================================
                      LOGGED OUT
                  ========================================== */}

                  {!token.access_token && (
                    <>
                      {/* LOGIN */}

                      <button
                        type="button"
                        onClick={onLoginClick}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-primary/10"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                          <LogIn size={18} />
                        </span>

                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            Login
                          </p>

                          <p className="mt-0.5 text-[11px] text-text-muted">
                            Access your account
                          </p>
                        </div>
                      </button>

                      {/* CREATE ACCOUNT */}

                      <button
                        type="button"
                        onClick={() => {
                          setIsAccountDropDownOpen(false);
                          navigate("/auth/signup");
                        }}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-background-soft"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-soft text-text-secondary transition group-hover:bg-primary/10 group-hover:text-primary">
                          <UserCircle size={18} />
                        </span>

                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            Create Account
                          </p>

                          <p className="mt-0.5 text-[11px] text-text-muted">
                            New to ShopBazaar?
                          </p>
                        </div>
                      </button>
                    </>
                  )}

                  {/* ==========================================
                      LOGGED IN
                  ========================================== */}

                  {token.access_token && (
                    <>
                      {/* MY ACCOUNT */}

                      <button
                        type="button"
                        onClick={() => {
                          setIsAccountDropDownOpen(false);
                          navigate("/account");
                        }}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-background-soft"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-soft text-text-secondary transition group-hover:bg-primary/10 group-hover:text-primary">
                          <UserCircle size={18} />
                        </span>

                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            My Account
                          </p>

                          <p className="mt-0.5 text-[11px] text-text-muted">
                            Manage your profile
                          </p>
                        </div>
                      </button>

                      {/* ORDERS */}

                      <button
                        type="button"
                        onClick={() => {
                          setIsAccountDropDownOpen(false);
                          navigate("/orders");
                        }}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-background-soft"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-soft text-text-secondary transition group-hover:bg-primary/10 group-hover:text-primary">
                          <Package size={18} />
                        </span>

                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            My Orders
                          </p>

                          <p className="mt-0.5 text-[11px] text-text-muted">
                            Track your orders
                          </p>
                        </div>
                      </button>

                      {/* WISHLIST */}

                      <button
                        type="button"
                        onClick={() => {
                          setIsAccountDropDownOpen(false);
                          navigate("/wishlist");
                        }}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-background-soft"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-soft text-text-secondary transition group-hover:bg-primary/10 group-hover:text-primary">
                          <Heart size={18} />
                        </span>

                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            Wishlist
                          </p>

                          <p className="mt-0.5 text-[11px] text-text-muted">
                            Your saved products
                          </p>
                        </div>
                      </button>

                      {/* DIVIDER */}

                      <div className="my-2 h-px bg-border" />

                      {/* LOGOUT */}

                      <button
                        type="button"
                        onClick={onLoginClick}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-red-500/10"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
                          <LogOut size={18} />
                        </span>

                        <div>
                          <p className="text-sm font-medium text-red-500">
                            Logout
                          </p>

                          <p className="mt-0.5 text-[11px] text-text-muted">
                            Sign out of your account
                          </p>
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* ================= FOOTER ================= */}

                <div className="border-t border-border bg-background-soft px-4 py-2.5">
                  <p className="text-center text-[10px] text-text-light">
                    ShopBazaar • Your everyday shopping destination
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE SEARCH BAR
      ===================================================== */}

      <div className="border-t border-border px-4 py-3 md:hidden">
        <div className="relative h-10 w-full">
          <SearchOutlinedIcon
            className="absolute left-3 top-2.5 text-text-muted"
            fontSize="small"
          />

          <input
            type="text"
            placeholder="Search products, brands and more..."
            className="h-full w-full rounded-lg border border-border bg-background-soft pl-10 pr-12 text-sm text-text-primary outline-none transition placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/10"
          />

          <button
            type="button"
            className="absolute right-1 top-1 flex h-8 w-9 items-center justify-center rounded-md bg-primary text-white transition hover:bg-primary-dark"
          >
            <SearchOutlinedIcon fontSize="small" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
