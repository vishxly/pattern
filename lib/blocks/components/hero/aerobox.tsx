"use client";
import React, { useState } from "react";
import {
  Shield,
  Users,
  Share2,
  RotateCw,
  Database,
  Lock,
  FileText,
  BarChart3,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react";

export default function AeroBoxLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Container with elegant white ring */}
      <div className="max-w-7xl mx-auto bg-black ring-1 ring-white/10 shadow-2xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 sm:px-8 py-6 border-b border-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-white rounded-sm opacity-90"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              AeroBox
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-all duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-all duration-300 font-medium"
            >
              Benefits
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-all duration-300 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-all duration-300 font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-all duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA Button */}
          <button className="relative px-7 py-3 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-[0_0_40px_10px_rgba(59,130,246,0.35)] hover:shadow-[0_0_60px_15px_rgba(59,130,246,0.45)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-500 before:to-blue-600 before:blur-xl before:opacity-40 before:scale-110 before:animate-pulse before:z-[-1]">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#"
                className="block text-neutral-400 hover:text-white transition-all duration-300 font-medium py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-neutral-400 hover:text-white transition-all duration-300 font-medium py-2"
              >
                Benefits
              </a>
              <a
                href="#"
                className="block text-neutral-400 hover:text-white transition-all duration-300 font-medium py-2"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="block text-neutral-400 hover:text-white transition-all duration-300 font-medium py-2"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-neutral-400 hover:text-white transition-all duration-300 font-medium py-2"
              >
                Contact
              </a>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="px-4 sm:px-8 py-12 sm:py-24 text-center relative overflow-hidden">
          {/* Elegant background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-60"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-xs sm:text-sm text-blue-400 font-semibold tracking-wide uppercase">
                Secure Storage • Trusted by Thousands
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 sm:mb-8">
              Your All-in-One Cloud <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Storage Solution
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0">
              Secure, reliable, and easy-to-use cloud storage designed to keep
              your files accessible anywhere, anytime. Manage your data with
              confidence.
            </p>

            <button className="relative px-12 py-4 text-white text-2xl font-semibold rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 shadow-[0_0_80px_20px_rgba(59,130,246,0.45)] transition-transform duration-300 ease-in-out hover:scale-105 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-blue-500 before:via-blue-600 before:to-indigo-600 before:blur-2xl before:opacity-60 before:scale-125 before:animate-pulse before:z-[-1]">
              Get Started
            </button>
          </div>

          {/* Elegant Dashboard Preview */}
          <div className="mt-12 sm:mt-24 relative">
            <div className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <span className="text-neutral-400 text-xs sm:text-sm font-medium ml-2 sm:ml-4">
                    Dashboard
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    <div className="w-6 h-6 sm:w-9 sm:h-9 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-2 border-black shadow-lg"></div>
                    <div className="w-6 h-6 sm:w-9 sm:h-9 bg-gradient-to-r from-green-500 to-green-600 rounded-full border-2 border-black shadow-lg"></div>
                    <div className="w-6 h-6 sm:w-9 sm:h-9 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-2 border-black shadow-lg"></div>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-400 font-medium">
                    +3
                  </span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="space-y-2 overflow-x-auto lg:overflow-visible">
                    <div className="flex lg:block space-x-2 lg:space-x-0 lg:space-y-2 min-w-max lg:min-w-0">
                      <div className="flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl whitespace-nowrap">
                        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        <span className="text-xs sm:text-sm font-medium">
                          Dashboard
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 whitespace-nowrap">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium">
                          Files
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 whitespace-nowrap">
                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium">
                          Shared
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 whitespace-nowrap">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium">
                          Teams
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                    <div className="text-xs sm:text-sm text-blue-300 font-medium">
                      Maximize your AeroBox experience - Only one step more
                      before encrypted
                    </div>
                  </div>

                  {/* Storage Usage */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs sm:text-sm text-neutral-400 font-medium">
                        Data Storage
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-300 font-semibold">
                        450 GB / 1000 GB
                      </span>
                    </div>
                    <div className="w-full bg-neutral-800 rounded-full h-2 sm:h-3 shadow-inner">
                      <div
                        className="bg-gradient-to-r from-green-400 via-blue-500 via-orange-400 to-purple-500 h-2 sm:h-3 rounded-full shadow-sm"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>

                  {/* File Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-3 sm:p-5 text-center hover:bg-neutral-800/70 transition-all duration-300">
                      <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400 mx-auto mb-2 sm:mb-3" />
                      <div className="text-xs text-neutral-400 mb-1">
                        Documents
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                        120GB of 200GB used
                      </div>
                    </div>
                    <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-3 sm:p-5 text-center hover:bg-neutral-800/70 transition-all duration-300">
                      <Database className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mx-auto mb-2 sm:mb-3" />
                      <div className="text-xs text-neutral-400 mb-1">
                        Spreadsheet Files
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                        50GB of 200GB used
                      </div>
                    </div>
                    <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-3 sm:p-5 text-center hover:bg-neutral-800/70 transition-all duration-300">
                      <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mx-auto mb-2 sm:mb-3" />
                      <div className="text-xs text-neutral-400 mb-1">
                        Presentations
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                        30GB of 200GB used
                      </div>
                    </div>
                    <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-3 sm:p-5 text-center hover:bg-neutral-800/70 transition-all duration-300">
                      <Database className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mx-auto mb-2 sm:mb-3" />
                      <div className="text-xs text-neutral-400 mb-1">
                        Archive Files
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                        10GB of 200GB used
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Logos */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-16 opacity-40">
            <span className="text-sm sm:text-xl font-bold tracking-wide">
              Tently
            </span>
            <span className="text-sm sm:text-xl font-bold tracking-wide">
              Dropbox
            </span>
            <span className="text-sm sm:text-xl font-bold tracking-wide">
              Notion
            </span>
            <span className="text-sm sm:text-xl font-bold tracking-wide">
              Google
            </span>
            <span className="text-sm sm:text-xl font-bold tracking-wide">
              Slack
            </span>
            <span className="text-sm sm:text-xl font-bold tracking-wide">
              GitHub
            </span>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-8 py-12 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            {/* Left Side - Features */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-black mb-8 sm:mb-16 tracking-tight">
                Discover the Power of
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Aerobox Features
                </span>
              </h2>

              <div className="space-y-6 sm:space-y-10">
                <div className="flex space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      Smart File Management
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      Automatically organize files by type, date, and custom
                      tags for full visibility and streamlined communication.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      Military-Grade Security
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      Strong device lock and automatic cloud backup by security
                      systems to ensure that data is kept safe.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      Seamless File Sharing
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      Seamless integration with third-party web applications and
                      easily manage files and secure sharing.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <RotateCw className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      Real-Time Sync Across All Devices
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      Automatically syncing files across devices automatically
                      to keep your files and documents that change or update
                      systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard Visual */}
            <div className="relative">
              <div className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-4 sm:p-5 text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-2 sm:mb-3 shadow-lg"></div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium">
                      Documents Files
                    </div>
                  </div>
                  <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-4 sm:p-5 text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-2 sm:mb-3 shadow-lg"></div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium">
                      Document Files
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-neutral-800/50 border border-white/5 rounded-xl">
                    <span className="text-xs sm:text-sm font-medium">
                      Work-s-12-200.doc
                    </span>
                    <span className="text-xs text-neutral-400">55 MB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-neutral-800/50 border border-white/5 rounded-xl">
                    <span className="text-xs sm:text-sm font-medium">
                      Work-s-12-200.doc
                    </span>
                    <span className="text-xs text-neutral-400">55 MB</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-neutral-900 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-2xl">
                  <div className="text-xs text-neutral-400 mb-1 sm:mb-2 font-medium">
                    Real-time Storage
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    200 GB{" "}
                    <span className="text-xs sm:text-sm text-neutral-400 font-normal">
                      used
                    </span>
                  </div>
                  <div className="w-20 sm:w-24 bg-neutral-800 rounded-full h-2 mt-2 sm:mt-3 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full shadow-sm"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="px-4 sm:px-8 py-12 sm:py-24 bg-neutral-900/30">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 tracking-tight">
              Simplify Your Digital Life with Smart Tools
            </h2>
            <p className="text-base sm:text-xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed">
              AeroBox makes managing your files effortless with intuitive
              features designed to save time and boost productivity. From smart
              search to auto-organization, everything is just a click away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <div className="bg-neutral-900/80 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-6 sm:mb-8 backdrop-blur-xl">
                <div className="w-full h-32 sm:h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center border border-blue-500/20">
                  <BarChart3 className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400" />
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2 sm:h-3 shadow-inner">
                  <div
                    className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 h-2 sm:h-3 rounded-full shadow-sm"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Sleek and Intuitive Interface
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Enjoy an intuitive interface designed for efficiency and
                ease-of-use, with quick access and intuitive navigation, helping
                users manage files easily and without distractions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"></div>
                    <div className="text-left">
                      <div className="text-sm font-semibold">Michael Chen</div>
                      <div className="text-xs text-neutral-400">
                        Data Transferred
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-neutral-800/50 border border-white/5 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg"></div>
                    <div className="text-left">
                      <div className="text-sm font-semibold">Sarah Johnson</div>
                      <div className="text-xs text-neutral-400">
                        File Uploaded
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-neutral-800/50 border border-white/5 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg"></div>
                    <div className="text-left">
                      <div className="text-sm font-semibold">
                        Maria Martinez
                      </div>
                      <div className="text-xs text-neutral-400">
                        Shared Document
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                User-Friendly Features
              </h3>
              <p className="text-neutral-300 font-light leading-relaxed">
                Quick access and activity updates, optimized for sharing,
                printing and collaboration, ensuring a smooth workflow and
                boosting your overall productivity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-neutral-800/50 border border-white/5 rounded-lg">
                    <span className="text-sm font-medium">
                      Premium Storage.zip
                    </span>
                    <span className="text-xs text-blue-400">▼</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-neutral-800/50 border border-white/5 rounded-lg">
                    <span className="text-sm font-medium">
                      Document_Final.pdf
                    </span>
                    <span className="text-xs text-green-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-neutral-800/50 border border-white/5 rounded-lg">
                    <span className="text-sm font-medium">
                      Project_Data.xlsx
                    </span>
                    <span className="text-xs text-orange-400">●</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-neutral-800/50 border border-white/5 rounded-lg">
                    <span className="text-sm font-medium">
                      Backup_Files.zip
                    </span>
                    <span className="text-xs text-purple-400">◀</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Smart & Structured Data Management
              </h3>
              <p className="text-neutral-300 font-light leading-relaxed">
                Intelligent file organization and smart analytics for perfect
                organization, helping users manage files efficiently and make
                better decisions quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-8 py-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">
              Flexible & Transparent Pricing for Every Need
            </h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed">
              Get easy access from everyone at start. With simple and
              transparent pricing that grows with you and adapt with seamless
              and organized.
            </p>

            <div className="flex items-center justify-center mt-10">
              <span className="text-neutral-400 font-medium">
                Charge Monthly
              </span>
              <div className="mx-6 relative">
                <input type="checkbox" className="sr-only" />
                <div className="block bg-neutral-800 w-16 h-8 rounded-full border border-white/10"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition shadow-lg"></div>
              </div>
              <span className="text-white font-medium">
                Charge Annually{" "}
                <span className="text-green-400">(save 20%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
              <div className="text-center mb-10">
                <div className="text-sm text-neutral-400 font-semibold tracking-wide uppercase mb-2">
                  STARTER
                </div>
                <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
                <div className="text-5xl font-black mb-3">
                  $5
                  <span className="text-xl text-neutral-400 font-normal">
                    /month
                  </span>
                </div>
                <p className="text-neutral-300 font-light">
                  Perfect for personal use and small storage needs
                </p>
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">100GB Storage</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Basic backup and sync features
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Secure File Backup
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    24/7 Customer Support via email
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Multi-Device Sync</span>
                </div>
              </div>

              <button className="w-full bg-neutral-800 border border-white/10 hover:bg-neutral-700 py-4 rounded-xl font-semibold transition-all duration-300">
                Subscribe this plan →
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 border border-blue-500/50 relative shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  PRO
                </span>
              </div>

              <div className="text-center mb-10">
                <div className="text-sm text-blue-100 font-semibold tracking-wide uppercase mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                <div className="text-5xl font-black mb-3">
                  $12
                  <span className="text-xl text-blue-100 font-normal">
                    /month
                  </span>
                </div>
                <p className="text-blue-50 font-light">
                  Perfect for teams and growing businesses
                </p>
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm font-medium text-white">
                    1TB Storage
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm font-medium text-white">
                    Advanced file versioning and history
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm font-medium text-white">
                    Priority Support
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">
                    Get help deployment and remote updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Advanced permissions</span>
                </div>
              </div>

              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors">
                Subscribe this plan →
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Business Plan</h3>
                <div className="text-4xl font-bold mb-2">
                  $25<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">
                  Perfect for large teams with extensive storage
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Unlimited Storage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">
                    Advanced admin controls and permissions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Team Collaboration Tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Custom branding options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">
                    Advanced Security & Encryption
                  </span>
                </div>
              </div>

              <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-medium transition-colors">
                Subscribe this plan →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-gray-800/50 text-center text-gray-400">
          <p>&copy; 2024 AeroBox. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
