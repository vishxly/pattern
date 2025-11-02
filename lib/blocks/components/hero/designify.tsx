"use client";
import React, { useState } from "react";
import { Play, Search } from "lucide-react";

const DesignifyLanding = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cloudy Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-white">
        {/* Cloud formations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60">
          <div className="absolute top-10 left-20 w-96 h-32 bg-white/40 rounded-full blur-xl transform rotate-12"></div>
          <div className="absolute top-32 right-40 w-80 h-24 bg-white/50 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-64 h-20 bg-white/30 rounded-full blur-xl transform -rotate-6"></div>
          <div className="absolute top-60 left-10 w-72 h-28 bg-white/45 rounded-full blur-2xl transform rotate-3"></div>
          <div className="absolute top-80 right-60 w-88 h-36 bg-white/35 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-1/3 w-60 h-24 bg-white/40 rounded-full blur-xl transform -rotate-12"></div>
          <div className="absolute bottom-60 left-40 w-96 h-40 bg-white/30 rounded-full blur-3xl transform rotate-6"></div>
          <div className="absolute bottom-40 right-20 w-80 h-32 bg-white/50 rounded-full blur-2xl"></div>
          <div className="absolute bottom-80 right-1/3 w-72 h-28 bg-white/40 rounded-full blur-xl transform rotate-15"></div>
        </div>

        {/* Additional atmospheric layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-blue-100/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-white via-sky-100 to-blue-100 rounded-xl flex items-center justify-center shadow-md">
            <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-white rounded-md flex items-center justify-center shadow-inner">
              <div className="w-2.5 h-2.5 sm:w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-gray-800 tracking-tight">
              Designify
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 leading-tight -mt-0.5">
              Let’s go together
            </p>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-5 h-0.5 bg-gray-700 transform transition ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-700 mt-1 transition ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-700 mt-1 transform transition ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Features
          </button>
          <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Contact Us
          </button>
          <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Login
          </button>
          <button className="bg-gradient-to-br from-white via-sky-100 to-blue-100 hover:from-sky-50 hover:via-white hover:to-blue-200 text-blue-700 px-5 lg:px-7 py-2.5 lg:py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base">
            Book a Demo
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg border border-white/40 rounded-b-xl shadow-lg md:hidden">
            <div className="p-4 space-y-3">
              <button className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium py-2">
                Features
              </button>
              <button className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium py-2">
                Contact Us
              </button>
              <button className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium py-2">
                Login
              </button>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-full font-medium transition-colors shadow-sm">
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Trust indicators */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white/70 backdrop-blur-xl rounded-full px-5 sm:px-7 py-2.5 sm:py-3.5 shadow-xl border border-white/30 max-w-full transition-all duration-300 hover:scale-[1.015]">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Color avatars */}
              <div className="flex -space-x-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-pink-400 to-pink-500 border-2 border-white shadow-md"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-400 to-blue-500 border-2 border-white shadow-md"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-green-400 to-green-500 border-2 border-white shadow-md"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-500 border-2 border-white shadow-md"></div>
              </div>

              {/* Trust text */}
              <span className="text-gray-700 text-sm sm:text-base">
                Trusted by{" "}
                <span className="font-semibold text-gray-900">1,500+</span>{" "}
                companies
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-gray-900 leading-tight mb-4 sm:mb-6 lg:mb-8">
            Build Intelligent Workflows
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            That Scale{" "}
            <span className="relative bg-white px-2 sm:px-4 py-1 rounded-full border-2 sm:border-4 border-white shadow-sm inline-block">
              Infinitely
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4 sm:px-0">
            Stop wrestling with manual processes. Create powerful automation
            workflows that adapt,
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            learn, and evolve with your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 px-4 sm:px-0">
            <button className="w-full text-black sm:w-auto bg-gradient-to-r from-sky-200 via-white to-blue-200 hover:from-sky-300 hover:to-blue-300  font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 backdrop-blur-md border-2 border-white/20">
              ☁️ Book a Demo
            </button>

            <button className="w-full sm:w-auto bg-white/80 backdrop-blur-md hover:bg-white/90 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg border border-white/60 flex items-center justify-center space-x-2">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* More prominent clouds above dashboard */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <div className="relative">
            {/* Main central cloud cluster */}
            <div className="w-64 sm:w-80 lg:w-96  bg-white/70 rounded-full blur-2xl"></div>

            {/* Left side clouds */}
            <div className="absolute -top-3 sm:-top-4 -left-8 sm:-left-12 w-40 sm:w-48 lg:w-56 h-12 sm:h-16 lg:h-20 bg-white/60 rounded-full blur-xl transform -rotate-12"></div>
            <div className="absolute top-2 sm:top-3 -left-16 sm:-left-20 w-32 sm:w-40 lg:w-48 h-10 sm:h-12 lg:h-16 bg-white/50 rounded-full blur-lg transform rotate-6"></div>

            {/* Right side clouds */}
            <div className="absolute -top-2 sm:-top-3 -right-10 sm:-right-16 w-36 sm:w-44 lg:w-52 h-14 sm:h-18 lg:h-22 bg-white/65 rounded-full blur-xl transform rotate-8"></div>
            <div className="absolute top-4 sm:top-5 -right-20 sm:-right-24 w-28 sm:w-36 lg:w-44 h-8 sm:h-10 lg:h-14 bg-white/55 rounded-full blur-lg transform -rotate-3"></div>

            {/* Additional smaller clouds for depth */}
            <div className="absolute -top-6 sm:-top-8 left-1/4 w-24 sm:w-32 lg:w-40 h-8 sm:h-10 lg:h-12 bg-white/45 rounded-full blur-md transform rotate-15"></div>
            <div className="absolute -top-1 right-1/3 w-20 sm:w-28 lg:w-36 h-6 sm:h-8 lg:h-10 bg-white/40 rounded-full blur-md transform -rotate-8"></div>

            {/* Bottom layer clouds */}
            <div className="absolute top-8 sm:top-10 left-8 sm:left-12 w-48 sm:w-60 lg:w-72 h-16 sm:h-20 lg:h-24 bg-white/35 rounded-full blur-xl transform rotate-3"></div>
            <div className="absolute top-6 sm:top-8 right-4 sm:right-8 w-44 sm:w-56 lg:w-68 h-14 sm:h-18 lg:h-22 bg-white/30 rounded-full blur-xl transform -rotate-5"></div>
          </div>
        </div>

        {/* Transparent Dashboard Preview */}
        <div className="relative max-w-6xl mx-auto">
          {/* Browser Chrome - Transparent */}
          <div className="bg-gray-800/20 backdrop-blur-md rounded-t-xl sm:rounded-t-2xl p-2 sm:p-4 shadow-2xl border border-white/20 rounded-b-xl sm:rounded-b-2xl">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1 sm:space-x-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400/80 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400/80 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400/80 rounded-full"></div>
                </div>
                <span className="text-white/90 text-xs sm:text-sm font-mono ml-2 sm:ml-4">
                  Flowtix.com
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 text-white/70 text-xs sm:text-sm">
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>preview</span>
              </div>
            </div>

            {/* Dashboard Content - Highly Transparent */}
            <div className="bg-white/30 backdrop-blur-xl rounded-lg overflow-hidden border border-white/30 shadow-xl">
              {/* Dashboard Header */}
              <div className="bg-white/40 backdrop-blur-lg border-b border-white/30 p-2 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600/90 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-5 sm:h-5 bg-white rounded-sm flex items-center justify-center">
                          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          Flowtix
                        </h3>
                        <p className="text-xs text-gray-600">
                          Let's go together
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
                    <select className="border border-white/40 bg-white/50 backdrop-blur-sm rounded-lg px-2 lg:px-3 py-1 lg:py-1.5 text-xs lg:text-sm text-gray-800">
                      <option>Quick Range</option>
                    </select>
                    <div className="flex items-center space-x-2 border border-white/40 bg-white/50 backdrop-blur-sm rounded-lg px-2 lg:px-3 py-1 lg:py-1.5">
                      <span className="text-xs lg:text-sm text-gray-700">
                        Jul 11, 2024 - Jul 11,2025
                      </span>
                    </div>
                    <select className="border border-white/40 bg-white/50 backdrop-blur-sm rounded-lg px-2 lg:px-3 py-1 lg:py-1.5 text-xs lg:text-sm text-gray-800">
                      <option>All</option>
                    </select>
                    <button className="bg-blue-600/90 text-white p-1.5 lg:p-2 rounded-lg backdrop-blur-sm">
                      <Search className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-2 sm:p-4 lg:p-6 bg-white/20 backdrop-blur-lg">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                  {/* Sidebar */}
                  <div className="w-full lg:w-48 mb-4 lg:mb-0">
                    <nav className="space-y-1 sm:space-y-2">
                      <div className="flex items-center space-x-2 sm:space-x-3 text-blue-700 bg-blue-100/60 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600/80 rounded-sm"></div>
                        <span className="font-medium text-xs sm:text-sm">
                          Dashboard
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/40 backdrop-blur-sm">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-500/60 rounded-sm"></div>
                        <span className="text-xs sm:text-sm">Orders</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/40 backdrop-blur-sm">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-500/60 rounded-sm"></div>
                        <span className="text-xs sm:text-sm">Campaigns</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/40 backdrop-blur-sm">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-500/60 rounded-sm"></div>
                        <span className="text-xs sm:text-sm">Database</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/40 backdrop-blur-sm">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-500/60 rounded-sm"></div>
                        <span className="text-xs sm:text-sm">Reports</span>
                      </div>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-3 sm:space-y-4 lg:space-y-6">
                    {/* Sales Summary */}
                    <div className="bg-white/30 backdrop-blur-lg rounded-lg p-3 sm:p-4 border border-white/30">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500/60 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                            Sales Summary
                          </h3>
                          <p className="text-xs text-gray-600">
                            Showing sales made by store
                          </p>
                        </div>
                      </div>

                      {/* Chart Area */}
                      <div className="h-20 sm:h-24 lg:h-32 bg-white/20 backdrop-blur-sm rounded-lg relative overflow-hidden border border-white/20">
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2 sm:px-4 pb-1 sm:pb-2">
                          <div className="w-0.5 sm:w-1 bg-blue-400/70 h-4 sm:h-6 lg:h-8 rounded-t backdrop-blur-sm"></div>
                          <div className="w-0.5 sm:w-1 bg-blue-500/70 h-6 sm:h-8 lg:h-12 rounded-t backdrop-blur-sm"></div>
                          <div className="w-0.5 sm:w-1 bg-blue-400/70 h-3 sm:h-4 lg:h-6 rounded-t backdrop-blur-sm"></div>
                          <div className="w-0.5 sm:w-1 bg-blue-600/70 h-8 sm:h-10 lg:h-16 rounded-t backdrop-blur-sm"></div>
                          <div className="w-0.5 sm:w-1 bg-blue-500/70 h-5 sm:h-6 lg:h-10 rounded-t backdrop-blur-sm"></div>
                          <div className="w-0.5 sm:w-1 bg-blue-400/70 h-7 sm:h-8 lg:h-14 rounded-t backdrop-blur-sm"></div>
                          <div className="w-0.5 sm:w-1 bg-blue-300/70 h-4 sm:h-5 lg:h-8 rounded-t backdrop-blur-sm"></div>
                        </div>
                        <div className="absolute top-2 left-2 text-xs text-gray-600">
                          $500
                        </div>
                        <div className="absolute top-1/2 left-2 text-xs text-gray-600">
                          $300
                        </div>
                      </div>
                    </div>

                    {/* Top Products */}
                    <div className="bg-white/30 backdrop-blur-lg rounded-lg p-3 sm:p-4 border border-white/30">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500/60 rounded-sm"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                            Top Products
                          </h3>
                          <p className="text-xs text-gray-600">
                            Showing products that generates most revenue
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <div className="hidden sm:flex items-center justify-between text-xs text-gray-600 font-medium">
                          <span>Product Name</span>
                          <div className="flex space-x-4 lg:space-x-8">
                            <span>Price</span>
                            <span>Qty</span>
                            <span>Revenue</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between py-1 sm:py-2">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/40 backdrop-blur-sm rounded border border-white/30"></div>
                            <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              Product Name goes here...
                            </span>
                          </div>
                          <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm text-gray-700">
                            <span>$300</span>
                            <span>25</span>
                            <span className="font-semibold text-gray-900">
                              $2000
                            </span>
                          </div>
                        </div>

                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-1 sm:py-2 opacity-60"
                          >
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 backdrop-blur-sm rounded border border-white/20"></div>
                              <span className="text-xs sm:text-sm text-gray-600 truncate">
                                Product Name goes here...
                              </span>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm text-gray-500">
                              <span>$300</span>
                              <span>25</span>
                              <span>$2000</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-white/70 hover:bg-white/80 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-lg border border-white/50"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 ml-0.5 sm:ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom spacing for mobile */}
      <div className="h-8 sm:h-16"></div>
    </div>
  );
};

export default DesignifyLanding;
