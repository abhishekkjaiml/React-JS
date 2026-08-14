import React from 'react'
import Navbar from './components/Navbar'
import ProductBar from './components/ProductBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductBar />
      <Routes>
        <Route  path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App