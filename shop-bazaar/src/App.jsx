import React from "react";

import Navbar from "./components/Navbar";
import ProductBar from "./components/ProductBar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DealsPage from "./pages/DealsPage";
import NewArrivelsPage from "./pages/NewArrivelsPage";
import BestSellersPage from "./pages/BestSellersPage";
import BrandsPage from "./pages/BrandsPage";

import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";

import LoginPage from "./pages/auth/LoginPage";
import SingupPage from "./pages/auth/SingupPage";

import ShopLayout from "./components/ShopLayout";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />

      <ProductBar />

      <Routes>
        {/* ================= HOME ================= */}

        <Route path="/" element={<HomePage />} />

        {/* ================= SHOP ================= */}

        <Route
          path="/shop"
          element={
            <ShopLayout>
              <ShopPage />
            </ShopLayout>
          }
        />

        {/* ================= DEALS ================= */}

        <Route
          path="/deals"
          element={
            <ShopLayout>
              <DealsPage />
            </ShopLayout>
          }
        />

        {/* ================= NEW ARRIVALS ================= */}

        <Route
          path="/new_arrivels"
          element={
            <ShopLayout>
              <NewArrivelsPage />
            </ShopLayout>
          }
        />

        {/* ================= BEST SELLERS ================= */}

        <Route
          path="/best_sellers"
          element={
            <ShopLayout>
              <BestSellersPage />
            </ShopLayout>
          }
        />

        {/* ================= BRANDS ================= */}

        <Route
          path="/brands"
          element={
            <ShopLayout>
              <BrandsPage />
            </ShopLayout>
          }
        />

        {/* ================= WISHLIST ================= */}

        <Route path="/wishlist" element={<WishlistPage />} />

        {/* ================= CART ================= */}

        <Route path="/cart" element={<CartPage />} />

        {/* ================= AUTH ================= */}

        <Route path="/auth/login" element={<LoginPage />} />

        <Route path="/auth/signup" element={<SingupPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
