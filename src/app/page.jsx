"use client";
import React, { useEffect, useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data.slice(0, 6))) 
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="bg-white pb-10"> 
      {/* Welcome Section */}
      <div className="text-center p-8 bg-zinc-50 dark:bg-white">
        <h2 className="text-2xl text-black font-bold mb-4">Welcome to ShopEase</h2>
        <p className="text-black">Your favorite online shop to get everything in one place!</p>
      </div>
      
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Items Grid First 6 items */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <h3 className="text-2xl font-bold mb-4 text-center text-black">Featured Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform duration-200 p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold text-pink-800 mb-1">{item.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2 mb-2">{item.description}</p>
              <p className="text-blue-600 font-bold text-lg mb-3">৳ {item.price}</p>
              <Link
                href={`/items/${item._id}`}
                className="mt-auto bg-purple-400 text-white text-center py-2 rounded-lg hover:bg-purple-800 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* 🔹 View All Items Button */}
        <div className="text-center mt-8">
          <Link
            href="/items"
            className="inline-block bg-purple-400 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition"
          >
            View All Items
          </Link>
        </div>
      </div>
    </main>
  );
}
