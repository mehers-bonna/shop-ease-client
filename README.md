# 🛍️ ShopEase - Modern E-commerce Platform

ShopEase is a high-performance e-commerce web application built with **Next.js 14**, **Tailwind CSS**, and the **MERN** stack. It features a seamless shopping experience with server-side rendering, role-based access, and secure authentication.

## 🚀 Live Links
- **Live Website:** https://shop-ease-server-pink.vercel.app/
- **Server Repository:** https://github.com/mehers-bonna/shop-ease-server.git

---

## 📸 Project Preview
<p align="center">
  <img src="shopEase.PNG" alt="ShopEase Screenshot" width="100%" />
</p>

---

## 📖 Project Overview
ShopEase provides a modern shopping interface where users can explore a wide range of products. The application focuses on speed and user experience, utilizing **Next.js** for optimal performance. Authenticated users (Admins) gain access to specialized inventory management tools directly from the UI.

### 👤 Key Functionalities
- **Public Users:** Can browse the Home page, view all items in a grid layout, and see detailed product information.
- **Authenticated Users (Admin):** Can add new products, update existing product details, and delete items through a private management dashboard.
- **Authentication:** Secure login and registration powered by **NextAuth.js**.

---

## ✨ Features
- **Server-Side Rendering (SSR):** Optimized SEO and fast page loads using Next.js.
- **Responsive Design:** Fully mobile and desktop-friendly UI built with Tailwind CSS.
- **Authentication:** Secure user sessions with NextAuth.js.
- **Inventory Management:** CRUD operations (Create, Read, Update, Delete) for products.
- **Protected Routes:** Only logged-in users can access `Add Item` and `Manage Items`.
- **User-Friendly Navigation:** Profile-hover dropdown menu for quick access to admin tools.

---

## 🛠️ Technologies Used

### **Frontend:**
![Next.js](https://img.shields.io/badge/next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=flat&logo=next.js&logoColor=white)

### **Backend & Database:**
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)

---

## 📍 Route Summary
- `/` - **Home Page:** Featured products and main banner.
- `/items` - **All Items:** Browse all products in a responsive grid.
- `/items/[id]` - **Details:** Complete information for a specific product.
- `/login` / `/register` - **Auth:** User authentication via NextAuth.
- `/add-item` - **Admin:** Form to add new products (Protected).
- `/manage-items` - **Admin:** Dashboard to Update/Delete products (Protected).
- `/about` / `/contact` - **Company:** General info and contact form.

---

## 💻 Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mehers-bonna/shop-ease-server.git
   cd shop-ease

2. npm install

3. Set up Environment Variables: Create a .env.local file and add your credentials:

MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_secret
NEXT_PUBLIC_API_URL=your_backend_url

4.npm run dev
