import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Navbar from "../../components/navbar/navbar3";

export const navbar3Registry: LandingComponentGroup = {
  title: "Cursor",
  description: " Navbar with Cursor",
  category: "Navbar",
  variants: {
    default: {
      title: "Cursor",
      description: " Navbar with Cursor",
      component: Navbar,
      image: "/images/blocks/navbar/navbar3.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/features", label: "Features" },
    { href: "/enterprise", label: "Enterprise" },
    { href: "/blog", label: "Blog" },
    { href: "https://docs.cursor.com", label: "Docs", external: true },
    { href: "https://anysphere.inc/", label: "Careers", external: true },
  ];

  return (
    <nav className=" z-[999] w-full lg:top-6 ">
      <div className="container !max-w-[1672px] !px-6 md:!px-9 mx-auto">
        <div className="relative flex h-[var(--navbar-height)] w-full items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 px-2 py-1.5 transition-all duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem] bg-white/90 shadow-[0px_5px_18px_rgba(204,_204,_204,_0.2)] backdrop-blur-sm  dark:bg-black/90 dark:shadow-[0px_5px_18px_rgba(204,_204,_204,_0.1)]">
          {/* Logo */}
          <Link
            aria-label="Homepage"
            href="/home"
            className="relative flex w-fit items-center gap-0.5 overflow-hidden lg:px-3"
          >
            <div className="pointer-events-none relative -ml-0.5 size-6 mix-blend-multiply dark:mix-blend-lighten lg:-ml-1 lg:mr-px lg:size-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
                className="absolute transition-opacity duration-500 w-full h-full"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  className="fill-black dark:fill-white"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="12"
                  fill="white"
                  className="select-none"
                >
                  LOGO
                </text>
              </svg>
            </div>

            <svg
              className="h-[13px] text-black dark:text-white lg:h-[17px]"
              fill="currentColor"
              viewBox="0 0 69 13"
            >
              <path d="M.61621 6.43836c0-3.50869 2.23066-5.4743 5.49005-5.4743h3.91414v2.09026H6.23091c-1.99579 0-3.35255 1.13895-3.35255 3.38404 0 2.2451 1.35676 3.38404 3.35255 3.38404h3.78949v2.0903H6.10626c-3.25939 0-5.49005-1.99582-5.49005-5.47434Z" />
            </svg>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex col-start-2 gap-5 px-2 font-medium text-neutral-700 dark:text-neutral-300 xl:gap-6">
            {navLinks.map(({ href, label, external }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="transition-colors duration-300 p-2 hover:text-black hover:bg-neutral-100 dark:hover:text-white dark:hover:bg-neutral-800 rounded-md motion-reduce:transition-none"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth & Download */}
          <div className="col-start-3 hidden w-full justify-end gap-2 lg:flex">
            <Link
              href="/api/auth/login"
              className="relative inline-flex items-center justify-center rounded-lg border bg-white text-black border-neutral-100 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 px-4 py-3.5 font-medium text-sm"
            >
              Sign in
            </Link>
            <button
              className="relative inline-flex items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-3.5 font-medium text-sm after:absolute after:inset-0 after:bg-gradient-to-t after:from-neutral-800 after:to-neutral-600 dark:after:from-neutral-200 dark:after:to-neutral-100 hover:before:opacity-100 before:opacity-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_100px_at_var(--mask-x)_var(--mask-y),_rgba(255,255,255,0.2)_0%,_transparent_100%)]"
              style={
                { "--mask-x": "50%", "--mask-y": "50%" } as React.CSSProperties
              }
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="w-3 md:w-3.5"
                  fill="currentColor"
                  viewBox="0 0 14 16"
                >
                  <path d="M13.9984.98236c-2.53.35112-5.06001.71507-7.58521 1.10147a3272.65486 3272.65486 0 0 0 0 5.60513C8.9432 7.68094 11.4716 7.64246 14 7.63284c-.0016-2.21736 0-4.43312-.0016-6.65048Z" />
                </svg>
                Download
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="contents">
            <button
              className="relative size-6 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menu"
            >
              <svg
                className="-ml-2 -mt-2 size-10"
                viewBox="0 0 100 100"
                width="24"
                strokeWidth="5.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                <path d="m 70,50 h -40" />
                <path d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-2 flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-md dark:border-neutral-800 dark:bg-black"
          >
            {navLinks.map(({ href, label, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                {label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/api/auth/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-lg border bg-white px-4 py-2 text-sm font-medium text-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              >
                Sign in
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}`,
    },
  },
};
