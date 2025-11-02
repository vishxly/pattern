// lib/blocks/registry/hero-registry.ts

import DataformLandingPage from "../../components/hero/dataform";
import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

export const heroRegistry: LandingComponentGroup = {
  title: "Hero Section",
  description: "Eye-catching hero sections to make a strong first impression.",
  category: "Hero",
  variants: {
    default: {
      title: "Elegant Finance Dashboard",
      description:
        "Modern UI with soft gradients, clean type, and smart cards for clear, accessible insights.",
      component: DataformLandingPage,
      image: "/images/blocks/hero/dataform.png",
      fallbackImage: "/placeholder.svg?height=300&width=400&text=Default+Hero",
      code: `"use client";
import React, { useState } from "react";

export default function DataformLandingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false); 

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f4f5]">
  
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4f4f5] via-[#ffb5b5] to-[#b6b9ff] z-0" />
      <div className="absolute inset-0 z-10 opacity-[0.1] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%2210%22 viewBox=%220 0 10 10%22><path d=%22M0,10 L10,0 M-2,8 L2,12 M8,-2 L12,2%22 stroke=%22white%22 stroke-width=%220.5%22 /></svg>')] [background-size:20px_20px]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:14px_14px] opacity-40 pointer-events-none" />
      <div className="absolute top-[-200px] left-[-200px] w-[800px] h-[800px] bg-[#ffe5ec] rounded-full blur-[150px] opacity-30 z-0" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[800px] h-[800px] bg-[#b5b9ff] rounded-full blur-[150px] opacity-30 z-0" />

      {/* Navigation */}
      <nav className="relative z-50 flex justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="bg-black rounded-full px-4 sm:px-8 py-3 flex items-center justify-between w-full max-w-4xl relative">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">D</span>
            </div>
            <span className="text-white font-semibold text-lg">Dataform</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Partners
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden text-white p-2 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <button className="hidden lg:block bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-200">
            Sign In
          </button>

          {/* Mobile Menu Dropdown */}
          {mobileNavOpen && (
            <div className="lg:hidden absolute top-full mt-3 w-full left-0 bg-black rounded-2xl shadow-lg p-5">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  Product
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Docs
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Customers
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Resources
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Partners
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Pricing
                </a>
                <div className="border-t border-gray-700 my-2"></div>
                <button className="bg-white text-black w-full py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-200">
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-8 sm:pb-16">
        {/* Badge */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-white/60 backdrop-blur-sm px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm text-gray-700 border border-white/20 shadow-sm">
            Meet our esteemed Partners & Affiliates
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black leading-tight sm:leading-snug mb-4 max-w-4xl mx-auto tracking-tight px-4">
            Simplify Global Payment Management
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed px-4">
            Manage and optimize your finances from a single, streamlined
            dashboard — effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
            <button className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-200 shadow hover:shadow-md">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white/70 backdrop-blur text-black px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-white transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Dashboard Preview with outer white ring */}
        <div className="relative mx-auto max-w-6xl px-2 sm:px-0">
          {/* Outer white ring/container */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-2 sm:p-4 shadow-2xl border border-white/30">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Dashboard Header */}
              <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-black rounded-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">D</span>
                    </div>
                    <span className="text-black font-semibold text-sm sm:text-base">
                      Dataform
                    </span>
                  </div>
                  <span className="hidden sm:block text-gray-500 text-sm">
                    Dashboard
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Mobile sidebar toggle */}
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                  <button className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
                    <svg
                      className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      />
                    </svg>
                  </button>
                  <button className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
                    <svg
                      className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex relative">
                {/* Mobile Sidebar Overlay */}
                {sidebarOpen && (
                  <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setSidebarOpen(false)}
                  />
                )}

                {/* Sidebar */}
                <div
                  className={\`\${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                  } lg:translate-x-0 fixed lg:relative z-40 lg:z-auto w-64 bg-gray-25 border-r border-gray-100 min-h-[400px] sm:min-h-[600px] transition-transform duration-300 ease-in-out lg:transition-none\`}
                >
                  <div className="p-4 sm:p-5">
                    {/* Close button for mobile */}
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="lg:hidden absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Search */}
                    <div className="mb-4 sm:mb-6 mt-8 lg:mt-0">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search anything"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        />
                        <svg
                          className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400 absolute left-2.5 sm:left-3.5 top-2.5 sm:top-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1">
                      {[
                        { name: "Dashboard", active: true },
                        { name: "Products", active: false },
                        { name: "Transactions", active: false },
                        { name: "Wallet", active: false },
                        { name: "Billing Info", active: false },
                        { name: "Settings", active: false },
                        { name: "Automations", active: false },
                        { name: "Reports", active: false },
                        { name: "Account", active: false },
                      ].map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          onClick={() => setSidebarOpen(false)}
                          className={\`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 \${
                            item.active
                              ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                              : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                          }\`}
                        >
                          <div
                            className={\`w-3 sm:w-4 h-3 sm:h-4 rounded \${
                              item.active ? "bg-blue-500" : "bg-gray-300"
                            }\`}
                          ></div>
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white">
                  {/* Header */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-black mb-1">
                      Current Balance
                    </h2>
                    <div className="text-xs text-gray-500">13 Jan • 1h 3M</div>
                  </div>

                  {/* Balance Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg">
                      <div className="text-xl sm:text-2xl font-bold mb-1">
                        $23,750.73
                      </div>
                      <div className="text-xs sm:text-sm opacity-90">
                        +12.5%
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-400 to-pink-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg">
                      <div className="text-xl sm:text-2xl font-bold mb-1">
                        $8,178.89
                      </div>
                      <div className="text-xs sm:text-sm opacity-90">-0.8%</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-400 to-yellow-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg sm:col-span-2 lg:col-span-1">
                      <div className="text-xl sm:text-2xl font-bold mb-1">
                        $15,571.84
                      </div>
                      <div className="text-xs sm:text-sm opacity-90">
                        +17.2%
                      </div>
                    </div>
                  </div>

                  {/* Payment & Budget Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Payment */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                        <div className="bg-blue-500 w-6 sm:w-8 h-4 sm:h-5 rounded"></div>
                        <span className="text-xs sm:text-sm font-medium">
                          **** 2470
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-black mb-2">
                        $49,382.91
                      </div>
                      <div className="text-green-500 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        +17.3% • +$6,507.84 compared to last month
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
                          Transfer
                        </button>
                        <button className="border border-gray-200 text-gray-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
                          Request
                        </button>
                      </div>
                    </div>

                    {/* Budget Control */}
                    <div>
                      <div className="mb-3 sm:mb-4">
                        <span className="text-xs sm:text-sm text-gray-600 font-medium">
                          Budget Control
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-black mb-1">
                        $5,000
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        out of $10,000
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mb-3 sm:mb-4">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 sm:h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <div className="flex items-center text-orange-500 text-xs mb-4 sm:mb-6">
                        <svg
                          className="w-3 sm:w-4 h-3 sm:h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        You're nearing the top of your spending limit
                      </div>
                      <button className="w-full bg-black text-white py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
                        Continue
                      </button>
                    </div>
                  </div>

                  {/* Transaction History */}
                  <div className="border-t border-gray-100 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-black">
                        Transaction History
                      </h3>
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="relative flex-1 sm:flex-none">
                          <input
                            type="text"
                            placeholder="Search Transactions..."
                            className="pl-4 pr-4 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                          />
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 p-2 flex-shrink-0">
                          <svg
                            className="w-4 sm:w-5 h-4 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Transaction Table */}
                    <div className="overflow-x-auto">
                      <div className="min-w-full">
                        {/* Header - Hidden on mobile */}
                        <div className="hidden lg:grid lg:grid-cols-4 gap-6 text-sm text-gray-500 font-medium mb-4 pb-3 border-b border-gray-100">
                          <div className="flex items-center">
                            Transactions
                            <svg
                              className="w-3 h-3 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          </div>
                          <div className="flex items-center">
                            Date
                            <svg
                              className="w-3 h-3 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          </div>
                          <div className="flex items-center">
                            Details
                            <svg
                              className="w-3 h-3 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          </div>
                          <div className="flex items-center">
                            Amount
                            <svg
                              className="w-3 h-3 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Transaction Rows */}
                        <div className="space-y-3 sm:space-y-4">
                          {[
                            {
                              icon: "S",
                              iconBg: "bg-green-500",
                              name: "Spotify Premium",
                              date: "12 Jan 2025, 9:43 PM",
                              type: "Subscription",
                              amount: "-$15.00",
                              amountColor: "text-red-500",
                            },
                            {
                              icon: "C",
                              iconBg: "bg-blue-500",
                              name: "Credited Payment",
                              date: "11 Jan 2025, 10:03 AM",
                              type: "Received",
                              amount: "+$2,456.00",
                              amountColor: "text-green-500",
                            },
                            {
                              icon: "T",
                              iconBg: "bg-purple-500",
                              name: "Transfer to Marie",
                              date: "11 Jan 2025, 01:16 PM",
                              type: "Transfer",
                              amount: "-$500.00",
                              amountColor: "text-red-500",
                            },
                          ].map((transaction, index) => (
                            <div
                              key={index}
                              className="lg:grid lg:grid-cols-4 lg:gap-6 lg:items-center py-3 hover:bg-gray-25 rounded-lg px-2 lg:px-0 transition-colors"
                            >
                              {/* Mobile Layout */}
                              <div className="lg:hidden">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center space-x-3">
                                    <div
                                      className={\`w-8 sm:w-10 h-8 sm:h-10 \${transaction.iconBg} rounded-full flex items-center justify-center shadow-sm\`}
                                    >
                                      <span className="text-white text-xs sm:text-sm font-bold">
                                        {transaction.icon}
                                      </span>
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">
                                        {transaction.name}
                                      </div>
                                      <div className="text-xs text-gray-600">
                                        {transaction.type}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={\`text-sm font-semibold \${transaction.amountColor}\`}
                                  >
                                    {transaction.amount}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-500 ml-11 sm:ml-13">
                                  {transaction.date}
                                </div>
                              </div>

                              {/* Desktop Layout */}
                              <div className="hidden lg:flex items-center space-x-3">
                                <div
                                  className={\`w-10 h-10 \${transaction.iconBg} rounded-full flex items-center justify-center shadow-sm\`}
                                >
                                  <span className="text-white text-sm font-bold">
                                    {transaction.icon}
                                  </span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                  {transaction.name}
                                </span>
                              </div>
                              <div className="hidden lg:block text-sm text-gray-600">
                                {transaction.date}
                              </div>
                              <div className="hidden lg:block text-sm text-gray-600">
                                {transaction.type}
                              </div>
                              <div
                                className={\`hidden lg:block text-sm font-semibold \${transaction.amountColor}\`}
                              >
                                {transaction.amount}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Exchange Section */}
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-2">
                            Exchange
                          </h3>
                          <div className="text-3xl font-bold text-black mb-1">
                            $500.00
                          </div>
                          <div className="text-sm text-gray-500">
                            1 USD = 1.20 SAR
                          </div>
                        </div>
                        <div className="lg:text-right">
                          <div className="flex items-center space-x-2 mb-4 justify-start lg:justify-end">
                            <div className="flex items-center space-x-2">
                              <span className="w-4 h-3 bg-blue-500 rounded-sm"></span>
                              <span className="text-sm font-medium">USD</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="w-4 h-3 bg-green-500 rounded-sm"></span>
                              <span className="text-sm font-medium">SAR</span>
                            </div>
                          </div>
                          <button className="w-full lg:w-auto bg-black text-white py-2.5 px-8 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-gray-500 dark:text-gray-200">
            <span className="font-medium text-base sm:text-lg">Git</span>
            <span className="font-medium text-base sm:text-lg">npm</span>
            <span className="font-medium text-base sm:text-lg">Lucidchart</span>
            <span className="font-medium text-base sm:text-lg">▼ Wrike</span>
            <span className="font-medium text-base sm:text-lg">jQuery</span>
            <span className="font-medium text-base sm:text-lg">OpenStack</span>
            <span className="font-medium text-base sm:text-lg">ServiceNow</span>
            <span className="font-medium text-base sm:text-lg">Paysafe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`,
    },
  },
};
