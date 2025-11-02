"use client";
import React, { useState } from 'react';
import { BarChart3, FileText, Play, ChevronDown } from 'lucide-react';

const DevRelBridgeLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Responsive outer container */}
      <div className="min-h-screen bg-white mx-2 sm:mx-4 lg:mx-8 xl:mx-12 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl border border-gray-200/50 backdrop-blur-sm">
        
        {/* Mobile-first Navigation */}
        <nav className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 border-b border-gray-100/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Responsive Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-md sm:rounded-lg transform rotate-45 shadow-inner"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">DevRelBridge</span>
                <span className="text-xs sm:text-xs lg:text-xs text-gray-500 font-medium tracking-wide hidden sm:block">Fractional DevRel Expertise</span>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden xl:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium">How it works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium">What is DevRel</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium">Case Studies</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium">FAQs</a>
            </div>

            {/* Right Side - Responsive */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="hidden xl:flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 font-medium">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
                <span className="whitespace-nowrap">Schedule call</span>
                <span className="text-sm sm:text-lg lg:text-xl font-light">→</span>
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center space-y-1 sm:space-y-1.5">
                  <div className="h-0.5 bg-gray-700 rounded-full"></div>
                  <div className="h-0.5 bg-gray-700 rounded-full"></div>
                  <div className="h-0.5 bg-gray-700 rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden mt-4 sm:mt-6 pb-4 sm:pb-6 border-t border-gray-100/80 pt-4 sm:pt-6 animate-fadeIn">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-1 text-gray-600 font-medium">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <a href="#" className="text-gray-600 font-medium">How it works</a>
                <a href="#" className="text-gray-600 font-medium">What is DevRel</a>
                <a href="#" className="text-gray-600 font-medium">Case Studies</a>
                <a href="#" className="text-gray-600 font-medium">Blog</a>
                <a href="#" className="text-gray-600 font-medium">FAQs</a>
                <div className="flex items-center space-x-1 text-gray-600 font-medium">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Responsive Main Content */}
        <main className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* Mobile-optimized feature badges */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6 mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 mx-auto sm:mx-0">
                <BarChart3 className="w-4 h-4" />
                <span className="font-semibold text-sm">Proven ROI</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 mx-auto sm:mx-0">
                <FileText className="w-4 h-4" />
                <span className="font-semibold text-sm">No Long-Term Contracts</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 mx-auto sm:mx-0">
                <Play className="w-4 h-4" />
                <span className="font-semibold text-sm">Start This Week</span>
              </div>
            </div>

            {/* Responsive main heading */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-900 leading-tight sm:leading-[0.95] lg:leading-[0.9] mb-4 sm:mb-5 lg:mb-6 tracking-tight px-2">
                Turn Your DevRel Program
              </h1>
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-2 sm:gap-4 px-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight sm:leading-[0.95] lg:leading-[0.9] tracking-tight">
                  Into
                </h1>
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
                  Revenue Growth
                </span>
              </div>
            </div>

            {/* Responsive subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-16 leading-relaxed font-light px-2 sm:px-4">
              Stop wasting money on DevRel that doesn't convert. We help B2B tech companies turn developer 
              engagement into qualified pipeline and measurable revenue — with 3x ROI in 90 days.
            </p>

            {/* Mobile-optimized CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20 px-2">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl lg:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl lg:shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105">
                Book Strategy Call
              </button>
              <button className="w-full sm:w-auto text-gray-700 hover:text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl lg:rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Pricing
              </button>
            </div>

            {/* Mobile-optimized DevRel link */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <a href="#" className="text-gray-500 hover:text-gray-800 font-semibold inline-flex items-center space-x-2 sm:space-x-3 transition-all duration-300 group text-sm sm:text-base">
                <span>New to DevRel? Start Here</span>
                <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

            {/* Responsive trust section */}
            <div className="text-center">
              <p className="text-gray-500 font-semibold mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base lg:text-lg">Trusted by Developer-Focused Companies</p>
              
              {/* Mobile-optimized company logos */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 opacity-50 hover:opacity-70 transition-opacity duration-500">
                {/* Sourcegraph */}
                <div className="text-gray-500 font-bold text-lg sm:text-xl tracking-wide">
                  Sourcegraph
                </div>
                
                {/* Krunch */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full shadow-lg"></div>
                  <span className="text-gray-500 font-bold text-lg sm:text-xl tracking-wide">krunch</span>
                </div>
                
                {/* Responsive placeholder logos */}
                <div className="w-20 h-8 sm:w-24 sm:h-9 lg:w-28 lg:h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg lg:rounded-xl opacity-60 shadow-md"></div>
                <div className="w-18 h-8 sm:w-20 sm:h-9 lg:w-24 lg:h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg lg:rounded-xl opacity-60 shadow-md"></div>
                <div className="w-24 h-8 sm:w-28 sm:h-9 lg:w-32 lg:h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg lg:rounded-xl opacity-60 shadow-md"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DevRelBridgeLanding;
