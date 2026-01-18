"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

function LoginPageContent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/coffee-menu";

  const handleDemoLogin = () => {
    setFormData({
      email: process.env.NEXT_PUBLIC_email,
      password: process.env.NEXT_PUBLIC_password,
    });
    setError("");
  };

  useEffect(() => {
    // Check if already authenticated
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth-token="));

    if (authCookie) {
      try {
        const authData = JSON.parse(
          decodeURIComponent(authCookie.split("=")[1]),
        );
        if (authData.isAuthenticated) {
          router.push(callbackUrl);
        }
      } catch (error) {
        console.error("Error parsing auth cookie:", error);
      }
    }
  }, [router, callbackUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Mock authentication - hardcoded credentials
    const validCredentials = {
      email: process.env.NEXT_PUBLIC_email,
      password: process.env.NEXT_PUBLIC_password,
    };

    try {
      //  API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (
        formData.email === validCredentials.email &&
        formData.password === validCredentials.password
      ) {
        // Create auth token
        const authToken = {
          isAuthenticated: true,
          email: formData.email,
          timestamp: Date.now(),
        };

        // Set cookie (expires in 24 hours)
        const expires = new Date();
        expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `auth-token=${encodeURIComponent(JSON.stringify(authToken))}; expires=${expires.toUTCString()}; path=/`;

        // Redirect to callback URL or items page
        router.push(callbackUrl);
      } else {
        setError(
          "Invalid email or password. Use admin@coffeehaven.com / coffee123",
        );
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen cream-gradient">
      <Navbar />

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-coffee-900">
              Welcome Back to Coffee Haven
            </h2>
            <p className="mt-2 text-coffee-600">
              Sign in to access your coffee preferences and order history
            </p>
            <p className="mt-4 text-sm text-coffee-600">
              Or{" "}
              <Link
                href="/items"
                className="font-medium text-coffee-700 hover:text-coffee-800"
              >
                continue browsing our coffee menu as guest
              </Link>
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-cream-200">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="bg-coffee-50 border border-coffee-200 px-4 py-4 rounded-lg space-y-3">
                <p className="text-sm text-coffee-800 font-medium text-center">
                  Demo Login Auto-fill button
                </p>

                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="w-full py-2.5 rounded-full border border-coffee-300 text-coffee-800 hover:bg-coffee-100 transition font-medium"
                >
                  Admin Demo Login Button
                </button>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-coffee-800"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 appearance-none relative block w-full px-3 py-3 border border-cream-300 placeholder-coffee-400 text-coffee-900 rounded-lg focus:outline-none focus:ring-coffee-500 focus:border-coffee-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-coffee-800"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 appearance-none relative block w-full px-3 py-3 border border-cream-300 placeholder-coffee-400 text-coffee-900 rounded-lg focus:outline-none focus:ring-coffee-500 focus:border-coffee-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-cream-50 coffee-gradient hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coffee-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-cream-50"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    "Sign in to Coffee Haven"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}
