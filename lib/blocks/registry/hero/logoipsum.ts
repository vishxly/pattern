import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Logoipsum from "../../components/hero/logoipsum";

export const logoipsumRegistry: LandingComponentGroup = {
  title: "Logoipsum",
  description: "Logoipsum landing page",
  category: "Hero",
  variants: {
    default: {
      title: "Logoipsum",
      description: "Logoipsum landing page",
      component: Logoipsum,
      image: "/images/blocks/hero/logoipsum.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState } from 'react';
import { ChevronRight, Menu, X, Sparkles, Zap, Palette, Wrench } from 'lucide-react';

export default function Logoipsum() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Products', 'Features', 'Tools', 'Library', 'Pricing'];
  
  const partners = [
    { name: 'deepseek', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'Grok', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/X_logo_2023.svg' },
    { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'stability.ai', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Stability_AI_logo.svg' },
    { name: 'Claude', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Anthropic_logo.svg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 lg:px-8 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Logoipsum</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Sign Up</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="block w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">
                  Sign In
                </button>
                <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center space-x-2">
                  <span>Sign Up</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Announcement Badge */}
          <div className="flex justify-center mb-8 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
              <Sparkles className="w-4 h-4" />
              <span>3D AI the best in the world #1</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16 lg:mb-24">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Ideas
              <br />
              into Stunning{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  3D Visuals
                </span>
                {/* 3D Icon */}
                <div className="inline-block ml-4 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg"></div>
                  </div>
                </div>
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bring your imagination to life with cutting-edge 3D tools that capture every detail and transform your ideas into stunning visuals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span>Get started</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-lg">
                Learn more
              </button>
            </div>
          </div>

          {/* Feature Cards Grid - 3D Glassmorphic Layout */}
          <div className="hidden md:block relative mb-20 lg:mb-32" style={{ perspective: '1000px' }}>

            
            {/* Big 3D Library Card - Top Left */}
            <div className="absolute -top-64 -left-36 w-64 lg:w-80 transform -rotate-12 translate-x-0 translate-y-0 lg:translate-x-16 lg:translate-y-8">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Big 3D Library</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Cast your spell and transform simple text prompts into real-life 3D models using
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* All 3D Formats Card - Top Right */}
            <div className="absolute top-0 right-0 w-64 lg:w-80 transform rotate-6 translate-x-0 translate-y-16 lg:translate-x-4 lg:translate-y-12">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">All 3D Formats</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Cast your spell and transform simple text prompts into real-life 3D models using
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Re-Texture AI Card - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-64 lg:w-80 transform rotate-3 translate-x-8 translate-y-32 lg:translate-x-24 lg:translate-y-48">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Re-Texture AI</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Cast your spell and transform simple text prompts into real-life 3D models using
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Image Studio Card - Bottom Center */}
            <div className="absolute bottom-0 left-1/2 w-64 lg:w-80 transform -rotate-6 -translate-x-1/2 translate-y-40 lg:translate-y-56">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Image Studio</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Cast your spell and transform simple text prompts into real-life 3D models using
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Tools Card - Bottom Right */}
            <div className="absolute -top-[22rem] right-0 w-64 lg:w-80 transform rotate-12 translate-x-0 translate-y-24 lg:-translate-x-8 lg:translate-y-40">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">3D Tools</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Cast your spell and transform simple text prompts into real-life 3D models using
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="text-center lg:mt-96 mt-0">
            <p className="text-gray-500 mb-12 text-lg">
              Supported and partnered with leading AI companies around the world.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center opacity-60">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center h-12 lg:h-16 hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-lg lg:text-xl font-bold text-gray-700">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}`,
    },
  },
};
