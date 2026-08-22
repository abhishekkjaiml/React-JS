import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`app-layout ${
        sidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />


      {/* =====================================================
          MAIN APPLICATION
      ===================================================== */}

      <div className="app-content">

        {/* ==================== NAVBAR ==================== */}

        <Navbar />


        {/* ==================== PAGE ==================== */}

        <main className="page-content">
          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

          </Routes>
        </main>


        {/* ==================== FOOTER ==================== */}

        <Footer />

      </div>

    </div>
  );
};

export default App;