"use client";

import { useState } from "react";

export default function AddItem() {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    date: "",
    priority: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState(""); 
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await fetch("https://shop-ease-server-pink.vercel.app/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Item added successfully!");
        setFormData({
          title: "",
          shortDescription: "",
          fullDescription: "",
          price: "",
          date: "",
          priority: "",
          imageUrl: "",
        });
      } else {
        setError(data.message || "Failed to add item");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-10">
      <div className="w-full max-w-lg p-6 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Add Item</h2>

        {message && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded text-center">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Short Description"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleChange}
            placeholder="Full Description"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            placeholder="Priority"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL (optional)"
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-purple-400 text-white py-2 rounded hover:bg-purple-800"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
