# 🛍️ Shop Bazaar — Development Steps

A step-by-step development guide for building **Shop Bazaar**, a modern E-Commerce frontend application using **React.js, Vite, Tailwind CSS, Material UI, Axios, React Router DOM, Context API, and useReducer**.

---

# 📌 Project Overview

**Shop Bazaar** is a frontend-focused E-Commerce application that provides users with a modern online shopping experience.

The application uses the **Platzi Fake Store API** for product data and implements client-side functionality for:

* Product browsing
* Product filtering
* Cart management
* Wishlist management
* Authentication UI
* Persistent client-side data
* Responsive UI
* Multiple shopping sections

---

# 🚀 Development Roadmap

## Step 1 — Create React + Vite Project

Create the project using Vite.

```bash
npm create vite@latest shop-bazaar
```

Select:

```text
React
JavaScript
```

Then install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Step 2 — Install Required Libraries

Install the required frontend libraries.

```bash
npm install axios react-router-dom
```

Install UI libraries:

```bash
npm install @mui/material @mui/icons-material
```

Install Ant Design Icons:

```bash
npm install @ant-design/icons
```

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

Install Emotion dependencies required by Material UI:

```bash
npm install @emotion/react @emotion/styled
```

---

# Step 3 — Configure Tailwind CSS

Configure Tailwind CSS with Vite.

Tailwind is used for creating responsive and utility-based layouts throughout the application.

The project can use Tailwind CSS together with:

* Material UI
* Custom CSS
* Utility CSS

This allows different UI sections to use the styling approach that fits them best.

---

# Step 4 — Create Project Structure

Create a clean and reusable folder structure inside `src`.

```text
src/
│
├── api/
├── assets/
├── components/
├── context/
├── pages/
├── reducers/
├── utility/
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

The purpose of each folder:

### `api/`

Contains API-related functions.

```text
api/
└── getAllProducts.js
```

### `assets/`

Contains project images, logos, payment logos and category images.

### `components/`

Contains reusable UI components.

### `context/`

Contains global application state.

### `pages/`

Contains complete application pages.

### `reducers/`

Contains reducer functions for cart and wishlist state.

### `utility/`

Contains helper functions and utility styles.

---

# Step 5 — Create API Integration

The project uses the **Platzi Fake Store API** to fetch product data.

## API Base URL

```text
https://api.escuelajs.co/api/v1
```

Create the API folder and file:

```text
src/
└── api/
    └── getAllProducts.js
```

## Install Axios

```bash
npm install axios
```

## `getAllProducts.js`

```javascript
import axios from 'axios'

const BaseURL = 'https://api.escuelajs.co/api/v1'

const getAllProducts = async () => {
    const url = `${BaseURL}/products`

    try {
        const { data } = await axios.get(url)

        console.log(data)

        return data
    } catch (err) {
        return err
    }
}

export default getAllProducts
```

## How It Works

```text
React Component
       ↓
getAllProducts()
       ↓
Axios GET Request
       ↓
Platzi Fake Store API
       ↓
/products
       ↓
Response Data
       ↓
Return Products
       ↓
React Component
```

## API Endpoint

```text
GET https://api.escuelajs.co/api/v1/products
```

The `getAllProducts()` function:

- Stores the API base URL.
- Creates the `/products` endpoint.
- Sends a GET request using Axios.
- Extracts the response data.
- Returns the product data.
- Handles errors using `try...catch`.

## Why Separate API Logic?

API logic is kept inside the `src/api/` folder instead of writing Axios requests directly inside React components.

This makes the application:

- Easier to maintain
- Reusable
- Better organized
- Easier to debug
- Easier to extend

Future API functions can also be added here:

```text
src/
└── api/
    ├── getAllProducts.js
    ├── getProductById.js
    ├── getCategories.js
    └── getProductsByCategory.js
```

---

# Step 6 — Build the Navbar

Create:

```text
src/components/Navbar.jsx
```

The Navbar provides the primary navigation of the application.

It can contain:

* Shop Bazaar logo
* Home navigation
* Shop navigation
* Best Sellers
* New Arrivals
* Deals
* Brands
* Wishlist
* Cart
* Login / Signup

The Navbar should remain reusable across different pages.

---

# Step 7 — Build the Footer

Create:

```text
src/components/Footer.jsx
```

The Footer provides common information and navigation links.

Possible sections:

* Shop
* Customer Support
* About
* Social links
* Payment methods
* Copyright information

The Footer is reused throughout the application.

---

# Step 8 — Build the Home Page

Create:

```text
src/pages/HomePage.jsx
```

The Home Page acts as the main landing page.

The page includes sections such as:

* Hero section
* Featured products
* Shop by categories
* Best sellers
* New arrivals
* Deals
* Promotional sections

Use assets from:

```text
src/assets/
```

and:

```text
src/assets/shopByCategories/
```

---

# Step 9 — Build Product Card

Create:

```text
src/components/ProductCard.jsx
```

The Product Card is one of the main reusable components.

It displays:

* Product image
* Product title
* Product price
* Wishlist button
* Add to Cart button
* Product-related actions

The same component can be reused wherever products are displayed.

---

# Step 10 — Build Product Listing Page

Create:

```text
src/pages/ShopPage.jsx
```

The Shop page displays products fetched from the API.

Basic flow:

```text
API
 ↓
Fetch Products
 ↓
Store Products
 ↓
Render Product Cards
 ↓
User Interaction
```

Products should be displayed using:

```text
ProductCard.jsx
```

---

# Step 11 — Create Product Bar

Create:

```text
src/components/ProductBar.jsx
```

The Product Bar can provide controls for:

* Product count
* Sorting
* Filtering
* Categories
* Search-related controls

It acts as the control area above the product listing.

---

# Step 12 — Create Sidebar Filtering

Create:

```text
src/components/Sidebar.jsx
```

The Sidebar handles product filtering.

Possible filtering options:

* Categories
* Price range
* Product type
* Other available product criteria

Filtering flow:

```text
All Products
     ↓
Filter Selection
     ↓
Filter Logic
     ↓
Filtered Products
     ↓
Product Cards
```

---

# Step 13 — Implement Cart Context

Create:

```text
src/context/cart-context.jsx
```

The Cart Context manages cart state globally.

This allows components such as:

* Navbar
* ProductCard
* CartPage
* PriceDetails

to access cart information without passing props through multiple levels.

---

# Step 14 — Create Cart Reducer

Create:

```text
src/reducers/cartReducer.jsx
```

The reducer handles cart actions such as:

```text
ADD_TO_CART
REMOVE_FROM_CART
INCREASE_QUANTITY
DECREASE_QUANTITY
```

Basic flow:

```text
User Action
    ↓
Cart Context
    ↓
Cart Reducer
    ↓
Updated Cart State
    ↓
UI Update
```

---

# Step 15 — Build Cart Page

Create:

```text
src/pages/CartPage.jsx
```

The Cart page displays all products added by the user.

Features include:

* Cart products
* Product quantity
* Increase quantity
* Decrease quantity
* Remove product
* Cart total
* Price details

---

# Step 16 — Create Price Details

Create:

```text
src/components/PriceDetails.jsx
```

This component calculates and displays:

* Item total
* Quantity
* Additional charges if required
* Final cart amount

The helper function:

```text
src/utility/getTotalCartAmmount.jsx
```

can be used for total calculation.

---

# Step 17 — Implement Wishlist Context

Create:

```text
src/context/wishlist-context.jsx
```

The Wishlist Context manages wishlist state globally.

This allows wishlist functionality to be accessed from:

* Navbar
* ProductCard
* WishlistPage
* WishlistProductCard

---

# Step 18 — Create Wishlist Reducer

Create:

```text
src/reducers/wishReducer.jsx
```

The reducer handles wishlist actions such as:

```text
ADD_TO_WISHLIST
REMOVE_FROM_WISHLIST
```

Basic flow:

```text
User Action
    ↓
Wishlist Context
    ↓
Wishlist Reducer
    ↓
Updated Wishlist
    ↓
UI Update
```

---

# Step 19 — Create Wishlist Product Card

Create:

```text
src/components/WishlistProductCard.jsx
```

This component displays products saved by the user.

Possible actions:

* Remove from Wishlist
* Add to Cart
* View product information

---

# Step 20 — Build Wishlist Page

Create:

```text
src/pages/WishlistPage.jsx
```

The Wishlist page displays all saved products.

Features:

* Wishlist product cards
* Remove from wishlist
* Add to cart
* Empty wishlist state

---

# Step 21 — Implement Persistent Data

Use browser storage to preserve important application data.

Persist:

```text
Cart
Wishlist
Authentication State
User-related Client Data
```

Basic persistence flow:

```text
Application State
       ↓
LocalStorage
       ↓
Page Refresh
       ↓
Restore State
       ↓
Application
```

This prevents cart and wishlist data from disappearing after a page refresh.

---

# Step 22 — Create Authentication Pages

Create:

```text
src/pages/auth/
│
├── LoginPage.jsx
└── SingupPage.jsx
```

### Login Page

Implement:

* Email input
* Password input
* Login action
* Validation
* Authentication state

### Signup Page

Implement:

* Name
* Email
* Password
* Confirm password
* Validation
* Account creation flow

---

# Step 23 — Implement Authentication Persistence

Store the required authentication information on the client side so that the user remains logged in after refreshing the page.

Basic flow:

```text
Login
 ↓
Authentication Success
 ↓
Store Authentication Data
 ↓
User Refreshes Page
 ↓
Restore Authentication State
```

> If authentication is implemented without a dedicated backend issuing/verifying JWTs, document it as a **client-side authentication/JWT-style flow** rather than claiming full server-side JWT security.

---

# Step 24 — Create Additional Shopping Pages

Create the remaining shopping sections:

```text
src/pages/
│
├── BestSellersPage.jsx
├── BrandsPage.jsx
├── DealsPage.jsx
└── NewArrivalsPage.jsx
```

These pages organize products into different shopping categories and promotional sections.

---

# Step 25 — Create Utility Functions

Create reusable helper functions inside:

```text
src/utility/
```

Current utilities include:

```text
findProductIn.jsx
getTotalCartAmmount.jsx
utils.css
```

These utilities help keep business logic separate from UI components.

---

# Step 26 — Configure React Router

Use:

```text
react-router-dom
```

to create application routes.

Example:

```text
/
├── Home
├── Shop
├── Best Sellers
├── New Arrivals
├── Deals
├── Brands
├── Cart
├── Wishlist
├── Login
└── Signup
```

Routing keeps the application organized as a multi-page SPA experience.

---

# Step 27 — Responsive UI

Make the complete application responsive.

Test the UI on:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Important responsive areas:

* Navbar
* Hero section
* Product grid
* Sidebar
* Cart
* Wishlist
* Footer
* Authentication pages

---

# Step 28 — UI Polish

Improve the overall user experience.

Focus on:

* Consistent spacing
* Typography
* Button states
* Hover effects
* Loading states
* Empty states
* Error states
* Responsive layouts
* Product card consistency
* Navigation experience

---

# Step 29 — Payment UI / Razorpay

Implement the payment/checkout flow if Razorpay is being used in the application.

The frontend should handle:

```text
Cart
 ↓
Price Details
 ↓
Checkout
 ↓
Razorpay
 ↓
Payment Result
```

Payment credentials should never be exposed unnecessarily in the frontend.

For production-grade payment verification, a secure backend/server-side verification layer is required.

---

# Step 30 — Test the Application

Test all major functionality.

### Home

* [ ] Home page loads correctly
* [ ] Hero section works
* [ ] Categories display correctly
* [ ] Product sections work

### Products

* [ ] Products load from API
* [ ] Product cards render correctly
* [ ] Filtering works
* [ ] Responsive grid works

### Cart

* [ ] Add product
* [ ] Remove product
* [ ] Increase quantity
* [ ] Decrease quantity
* [ ] Total updates correctly
* [ ] Data persists after refresh

### Wishlist

* [ ] Add product
* [ ] Remove product
* [ ] Add wishlist item to cart
* [ ] Data persists after refresh

### Authentication

* [ ] Signup works
* [ ] Login works
* [ ] Logout works
* [ ] Authentication state persists

### UI

* [ ] Mobile layout
* [ ] Tablet layout
* [ ] Desktop layout
* [ ] Loading states
* [ ] Empty states
* [ ] Error handling

---

# Step 31 — Production Build

Before deployment, create a production build.

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Check:

* Console errors
* Broken routes
* API requests
* Images
* Responsive design
* LocalStorage behavior
* Authentication state

---

# Step 32 — GitHub Setup

Initialize Git if required:

```bash
git init
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial Shop Bazaar project"
```

Connect the GitHub repository and push the project.

Make sure sensitive `.env` files are included in `.gitignore`.

---

# Step 33 — Deployment

The frontend can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

Before deployment, configure required environment variables in the deployment platform.

---

# 📌 Final Application Flow

```text
                    SHOP BAZAAR
                         │
        ┌────────────────┼────────────────┐
        │                │                │
      Home             Shop          Authentication
        │                │                │
        │          ┌─────┴─────┐      Login / Signup
        │          │           │
     Categories   Filter     Products
        │          │           │
        └──────────┴─────┬─────┘
                         │
                ┌────────┴────────┐
                │                 │
               Cart           Wishlist
                │                 │
         Cart Management    Wishlist Management
                │                 │
                └────────┬────────┘
                         │
                      Checkout
                         │
                    Payment Flow
```

---

# 🎯 Development Principles

While developing Shop Bazaar, follow these principles:

### 1. Reusability

Create reusable components instead of duplicating UI code.

### 2. Separation of Concerns

Keep:

```text
API Logic
UI Components
State Management
Reducers
Utility Functions
Pages
```

separated from each other.

### 3. Centralized State

Use Context API and reducers for global cart and wishlist state.

### 4. Responsive First

Every major page should work properly across mobile, tablet and desktop.

### 5. Clean Code

Use meaningful:

* Component names
* Function names
* Variables
* Folder names

### 6. Persistent User Experience

Important client-side data should survive page refreshes where appropriate.

---

# ✅ Current Project Modules

```text
✅ React + Vite
✅ Home Landing Page
✅ Product Listing
✅ Product API Integration
✅ Product Filtering
✅ Product Cards
✅ Cart
✅ Wishlist
✅ Cart Context
✅ Wishlist Context
✅ Cart Reducer
✅ Wishlist Reducer
✅ Persistent Cart
✅ Persistent Wishlist
✅ Login
✅ Signup
✅ Best Sellers
✅ New Arrivals
✅ Deals
✅ Brands
✅ Responsive UI
```

---

# 🚀 Future Modules

```text
⬜ Product Details Page
⬜ Advanced Search
⬜ Pagination
⬜ User Profile
⬜ Order History
⬜ Product Reviews
⬜ Coupon System
⬜ Advanced Authentication
⬜ Backend Integration
⬜ Database Integration
⬜ Admin Dashboard
⬜ Order Management
⬜ Advanced Payment Verification
```

---

# 🏁 Final Goal

The final goal of **Shop Bazaar** is to provide a polished, responsive and maintainable E-Commerce frontend that demonstrates practical knowledge of:

```text
React.js
     ↓
Component Architecture
     ↓
API Integration
     ↓
State Management
     ↓
Context API + useReducer
     ↓
Cart & Wishlist
     ↓
Authentication
     ↓
Persistent Client Data
     ↓
Responsive UI
     ↓
Payment Integration
```

The project is designed to be easily extendable for future backend, database, authentication and order-management features.
