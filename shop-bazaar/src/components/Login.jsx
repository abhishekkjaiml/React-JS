
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { useLogin } from "../context/login-context";
import { userLogin } from "../api/auth";

const Login = () => {
  // =====================================================
  // STATE
  // =====================================================

  const [showPassword, setShowPassword] = useState(false);

  // =====================================================
  // NAVIGATION
  // =====================================================

  const navigate = useNavigate();

  // =====================================================
  // LOGIN CONTEXT
  // =====================================================

  const { loginDispatch, email, password } = useLogin();

  // =====================================================
  // FORM SUBMIT
  // =====================================================

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const data = await userLogin(email, password);

    if(Object.keys(data).length > 0){
      localStorage.setItem('token', data.access_token)
    }

    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });

    if (data.access_token) {
      navigate("/");
    }
  };

  // =====================================================
  // EMAIL CHANGE
  // =====================================================

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  // =====================================================
  // PASSWORD CHANGE
  // =====================================================

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <main className="min-h-[calc(100vh-140px)] bg-background px-4 py-8 sm:px-6 lg:px-10">

      {/* =====================================================
          BACK TO HOME
      ===================================================== */}

      <div className="mx-auto mb-6 max-w-6xl">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition hover:text-primary"
        >
          <ArrowBackOutlinedIcon fontSize="small" />

          Back to Shop
        </Link>

      </div>

      {/* =====================================================
          MAIN AUTH CARD
      ===================================================== */}

      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-background-soft shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:grid-cols-[1.05fr_0.95fr]">

        {/* ===================================================
            LEFT BRAND SECTION
        =================================================== */}

        <section className="relative hidden min-h-[650px] overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between">

          {/* Background Decoration */}

          <div className="absolute inset-0">

            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/[0.07]" />

            <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/[0.06]" />

            <div className="absolute right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/[0.08]" />

          </div>

          {/* Brand */}

          <div className="relative z-10 p-10">

            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              ShopBazaar
            </Link>

            <p className="mt-1 text-xs font-medium tracking-wide text-white/60">
              YOUR EVERYDAY SHOPPING DESTINATION
            </p>

          </div>

          {/* Center Content */}

          <div className="relative z-10 px-10">

            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80">
              Welcome back
            </span>

            <h1 className="mt-5 max-w-lg text-4xl font-bold leading-[1.12] text-white xl:text-5xl">
              Great products.
              <br />
              Better shopping.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Sign in to access your wishlist, track orders,
              manage your account and continue where you left off.
            </p>

          </div>

          {/* Trust Features */}

          <div className="relative z-10 grid grid-cols-3 gap-3 p-10">

            {/* Delivery */}

            <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4">

              <LocalShippingOutlinedIcon fontSize="small" />

              <p className="mt-3 text-xs font-semibold text-white">
                Fast Delivery
              </p>

              <p className="mt-1 text-[10px] leading-4 text-white/50">
                Quick & reliable
              </p>

            </div>

            {/* Secure */}

            <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4">

              <VerifiedOutlinedIcon fontSize="small" />

              <p className="mt-3 text-xs font-semibold text-white">
                Secure Payment
              </p>

              <p className="mt-1 text-[10px] leading-4 text-white/50">
                Safe checkout
              </p>

            </div>

            {/* Support */}

            <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4">

              <SupportAgentOutlinedIcon fontSize="small" />

              <p className="mt-3 text-xs font-semibold text-white">
                Customer Care
              </p>

              <p className="mt-1 text-[10px] leading-4 text-white/50">
                We're here to help
              </p>

            </div>

          </div>

        </section>

        {/* ===================================================
            RIGHT LOGIN SECTION
        =================================================== */}

        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">

          <div className="w-full max-w-[420px]">

            {/* Mobile Logo */}

            <div className="mb-8 lg:hidden">

              <Link
                to="/"
                className="text-xl font-bold text-primary"
              >
                ShopBazaar
              </Link>

            </div>

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="mb-8">

              <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                Sign in
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                Enter your details to access your ShopBazaar account.
              </p>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={onFormSubmit}
              className="space-y-5"
            >

              {/* =================================================
                  EMAIL
              ================================================= */}

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
                  value={email}
                  onChange={onEmailChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-light hover:border-text-light focus:border-primary focus:ring-4 focus:ring-primary/10"
                />

              </div>

              {/* =================================================
                  PASSWORD
              ================================================= */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-text-primary"
                  >
                    Password
                  </label>

                  <Link
                    to="/auth/forgot-password"
                    className="text-xs font-semibold text-primary transition hover:text-primary-dark"
                  >
                    Forgot password?
                  </Link>

                </div>

                <div className="relative">

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={onPasswordChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 pr-12 text-sm text-text-primary outline-none transition-all placeholder:text-text-light hover:border-text-light focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (value) => !value,
                      )
                    }
                    className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-text-muted transition hover:text-text-primary"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOutlinedIcon fontSize="small" />
                    )}
                  </button>

                </div>

              </div>

              {/* =================================================
                  REMEMBER ME
              ================================================= */}

              <div className="flex items-center justify-between">

                <label className="flex cursor-pointer items-center gap-2">

                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border accent-primary"
                  />

                  <span className="text-sm text-text-secondary">
                    Remember me
                  </span>

                </label>

              </div>

              {/* =================================================
                  LOGIN BUTTON
              ================================================= */}

              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-primary text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md active:scale-[0.99]"
              >
                Sign in to ShopBazaar
              </button>

            </form>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-border" />

              <span className="whitespace-nowrap text-[10px] font-semibold tracking-wider text-text-light">
                OR CONTINUE WITH
              </span>

              <div className="h-px flex-1 bg-border" />

            </div>

            {/* =================================================
                SOCIAL LOGIN
            ================================================= */}

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold text-text-primary transition-all hover:border-text-light hover:bg-background-soft"
              >
                <GoogleIcon fontSize="small" />

                Google
              </button>

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold text-text-primary transition-all hover:border-text-light hover:bg-background-soft"
              >
                <AppleIcon fontSize="small" />

                Apple
              </button>

            </div>

            {/* =================================================
                SIGNUP
            ================================================= */}

            <div className="mt-8 text-center">

              <span className="text-sm text-text-muted">
                New to ShopBazaar?
              </span>

              <Link
                to="/auth/signup"
                className="ml-1 text-sm font-semibold text-primary transition hover:text-primary-dark"
              >
                Create an account
              </Link>

            </div>

            {/* =================================================
                SECURITY NOTE
            ================================================= */}

            <div className="mt-7 flex items-center justify-center gap-2 text-center">

              <VerifiedOutlinedIcon
                fontSize="small"
                className="text-success"
              />

              <p className="text-[11px] text-text-light">
                Your information is protected and secure
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Login;
