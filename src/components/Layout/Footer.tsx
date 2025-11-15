import { Button } from "../Shared/Button";
import LOGO from '../../assets/images/logo.svg';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-16">
        <div className="grid gap-12 md:grid-cols-[5fr_2fr_2fr_2fr]">
          <div className="w-auto">
            <div className="space-y-6">
              <div>
                <img src={LOGO} alt="logo" />
              </div>
              <div className="flex gap-2 w-2/3 items-center">
                <input
                  type="email"
                  placeholder="Get latest offers to your inbox"
                  className="flex-1 h-12 rounded-md border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  aria-label="Subscribe"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  aria-label="Visit Facebook page"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Visit LinkedIn page"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Visit Instagram page"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Visit Twitter page"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <p className="font-semibold text-gray-900 text-base">Shop</p>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                My account
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Login
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Wishlist
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Cart
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <p className="font-semibold text-gray-900 text-base">Information</p>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Shipping Policy
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Returns & Refunds
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Cookies Policy
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Frequently asked
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="font-semibold text-gray-900 text-base">Company</p>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                About us
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Terms & Conditions
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dashed border-gray-300 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-600">
          <p>© John Lewis plc 2001 - 2024</p>
        </div>
      </div>
    </footer>
  );
}
