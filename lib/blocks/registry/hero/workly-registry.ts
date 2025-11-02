// lib/blocks/registry/workly-registry.ts

import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import workly from "../../components/hero/workly";

export const worklyRegistry: LandingComponentGroup = {
  title: "Workly",
  description:
    "Workly uses a bold, dark UI with purple highlights for a modern, team-focused look.",
  category: "Hero",
  variants: {
    default: {
      title: "Workly",
      description:
        "Workly uses a bold, dark UI with purple highlights for a modern, team-focused look.",
      component: workly,
      image: "/images/blocks/hero/workly.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React from 'react';

const Workly = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 border-b border-slate-700/50 backdrop-blur-md bg-slate-950/80">
        <div className="flex items-center space-x-4 sm:space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-slate-100">Workly</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300">Features</a>
            <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors duration-300">Solutions</a>
            <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors duration-300">Pricing</a>
            <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        {/* Auth Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden sm:block text-slate-400 hover:text-slate-100 transition-colors duration-300 px-3 sm:px-4 py-2 text-sm sm:text-base">
            Sign in
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-100 mb-4 sm:mb-6 leading-tight">
            Simplify Your Team's Work,<br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              All in One Dashboard
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Manage projects, schedules, files, and communication seamlessly — 
            so your team can focus on what matters most
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 px-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 text-slate-100 hover:text-purple-400 transition-colors duration-300 px-6 sm:px-8 py-3 sm:py-3.5">
              <span className="font-medium">Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-7xl mx-auto">
          {/* Floating Cards */}
          
          {/* Customers Card - Top Left */}
          <div className="absolute -top-4 sm:-top-8 left-2 sm:left-4 lg:left-8 w-64 sm:w-72 h-44 sm:h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-700/50 backdrop-blur-sm transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-400">Customers</span>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="text-2xl sm:text-3xl font-bold text-slate-100 mb-1">47193+</div>
              <div className="text-xs sm:text-sm text-slate-400">Active users</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full border-2 border-slate-800"></div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-orange-500 rounded-full border-2 border-slate-800"></div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-500 rounded-full border-2 border-slate-800"></div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full border-2 border-slate-800"></div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-slate-600 rounded-full border-2 border-slate-800 flex items-center justify-center text-xs text-slate-300">+</div>
              </div>
            </div>
          </div>

          {/* Overview Card - Top Right */}
          <div className="absolute -top-4 sm:-top-8 right-2 sm:right-4 lg:right-8 w-72 sm:w-80 h-48 sm:h-52 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-700/50 backdrop-blur-sm transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium text-slate-400">Overview</span>
              <span className="bg-purple-600 px-2 py-1 rounded-md text-xs text-white">Monthly</span>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="text-xs sm:text-sm text-slate-400 mb-1">10%</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">5,560</div>
              <div className="text-xs sm:text-sm text-slate-400">5%</div>
            </div>
            <div className="relative h-12 sm:h-16">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 40 Q 50 20 100 30 T 200 25"
                  fill="none"
                  stroke="url(#chartGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="25" r="4" fill="#7c3aed" />
              </svg>
            </div>
          </div>

          {/* Main Dashboard Container */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-700/50 backdrop-blur-sm mx-2 sm:mx-4 lg:mx-16 mt-24 sm:mt-32 lg:mt-16">
            <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 min-h-[500px] sm:min-h-[600px] border border-slate-700/30">
              
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-100">Dashboard</span>
                  </div>
                  <span className="text-sm text-slate-400">14 February 2023</span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                  <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-purple-600/10 text-purple-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span className="text-sm font-medium">Team</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/50 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Projects</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/50 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Message</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/50 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Schedule</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/50 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm8-1a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">File Manager</span>
                    </div>
                  </nav>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Progress Chart */}
                  <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-100">Progress</h3>
                      <span className="text-sm text-slate-400">Today</span>
                    </div>
                    <div className="h-24 sm:h-32 relative mb-4">
                      <svg className="w-full h-full" viewBox="0 0 400 120">
                        <defs>
                          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 20 100 Q 80 60 150 70 T 300 50 T 380 40"
                          fill="url(#progressGradient)"
                          fillOpacity="0.3"
                          stroke="#7c3aed"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-slate-400 text-sm">
                      Available in Full Version
                    </div>
                  </div>

                  {/* Calendar and File Manager */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Mini Calendar */}
                    <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-slate-100">February</h3>
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                          <div key={i} className="text-xs text-slate-400 text-center p-1 sm:p-2">{day}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 28 }, (_, i) => (
                          <div key={i} className={\`text-xs text-center p-1 sm:p-2 rounded \${
                            i === 13 ? 'bg-purple-600 text-white' : 
                            i < 10 ? 'text-slate-500' : 'text-slate-300 hover:bg-slate-700/50'
                          }\`}>
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* File Manager */}
                    <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                      <h3 className="font-semibold text-slate-100 mb-4">File Manager</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors">
                          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                          </svg>
                          <span className="text-sm text-slate-100">UI Designer Folder</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors">
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                          </svg>
                          <span className="text-sm text-slate-100">UX Researcher Folder</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors">
                          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                          </svg>
                          <span className="text-sm text-slate-100">Developer Folder</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold text-slate-100">Projects</h3>
                      <span className="text-sm text-slate-400">Division</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Project Card 1 */}
                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-4">
                        <div className="text-white mb-3">
                          <h4 className="font-medium">Market Place Design</h4>
                          <p className="text-sm opacity-90">UI Designer</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-white/20 rounded-full border border-white/30"></div>
                            <div className="w-6 h-6 bg-white/20 rounded-full border border-white/30"></div>
                            <div className="w-6 h-6 bg-white/20 rounded-full border border-white/30"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Card 2 */}
                      <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/20">
                        <div className="text-slate-100 mb-3">
                          <h4 className="font-medium">Market Place Design</h4>
                          <p className="text-sm text-slate-400">UI Designer</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-slate-600 rounded-full border border-slate-500"></div>
                            <div className="w-6 h-6 bg-slate-600 rounded-full border border-slate-500"></div>
                            <div className="w-6 h-6 bg-slate-600 rounded-full border border-slate-500"></div>
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
      </section>
    </div>
  );
};

export default Workly;
`,
    },
  },
};
