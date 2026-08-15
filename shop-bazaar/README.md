# 🛍️ Modern E-Commerce Web Application

A modern and responsive **E-Commerce web application** built with **React.js** and **Vite**, designed to provide a smooth and user-friendly online shopping experience using reusable components, API integration, persistent client-side data, authentication flow, and online payment integration.

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Platzi%20API-API-success" />
  <img src="https://img.shields.io/badge/Razorpay-Payment-3395FF?logo=razorpay&logoColor=white" />
</p>

---

## 🌐 Live Demo

🔗 **Live Demo:** `https://shopbazaar-ruddy.vercel.app/`

---

# 📖 Overview

This project is a modern **E-Commerce frontend application** built using **React.js** and **Vite**.

The application uses the **Platzi Fake Store API** to fetch product data and provides a complete frontend shopping experience including product browsing, filtering, cart management, wishlist management, authentication flow, persistent user data, and Razorpay payment integration.

The project follows a **component-based architecture** with reusable React components and client-side state management, making the application clean, scalable, maintainable, and easy to extend.

---

# ✨ Features

### 🏠 Home / Landing Page

* Modern and attractive landing page
* Hero section
* Featured products
* Product categories
* Promotional sections
* Responsive design
* Easy navigation to products

### 🛍️ Product Listing Page

* Fetch products from Platzi Fake Store API
* Display products using reusable product cards
* Product image and information
* Product price
* Add to Cart
* Add to Wishlist
* Responsive product grid

### 🔎 Product Filtering

* Category-based filtering
* Price-based filtering
* Product search/filter functionality
* Dynamic product results
* User-friendly filtering interface

### 🛒 Shopping Cart

* Add products to cart
* Remove products from cart
* Increase product quantity
* Decrease product quantity
* Cart item count
* Total price calculation
* Persistent cart data

### ❤️ Wishlist

* Add products to wishlist
* Remove products from wishlist
* Wishlist cards
* Add wishlist products to cart
* Persistent wishlist data

### 🔐 Authentication

* User registration UI
* User login UI
* JWT-based authentication flow
* Authentication state management
* Protected user functionality
* Logout functionality
* Persistent login state

### 💾 Persistent Data

The application uses client-side storage to persist important user data.

* Login state persists after refresh
* Cart data persists after refresh
* Wishlist data persists after refresh
* User session data persists
* Application state is restored when the user returns

### 💳 Razorpay Payment Gateway

* Razorpay payment integration
* Checkout flow
* Payment interface
* Online payment support
* Payment status handling

### 📱 Responsive Design

* Mobile-friendly UI
* Tablet-friendly layout
* Desktop-friendly layout
* Responsive product cards
* Responsive navigation
* Flexible layouts across screen sizes

---

# 🛠️ Tech Stack

## Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

## API

* Platzi Fake Store API
* REST API integration
* Fetch API / Axios

## Libraries

* React Router DOM
* Axios
* React Icons
* Context API
* LocalStorage

## Authentication

* JWT-based authentication flow
* Client-side authentication state
* Persistent login state

## Payment

* Razorpay Payment Gateway

## Development Tools

* Vite
* VS Code
* Git
* GitHub
* npm

---

# 📂 Project Structure

```text
ecommerce-project/
│
├── public/
│
├── src/
│   ├── assets/
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
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

* Node.js (v18+ recommended)
* npm
* Git

---

## Clone Repository

```bash
git clone https://github.com/your-username/ecommerce-project.git
```

---

## Navigate to Project

```bash
cd ecommerce-project
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root if environment variables are required.

Example:

```env
VITE_API_URL=https://api.escuelajs.co/api/v1
VITE_RAZORPAY_KEY_ID=
```

> **Note:** Never commit your `.env` file to GitHub if it contains private credentials. Add `.env` to `.gitignore` and commit only `.env.example`.

---

# 🌍 API Integration

This project uses the **Platzi Fake Store API** to fetch product and category data.

Example API:

```text
https://api.escuelajs.co/api/v1
```

The API is used for:

* Fetching products
* Fetching product details
* Fetching categories
* Displaying product information
* Product filtering

---

# 📸 Screenshots

Create a `screenshots` folder and add your application screenshots.

```text
screenshots/
├── home.png
├── products.png
├── product-filter.png
├── cart.png
├── wishlist.png
├── login.png
├── register.png
└── payment.png
```

Example:

```md
## Home

![Home](screenshots/home.png)

## Products

![Products](screenshots/products.png)

## Cart

![Cart](screenshots/cart.png)

## Wishlist

![Wishlist](screenshots/wishlist.png)

## Login

![Login](screenshots/login.png)
```

---

# 📚 Concepts Used

* React Components
* Functional Components
* React Hooks
* useState
* useEffect
* Props
* Context API
* React Router
* Event Handling
* Conditional Rendering
* Component Reusability
* API Integration
* REST API
* Fetch API / Axios
* Product Filtering
* Cart Management
* Wishlist Management
* LocalStorage
* Persistent Client-Side Data
* Authentication Flow
* JWT
* Razorpay Integration
* Responsive UI Design

---

# 🎯 Learning Outcomes

Through this project, I learned:

* Building a modern E-Commerce frontend
* Creating scalable React applications
* Creating reusable React components
* Working with React Hooks
* Managing application state
* Implementing cart functionality
* Implementing wishlist functionality
* Building product filtering functionality
* Integrating third-party REST APIs
* Working with the Platzi Fake Store API
* Implementing client-side persistent data
* Managing authentication state
* Understanding JWT-based authentication flow
* Integrating Razorpay payment gateway
* Creating responsive user interfaces
* Organizing a clean React project structure
* Using Vite for fast development and optimized builds

---

# 🚀 Future Improvements

* Product detail page enhancements
* User profile
* Order history
* Order tracking
* Product reviews and ratings
* Coupon and discount system
* Advanced search
* Pagination
* Better payment status handling
* Improved authentication flow
* Backend integration
* Database integration
* Admin dashboard
* Product management
* User management
* Sales analytics
* Email notifications
* Dark mode
* Performance optimization
* Progressive Web App (PWA) support

---

# 👨‍💻 Author

**Abhishek Kumar**

🎓 B.Tech Computer Science & Engineering

💻 React.js | MERN Stack | React Native Developer

### Connect with Me

* **GitHub:** https://github.com/abhishekkjaiml
* **LinkedIn:** https://www.linkedin.com/in/abhishek-kumar-jaiswar-35632b2b7/

---

# ⭐ Show Your Support

If you found this project helpful or interesting, consider giving it a **⭐ Star** on GitHub.

Your support is greatly appreciated!

---

<p align="center">
  Made with ❤️ using React.js & Vite
</p>
