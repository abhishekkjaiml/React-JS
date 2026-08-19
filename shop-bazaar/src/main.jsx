import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart-context.jsx'
import { WishProvider } from './context/wishlist-context.jsx'
import { ShopFilterProvider } from './context/shop-filter-context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <CartProvider>
          <WishProvider>
            <ShopFilterProvider>
              <App />
            </ShopFilterProvider>
          </WishProvider>
        </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
