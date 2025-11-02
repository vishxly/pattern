import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Navbar from "../../components/navbar/navbar2";

export const navbar2Registry: LandingComponentGroup = {
  title: "Linear Navbar",
  description: "A simple and elegant navbar for your landing page.",
  category: "Navbar",
  variants: {
    default: {
      title: "Linear Navbar",
      description: "A simple and elegant navbar for your landing page.",
      component: Navbar,
      image: "/images/blocks/navbar/navbar2.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/features", label: "Product" },
    { href: "/about", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
    { href: "/customers", label: "Customers" },
    { href: "/now", label: "Now", hidden: "lg:hidden" },
    { href: "/contact", label: "Contact" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50 dark:bg-black dark:border-gray-800 ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/homepage"
          aria-label="Navigate to home"
          className="flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-black dark:text-white"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.508.003a.826.826 0 00-.737.223l-11.62 11.62a.826.826 0 000 1.168l12.785 12.786a.826.826 0 001.168 0l11.62-11.62a.826.826 0 000-1.168L15.74.226a.826.826 0 00-.738-.223zm3.488 8.726L8.73 18.005l3.02 3.02 9.268-9.269-3.02-3.02z"
            />
          </svg>
          <span className="text-lg font-semibold text-neutral-900 dark:text-white">
            Linear
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-neutral-900 dark:text-neutral-200">
          {navLinks.map(({ href, label, hidden }) => (
            <li key={href} className={hidden}>
              <Link
                href={href}
                className={\`transition-colors hover:text-blue-600 dark:hover:text-blue-400 \${
                  pathname === href ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
                }\`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="px-4 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-700 transition dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Open App
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-neutral-700 hover:text-blue-600 transition dark:text-neutral-200 dark:hover:text-blue-400"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="border border-neutral-300 px-4 py-1.5 rounded-md text-neutral-900 hover:bg-neutral-100 transition dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-800"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900 dark:text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t px-4 py-4 space-y-3 bg-white shadow-sm dark:bg-black dark:border-neutral-800">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-neutral-900 hover:text-blue-600 transition dark:text-neutral-200 dark:hover:text-blue-400"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="block text-neutral-900 hover:text-blue-600 transition dark:text-neutral-200 dark:hover:text-blue-400"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="block text-neutral-900 hover:text-blue-600 transition dark:text-neutral-200 dark:hover:text-blue-400"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}`,
    },
  },
};
