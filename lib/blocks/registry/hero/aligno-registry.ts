// lib/blocks/registry/aligno-registry.ts

import Aligno from "../../components/hero/aligno";
import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

export const alignoRegistry: LandingComponentGroup = {
  title: "Aligno Landing",
  description:
    "A modern landing page layout with a focus on data structuring and insights.",
  category: "Hero",
  variants: {
    default: {
      title: "Aligno Landing",
      description:
        "A modern landing page layout with a focus on data structuring and insights.",
      component: Aligno,
      image: "/images/blocks/hero/aligno.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Plus,
  Filter,
  Search,
  MoreHorizontal,
  Users,
  Menu,
  X,
} from "lucide-react";

const Aligno = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating elements - hidden on small screens */}
      <div className="hidden md:block absolute top-32 left-32 w-12 h-12 bg-green-400 rounded-full opacity-80"></div>
      <div className="hidden md:block absolute top-96 right-24 w-16 h-16 bg-orange-300 rounded-full opacity-70"></div>
      <div className="hidden md:block absolute bottom-32 left-24 w-8 h-8 bg-purple-400 rounded-full opacity-60"></div>
      <div className="hidden md:block absolute bottom-96 right-32 w-20 h-20 bg-blue-300 rounded-full opacity-50"></div>

      {/* Navigation */}
      <div className="flex justify-center pt-4 md:pt-8 px-4">
        <nav className="bg-black text-white px-4 md:px-8 py-3 md:py-4 rounded-full shadow-2xl border border-gray-800 w-full md:max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="bg-white text-black w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
                D
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                  <span className="text-sm">What we do</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                  <span className="text-sm">About Us</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                  <span className="text-sm">Portfolio</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                  <span className="text-sm">Contact us</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white text-sm">
                  Log in
                </button>
                <button className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
                  Apply Now
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-700">
              <div className="space-y-3">
                <div className="block py-2 text-sm hover:text-gray-300">
                  What we do
                </div>
                <div className="block py-2 text-sm hover:text-gray-300">
                  About Us
                </div>
                <div className="block py-2 text-sm hover:text-gray-300">
                  Portfolio
                </div>
                <div className="block py-2 text-sm hover:text-gray-300">
                  Contact us
                </div>
                <div className="flex flex-col space-y-2 pt-3 border-t border-gray-700">
                  <button className="text-gray-300 hover:text-white text-sm text-left">
                    Log in
                  </button>
                  <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Header Section with floating badges */}
        <div className="text-center mb-12 md:mb-20 relative">
          {/* Floating badges - repositioned for mobile */}
          <div className="absolute -top-4 md:top-16 left-4 md:left-3 bg-green-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium transform -rotate-12 shadow-lg">
            Prasenjit
          </div>
          <div className="absolute -top-2 md:-top-16 right-4 md:right-[31rem] bg-gray-100 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm text-gray-700 flex items-center space-x-1 md:space-x-2 shadow-lg">
            <span className="hidden sm:inline">
              API Integration coming soon
            </span>
            <span className="sm:hidden">API Soon</span>
            <span>🚀</span>
          </div>
          <div className="absolute top-6 md:top-16 right-8 md:right-3 bg-orange-400 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
            Anthony
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight md:leading-none px-4 mt-8">
            Transform your{" "}
            <span className="text-gray-600">Unstructured Data</span>
            <br />
            <span className="text-gray-600">into</span>{" "}
            <span className="text-gray-900">Actionable Insights</span>
          </h1>

          <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Vision Language Model (VLM) powered structuring that simplifies your
            data, saves time, and boosts efficiency.
          </p>

          <button className="bg-gradient-to-br from-neutral-50 to-zinc-100 text-zinc-800 px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300 shadow-md border border-zinc-200">
            Get Started for Free
          </button>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-4 md:border-[12px] border-white relative overflow-hidden">
          <div className="bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-white px-4 md:px-8 py-4 md:py-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-black text-white w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center font-bold text-xs md:text-sm">
                    A
                  </div>
                  <span className="font-semibold text-gray-900 text-base md:text-lg">
                    Aligno
                  </span>
                </div>

                {/* Desktop Status Indicators */}
                <div className="hidden lg:flex items-center space-x-8">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Client</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Mobile</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Website</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Invite</span>
                    </div>
                    <Search className="w-5 h-5 text-gray-400" />
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="flex lg:hidden items-center space-x-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 md:gap-8">
                {/* Sidebar - Hidden on mobile, shown on larger screens */}
                <div className="hidden xl:block xl:col-span-1">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                          Main Menu
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer py-2">
                            <Search className="w-4 h-4" />
                            <span className="text-sm font-medium">Search</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer py-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                            <span className="text-sm font-medium">Files</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer py-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                            <span className="text-sm font-medium">Inbox</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer py-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                            <span className="text-sm font-medium">
                              Time tracking
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Spaces
                          </h3>
                          <Plus className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3 text-blue-600 cursor-pointer py-2">
                              <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                              <span className="text-sm font-medium">
                                Client
                              </span>
                              <ChevronDown className="w-3 h-3 ml-auto" />
                            </div>
                            <div className="ml-7 space-y-2">
                              <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                                Mobile
                              </div>
                              <div className="text-sm text-blue-600 font-medium cursor-pointer bg-blue-50 px-3 py-2 rounded-lg">
                                Website Sprint
                              </div>
                              <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                                Social Media Designs
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 cursor-pointer py-2">
                            <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                            <span className="text-sm font-medium">H&M</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 cursor-pointer py-2">
                            <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                            <span className="text-sm font-medium">Ranmode</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-1 xl:col-span-4">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Website Header */}
                    <div className="px-4 md:px-8 py-4 md:py-6 border-b border-gray-100">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0 mb-4 lg:mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          Website
                        </h2>

                        {/* Desktop Controls */}
                        <div className="hidden lg:flex items-center space-x-6">
                          <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-white hover:shadow-sm rounded">
                              List View
                            </button>
                            <button className="px-4 py-2 text-sm text-blue-600 bg-white shadow-sm rounded font-medium">
                              Kanban
                            </button>
                            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-white hover:shadow-sm rounded">
                              Calendar
                            </button>
                          </div>
                          <button className="text-sm text-gray-500 hover:text-gray-700">
                            + Add View
                          </button>
                          <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700">
                            <Filter className="w-4 h-4" />
                            <span>Filter (1)</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 px-4 py-2 border border-gray-300 rounded-lg text-sm">
                            <Plus className="w-4 h-4" />
                            <span>Add Task</span>
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 text-sm px-4 py-2">
                            Customize
                          </button>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex lg:hidden items-center justify-between">
                          <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
                            <button className="px-3 py-1 text-xs text-gray-600 hover:bg-white hover:shadow-sm rounded">
                              List
                            </button>
                            <button className="px-3 py-1 text-xs text-blue-600 bg-white shadow-sm rounded font-medium">
                              Kanban
                            </button>
                            <button className="px-3 py-1 text-xs text-gray-600 hover:bg-white hover:shadow-sm rounded">
                              Calendar
                            </button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-700">
                              <Filter className="w-3 h-3" />
                              <span>Filter</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 px-3 py-1 border border-gray-300 rounded-lg text-xs">
                              <Plus className="w-3 h-3" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Kanban Board */}
                    <div className="p-4 md:p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* General to-dos */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                              <h3 className="font-semibold text-gray-700 text-sm md:text-base">
                                General to-dos
                              </h3>
                            </div>
                            <Plus className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                              <div className="mb-3">
                                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                                  Paperwork and administration
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  Here you can find info about your payment
                                  information...
                                </p>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  15 October
                                </span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
                                  <span className="text-xs text-gray-500 hidden sm:inline">
                                    View 3 subtask
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                                Find your project there
                              </h4>
                              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                View the messages from here. Select lead time
                                and enjoy!
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  To do • No priority
                                </span>
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Strategy and Planning */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-700 text-sm md:text-base">
                                Strategy and Planning
                              </h3>
                            </div>
                            <Plus className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="space-y-4">
                            <div className="bg-orange-50 p-3 md:p-4 rounded-xl border-l-4 border-orange-500">
                              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                                Website goals
                              </h4>
                              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                Starting with what music industry audience is
                                more likely to get connect...
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  17 October
                                </span>
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                            <div className="bg-orange-50 p-3 md:p-4 rounded-xl">
                              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                                Market research
                              </h4>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  18 October
                                </span>
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Design */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-700 text-sm md:text-base">
                                Design
                              </h3>
                            </div>
                            <Plus className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="space-y-4">
                            <div className="bg-yellow-50 p-3 md:p-4 rounded-xl">
                              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                                First layout & interaction concept
                              </h4>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  20 October
                                </span>
                                <div className="flex items-center space-x-1">
                                  <span className="text-xs font-medium">3</span>
                                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-yellow-50 p-3 md:p-4 rounded-xl">
                              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                                Website components
                              </h4>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  25 October
                                </span>
                                <div className="flex items-center space-x-1">
                                  <span className="text-xs font-medium">3</span>
                                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Development */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-700 text-sm md:text-base">
                                Development
                              </h3>
                            </div>
                            <Plus className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="space-y-4">
                            <div className="bg-green-50 p-3 md:p-4 rounded-xl">
                              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                                Site build
                              </h4>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  8 October
                                </span>
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                            <div className="bg-green-50 p-3 md:p-4 rounded-xl">
                              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                                Domain & hosting
                              </h4>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  10 October
                                </span>
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-full"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aligno;
`,
    },
  },
};
