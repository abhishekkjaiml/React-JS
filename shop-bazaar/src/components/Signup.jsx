import { useState } from "react";
import { Link } from "react-router-dom";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const SingupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-10">

      {/* =====================================================
          AUTH CONTAINER
      ===================================================== */}

      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-background-soft shadow-sm lg:grid-cols-2">

        {/* ===================================================
            LEFT SIDE
        =================================================== */}

        <div className="relative hidden overflow-hidden bg-primary p-10 text-white lg:flex lg:flex-col lg:justify-between">

          {/* Decorative Shapes */}

          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10" />

          {/* Brand */}

          <div className="relative z-10">

            <Link
              to="/"
              className="text-2xl font-bold tracking-tight"
            >
              ShopBazaar
            </Link>

            <p className="mt-1 text-sm text-white/70">
              Shop smart. Shop better.
            </p>

          </div>

          {/* Content */}

          <div className="relative z-10 max-w-md">

            <h1 className="text-4xl font-bold leading-tight">
              Start your shopping
              <br />
              journey today.
            </h1>

            <p className="mt-5 text-sm leading-6 text-white/75">
              Create your ShopBazaar account and discover
              products, deals and a better way to shop online.
            </p>

          </div>

          {/* Features */}

          <div className="relative z-10 space-y-4">

            {/* Feature 1 */}

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <LocalShippingOutlinedIcon fontSize="small" />
              </div>

              <div>

                <p className="text-sm font-semibold">
                  Fast & Reliable Delivery
                </p>

                <p className="text-xs text-white/60">
                  Get your orders delivered on time
                </p>

              </div>

            </div>

            {/* Feature 2 */}

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <SecurityOutlinedIcon fontSize="small" />
              </div>

              <div>

                <p className="text-sm font-semibold">
                  Secure Shopping
                </p>

                <p className="text-xs text-white/60">
                  Your information is always protected
                </p>

              </div>

            </div>

            {/* Feature 3 */}

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <FavoriteBorderOutlinedIcon fontSize="small" />
              </div>

              <div>

                <p className="text-sm font-semibold">
                  Personalized Experience
                </p>

                <p className="text-xs text-white/60">
                  Save favorites and manage your orders
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div className="flex items-center justify-center p-6 sm:p-10">

          <div className="w-full max-w-md">

            {/* ================= HEADER ================= */}

            <div className="mb-7">

              {/* Mobile Brand */}

              <p className="mb-2 text-sm font-bold text-primary lg:hidden">
                ShopBazaar
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                Create an account
              </h2>

              <p className="mt-2 text-sm text-text-muted">
                Join ShopBazaar and start shopping today.
              </p>

            </div>

            {/* ================= FORM ================= */}

            <form className="space-y-4">

              {/* ================= FULL NAME ================= */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-text-primary outline-none transition placeholder:text-text-light focus:border-primary focus:ring-4 focus:ring-primary/10"
                />

              </div>

              {/* ================= EMAIL ================= */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-text-primary outline-none transition placeholder:text-text-light focus:border-primary focus:ring-4 focus:ring-primary/10"
                />

              </div>

              {/* ================= PASSWORD ================= */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 pr-12 text-sm text-text-primary outline-none transition placeholder:text-text-light focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    className="absolute right-0 top-0 flex h-12 w-11 items-center justify-center text-text-muted transition hover:text-text-primary"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOutlinedIcon fontSize="small" />
                    )}
                  </button>

                </div>

              </div>

              {/* ================= CONFIRM PASSWORD ================= */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Confirm password
                </label>

                <div className="relative">

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 pr-12 text-sm text-text-primary outline-none transition placeholder:text-text-light focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (value) => !value,
                      )
                    }
                    className="absolute right-0 top-0 flex h-12 w-11 items-center justify-center text-text-muted transition hover:text-text-primary"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOutlinedIcon fontSize="small" />
                    )}
                  </button>

                </div>

              </div>

              {/* ================= TERMS ================= */}

              <div className="flex items-start gap-2 pt-1">

                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 cursor-pointer rounded border-border accent-primary"
                />

                <label
                  htmlFor="terms"
                  className="cursor-pointer text-xs leading-5 text-text-muted"
                >
                  I agree to the{" "}

                  <span className="font-semibold text-primary">
                    Terms & Conditions
                  </span>{" "}

                  and{" "}

                  <span className="font-semibold text-primary">
                    Privacy Policy
                  </span>
                  .
                </label>

              </div>

              {/* ================= SIGNUP ================= */}

              <button
                type="submit"
                className="mt-2 h-12 w-full rounded-lg bg-primary text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md active:scale-[0.99]"
              >
                Create your account
              </button>

            </form>

            {/* ================= DIVIDER ================= */}

            <div className="my-6 flex items-center gap-4">

              <div className="h-px flex-1 bg-border" />

              <span className="text-xs font-medium text-text-light">
                OR CONTINUE WITH
              </span>

              <div className="h-px flex-1 bg-border" />

            </div>

            {/* ================= SOCIAL ================= */}

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold text-text-primary transition hover:border-text-light hover:bg-background-soft"
              >
                <GoogleIcon fontSize="small" />

                Google
              </button>

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold text-text-primary transition hover:border-text-light hover:bg-background-soft"
              >
                <AppleIcon fontSize="small" />

                Apple
              </button>

            </div>

            {/* ================= LOGIN ================= */}

            <div className="mt-7 text-center">

              <span className="text-sm text-text-muted">
                Already have an account?
              </span>

              <Link
                to="/auth/login"
                className="ml-1 text-sm font-semibold text-primary transition hover:text-primary-dark"
              >
                Login
              </Link>

            </div>

            {/* ================= TERMS NOTE ================= */}

            <p className="mt-5 text-center text-[11px] leading-5 text-text-light">

              By creating an account, you agree to ShopBazaar's{" "}

              <span className="font-medium text-text-muted">
                Terms of Service
              </span>{" "}

              and{" "}

              <span className="font-medium text-text-muted">
                Privacy Policy
              </span>

              .

            </p>

          </div>

        </div>

      </div>

    </main>
  );
};

export default SingupPage;