# 🛍️ Shopify – MERN Stack E-commerce Application

Shopify is a full-featured eCommerce web application built using the **MERN stack (MongoDB, Express, React, Node.js)**. It includes robust functionality like user authentication with **refresh token storage in Redis**, a **coupon system**, **featured product caching**, **shopping cart**, and a **payment system**, providing a seamless user experience from browsing to checkout.

---

## Work Flow


## 🚀 Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication
  - Refresh tokens securely stored in **Redis**
  - Role-based access control for admin/user

- 🛒 **E-commerce Functionality**
  - Product listings with categories and filters
  - Add to cart, update quantity, and remove items
  - Wishlist management
  - Featured products cached with **Redis** for performance

- 🎟️ **Coupon System**
  - Create, apply, and validate discount coupons
  - Admin management for coupon creation and expiration


- 📦 **Order Management**
  - Users can view order history and track status

- ⚙️ **Admin Dashboard**
  - Manage users, products, coupons, and orders
  - Analytics & featured product management

- 💡 **Performance Optimization**
  - Redis caching for featured products
  - Efficient API endpoints
  - Lazy loading and optimized component rendering in React

---

## 🧑‍💻 Tech Stack

### Frontend:
- **React.js**
- **Redux Toolkit**
- **React Router**
- **Axios**
- **Tailwind CSS / CSS Modules** *(Specify which styling tool you use)*

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **Redis** for caching and refresh token storage
- **JWT** for authentication
