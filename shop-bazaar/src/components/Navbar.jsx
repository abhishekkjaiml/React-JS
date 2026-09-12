import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { UserRound, LogIn, LogOut, UserCircle } from "lucide-react";

import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../context/login-context";

const Navbar = () => {
  const navigate = useNavigate();

  const { token, loginDispatch } = useLogin();

  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);

  // =====================================================
  // LOGIN / LOGOUT
  // =====================================================

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

  // =====================================================
  // ACCOUNT CLICK
  // =====================================================

  const onAccountClick = () => {
    setIsAccountDropDownOpen((previous) => !previous);
  };

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-border bg-background px-5 text-text-primary md:px-8 lg:px-10">
      {/* =====================================================
          LOGO
      ===================================================== */}

      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img
          src={logo}
          alt="ShopBazaar"
          className="w-32 object-contain sm:w-35"
        />
      </div>

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <div className="relative hidden h-10 w-[45vw] max-w-2xl md:block">
        <SearchOutlinedIcon
          className="absolute left-3 top-2.5 text-text-muted"
          fontSize="small"
        />

        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="h-full w-full rounded-md border border-border bg-background-soft pl-10 pr-16 text-sm text-text-primary outline-none transition placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/10"
        />

        <button
          type="button"
          className="absolute right-0 top-0 flex h-10 w-14 items-center justify-center rounded-md bg-primary text-white transition hover:bg-primary-dark"
        >
          <SearchOutlinedIcon fontSize="small" />
        </button>
      </div>

      {/* =====================================================
          RIGHT ACTIONS
      ===================================================== */}

      <div className="flex items-center gap-5">
        {/* =================================================
            WISHLIST
        ================================================= */}

        <button
          type="button"
          onClick={() => navigate("/wishlist")}
          className="relative flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition hover:bg-background-soft hover:text-primary"
        >
          <FavoriteBorderOutlinedIcon />

          {/* Optional Badge */}

          {/* <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-white">
            2
          </span> */}
        </button>

        {/* =================================================
            CART
        ================================================= */}

        <button
          type="button"
          onClick={() => navigate("/cart")}
          className="relative flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition hover:bg-background-soft hover:text-primary"
        >
          <ShoppingCartOutlinedIcon />

          {/* Optional Badge */}

          {/* <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-white">
            3
          </span> */}
        </button>

        {/* =================================================
            ACCOUNT
        ================================================= */}

        <div className="relative">
          {/* Account Button */}

          <button
            type="button"
            onClick={onAccountClick}
            className={`flex h-10 items-center gap-2 rounded-md px-2.5 text-text-secondary transition ${
              isAccountDropDownOpen
                ? "bg-background-soft text-primary"
                : "hover:bg-background-soft hover:text-primary"
            }`}
          >
            <UserRound size={21} strokeWidth={1.8} />

            <span className="hidden text-sm font-medium sm:block">Account</span>
          </button>

          {/* =================================================
              DROPDOWN
          ================================================= */}

          {isAccountDropDownOpen && (
            <div className="absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-xl border border-border bg-background shadow-lg">
              {/* ================= HEADER ================= */}

              <div className="border-b border-border bg-background-soft px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserCircle size={22} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-text-primary">
                      {token.access_token
                        ? "Welcome back!"
                        : "Welcome to ShopBazaar"}
                    </p>

                    <p className="mt-0.5 text-xs text-text-muted">
                      {token.access_token
                        ? "Manage your account"
                        : "Login to your account"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= MENU ================= */}

              <div className="p-2">
                {/* LOGIN */}

                {!token.access_token && (
                  <>
                    <button
                      type="button"
                      onClick={onLoginClick}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-text-primary transition hover:bg-primary-light hover:text-primary"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <LogIn size={17} />
                      </span>

                      <span>Login</span>
                    </button>

                    {/* SIGNUP */}

                    <button
                      type="button"
                      onClick={() => {
                        setIsAccountDropDownOpen(false);
                        navigate("/auth/signup");
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-text-primary transition hover:bg-background-soft"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-background-soft text-text-secondary">
                        <UserCircle size={17} />
                      </span>

                      <span>Create Account</span>
                    </button>
                  </>
                )}

                {/* LOGGED IN */}

                {token.access_token && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setIsAccountDropDownOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-text-primary transition hover:bg-background-soft"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-background-soft text-text-secondary">
                        <UserCircle size={17} />
                      </span>

                      <span>My Account</span>
                    </button>

                    <div className="my-1 h-px bg-border" />

                    <button
                      type="button"
                      onClick={onLoginClick}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-500 transition hover:bg-red-500/10"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-500/10">
                        <LogOut size={17} />
                      </span>

                      <span>Logout</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
