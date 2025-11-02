// lib/blocks/registry/job.ts

import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import JobPlatformLanding from "../../components/hero/job";

export const jobRegistry: LandingComponentGroup = {
  title: "Job Platform ",
  description:
    "A modern landing page for a job platform with a clean, professional design.",
  category: "Hero",
  variants: {
    default: {
      title: "Job Platform Landing Page",
      description:
        "A modern landing page for a job platform with a clean, professional design.",
      component: JobPlatformLanding,
      image: "/images/blocks/hero/job.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React, { useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Bookmark,
  MoreHorizontal,
  Star,
  Users,
  TrendingUp,
  Filter,
  ChevronDown,
  Bell,
  User,
} from "lucide-react";

export default function JobPlatformLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-gray-50 to-orange-400 relative overflow-hidden">
      {/* Subtle outer white ring */}
      <div className="absolute inset-3 rounded-[32px] border border-white/20 pointer-events-none z-0"></div>

      {/* Decorative background elements */}
      <div className="absolute top-32 left-16 w-40 h-40 bg-white/15 rounded-full blur-3xl"></div>
      <div className="absolute top-64 right-32 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-32 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navbar */}
        <nav className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-xl font-semibold text-gray-800 hidden sm:block">
                    logos loker
                  </span>
                </div>

                {/* Navigation Links - Hidden on mobile */}
                <div className="hidden lg:flex items-center space-x-8">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
                  >
                    Career tips
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
                  >
                    Platform
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
                  >
                    Contact
                  </a>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium px-3 py-2 text-sm hidden sm:block">
                    Login
                  </button>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/30 backdrop-blur-md rounded-full px-4 py-2 mb-8 border-2 border-white/40 ring-8 ring-white/80 shadow-[0_0_10px_rgba(255,255,255,0.6)]">
              <Star className="w-4 h-4 text-orange-500 mr-2 fill-current" />
              <span className="text-gray-800 text-sm font-medium">
                #1 Best Job Search Service in Asia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-800 mb-6 leading-tight px-4">
              Your Trusted Platform for The
              <br className="hidden sm:block" />
              <span className="block sm:inline">
                {" "}
                Best Career Opportunities
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Explore thousands of job openings across various industries and
              find the position that matches your skills and interests.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-400 to-purple-500 text-white px-8 py-4 rounded-md font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
                Get Started
              </button>
              <button className="w-full sm:w-auto text-gray-700 font-semibold hover:text-gray-900 transition-colors flex items-center justify-center">
                How We Work?
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Preview with fade effect */}
        <div className="px-4 sm:px-6 lg:px-8 pb-12 relative">
          <div className="max-w-7xl mx-auto relative  border-4 border-white/50 rounded-3xl">
            {/* Outer container with white ring */}
            <div className="relative overflow-hidden rounded-3xl border border-white/50 ring-8 ring-white/50 bg-white/95 backdrop-blur-sm shadow-2xl">
              {/* Bottom fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent z-20 pointer-events-none" />

              {/* Dashboard Header */}
              <div className="bg-gray-50/80 backdrop-blur-sm px-6 lg:px-8 py-4 border-b border-gray-200  ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <span className="text-lg font-semibold text-gray-800 hidden sm:block">
                      logos loker
                    </span>
                  </div>

                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    >
                      Portfolio
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    >
                      Clients
                    </a>
                    <a
                      href="#"
                      className="text-purple-600 font-semibold text-sm"
                    >
                      Company Profile
                    </a>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                      <Search className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                      <Bell className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 lg:p-8 pb-24">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 mb-8 border border-cyan-100">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    Empowering Your Career Growth
                  </h2>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Discover job listings, track applications, and advance your
                    professional journey
                  </p>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white text-sm">
                      <option>Location Filter</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white text-sm">
                      <option>Remote / Technology</option>
                    </select>
                    <div className="flex items-center gap-2 px-4 py-3">
                      <Filter className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">7 posts</span>
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm">
                      Search
                    </button>
                  </div>
                </div>

                {/* Job Listings Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left Column - Job Cards */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* Job Card 1 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <div className="w-6 h-6 bg-white rounded-md"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 text-lg">
                              Development Engineering
                            </h3>
                            <p className="text-sm text-gray-500">
                              Global Arch...
                            </p>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Bookmark className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          Remote
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Full-time
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-800">
                          $85,000/year
                        </span>
                        <button className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-sm">
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Job Card 2 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <div className="w-6 h-6 bg-white rounded-md"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 text-lg">
                              Marketing
                            </h3>
                            <p className="text-sm text-gray-500">
                              Shopey Company...
                            </p>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Bookmark className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          Jakarta
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Part-time
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-800">
                          $45,000/year
                        </span>
                        <button className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-sm">
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Additional Job Cards for mobile stacking */}
                    <div className="lg:hidden bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <div className="w-6 h-6 bg-white rounded-md"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 text-lg">
                              Programmer Analyst
                            </h3>
                            <p className="text-sm text-gray-500">PTTEP</p>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Bookmark className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          Bangkok
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Full-time
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-800">
                          $95,000/year
                        </span>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Featured Job (Hidden on mobile, shown as card above) */}
                  <div className="hidden lg:block">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 sticky top-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                            <div className="w-7 h-7 bg-white rounded-lg"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">
                              Programmer Analyst
                            </h3>
                            <div className="flex items-center space-x-1">
                              <p className="text-purple-600 font-medium text-sm">
                                PTTEP
                              </p>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className="w-3 h-3 text-yellow-400 fill-current"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
                          <MoreHorizontal className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/70 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Users className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-xs font-medium text-gray-600">
                              Team Size
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-gray-800">
                            5-10 people
                          </p>
                        </div>
                        <div className="bg-white/70 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <TrendingUp className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-xs font-medium text-gray-600">
                              Experience
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-gray-800">
                            2+ years
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">
                            Job Skill: Math
                          </span>
                          <span className="text-xs font-semibold text-gray-800">
                            87%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "87%" }}
                          ></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">
                            Job Skill: Analytics
                          </span>
                          <span className="text-xs font-semibold text-gray-800">
                            92%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "92%" }}
                          ></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">
                            Communication
                          </span>
                          <span className="text-xs font-semibold text-gray-800">
                            85%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">
                            Speed Development
                          </span>
                          <span className="text-xs font-semibold text-gray-800">
                            78%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "78%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="border-t border-purple-200 pt-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              Salary Range
                            </p>
                            <p className="text-2xl font-bold text-gray-800">
                              $95,000
                            </p>
                            <p className="text-xs text-gray-500">per year</p>
                          </div>
                          <button className="bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm">
                            Apply for this job
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
      </div>
    </div>
  );
}`,
    },
  },
};
