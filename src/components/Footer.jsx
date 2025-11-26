"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-t ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/shopEaseLogo.png"
              alt="Shop-ease Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="font-bold text-xl">ShopEase</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/items" className="hover:text-blue-500">Items</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/*Copyright */}
      <div className="text-center text-sm py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} ShopEase All rights reserved.
      </div>
    </footer>
  );
}
