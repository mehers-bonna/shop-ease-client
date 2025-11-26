"use client";
import { useEffect, useState } from "react";

export default function ManageItems() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all items from backend
  const fetchItems = async () => {
    try {
      const res = await fetch("https://shop-ease-server-pink.vercel.app/items");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Delete item
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(`https://shop-ease-server-pink.vercel.app/items/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setItems(items.filter((item) => item._id !== id));
      } else {
        setMessage(data.message || "Failed to delete item");
      }

      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("Error deleting item");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-4 text-black text-center">Manage Items</h2>

      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{message}</div>
      )}

      <div className="overflow-x-auto flex-1">
        <table className="w-full table-auto border-collapse border border-gray-200 text-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Title</th>
              <th className="border p-2 text-left">Price</th>
              <th className="border p-2 text-left">Priority</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  No items found
                </td>
              </tr>
            )}

            {items.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.price}</td>
                <td className="border p-2">{item.priority || "-"}</td>
                <td className="border p-2 space-x-2">
                  <a
                    href={`/items/${item._id}`}
                    className="px-3 py-1 bg-purple-400 text-white rounded hover:bg-purple-800"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-purple-400 text-white rounded hover:bg-purple-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
