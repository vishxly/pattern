// lib/blocks/registry/flowsync-registry.ts


import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Flowsync from "@/lib/blocks/components/hero/flowsync";

export const flowSyncRegistry: LandingComponentGroup = {
  title: "Flowsync",
  description:
    "A powerful tool for synchronizing workflows across teams and platforms.",
  category: "Hero",
  variants: {
    default: {
      title: "Flowsync",
      description:
        "A powerful tool for synchronizing workflows across teams and platforms.",
      component: Flowsync,
      image: "/images/blocks/hero/flowsync.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState } from "react";

const Flowsync = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
      <div className="ml-4 mr-4 rounded-3xl  bg-gradient-to-br from-purple-100 via-pink-200 to-blue-300 shadow-md">
        <header className="px-4 py-6 sm:px-6 backdrop-blur-sm  ">
          <nav className="max-w-5xl mx-auto border border-gray-200  rounded-xl shadow-sm px-4 py-3 ">
            <div className="grid grid-cols-3 items-center">
              {/* Logo */}
              <div className="text-xl font-semibold text-black ">FLOWSYNC</div>

              {/* Centered Navigation */}
              <div className="hidden md:flex justify-center items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-700  hover:text-purple-600 transition-colors text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium"
                >
                  Functions
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium"
                >
                  Integrations
                </a>
              </div>

              {/* Right Side - CTA + Mobile Toggle */}
              <div className="flex justify-end items-center space-x-2">
                <button className="hidden sm:inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md hover:scale-105 transition">
                  Try for free
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-gray-700 dark:text-white focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {mobileMenuOpen ? (
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
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 px-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-100/50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-100/50"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-100/50"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-100/50"
                >
                  Functionalities
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-100/50"
                >
                  Integration
                </a>
                <button className="bg-gradient-to-r from-purple-200 to-blue-300 text-black px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 mt-2 font-medium">
                  Try it for free
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800 mb-6 sm:mb-8 leading-tight">
                Your ultimate solution for business{" "}
                <span className="text-gray-900">Automation</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                FlowSync eliminates repetitive tasks, integrates with your
                favorite tools, and boosts productivity—so you can do more in
                less time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-200 to-blue-300 text-black px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-base sm:text-lg font-medium">
                  How we do it
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 text-base sm:text-lg font-medium backdrop-blur-sm bg-white">
                  Get a quick Demo
                </button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg mx-auto border border-white/20">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="text-lg font-bold text-black">FLOWSYNC</div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                      Alert
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm sm:text-base font-medium">
                      Home
                    </span>
                    <div className="flex space-x-2">
                      <div className="w-8 h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full"></div>
                      <div className="w-8 h-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"></div>
                      <div className="w-8 h-2 bg-gradient-to-r from-blue-200 to-pink-200 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950">
                        2,420
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">
                        Total
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950">
                        1,210
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">
                        Active
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950">
                        316
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">
                        Inactive
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-400 to-orange-400
 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-white/50">
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-400 to-orange-400
rounded-lg"
                      ></div>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-semibold text-gray-800">
                          Coding
                        </div>
                        <div className="text-xs text-gray-500">Approved</div>
                      </div>
                      <div className="text-xs text-gray-400">3 days ago</div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-white/50">
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-500 to-sky-500
rounded-lg"
                      ></div>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-semibold text-gray-800">
                          Coding
                        </div>
                        <div className="text-xs text-gray-500">Approved</div>
                      </div>
                      <div className="text-xs text-gray-400">3 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Integration Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-purple-600 mb-3 font-semibold text-sm uppercase tracking-wider">
              Integration
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Connect, Automate, and Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              FlowSync integrates effortlessly with your favorite tools,
              ensuring a smooth and automated workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20">
                <div className="grid grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">★</span>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">■</span>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">•</span>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">□</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-base text-gray-800">
                        John Drove
                      </div>
                      <div className="text-sm text-gray-500">CTO, Omnivise</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    "FlowSync has transformed how we work. Amazing tool for 10+
                    hours per week. The best automation tool is absolutely
                    everything seamlessly"
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div className="flex items-center space-x-4 sm:space-x-6 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    50+ App Integrations
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <span className="text-green-600 text-2xl">↻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    2M+ Workflow Executed
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center">
                  <span className="text-pink-600 text-2xl">♥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    95% Customer Satisfaction Rate
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                  <span className="text-purple-600 text-2xl">↗</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    10,000+ Businesses Automated
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-purple-600 mb-3 font-semibold text-sm uppercase tracking-wider">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Flexible Plans for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From start-ups to enterprises, we have a plan that scales with
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Starter Plan */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Starter</h3>
              <div className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  €19
                </span>
                <span className="text-gray-500">/Month</span>
                <div className="text-sm text-gray-500 mt-2">
                  For Individuals & Small Teams
                </div>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Up to 5 integrations
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Basic automation workflows
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Limited API calls per month
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">Email support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-200 text-gray-700 py-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 text-base font-medium">
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-purple-200 relative hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-orange-400
 text-white text-xs font-bold px-6 py-2 rounded-full"
              >
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Pro</h3>
              <div className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  €49
                </span>
                <span className="text-gray-500">/Month</span>
                <div className="text-sm text-gray-500 mt-2">
                  For Growing Businesses
                </div>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Unlimited integrations
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Advanced automation & AI-powered triggers
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Priority syncing with real-time updates
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    24/7 chat support
                  </span>
                </li>
              </ul>
              <button
                className="w-full bg-gradient-to-r from-pink-400 to-orange-400
 text-white py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-base font-medium"
              >
                Get started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-white/20 lg:col-start-3 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Enterprise
              </h3>
              <div className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Custom
                </span>
                <span className="text-gray-500"> Pricing</span>
                <div className="text-sm text-gray-500 mt-2">
                  For Large Teams & Enterprises
                </div>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Dedicated server & security compliance
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Custom API's & premium integrations
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    On-demand workflow customization
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm text-gray-500">
                    Personalized onboarding
                  </span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-200 text-gray-700 py-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 text-base font-medium">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platform Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-purple-600 mb-3 font-semibold text-sm uppercase tracking-wider">
              About Flowsync
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
              AI-Driven Platform Designed to Automate Workflows
            </h2>
            <p className="text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              All in one place! Whether you're a startup, an enterprise, or a
              freelancer, FlowSync helps you save time, reduce manual tasks, and
              boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-pink-400 to-orange-400
 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-base font-medium"
              >
                What we propose
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 text-base font-medium backdrop-blur-sm">
                Learn more
              </button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              className="bg-gradient-to-r from-pink-400 to-orange-400
 rounded-3xl p-8 sm:p-10 text-white shadow-2xl"
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-4 sm:space-x-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">❤️</span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">95%</div>
                    <div className="text-sm sm:text-base opacity-90">
                      Customer Satisfaction Rate
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 sm:space-x-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">🏢</span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">
                      10,000+
                    </div>
                    <div className="text-sm sm:text-base opacity-90">
                      Businesses Automated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 bg-gradient-to-r from-pink-400 to-orange-400
relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400
"
        ></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10">
            Supercharge Your Workflow
            <br className="hidden sm:block" />
            Try FlowSync Now
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 text-base sm:text-lg font-semibold">
              Try FlowSync now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 hover:shadow-lg transition-all duration-300 text-base sm:text-lg font-semibold backdrop-blur-sm">
              Get a quick demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 sm:px-6 bg-white/90 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10">
            <div className="text-2xl font-bold text-black mb-4 md:mb-0">
              FLOWSYNC
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              Trusted by Velocitas, Enterised by Alevia Companies Worldwide
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
              <span className="text-sm text-gray-600 font-medium">norton</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600 font-medium">
                VISUAL STATEMENTS
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 font-medium">
                bestmile
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
              <span className="text-sm text-gray-600 font-medium">
                endpoint
              </span>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FlowSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Flowsync;
`,
    },
  },
};
