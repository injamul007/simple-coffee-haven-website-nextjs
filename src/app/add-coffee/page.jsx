"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

export default function AddItemPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    brand: "",
    features: "",
    inStock: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const categories = [
    "Espresso",
    "Cappuccino",
    "Latte",
    "Mocha",
    "Americano",
    "Cold Brew",
    "Flat White",
    "Macchiato",
    "Specialty",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Product name is required");
      return false;
    }
    if (!formData.description.trim()) {
      setError("Product description is required");
      return false;
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      setError("Valid price is required");
      return false;
    }
    if (!formData.category) {
      setError("Category is required");
      return false;
    }
    if (!formData.image.trim()) {
      setError("Image URL is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    // Simulate form submission with a small delay
    setTimeout(() => {
      setLoading(false);
      setSuccess("✓ Form submission successful! (Frontend-only demonstration)");

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        brand: "",
        features: "",
        inStock: true,
      });

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/items");
      }, 2000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-cream-50 w-full overflow-x-hidden">
      <Navbar />

      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-coffee-900 mb-2">
              Add New Coffee
            </h1>
            <p className="text-coffee-600">
              Fill in the details below to add a new coffee to the Coffee Haven
              catalog.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                {success}
              </div>
            )}

            {/* Coffee Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-coffee-900 mb-2"
              >
                Coffee Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-coffee-700 focus:border-coffee-700"
                placeholder="e.g., Italian Espresso, Smooth Latte"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-coffee-900 mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-coffee-700 focus:border-coffee-700"
                placeholder="Describe the coffee flavor profile, origin, and characteristics"
              />
            </div>

            {/* Price and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-coffee-900 mb-2"
                >
                  Price ($) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-coffee-700 focus:border-coffee-700"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-coffee-900 mb-2"
                >
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-coffee-700 focus:border-coffee-700"
                >
                  <option value="">Select a coffee category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Brand */}
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-coffee-900 mb-2"
              >
                Origin/Roastery
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-coffee-700 focus:border-coffee-700"
                placeholder="e.g., Ethiopian Highlands, Brazilian Roastery"
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-coffee-900 mb-2"
              >
                Image URL *
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-coffee-700 focus:border-coffee-700"
                placeholder="https://example.com/coffee-image.jpg"
              />
              <p className="mt-1 text-sm text-coffee-600">
                Use high-quality coffee images from Unsplash or similar services
                for best results.
              </p>
            </div>

            {/* Features */}
            <div>
              <label
                htmlFor="features"
                className="block text-sm font-medium text-coffee-900 mb-2"
              >
                Tasting Notes
              </label>
              <textarea
                id="features"
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-coffee-700 focus:border-coffee-700"
                placeholder="e.g., Smooth, Nutty, Dark Chocolate, Hints of Caramel, Full-bodied"
              />
              <p className="mt-1 text-sm text-coffee-600">
                Describe the flavor profile and characteristics separated by
                commas.
              </p>
            </div>

            {/* In Stock */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="inStock"
                name="inStock"
                checked={formData.inStock}
                onChange={handleInputChange}
                className="h-4 w-4 text-coffee-700 focus:ring-coffee-700 border-cream-300 rounded"
              />
              <label
                htmlFor="inStock"
                className="ml-2 block text-sm text-coffee-900"
              >
                Coffee is available in stock
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => router.push("/items")}
                className="bg-cream-200 hover:bg-cream-300 text-coffee-800 font-medium py-3 px-6 rounded-full transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-coffee-700 hover:bg-coffee-800 text-cream-50 font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
                    Adding Coffee...
                  </div>
                ) : (
                  "Add Coffee"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
