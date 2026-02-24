import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-indigo-600">
          Personal Finance Dashboard
        </h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-indigo-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg w-3/4 text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg w-3/4 text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Take Control of Your Personal Finances
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Track expenses, manage income, and build better financial habits — all
          in one powerful dashboard.
        </p>

        <Link
          to="/signup"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Tracking Today
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Personal Finance Dashboard ?
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3 text-indigo-600">
              Expense Tracking
            </h4>
            <p className="text-gray-600">
              Easily to log and categorize your expenses to understand where
              your money goes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3 text-indigo-600">
              Smart Insights
            </h4>
            <p className="text-gray-600">
              Visual reports and analytics help you make better financial
              decisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3 text-indigo-600">
              Secure & Reliable
            </h4>
            <p className="text-gray-600">
              Your data is encrypted and protected with modern authentication.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-indigo-600 text-white text-center py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">
          Ready to manage your money in smarter way?
        </h3>
        <Link
          to="/signup"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Create Free Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© 2026 Personal Finance Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
