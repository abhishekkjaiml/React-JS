import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import OffersPage from './pages/OffersPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path='/'  element={<Home />} />
        <Route  path='/aboutus' element={<AboutUs />} />
        <Route  path='/offers'  element={<OffersPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App