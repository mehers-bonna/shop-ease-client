import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About ShopEase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ShopEase is your go-to online marketplace for effortless shopping.
            We make buying and selling easy, fast, and enjoyable.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to make online shopping seamless and enjoyable for
              everyone by providing a wide range of products and exceptional service.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              We envision a world where shopping online feels as personal and
              reliable as walking into your favorite local store.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/shopping.jpg"
              alt="Shopping"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Why Choose ShopEase?
            </h3>
            <p className="text-gray-600 mb-4">
              At ShopEase, we combine variety, affordability, and convenience,
              ensuring every customer finds what they need quickly and securely.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fast & Secure Checkout</li>
              <li>Wide Range of Products</li>
              <li>Customer-Centric Support</li>
              <li>Exclusive Deals & Discounts</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Meet the Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Alice", "Bob", "Charlie", "Diana"].map((name) => (
              <div key={name} className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`/images/profile.jpg`}
                    alt={name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                <p className="text-gray-500 text-sm">Team Member</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
