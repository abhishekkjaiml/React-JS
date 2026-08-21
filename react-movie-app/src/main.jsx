import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MovieProvider } from './context/movie-context.jsx'
import { FavouriteMovieProvider } from './context/movie-favourite-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <FavouriteMovieProvider>
          <App />
        </FavouriteMovieProvider>
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>,
)
