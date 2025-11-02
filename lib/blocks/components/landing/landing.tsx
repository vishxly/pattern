"use client";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { SVGProps, useState } from "react";

//=========== SVG Icon Components ===========//

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 text-neutral-300"
    {...props}
  >
    <path d="M5 12l5 5l10 -10"></path>
  </svg>
);

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 dark:text-neutral-300 text-black"
    {...props}
  >
    <path d="M12 5l0 14"></path>
    <path d="M5 12l14 0"></path>
  </svg>
);

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 object-contain text-black dark:text-white"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-140.000000, -7559.000000)" fill="currentColor">
        <g transform="translate(56.000000, 160.000000)">
          <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
        </g>
      </g>
    </g>
  </svg>
);

const VercelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
    className="h-8 w-8 object-contain text-black dark:text-white"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096-0.322-0.208-0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
    ></path>
    <path
      fill="#f90"
      d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
    ></path>
  </svg>
);

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    className="h-4 w-4 text-yellow-400 mx-1"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
  </svg>
);

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="text-white group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// ==== NAVBAR ICONS ====
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const userAvatars = [
  {
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    name: "Robert Johnson",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Jane Smith",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Emily Davis",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Tyler Durden",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Dora",
    src: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

//=========== Navbar Component ===========//
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-2xl font-bold text-neutral-800 dark:text-neutral-200"
          >
            Velocity
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md button text-sm font-bold relative bg-black text-white hover:-translate-y-0.5 transition-transform"
            >
              Sign Up
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 inset-x-0 p-2 transition transform origin-top-right`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-50 dark:divide-neutral-800">
          <div className="px-5 pt-5 pb-6 space-y-6">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md"
              >
                Log in
              </a>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-bold text-white bg-black hover:bg-neutral-800 rounded-md"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

//=========== Footer Component ===========//
const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-full lg:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold text-neutral-800 dark:text-neutral-200"
            >
              Velocity
            </a>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Launch your projects faster than ever.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 order-2 sm:order-1 mt-4 sm:mt-0">
            © {new Date().getFullYear()} Velocity, Inc. All rights reserved.
          </p>
          <div className="flex space-x-5 order-1 sm:order-2">
            <a
              href="#"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

//=========== Main Page Component ===========//
export default function Landing1() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        {/* ======================= HERO SECTION ======================= */}
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-neutral-50 dark:bg-neutral-900">
          <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative h-full w-full">
                <div
                  style={
                    {
                      "--background": "#ffffff",
                      "--color": "rgba(0, 0, 0, 0.2)",
                      "--height": "5px",
                      "--width": "1px",
                      "--fade-stop": "90%",
                      "--offset": "150px",
                      "--color-dark": "rgba(255, 255, 255, 0.3)",
                    } as React.CSSProperties
                  }
                  className="absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] left-0"
                ></div>
                <div
                  style={
                    {
                      "--background": "#ffffff",
                      "--color": "rgba(0, 0, 0, 0.2)",
                      "--height": "5px",
                      "--width": "1px",
                      "--fade-stop": "90%",
                      "--offset": "150px",
                      "--color-dark": "rgba(255, 255, 255, 0.3)",
                    } as React.CSSProperties
                  }
                  className="absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] left-auto right-0"
                ></div>
              </div>
            ))}
          </div>

          {/* Shooting Stars */}
          <div
            className="absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent"
            style={{
              transform:
                "translateX(-140.714px) translateY(59.2857px) rotate(-45deg)",
            }}
          ></div>
          <div
            className="absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent"
            style={{
              transform: "translateX(-59px) translateY(-59px) rotate(-45deg)",
            }}
          ></div>
          <div
            className="absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent"
            style={{
              transform: "translateX(204px) translateY(-196px) rotate(-45deg)",
            }}
          ></div>
          <div
            className="absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent"
            style={{
              transform:
                "translateX(443.5px) translateY(-156.5px) rotate(-45deg)",
            }}
          ></div>

          <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl">
            <h2>
              <span className="inline-block">Go </span>
              <span className="inline-block">from </span>
              <span className="inline-block">Code </span>
              <span className="inline-block">to </span>
              <span className="inline-block">Live </span>
              <span className="inline-block">in </span>
              <span className="inline-block">a Flash. </span>
              <span className="inline-block">Launch </span>
              <span className="inline-block">Effortlessly. </span>
            </h2>
          </div>
          <p className="relative z-20 mx-auto mt-4 max-w-lg px-4 text-center text-base/6 text-gray-600 dark:text-gray-200">
            Leverage our next-generation, high-performance hosting platform. We
            handle the infrastructure, so you can focus on building.
          </p>
          <div className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row md:mb-20">
            <a
              className="px-4 py-2 rounded-md button text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block w-40 text-center"
              href="/login"
            >
              Sign Up Now
            </a>
            <button
              className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block w-40"
              data-cal-namespace="chat-with-manu-demo"
              data-cal-link="manu-arora-vesr9s/chat-with-manu-demo"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a Demo
            </button>
          </div>

          <div className="relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4">
            <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
              <Image
                alt="header"
                loading="lazy"
                width={1920}
                height={1080}
                decoding="async"
                className="rounded-[20px]"
                style={{ color: "transparent" }}
                src="https://assets.aceternity.com/pro/dashboard-new.webp"
              />
            </div>
          </div>
        </div>

        {/* ======================= FEATURES SECTION ======================= */}
        <div
          id="features"
          className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8 scroll-mt-20"
        >
          <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
            <div className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full">
              <div className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
              <div className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
              <div className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
            </div>
            <h2 className="font-sans text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
              Streamlined for Maximum Velocity
            </h2>
          </div>
          <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
            We simplify the entire process, from repository to global
            deployment.
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem] max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-3">
              <div className="overflow-hidden relative w-full h-full">
                <div className="relative flex items-center justify-center w-full h-full">
                  <svg
                    width="128"
                    height="69"
                    viewBox="0 0 128 69"
                    fill="none"
                    className="absolute left-1/2 -translate-x-[90%] -top-2 text-neutral-200 dark:text-neutral-800"
                  >
                    <path
                      d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
                      stroke="currentColor"
                      strokeWidth="1"
                    ></path>
                    <path
                      d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
                      stroke="url(#gradient-2)"
                      strokeWidth="1"
                    ></path>
                    <defs>
                      <linearGradient
                        id="gradient-2"
                        x1="28.36149%"
                        y1="25.52534%"
                        x2="34.03379%"
                        y2="34.03379%"
                      >
                        <stop stopColor="#001AFF" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#6DD4F5"></stop>
                        <stop
                          offset="1"
                          stopColor="#6DD4F5"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="105"
                    viewBox="0 0 62 105"
                    fill="none"
                    className="absolute left-1/2 -translate-x-0 -bottom-2 dark:text-neutral-800 text-neutral-200"
                  >
                    <path
                      d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
                      stroke="currentColor"
                      strokeWidth="1"
                    ></path>
                    <path
                      d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
                      stroke="url(#gradient-1)"
                      strokeWidth="1"
                    ></path>
                    <defs>
                      <linearGradient
                        id="gradient-1"
                        x1="76.92148%"
                        y1="69.22933%"
                        x2="92.30578%"
                        y2="92.30578%"
                      >
                        <stop stopColor="#001AFF" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#6DD4F5"></stop>
                        <stop
                          offset="1"
                          stopColor="#6DD4F5"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto w-full relative z-30 [perspective:1000px] [transform-style:preserve-3d] p-8 sm:p-0">
                    <div className="w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg flex bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 overflow-hidden px-2 flex-col justify-center font-mono items-start text-neutral-800 dark:text-neutral-300">
                      <p className="text-[8px] bg-transparent">git add .</p>
                      <p className="text-[8px] bg-transparent">
                        git commit -m &quot;feat: launch&quot;
                      </p>
                      <p className="text-[8px] bg-transparent">
                        git push origin main
                      </p>
                    </div>
                    <div className="w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg flex items-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 justify-center">
                      <GithubIcon />
                    </div>
                    <div className="w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 flex flex-col justify-center items-center">
                      <VercelIcon />
                      <p className="text-[8px] bg-transparent">
                        your project is live 🚀
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 h-40">
                <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">
                  Effortless Git-Based Deployment
                </h3>
                <p className="font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400">
                  Connect your repository and push. We automate the build and
                  deployment process instantly.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-2">
              <div className="p-6 h-40">
                <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">
                  Unified Control Panel
                </h3>
                <p className="font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400">
                  Manage all your projects from a single, intuitive dashboard.
                  No more complicated command lines.
                </p>
              </div>
              <div className="overflow-hidden relative w-full h-full">
                <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
                  <Image
                    alt="Dashboard"
                    loading="lazy"
                    width={500}
                    height={500}
                    decoding="async"
                    className="w-full object-cover rounded-lg "
                    style={{ color: "transparent" }}
                    src="https://assets.aceternity.com/pro/dashboard.webp"
                  />
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-2">
              <div className="p-6 h-40">
                <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">
                  Global Edge Network
                </h3>
                <p className="font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400">
                  Serve your content from data centers around the world,
                  ensuring the lowest latency for your users.
                </p>
              </div>
              <div className="overflow-hidden relative w-full h-full">
                <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
                  <canvas
                    style={{
                      width: "600px",
                      height: "600px",
                      maxWidth: "100%",
                      aspectRatio: "1 / 1",
                    }}
                    className="absolute -right-0 md:-right-10 -bottom-80 md:-bottom-72"
                    width="1000"
                    height="1200"
                  ></canvas>
                </div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-3">
              <div className="p-6 h-40">
                <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">
                  Smart AI-Assisted Development
                </h3>
                <p className="font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400">
                  Utilize our integrated AI tools to generate boilerplate code,
                  write tests, and more.
                </p>
              </div>
              <div className="overflow-hidden relative w-full h-full">
                <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
                  <Image
                    alt="Dashboard"
                    loading="lazy"
                    width="500"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover rounded-lg "
                    style={{ color: "transparent" }}
                    src="https://assets.aceternity.com/pro/dashboard.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================= PRICING SECTION ======================= */}
        <div
          id="pricing"
          className="relative isolate bg-white dark:bg-neutral-950 w-full px-4 py-0 sm:py-20 lg:px-4 scroll-mt-20"
        >
          <h2 className="pt-4 font-bold text-lg md:text-4xl text-center text-neutral-800 dark:text-neutral-100">
            Transparent Plans for Every Scale
          </h2>
          <p className="max-w-md mx-auto text-base text-center text-neutral-600 dark:text-neutral-300 mt-4">
            Choose the perfect tier for your project. No hidden fees, just pure
            performance and speed.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-20 max-w-7xl mx-auto md:grid-cols-2 xl:grid-cols-3">
            {/* Pricing Tier 1: Personal */}
            <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
              <div className="flex flex-col gap-4 h-full justify-start">
                <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                  <div className="flex justify-between items-start ">
                    <div className="flex gap-2 flex-col">
                      <p className="font-medium text-lg text-black dark:text-white">
                        Personal
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 ">
                    <div className="flex items-end">
                      <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                        $
                      </span>
                      <div className="flex items-start gap-2">
                        <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                          19
                        </span>
                      </div>
                      <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                        /month
                      </span>
                    </div>
                  </div>
                  <a className="px-4 py-2 rounded-md button text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10">
                    Choose Personal
                  </a>
                </div>
                <div className="mt-1 p-4">
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Standard performance analytics
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Up to 25,000 monthly views
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Standard email support
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Access to our community
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Flexible subscription
                    </div>
                  </div>
                </div>
                <div className="p-4"></div>
              </div>
            </div>
            {/* Pricing Tier 2: Growth */}
            <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
              <div className="flex flex-col gap-4 h-full justify-start">
                <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                  <div className="flex justify-between items-start ">
                    <div className="flex gap-2 flex-col">
                      <p className="font-medium text-lg text-black dark:text-white">
                        Growth
                      </p>
                    </div>
                    <div className="font-medium text-xs px-3 py-1 rounded-full relative bg-neutral-900 dark:bg-white dark:text-black text-white">
                      <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                      Most Popular
                    </div>
                  </div>
                  <div className="mt-8 ">
                    <div className="flex items-end">
                      <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                        $
                      </span>
                      <div className="flex items-start gap-2">
                        <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                          79
                        </span>
                      </div>
                      <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                        /month
                      </span>
                    </div>
                  </div>
                  <a className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10">
                    Choose Growth
                  </a>
                </div>
                <div className="mt-1 p-4">
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      In-depth analytics suite
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Custom reporting tools
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Live visitor monitoring
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Third-party service integrations
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-px dark:bg-neutral-950 bg-white"></div>
                  <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>
                  <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center">
                    <PlusIcon />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                      <CheckIcon className="text-white" />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Everything in Personal Plan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pricing Tier 3: Enterprise */}
            <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
              <div className="flex flex-col gap-4 h-full justify-start">
                <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                  <div className="flex justify-between items-start ">
                    <div className="flex gap-2 flex-col">
                      <p className="font-medium text-lg text-black dark:text-white">
                        Enterprise
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 ">
                    <div className="flex items-end">
                      <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                        $
                      </span>
                      <div className="flex items-start gap-2">
                        <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                          149
                        </span>
                      </div>
                      <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                        /month
                      </span>
                    </div>
                  </div>
                  <a className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10">
                    Choose Enterprise
                  </a>
                </div>
                <div className="mt-1 p-4">
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Infinite data retention
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Bespoke dashboard creation
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Advanced audience segmentation
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Priority data handling
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                      <CheckIcon />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Predictive AI analysis
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-px dark:bg-neutral-950 bg-white"></div>
                  <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>
                  <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center">
                    <PlusIcon />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                      <CheckIcon className="text-white" />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Everything in Personal Plan
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                      <CheckIcon className="text-white" />
                    </div>
                    <div className="font-medium text-black text-sm dark:text-white">
                      Everything in Growth Plan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================= CONTACT SECTION ======================= */}
        <div
          id="contact"
          className=" px-4 w-full md:px-8 bg-white dark:bg-neutral-950 py-20 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
            <div className="flex flex-col">
              <h2 className="text-black dark:text-white text-xl text-center md:text-left md:text-3xl font-bold mx-auto md:mx-0 max-w-xl ">
                Ready to Launch <br />
                Your Next Big Idea?
              </h2>
              <p className="max-w-md mt-8 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-600 dark:text-neutral-400">
                Discover the speed and stability of our premium hosting
                environment. We provide a robust platform with a 99.99% uptime
                SLA, so you can build with confidence.
              </p>
              <div className="flex flex-col items-center mt-10 mb-10 md:items-start">
                <div className="flex flex-col sm:flex-row mb-2 lg:justify-start justify-start items-center">
                  <div className="flex flex-row items-center mb-4 sm:mb-0">
                    {userAvatars.map((avatar, index) => (
                      <div key={index} className="-mr-4 relative group">
                        <div
                          style={{
                            transform: `rotate(${Math.random() * 20 - 10}deg)`,
                          }}
                          className="rounded-2xl overflow-hidden border-2 border-neutral-200 relative"
                        >
                          <Image
                            alt={avatar.name}
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            className="object-cover object-top h-14 w-14"
                            src={avatar.src}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center ml-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-neutral-400 text-sm relative z-40 lg:text-left text-center">
                  Empowering over 30,000+ creators worldwide
                </p>
              </div>
            </div>
            <button
              data-cal-namespace="chat-with-manu-demo"
              data-cal-link="manu-arora-vesr9s/chat-with-manu-demo"
              data-cal-config='{"layout":"month_view"}'
              className="flex space-x-2 items-center group text-base px-4 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
            >
              <span>Schedule a Demo</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
