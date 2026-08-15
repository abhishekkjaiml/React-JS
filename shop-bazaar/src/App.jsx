import React from "react";
import Navbar from "./components/Navbar";
import ProductBar from "./components/ProductBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ShopPage from "./pages/ShopPage";
import DealsPage from "./pages/DealsPage";
import NewArrivelsPage from "./pages/NewArrivelsPage";
import BestSellersPage from "./pages/BestSellersPage";
import BrandsPage from "./pages/BrandsPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/auth/LoginPage";
import SingupPage from "./pages/auth/SingupPage";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">

      <Navbar />
      <ProductBar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        <Route  path="/wishlist"  element={<WishlistPage />} />
        <Route  path="/cart"  element={<CartPage />} />
        <Route  path="/auth/login"  element={<LoginPage />} />
        <Route  path="/auth/signup"  element={<SingupPage />} />

        {/* Shop Page */}

        <Route path="/shop" element={
          <div className="flex w-full flex-1">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <ShopPage />
            </main>
          </div>}/>

          {/* Deals Page */}

          <Route path="/deals" element={
          <div className="flex w-full flex-1">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <DealsPage />
            </main>
          </div>}/>

          {/* New Arrivels */}

          <Route path="/new_arrivels" element={
          <div className="flex w-full flex-1">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <NewArrivelsPage />
            </main>
          </div>}/>

          {/* Best Sellers */}

          <Route path="/best_sellers" element={
          <div className="flex w-full flex-1">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <BestSellersPage />
            </main>
          </div>}/>

          {/* Brands */}

          <Route path="/brands" element={
          <div className="flex w-full flex-1">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <BrandsPage />
            </main>
          </div>}/>


      </Routes>
      <Footer />
    </div>
  );
};

export default App;