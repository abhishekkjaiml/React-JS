import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OffersPage from "./pages/OffersPage";
import AboutUs from "./pages/AboutUs";
import Favourite from "./pages/Favourite";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/favourite"  element={<Favourite />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
