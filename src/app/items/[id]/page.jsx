"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ItemDetailsPage() {
    const router = useRouter();
    const pathname = usePathname();

    const [id, setId] = useState(null);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    // Extract item ID from URL
    useEffect(() => {
        if (!pathname) return;
        const segments = pathname.split("/");
        const itemId = segments[segments.length - 1];
        setId(itemId);
    }, [pathname]);

    // Fetch item data from Express backend
    useEffect(() => {
        if (!id) return;

        async function loadItem() {
            try {
                console.log("Fetching item with ID:", id);
                const res = await fetch(`https://shop-ease-server-pink.vercel.app/items/${id}`);

                if (!res.ok) {
                    throw new Error(`Failed to fetch item: ${res.status}`);
                }

                const data = await res.json();
                console.log("Fetched Item:", data);
                setItem(data);
            } catch (err) {
                console.error("Error fetching item:", err);
                setItem(null);
            } finally {
                setLoading(false);
            }
        }

        loadItem();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-xl text-gray-600">
                Loading Item Details...
            </div>
        );
    }

    if (!item) {
        return (
            <div className="min-h-screen flex justify-center items-center text-xl text-red-600">
                Item not found!
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-10">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Product Image */}
                    <div>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-96 object-cover rounded-xl shadow-lg border"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-between">

                        {/* Price */}
                        <p className="text-4xl font-extrabold text-blue-600 mb-6">
                            ৳ {item.price?.toLocaleString("en-IN")}
                        </p>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                                Product Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {item.description}
                            </p>
                        </div>

                        {/* Meta Info */}
                        <div className="text-sm text-gray-500 space-y-2 pt-4 border-t">
                            <p><strong>Item ID:</strong> {item._id}</p>
                            {item.date_added && (
                                <p>
                                    <strong>Added On:</strong>{" "}
                                    {new Date(item.date_added).toLocaleDateString()}
                                </p>
                            )}
                            {item.priority && (
                                <p><strong>Priority:</strong> {item.priority}</p>
                            )}
                        </div>

                        {/* Back Button */}
                        <button
                            onClick={() => router.back()}
                            className="w-full bg-purple-400 text-white text-lg font-medium py-3 rounded-lg mt-8 hover:bg-purple-800 transition shadow-md"
                        >
                            ← Back to All Items
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
