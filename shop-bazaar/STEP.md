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

Create the Navbar component:

```text
src/components/Navbar.jsx
```

The Navbar is one of the main reusable components of the application.

It contains:

- Shop Bazaar logo
- Search bar
- Wishlist icon
- Cart icon
- Account/Login icon
- Navigation using React Router DOM
- Material UI icons
- Tailwind CSS styling

---

## Import Required Dependencies

First, import the required Material UI icons, logo asset, and `useNavigate` from React Router DOM.

```javascript
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
```

---

## Create the Navbar Component

Create the `Navbar` functional component and initialize `useNavigate()`.

```javascript
const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
      {/* Navbar UI */}
    </>
  );
};

export default Navbar;
```

The `useNavigate()` hook is used to navigate between different pages without reloading the application.

---

## Add the Navbar Header

Create the main header using Tailwind CSS classes.

```javascript
<header className="flex flex-wrap justify-between w-full h-16 items-center bg-background text-text-primary-secondary">

</header>
```

The header uses:

- Full width
- Fixed height
- Flexbox
- Space between elements
- Center alignment
- Custom background color
- Custom text color

---

## Add Shop Bazaar Logo

Import the logo from the assets folder:

```javascript
import logo from '../assets/logo.png'
```

Then add the logo inside the Navbar:

```javascript
<div
  className="flex flex-wrap ml-10"
  onClick={() => navigate('/')}
>
  <img
    src={logo}
    className="w-35 cursor-pointer"
  />
</div>
```

When the user clicks the logo, the user is navigated to the Home page:

```text
/
```

---

## Add Search Bar

Create the search input in the center section of the Navbar.

```javascript
<div className="flex flex-wrap w-[45vw] h-10 relative text-text-light">

  <input
    type="text"
    placeholder="Search for products, brands and more..."
    className="w-screen outline-none border px-10 py-2 rounded-md"
  />

  <SearchOutlinedIcon className="top-2.5 left-3.5 flex absolute" />

  <div className="cursor-pointer h-10.5 w-14 absolute right-0 rounded-md flex flex-wrap bg-indigo-600">

    <SearchOutlinedIcon
      className="top-2.5 right-3.5 flex absolute text-white outline-none"
    />

  </div>

</div>
```

The search section contains:

- Search input
- Search icon
- Search button
- Placeholder text
- Responsive width
- Tailwind CSS styling

The `SearchOutlinedIcon` is provided by Material UI Icons.

---

## Add Wishlist, Cart and Account Icons

Create the action section on the right side of the Navbar.

```javascript
<div className="flex flex-wrap gap-6 mr-10">

  <FavoriteBorderOutlinedIcon
    onClick={() => navigate('/wishlist')}
    className="cursor-pointer"
  />

  <ShoppingCartOutlinedIcon
    onClick={() => navigate('/cart')}
    className="cursor-pointer"
  />

  <AccountCircleOutlinedIcon
    onClick={() => navigate('/auth/login')}
    className="cursor-pointer"
  />

</div>
```

The three icons provide navigation to different sections.

### Wishlist

```javascript
onClick={() => navigate('/wishlist')}
```

Navigates to:

```text
/wishlist
```

### Cart

```javascript
onClick={() => navigate('/cart')}
```

Navigates to:

```text
/cart
```

### Account

```javascript
onClick={() => navigate('/auth/login')}
```

Navigates to:

```text
/auth/login
```

---

## Complete Navbar Code

The final `Navbar.jsx` file:

```javascript
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
      <header className="flex flex-wrap justify-between w-full h-16 items-center bg-background text-text-primary-secondary">

        <div
          className="flex flex-wrap ml-10"
          onClick={() => navigate('/')}
        >
          <img
            src={logo}
            className="w-35 cursor-pointer"
          />
        </div>

        <div className="flex flex-wrap w-[45vw] h-10 relative text-text-light">

          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="w-screen outline-none border px-10 py-2 rounded-md"
          />

          <SearchOutlinedIcon className="top-2.5 left-3.5 flex absolute" />

          <div className="cursor-pointer h-10.5 w-14 absolute right-0 rounded-md flex flex-wrap bg-indigo-600">

            <SearchOutlinedIcon
              className="top-2.5 right-3.5 flex absolute text-white outline-none"
            />

          </div>

        </div>

        <div className="flex flex-wrap gap-6 mr-10">

          <FavoriteBorderOutlinedIcon
            onClick={() => navigate('/wishlist')}
            className="cursor-pointer"
          />

          <ShoppingCartOutlinedIcon
            onClick={() => navigate('/cart')}
            className="cursor-pointer"
          />

          <AccountCircleOutlinedIcon
            onClick={() => navigate('/auth/login')}
            className="cursor-pointer"
          />

        </div>

      </header>
    </>
  );
};

export default Navbar;
```

---

## Navbar Structure

```text
Navbar
│
├── Logo
│   └── Home Navigation
│
├── Search Section
│   ├── Search Input
│   ├── Search Icon
│   └── Search Button
│
└── Action Section
    ├── Wishlist
    ├── Cart
    └── Account
```

---

## Technologies Used

The Navbar uses the following technologies:

- React.js
- React Router DOM
- Tailwind CSS
- Material UI Icons
- Local Assets

The Navbar is created as a reusable component so it can be imported and used across different pages of the Shop Bazaar application.

---

# Step 7 — Build the Product Bar

Create the ProductBar component:

```text
src/components/ProductBar.jsx
```

The ProductBar is a secondary navigation component placed below the main Navbar.

It provides:

- Category section
- Home navigation
- Shop navigation
- Deals navigation
- New Arrivals navigation
- Best Sellers navigation
- Brands navigation
- Active navigation styling
- Hover effects
- Material UI icons
- React Router navigation

---

## Import Required Dependencies

Import the required Material UI icons and `NavLink` from React Router DOM.

```javascript
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { NavLink } from "react-router-dom";
```

The two Material UI icons are used for the Category section:

- `DensityMediumOutlinedIcon` — Category menu icon
- `KeyboardArrowDownOutlinedIcon` — Dropdown arrow icon

`NavLink` is used for navigation and active-link styling.

---

## Create the ProductBar Component

Create the `ProductBar` functional component.

```javascript
const ProductBar = () => {
  return (
    <header>
      {/* Product Bar */}
    </header>
  );
};

export default ProductBar;
```

---

## Create Active Navigation Styling

Create a reusable `getStyle` function to control the appearance of navigation links.

```javascript
const getStyle = ({ isActive }) => {
  const styles =
    "relative cursor-pointer transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200";

  return isActive
    ? `text-primary after:w-full ${styles}`
    : `text-text-primary hover:text-primary hover:after:w-full after:w-0 ${styles}`;
};
```

The `isActive` value is provided by `NavLink`.

### Active Link

When a route is active:

```text
text-primary
```

is applied and the underline becomes visible.

```text
after:w-full
```

### Inactive Link

For inactive links:

```text
text-text-primary
```

is applied.

On hover:

```text
hover:text-primary
hover:after:w-full
```

makes the link change color and display the underline.

---

## Create the ProductBar Header

Create the main ProductBar container.

```javascript
<header className="flex h-12 w-screen flex-wrap bg-background-soft font-semibold">

</header>
```

The ProductBar uses:

- Full viewport width
- Fixed height
- Flexbox
- Background styling
- Font weight
- Responsive wrapping

---

## Create Category Section

The left side of the ProductBar contains the Category section.

```javascript
<div className="mx-10 flex h-full w-35 flex-wrap items-center border-r border-border">

  <li className="flex items-center gap-2 text-text-primary">

    <DensityMediumOutlinedIcon />

    Category

    <KeyboardArrowDownOutlinedIcon />

  </li>

</div>
```

The Category section contains:

- Menu icon
- Category text
- Dropdown arrow
- Right border separator

The Category section currently acts as a navigation UI element.

---

## Create Navigation Links

Create the main navigation section:

```javascript
<div className="flex flex-wrap gap-7">

  <NavLink to="/" className={getStyle}>
    Home
  </NavLink>

  <NavLink to="/shop" className={getStyle}>
    Shop
  </NavLink>

  <NavLink to="/deals" className={getStyle}>
    Deals
  </NavLink>

  <NavLink to="/new_arrivels" className={getStyle}>
    New Arrivals
  </NavLink>

  <NavLink to="/best_sellers" className={getStyle}>
    Best Sellers
  </NavLink>

  <NavLink to="/brands" className={getStyle}>
    Brands
  </NavLink>

</div>
```

The navigation links are:

| Link | Route |
|---|---|
| Home | `/` |
| Shop | `/shop` |
| Deals | `/deals` |
| New Arrivals | `/new_arrivels` |
| Best Sellers | `/best_sellers` |
| Brands | `/brands` |

---

## Complete `ProductBar.jsx`

```javascript
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { NavLink } from "react-router-dom";

const ProductBar = () => {
  const getStyle = ({ isActive }) => {
    const styles =
      "relative cursor-pointer transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200";

    return isActive
      ? `text-primary after:w-full ${styles}`
      : `text-text-primary hover:text-primary hover:after:w-full after:w-0 ${styles}`;
  };

  return (
    <header className="flex h-12 w-screen flex-wrap bg-background-soft font-semibold">
      <ul className="flex w-screen flex-wrap items-center">

        {/* ================= CATEGORY ================= */}

        <div className="mx-10 flex h-full w-35 flex-wrap items-center border-r border-border">

          <li className="flex items-center gap-2 text-text-primary">

            <DensityMediumOutlinedIcon />

            Category

            <KeyboardArrowDownOutlinedIcon />

          </li>

        </div>

        {/* ================= NAVIGATION ================= */}

        <div className="flex flex-wrap gap-7">

          <NavLink to="/" className={getStyle}>
            Home
          </NavLink>

          <NavLink to="/shop" className={getStyle}>
            Shop
          </NavLink>

          <NavLink to="/deals" className={getStyle}>
            Deals
          </NavLink>

          <NavLink to="/new_arrivels" className={getStyle}>
            New Arrivals
          </NavLink>

          <NavLink to="/best_sellers" className={getStyle}>
            Best Sellers
          </NavLink>

          <NavLink to="/brands" className={getStyle}>
            Brands
          </NavLink>

        </div>

      </ul>
    </header>
  );
};

export default ProductBar;
```

---

## ProductBar Structure

```text
ProductBar
│
├── Category
│   ├── Menu Icon
│   ├── Category Text
│   └── Dropdown Icon
│
└── Navigation
    ├── Home
    ├── Shop
    ├── Deals
    ├── New Arrivals
    ├── Best Sellers
    └── Brands
```

---

## Active Link Behavior

The `NavLink` component automatically provides the `isActive` value.

For example:

```javascript
<NavLink to="/shop" className={getStyle}>
  Shop
</NavLink>
```

When the current URL is:

```text
/shop
```

the Shop link receives the active styling.

The active link displays:

- Primary text color
- Full underline
- Smooth transition

Inactive links display:

- Default text color
- Hover primary color
- Animated underline on hover

---

## Technologies Used

The ProductBar uses:

- React.js
- React Router DOM
- `NavLink`
- Tailwind CSS
- Material UI Icons

The ProductBar is maintained as a separate reusable component and can be included below the main `Navbar` throughout the application.

# Step 8 — Build the Footer

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
