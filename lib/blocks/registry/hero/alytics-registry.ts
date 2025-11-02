// lib/blocks/registry/alytics-registry.ts

import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Alytics from "../../components/hero/alytics";

export const alyticsRegistry: LandingComponentGroup = {
  title: "Alytics",
  description:
    "Alytics has a sleek, modern SaaS UI with bold text and a clean call-to-action.",
  category: "Hero",
  variants: {
    default: {
      title: "Alytics",
      description:
        "Alytics has a sleek, modern SaaS UI with bold text and a clean call-to-action.",
      component: Alytics,
      image: "/images/blocks/hero/alytics.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState } from "react";
import {
  BarChart3,
  Search,
  Moon,
  Bell,
  User,
  Home,
  BarChart,
  Grid3X3,
  CreditCard,
  UserCircle,
  LogOut,
  TrendingUp,
  DollarSign,
  Users,
  Menu,
  X,
} from "lucide-react";

const Alytics: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Navigation - Fully Responsive */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Alytics
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Integrations
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 sm:px-6 lg:px-8 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with responsive floating elements */}
      <div className="relative overflow-hidden">
        {/* Floating Brand Icons - Responsive positioning */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Stripe */}
          <div className="absolute top-16 sm:top-24 left-4 sm:left-8 lg:left-32 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <div className="text-purple-600 font-bold text-xs sm:text-sm lg:text-lg italic">
              stripe
            </div>
          </div>

          {/* GitHub */}
          <div className="absolute top-20 sm:top-32 right-4 sm:right-8 lg:right-32 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl flex items-center justify-center transform -rotate-12 hover:rotate-6 transition-transform duration-500">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">
                G
              </span>
            </div>
          </div>

          {/* NotionHQ */}
          <div className="absolute bottom-32 sm:bottom-40 left-4 sm:left-8 lg:left-40 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl flex items-center justify-center transform rotate-6 hover:-rotate-3 transition-transform duration-500">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">
                ★
              </span>
            </div>
          </div>

          {/* Postman */}
          <div className="absolute bottom-24 sm:bottom-32 right-4 sm:right-8 lg:right-40 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl flex items-center justify-center transform -rotate-6 hover:rotate-3 transition-transform duration-500">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">
                P
              </span>
            </div>
          </div>
        </div>

        <div className="relative text-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          {/* Trust Badge */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 shadow-lg">
              <div className="flex -space-x-2 sm:-space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-2 sm:border-3 border-white shadow-lg"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full border-2 sm:border-3 border-white shadow-lg"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border-2 sm:border-3 border-white shadow-lg"></div>
              </div>
              <span className="text-blue-700 font-semibold text-sm sm:text-base">
                Trusted by over 1 million users
              </span>
            </div>
          </div>

          {/* Main Heading - Responsive typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            All your SaaS metrics, in
            <br />
            <span className="text-gray-800">one smart dashboard.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            One simple dashboard to track your SaaS growth, MRR,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>churn and user behavior—without
            the chaos.
          </p>

          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              Get Started for Free
            </button>
            <div className="flex items-center space-x-3 text-gray-500">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview - Fully Responsive */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* White ring effect */}
          <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-2xl sm:rounded-3xl shadow-2xl">
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
              {/* Dashboard Header - Responsive */}
              <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-gray-900">
                        Alytics
                      </span>
                    </div>
                    <div className="hidden sm:block text-gray-400 font-medium text-sm lg:text-base">
                      Pages / Dashboard
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                    <div className="hidden md:block relative">
                      <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
                      <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 lg:pl-12 pr-4 lg:pr-6 py-2 lg:py-3 bg-gray-50 border-0 rounded-lg lg:rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 w-48 lg:w-64 text-sm lg:text-base"
                      />
                    </div>
                    <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                    <Moon className="hidden sm:block w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm sm:text-base">
                        A
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row">
                {/* Sidebar - Responsive */}
                <div className="w-full xl:w-80 bg-white border-b xl:border-b-0 xl:border-r border-gray-100 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                    Main Dashboard
                  </h2>
                  <nav className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-1 gap-2 sm:gap-3">
                    <a
                      href="#"
                      className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2 sm:py-3 bg-blue-50 text-blue-700 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base"
                    >
                      <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:block xl:block">
                        Dashboard
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all duration-200 hover:text-gray-900 text-sm sm:text-base"
                    >
                      <BarChart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:block xl:block">Metrics</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all duration-200 hover:text-gray-900 text-sm sm:text-base"
                    >
                      <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:block xl:block">Tables</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all duration-200 hover:text-gray-900 text-sm sm:text-base"
                    >
                      <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:block xl:block">Payouts</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all duration-200 hover:text-gray-900 text-sm sm:text-base"
                    >
                      <UserCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:block xl:block">Profile</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all duration-200 hover:text-gray-900 text-sm sm:text-base"
                    >
                      <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:block xl:block">Sign In</span>
                    </a>
                  </nav>
                </div>

                {/* Main Content - Fully Responsive */}
                <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50/50">
                  {/* Stats Cards - Responsive Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {/* Earnings Card */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-600 font-medium text-sm sm:text-base">
                          Earnings
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                        $350.4
                      </div>
                    </div>

                    {/* Spend Card */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span className="text-gray-600 font-medium text-sm sm:text-base">
                          Spend this Month
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                        $682.5
                      </div>
                    </div>

                    {/* Sales Card */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
                      <div className="mb-2 sm:mb-3">
                        <span className="text-gray-600 font-medium text-sm sm:text-base">
                          Sales
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                        $574.34
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        +23% since last month
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
                      <div className="mb-2 sm:mb-3">
                        <span className="text-gray-600 font-medium text-sm sm:text-base">
                          Your balance
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                        $1,000
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-3 sm:w-6 sm:h-4 bg-red-500 rounded"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-200 border rounded"></div>
                      </div>
                    </div>

                    {/* Projects Card */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-gray-600 font-medium text-xs sm:text-sm">
                            New Tasks
                          </div>
                          <div className="text-gray-900 font-semibold text-sm sm:text-base">
                            154
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                        2935
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">
                        Total Projects
                      </div>
                    </div>
                  </div>

                  {/* Charts Section - Responsive */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                    {/* Advanced Line Chart */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="flex-1">
                          <div className="inline-block bg-blue-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-md sm:rounded-lg mb-3 sm:mb-4">
                            This month
                          </div>
                          <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            $375K
                          </div>
                          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                            <span className="text-gray-600 text-sm sm:text-base">
                              Total Spent
                            </span>
                            <span className="text-green-500 font-semibold text-sm sm:text-base">
                              +2.45%
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm text-gray-600 font-medium">
                              On track
                            </span>
                          </div>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                      </div>

                      {/* Enhanced Chart - Responsive */}
                      <div className="h-32 sm:h-40 relative mb-4 sm:mb-6">
                        <svg className="w-full h-full" viewBox="0 0 400 150">
                          <defs>
                            <linearGradient
                              id="gradient1"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#3B82F6"
                                stopOpacity="1"
                              />
                              <stop
                                offset="100%"
                                stopColor="#60A5FA"
                                stopOpacity="0.8"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            d="M30,100 Q100,70 180,85 Q250,60 370,45"
                            stroke="url(#gradient1)"
                            strokeWidth="3"
                            fill="none"
                            className="drop-shadow-sm"
                          />
                          <path
                            d="M30,110 Q100,85 180,95 Q250,75 370,60"
                            stroke="#93C5FD"
                            strokeWidth="2"
                            fill="none"
                          />
                          <circle
                            cx="300"
                            cy="52"
                            r="6"
                            fill="#3B82F6"
                            className="drop-shadow-sm"
                          />
                          <rect
                            x="310"
                            y="45"
                            width="60"
                            height="20"
                            fill="white"
                            rx="4"
                            className="drop-shadow-sm"
                          />
                          <text
                            x="315"
                            y="57"
                            className="text-xs fill-blue-600 font-semibold"
                          >
                            $389.9K
                          </text>
                        </svg>
                      </div>

                      <div className="flex justify-between text-xs sm:text-sm text-gray-500 font-medium">
                        <span>SEP</span>
                        <span>OCT</span>
                        <span>NOV</span>
                        <span>DEC</span>
                        <span>JAN</span>
                        <span>FEB</span>
                      </div>
                    </div>

                    {/* Enhanced Bar Chart */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          Weekly Revenue
                        </h3>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                          <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                      </div>

                      <div className="flex items-end justify-between h-32 sm:h-40 space-x-1.5 sm:space-x-3">
                        {[20, 16, 24, 12, 22, 18, 26, 28, 20].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="w-5 sm:w-8 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-lg sm:rounded-t-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
                              style={{
                                height: \`\${
                                  height * (window.innerWidth < 640 ? 1.8 : 2.5)
                                }px\`,
                              }}
                            ></div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alytics;
`,
    },
  },
};
