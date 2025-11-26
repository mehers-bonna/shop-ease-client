##Project Description
Shopease is a modern e-commerce web application built with **Next.js 13** and **Tailwind CSS**. It allows users to browse products, view details, and for authenticated users, manage items directly from the website. The project demonstrates server-side rendering, client-side interactivity, and authentication integration with **NextAuth.js**.


##Live link:  https://shop-ease-client-smoky.vercel.app


###Setup & Installation

1.Clone the repository:  
   ```bash
   git clone https://github.com/your-username/shopease.git
   cd shopease

2.Install dependencies:
npm install

3.Run the development server:
npm run dev



##Route Summary

 `/`  Home page – displays featured products and main banner 
 `/items`  items page – browse all items in a grid layout 
 `/items/[id]`  items details page – shows full information of a selected product 
 `/login`  Login page – user authentication via NextAuth.js 
 `/register`  Register page – user authentication via NextAuth.js 
 `/add-item`  Add Item page – visible only after login; allows authenticated users to add new products (accessible via navbar profile hover) 
 `/manage-items`  Manage Items page – visible only after login; allows authenticated users to update or delete existing products (accessible via navbar profile hover) 
 `/about`  About page – information about the shop 
 `/contact`  Contact page – contact form or details  


 **Note:**  
After logging in, hover over your username or profile in the navbar to access **Add Item** and **Manage Items**.  
Only authenticated users will see these options.




Features

Responsive layout (mobile & desktop friendly)

Tailwind CSS styling

Authentication with NextAuth.js

Product add/manage features for admin users

Product details functionality