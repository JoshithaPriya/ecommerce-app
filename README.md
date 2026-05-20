# E-Commerce Web Application

A simple full-stack E-Commerce web application built using the MERN stack.  
This application allows users to register, log in, browse products, add products to cart, remove items from cart, and simulate checkout functionality.

---

# Features

- User Registration & Login
- JWT Authentication
- Product Listing
- Add To Cart
- Remove From Cart
- Cart Total Calculation
- Checkout Functionality
- MongoDB Database Integration
- Responsive Product Layout

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT (JSON Web Token)
- bcryptjs

---

# Folder Structure

ecommerce-app/

├── client/

│ ├── src/

│ ├── public/

│ └── package.json

│

├── server/

│ ├── models/

│ ├── routes/

│ ├── middleware/

│ ├── server.js

│ └── package.json

---

# API Routes

## Authentication Routes

- POST `/api/auth/register`
- POST `/api/auth/login`

## Product Routes

- GET `/api/products`
- POST `/api/products`

---

# Installation

## Clone Repository

```bash
git clone <repository-link>