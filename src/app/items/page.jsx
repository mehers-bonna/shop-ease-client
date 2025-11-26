"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex justify-center">
      <div className="max-w-6xl w-full">

        <h1 className="text-3xl font-bold mb-2 text-center text-black">All Items</h1>
        <p className="text-gray-600 text-center mb-6">
          Explore our latest products at Shop Ease
        </p>

        {/* Search + Category (UI only) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          
          {/* Search Bar (UI only) */}
          <input
            type="text"
            placeholder="Search items..."
            className="w-full sm:flex-1 px-4 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          {/* Category Filter (UI only) */}
          <select
            className="w-full sm:w-48 px-3 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Accessories</option>
            <option>Home</option>
          </select>

        </div>

        {/*Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border rounded-xl shadow-md 
                         hover:shadow-xl hover:-translate-y-1 
                         transition transform duration-200 p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />

              <h2 className="text-lg font-semibold mb-1 text-pink-800">{item.title}</h2>

              <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                {item.description}
              </p>

              <p className="text-blue-600 font-bold text-lg mb-3">
                ৳ {item.price}
              </p>

              {/* View Details Button */}
              <Link
                href={`/items/${item._id}`}
                className="mt-auto bg-purple-400 text-white text-center 
                           py-2 rounded-lg hover:bg-purple-800 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
