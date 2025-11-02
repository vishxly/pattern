"use client";

import React from "react";
import Image from "next/image";
import { Apple, CirclePlay } from "lucide-react";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}
interface HeroSectionProps {
  className?: string;
}

const StripeHeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <main className={`bg-muted/50 -mt-14.5 overflow-hidden ${className}`}>
        <header
          className={`${className}`}
          data-state={isMenuOpen ? "active" : "inactive"}
        >
          <div className="max-lg:data-[state=active]:bg-background/75 max-lg:data-[state=active]:h-screen max-lg:data-[state=active]:backdrop-blur max-lg:h-18 fixed inset-x-0  z-50 pt-2 max-lg:overflow-hidden max-lg:px-2 lg:pt-3">
            <div
              className={`
            mx-auto w-full max-w-6xl rounded-2xl border border-transparent px-3 shadow-md shadow-transparent ring-1 ring-transparent transition-all duration-500 ease-in-out 
            max-lg:data-[state=active]:backdrop-blur max-lg:data-[state=active]:ring-foreground/5 max-lg:data-[state=active]:bg-background/75 max-lg:data-[state=active]:px-5 max-lg:data-[state=active]:shadow-black/10
            ${
              isScrolled
                ? "ring-foreground/5 bg-background/75 shadow-black/10 max-w-4xl max-lg:px-5 backdrop-blur"
                : ""
            }
          `}
              data-scrolled={isScrolled}
            >
              <div className="relative flex flex-wrap items-center justify-between lg:py-3">
                <div className="max-lg:data-[state=active]:border-b flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full">
                  {/* Logo */}
                  <Link
                    href="/"
                    aria-label="home"
                    className={`h-fit transition-all duration-500 ${
                      isScrolled ? "lg:px-2" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 214"
                      className={`h-7 w-14 ${
                        !isScrolled ? "[&>*]:fill-foreground" : ""
                      }`}
                    >
                      <path
                        fill="#635BFF"
                        d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774"
                      />
                    </svg>
                  </Link>

                  {/* Mobile Menu Button */}
                  <button
                    aria-label="Open Menu"
                    className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
                    onClick={toggleMenu}
                    data-state={isMenuOpen ? "active" : "inactive"}
                  >
                    {/* Hamburger Icon */}
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
                      className={`m-auto size-5 duration-200 ${
                        isMenuOpen ? "rotate-180 scale-0 opacity-0" : ""
                      }`}
                    >
                      <line x1="4" x2="20" y1="12" y2="12"></line>
                      <line x1="4" x2="20" y1="6" y2="6"></line>
                      <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>

                    {/* Close Icon */}
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
                      className={`absolute inset-0 m-auto size-5 duration-200 ${
                        isMenuOpen
                          ? "rotate-0 scale-100 opacity-100"
                          : "-rotate-180 scale-0 opacity-0"
                      }`}
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Navigation Menu */}
                <div
                  className={`
                mb-6 w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent
                ${isMenuOpen ? "max-lg:mt-6 flex" : "hidden lg:flex"}
              `}
                  data-state={isMenuOpen ? "active" : "inactive"}
                >
                  <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                    {/* Sign In Button */}
                    <Link
                      href="#"
                      className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                      onClick={closeMenu}
                    >
                      <span>Sign In</span>
                    </Link>

                    {/* Contact Sales Button */}
                    <Link
                      href="#"
                      className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 rounded-md px-3 text-xs"
                      onClick={closeMenu}
                    >
                      <span>Contact Sales</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="relative pb-36 pt-44">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_20%,transparent_55%)]">
              <div className="aspect-square" style={{ transform: "none" }}>
                <Image
                  alt="clouds"
                  width={5000}
                  height={5000}
                  className="-translate-y-1/12 absolute inset-0 w-full h-screen"
                  src="/clouds.webp"
                  priority
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="relative mx-auto max-w-5xl px-6">
              <div className="text-center">
                <div>
                  <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl lg:mt-8">
                    Your Personal AI, With you Anywhere
                  </h1>
                  <p className="mx-auto my-6 max-w-2xl text-balance text-xl">
                    Craft. Build. Ship Modern Websites.
                  </p>

                  {/* Download Buttons */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-10 rounded-md px-8"
                      href="#link"
                    >
                      <Apple />
                      <span className="text-nowrap">iPhone</span>
                    </a>
                    <a
                      className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-10 rounded-md px-8"
                      href="#link"
                    >
                      <CirclePlay />
                      <span className="text-nowrap">Android</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="mask-b-from-75% relative overflow-hidden pt-12">
                <div className="relative overflow-hidden pt-0.5">
                  <div className="bg-background max-w-76 m-auto rounded-t-2xl border border-transparent p-2 shadow-2xl ring-1 ring-black/10 ">
                    <Image
                      alt="app screen"
                      width={2880}
                      height={1842}
                      className="w-full h-auto rounded-2xl border border-black/10 shadow shadow-black/5"
                      src="/mob.png"
                    />
                  </div>
                </div>
              </div>

              {/* Award Section */}
              <div className="relative mx-auto flex aspect-video w-52 justify-between text-center">
                <div className="absolute inset-0 m-auto size-fit">
                  <Apple className="mx-auto size-5" />
                  <span className="my-1 block font-medium">Best Design</span>
                  <span className="text-muted-foreground block text-xs font-medium">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StripeHeroSection;
