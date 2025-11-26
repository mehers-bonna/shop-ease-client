"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const isLoggedIn = !!session;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to check if a route is active
  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 bg-gray-100 text-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/shopEaseLogo.png"
            alt="ShopEase Logo"
            width={60}
            height={60}
          />
          <span className="font-bold text-xl">ShopEase</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {["/", "/items", "/about", "/contact"].map((link) => {
            const label =
              link === "/" ? "Home" : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);
            return (
              <Link
                key={link}
                href={link}
                className={`px-2 py-1 rounded transition ${
                  isActive(link)
                    ? "underline bg-purple-200 text-purple-800 font-semibold"
                    : "hover:text-blue-500"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* User Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className={`px-4 py-2 rounded ${
                  isActive("/login")
                    ? "underline bg-purple-200 text-purple-800 font-semibold"
                    : "bg-purple-400 text-white hover:bg-purple-800"
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`px-4 py-2 rounded ${
                  isActive("/register")
                    ? "underline bg-purple-200 text-purple-800 font-semibold"
                    : "bg-purple-400 text-white hover:bg-purple-800"
                }`}
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative flex items-center" ref={dropdownRef}>
              <div
                className="cursor-pointer flex items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Image
                  src={session.user?.image || "/images/default-profile.png"}
                  alt={session.user?.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black border shadow-md rounded flex flex-col z-50">
                  <Link
                    href="/add-item"
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    Add Item
                  </Link>
                  <Link
                    href="/manage-items"
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    Manage Items
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full text-left px-4 py-2 hover:bg-purple-800 bg-purple-400 text-white rounded-b"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md border"
          >
            ☰
          </button>
          {mobileOpen && (
            <div className="absolute top-16 left-0 w-full bg-white border shadow-md flex flex-col p-4 space-y-2">
              {["/", "/items", "/about", "/contact"].map((link) => {
                const label =
                  link === "/" ? "Home" : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);
                return (
                  <Link
                    key={link}
                    href={link}
                    className={`px-2 py-1 rounded transition ${
                      isActive(link)
                        ? "underline bg-purple-200 text-purple-800 font-semibold"
                        : "hover:text-blue-500"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}

              {!isLoggedIn ? (
                <>
                  <Link
                    href="/login"
                    className={`px-4 py-2 rounded ${
                      isActive("/login")
                        ? "underline bg-purple-200 text-purple-800 font-semibold"
                        : "bg-purple-400 text-white hover:bg-purple-800"
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className={`px-4 py-2 rounded ${
                      isActive("/register")
                        ? "underline bg-purple-200 text-purple-800 font-semibold"
                        : "bg-purple-400 text-white hover:bg-purple-800"
                    }`}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <Image
                      src={session.user?.image || "/images/default-profile.png"}
                      alt={session.user?.name || "User"}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span>{session.user?.name || session.user?.email}</span>
                  </div>
                  {dropdownOpen && (
                    <div className="flex flex-col mt-2 border bg-white rounded shadow-md z-50">
                      <Link
                        href="/add-product"
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        Add Product
                      </Link>
                      <Link
                        href="/manage-products"
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        Manage Products
                      </Link>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="px-4 py-2 bg-purple-400 text-white hover:bg-purple-800 rounded-b"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
