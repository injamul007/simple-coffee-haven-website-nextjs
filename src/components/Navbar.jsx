"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    if (typeof window !== "undefined") {
      const authCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth-token="));

      if (authCookie) {
        try {
          const authData = JSON.parse(
            decodeURIComponent(authCookie.split("=")[1]),
          );
          if (authData.isAuthenticated) {
            setIsAuthenticated(true);
            setUserEmail(authData.email);
          }
        } catch (error) {
          console.error("Error parsing auth cookie:", error);
        }
      }
    }
  };

  const handleLogout = () => {
    // Clear auth cookie
    document.cookie =
      "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
    setUserEmail("");
    router.push("/");
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-cream-200 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img
                  src="/coffee_haven_logo.png"
                  alt="Coffee Haven Logo"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-2xl font-bold text-coffee-800">
                Coffee Haven
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-coffee-700 hover:text-coffee-800 px-2 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/coffee-menu"
              className="text-coffee-700 hover:text-coffee-800 px-2 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Coffee Menu
            </Link>

            <Link
              href="/about-us"
              className="text-coffee-700 hover:text-coffee-800 px-2 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About Us
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/add-coffee"
                  className="text-coffee-700 hover:text-coffee-800 px-2 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Add Coffee
                </Link>
                <span className="text-sm text-coffee-600">
                  Welcome, {userEmail}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-coffee-700 hover:text-coffee-800 focus:outline-none focus:text-coffee-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full overflow-x-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-cream-200 w-full">
              <Link
                href="/"
                className="block text-coffee-700 hover:text-coffee-800 px-3 py-1 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/coffee-menu"
                className="block text-coffee-700 hover:text-coffee-800 px-3 py-1 rounded-md text-base font-medium"
              >
                Coffee Menu
              </Link>

              <Link
                href="/about-us"
                className="block text-coffee-700 hover:text-coffee-800 px-3 py-1 rounded-md text-base font-medium"
              >
                About Us
              </Link>

              {isAuthenticated ? (
                <>
                  <Link
                    href="/add-item"
                    className="block text-coffee-700 hover:text-coffee-800 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Add Coffee
                  </Link>
                  <div className="px-3 py-2">
                    <span className="text-sm text-coffee-600">
                      Welcome, {userEmail}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="block btn-primary mx-3">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
