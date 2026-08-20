# 🛍️ Modern E-Commerce Web Application

<p align="center">
  <img src="./src/assets/logo.png" alt="E-Commerce Logo" width="120" />
</p>

<h3 align="center">Shop Smarter. Shop Better.</h3>

<p align="center">
  A modern and responsive E-Commerce web application built with React.js and Vite.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Platzi%20API-API-4CAF50?style=for-the-badge" alt="Platzi API" />
  <img src="https://img.shields.io/badge/Razorpay-Payment-3395FF?style=for-the-badge&logo=razorpay&logoColor=white" alt="Razorpay" />
</p>

---

## 🌐 Live Demo

<p align="center">
  <a href="https://shopbazaar-ruddy.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

🔗 **Live Website:** https://shopbazaar-ruddy.vercel.app/

---

## 📸 Preview

<p align="center">
  <img src="./src/assets/preview.png" alt="E-Commerce App Preview" width="900" />
</p>

---

## 📖 Overview

This project is a modern and responsive **E-Commerce web application** built using **React.js** and **Vite**.

The application provides a complete frontend shopping experience with product browsing, category filtering, cart management, wishlist functionality, authentication flow, persistent client-side data, API integration, and Razorpay payment integration.

The project follows a **component-based architecture** with reusable React components and centralized state management, making the application clean, maintainable, scalable, and easy to extend.

---

## ✨ Features

### 🏠 Home Page

- Modern and attractive landing page
- Hero section
- Featured products
- Product categories
- Promotional sections
- Responsive design
- Easy navigation

### 🛍️ Product Listing

- Fetch products from Platzi Fake Store API
- Reusable product cards
- Product images
- Product pricing
- Add to Cart
- Add to Wishlist
- Responsive product grid

### 🔎 Product Filtering

- Category-based filtering
- Price-based filtering
- Product search
- Dynamic filtering
- User-friendly filter interface

### 🛒 Shopping Cart

- Add products to cart
- Remove products from cart
- Increase product quantity
- Decrease product quantity
- Cart item count
- Automatic total price calculation
- Persistent cart data

### ❤️ Wishlist

- Add products to wishlist
- Remove products from wishlist
- Wishlist product cards
- Move wishlist products to cart
- Persistent wishlist data

### 🔐 Authentication

- User registration UI
- User login UI
- JWT-based authentication flow
- Authentication state management
- Persistent login state
- Logout functionality
- Protected user functionality

### 💾 Persistent Data

Important user data is persisted using client-side storage.

- Login state persists after refresh
- Cart data persists after refresh
- Wishlist data persists after refresh
- User session data persists
- Application state is restored when the user returns

### 💳 Razorpay Payment

- Razorpay payment integration
- Checkout flow
- Online payment support
- Payment interface
- Payment status handling

### 📱 Responsive Design

- Mobile-friendly interface
- Tablet-friendly layout
- Desktop-friendly layout
- Responsive navigation
- Responsive product cards
- Flexible layouts across screen sizes

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **React.js** | Frontend Development |
| **JavaScript** | Application Logic |
| **HTML5** | Structure |
| **CSS3** | Styling & Responsive Design |
| **Vite** | Development & Build Tool |
| **Platzi Fake Store API** | Product Data |
| **REST API** | API Integration |
| **React Router DOM** | Routing |
| **Axios** | HTTP Requests |
| **Context API** | State Management |
| **LocalStorage** | Persistent Client-Side Data |
| **Razorpay** | Payment Integration |

---

## 📂 Project Structure

```text
ecommerce-project/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── preview.png
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── ProductCard/
│   │   ├── CartCard/
│   │   └── WishlistCard/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── Cart/
│   │   ├── Wishlist/
│   │   ├── Login/
│   │   └── Register/
│   │
│   ├── context/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md