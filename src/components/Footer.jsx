import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="coffee-gradient text-cream-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  src="/coffee_haven_logo.png"
                  alt="Coffee Haven Logo"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-3xl font-bold text-cream-100">
                Coffee Haven
              </h3>
            </div>
            <p className="text-cream-200 mb-6 max-w-md leading-relaxed">
              Your premium coffee destination. We serve the finest coffee
              crafted with passion, using ethically sourced beans and expert
              brewing techniques.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-cream-300 hover:text-cream-100 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-cream-300 hover:text-cream-100 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.87 1.18 4 4 0 0 1 7.87-1.18z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="text-cream-300 hover:text-cream-100 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.901 2H22L14.44 10.39L23.5 22H16.5L10.94 14.94L4.5 22H1.4L9.4 13.14L0.5 2H7.7L12.73 8.44L18.9 2ZM17.8 20H19.6L6.7 4H4.8L17.8 20Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cream-100">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-cream-200 hover:text-cream-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/coffee-menu"
                  className="text-cream-200 hover:text-cream-100 transition-colors"
                >
                  Coffee Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-cream-200 hover:text-cream-100 transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-cream-200 hover:text-cream-100 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cream-100">Visit Us</h4>
            <ul className="space-y-3 text-cream-200">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>hello@coffeehaven.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>House 35, S.W (a, 29 Rd No 11) Gulshan, Dhaka-1212</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🕒</span>
                <span>Daily: 6AM-11PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-200/20">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-cream-300 text-sm">
              © {currentYear} Coffee Haven. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
