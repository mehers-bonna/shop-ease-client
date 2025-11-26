import React from "react";

export default function ContactPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team at ShopEase is here to help you.
            Reach out and we’ll respond as quickly as possible.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Office</h3>
              <p className="text-gray-600">123 ShopEase Street, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">support@shopease.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">+880 1234 567890</p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Follow Us</h3>
              <div className="flex space-x-4 text-gray-600">
                <a href="#" className="hover:text-blue-600 transition-colors">Facebook</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="hover:text-pink-500 transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="ShopEase Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.899157896847!2d90.4074265!3d23.810331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b9e0f2e7b1%3A0x8d6f0c9d5b3f9c3a!2sDhaka!5e0!3m2!1sen!2sbd!4v1698243312064!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
