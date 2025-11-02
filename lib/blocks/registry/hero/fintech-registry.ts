// lib/blocks/registry/fintech-registry.ts

import FinetechLandingPage from "../../components/hero/fintech";
import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

export const fintechRegistry: LandingComponentGroup = {
  title: "Fintech Landing",
  description:
    "Bold, modern UI with smooth gradients and a clear call-to-action.",
  category: "Hero",
  variants: {
    default: {
      title: "Fintech Landing",
      description:
        "Bold, modern UI with smooth gradients and a clear call-to-action.",
      component: FinetechLandingPage,
      image: "/images/blocks/hero/fintech.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState } from "react";
import {  Menu, X } from "lucide-react";

const FinetechLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-4 bg-transparent">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-gray-800">
            Finetech
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-800 font-semibold hover:text-orange-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 font-medium hover:text-gray-600 transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-400 font-medium hover:text-gray-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-400 font-medium hover:text-gray-600 transition-colors"
          >
            Resources
          </a>
        </div>

        {/* Desktop Sign Up Button */}
        <button className="hidden sm:block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm">
          <div className="absolute top-16 right-4 left-4 bg-white rounded-2xl shadow-2xl py-6 px-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-800 font-semibold text-lg py-2 hover:text-orange-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium text-lg py-2 hover:text-gray-800 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium text-lg py-2 hover:text-gray-800 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium text-lg py-2 hover:text-gray-800 transition-colors"
              >
                Resources
              </a>
              <button className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-medium text-sm tracking-wide hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative">
        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 pt-8 sm:pt-16 pb-16 sm:pb-32">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-400 leading-tight mb-2 sm:mb-4">
            Empower Your Finances
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-8">
            with Seamless Payments
          </h1>

          <div className="max-w-sm sm:max-w-2xl mx-auto mb-6 sm:mb-12">
            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              Join us today and experience the future of payments.
              <span className="text-orange-500 font-semibold"> Sign up</span>
            </p>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium leading-relaxed mt-1 sm:mt-2">
              now to unlock exclusive features and benefits.
            </p>
          </div>

          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base tracking-wide hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Gradient Arc Background */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <div className="relative w-full h-full">
            {/* Main Large Arc - responsive sizing */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
              <div
                className="w-full h-full"
                style={{
                  background: \`
                    radial-gradient(ellipse 800px 300px at center bottom,
                      rgba(255, 154, 0, 0.9) 0%,
                      rgba(255, 119, 48, 0.8) 15%,
                      rgba(255, 87, 34, 0.7) 30%,
                      rgba(255, 154, 0, 0.5) 45%,
                      rgba(255, 183, 77, 0.3) 60%,
                      rgba(255, 193, 7, 0.15) 75%,
                      transparent 90%
                    )
                  \`,
                  clipPath: "ellipse(70% 80% at 50% 100%)",
                  filter: "blur(1px)",
                }}
              />
            </div>

            {/* Secondary Arc for depth - mobile optimized */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-3/4 sm:h-4/5">
              <div
                className="w-full h-full"
                style={{
                  background: \`
                    radial-gradient(ellipse 600px 250px at center bottom,
                      rgba(255, 193, 7, 1) 0%,
                      rgba(255, 152, 0, 0.9) 20%,
                      rgba(255, 87, 34, 0.7) 40%,
                      rgba(255, 154, 0, 0.4) 65%,
                      transparent 85%
                    )
                  \`,
                  clipPath: "ellipse(65% 75% at 50% 100%)",
                }}
              />
            </div>

            {/* Bright Center Core - mobile optimized */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 sm:w-1/2 h-2/5 sm:h-1/2">
              <div
                className="w-full h-full"
                style={{
                  background: \`
                    radial-gradient(ellipse 300px 150px at center bottom,
                      rgba(255, 255, 255, 0.95) 0%,
                      rgba(255, 193, 7, 0.8) 25%,
                      rgba(255, 152, 0, 0.6) 50%,
                      transparent 80%
                    )
                  \`,
                  clipPath: "ellipse(55% 70% at 50% 100%)",
                }}
              />
            </div>

            {/* Outer Soft Glow - responsive */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
              <div
                className="w-full h-full"
                style={{
                  background: \`
                    radial-gradient(ellipse 1000px 400px at center bottom,
                      rgba(255, 183, 77, 0.4) 0%,
                      rgba(255, 154, 0, 0.2) 30%,
                      rgba(255, 193, 7, 0.1) 60%,
                      transparent 85%
                    )
                  \`,
                  clipPath: "ellipse(75% 85% at 50% 100%)",
                }}
              />
            </div>

            {/* Bright Central Point - responsive sizing */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full opacity-90 shadow-2xl">
              <div className="absolute inset-0.5 sm:inset-1 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-pulse"></div>
            </div>

            {/* Additional Light Points - responsive */}
            <div className="absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 translate-x-8 sm:translate-x-16 w-2 h-2 sm:w-3 sm:h-3 bg-orange-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 -translate-x-10 sm:-translate-x-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-300 rounded-full opacity-50 animate-ping"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 translate-x-4 sm:translate-x-8 w-1 h-1 bg-orange-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Payment Icons - responsive positioning and sizing */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-between items-center px-8 sm:px-16 z-20">
          {/* MasterCard Icon - responsive sizing */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
              <div className="absolute left-0 w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-full opacity-90"></div>
              <div className="absolute right-0 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full opacity-90"></div>
              <div className="absolute left-2 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full opacity-60 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Visa Logo - responsive sizing */}
          <div className="text-right">
            <div className="text-lg sm:text-2xl font-bold text-blue-700 tracking-wider">
              VISA
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient background for mobile - extends further down */}
      <div className="sm:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none"></div>

      {/* Trust & Stats Section */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-100">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-gray-400 text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
              Trusted by millions worldwide
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                50M+
              </h3>
              <p className="text-gray-500 text-sm sm:text-base font-medium">
                Active Users
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-blue-100 to-indigo-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full group-hover:animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                $2.5B
              </h3>
              <p className="text-gray-500 text-sm sm:text-base font-medium">
                Processed Daily
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg transform -rotate-12 group-hover:rotate-12 transition-transform duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                180+
              </h3>
              <p className="text-gray-500 text-sm sm:text-base font-medium">
                Countries
              </p>
            </div>

            <div className="text-center group col-span-2 lg:col-span-1">
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full group-hover:animate-spin transition-transform duration-1000"></div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                99.9%
              </h3>
              <p className="text-gray-500 text-sm sm:text-base font-medium">
                Uptime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Showcase Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Experience the Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Digital Payments
                </span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Seamless transactions, instant settlements, and world-class
                security all in one revolutionary platform.
              </p>
            </div>

            {/* Interactive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-7 h-7 bg-white rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Instant Processing
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Lightning-fast transactions processed in milliseconds across
                    the globe.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-orange-500">
                    0.3s
                  </span>
                  <span className="text-gray-400 text-sm ml-1">avg time</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div
                  className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-7 h-7 bg-white rounded-full group-hover:animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Bank-Level Security
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Military-grade encryption protecting every transaction and
                    user data.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-blue-500">
                    256-bit
                  </span>
                  <span className="text-gray-400 text-sm ml-1">encryption</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1">
                <div
                  className="absolute top-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-7 h-7 bg-white rounded-lg transform -rotate-12 group-hover:rotate-12 transition-transform duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Global Reach
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Send and receive payments anywhere in the world, anytime.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-purple-500">
                    24/7
                  </span>
                  <span className="text-gray-400 text-sm ml-1">
                    availability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-red-300 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

export default FinetechLandingPage;
`,
    },
  },
};
