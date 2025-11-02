import React from 'react';

const CapgoLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter antialiased">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            {/* Capgo Logo SVG */}
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <rect width="32" height="32" rx="6" fill="white"/>
                <path d="M8 8L24 24M24 8L8 24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">Capgo</span>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-400 text-base">
            <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Enterprise</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Documentation</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4 text-blue-400" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.854 5.146L16 8L9.854 10.854L8 16L6.146 10.854L0 8L6.146 5.146L8 0Z"/>
            </svg>
            <span>Login</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center px-8 py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[0.9] tracking-tight">
          Instant updates for your
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
          <span className="text-blue-400 font-mono">&lt;CapacitorJS app/&gt;</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
          No App Store delays. No version bumps. Just push and go.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-200 shadow-2xl hover:shadow-blue-500/30 hover:scale-105">
          Try for free
        </button>
      </div>

      {/* Feature Cards Dashboard */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            
            {/* Left Side - Before Capgo */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-sm text-gray-500 font-mono">before capgo</div>
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 13l4 4L22 6"/>
                </svg>
              </div>
              
              {/* Top Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 relative group hover:border-gray-600 transition-all duration-300">
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">Hotfix</span>
                      <span className="text-red-400 font-medium">stuck</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4"/>
                          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                        </svg>
                      </div>
                      <span className="text-gray-300">Review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                        </svg>
                      </div>
                      <span className="text-gray-300">Manual</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 relative group hover:border-gray-600 transition-all duration-300">
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3v18h18"/>
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-400">3-5 day delay</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0L9.854 5.146L16 8L9.854 10.854L8 16L6.146 10.854L0 8L6.146 5.146L8 0Z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300">Pending</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center group hover:border-gray-600 transition-all duration-300">
                  <div className="text-gray-400">
                    No instant <span className="text-white font-medium">rollback</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 group hover:border-gray-600 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3v18h18"/>
                        <path d="M7 12h10"/>
                        <rect x="7" y="8" width="3" height="8"/>
                        <rect x="14" y="4" width="3" height="12"/>
                      </svg>
                    </div>
                    <span className="text-gray-400">Version 1.07...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - With Capgo */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-sm text-gray-500 font-mono">with capgo</div>
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 13l4 4L22 6"/>
                </svg>
              </div>
              
              {/* Central Command Interface */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 text-center group hover:border-purple-500/50 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
                  <svg viewBox="0 0 32 32" className="w-10 h-10">
                    <rect width="32" height="32" rx="6" fill="white"/>
                    <path d="M8 8L24 24M24 8L8 24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Terminal Commands */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 group hover:border-blue-500/50 transition-all duration-300">
                <div className="font-mono text-blue-400 mb-4 flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span>npx capgo push</span>
                </div>
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-300 font-mono">+ + "Update Deployed" badge animating in...</div>
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  Latest dark + theme2 + build from CI after locales
                </div>
              </div>

              {/* Action Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-900 to-green-800 border border-green-700 rounded-2xl p-6 group hover:border-green-600 transition-all duration-300">
                  <div className="inline-flex items-center bg-green-700 text-green-100 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                    <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                      <circle cx="6" cy="6" r="6"/>
                    </svg>
                    Live in 24hrs
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1v0z"/>
                      </svg>
                    </div>
                    <span className="text-green-100 font-medium">Ship daily, even hourly</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-700 rounded-2xl p-6 group hover:border-purple-600 transition-all duration-300">
                  <div className="font-mono text-purple-300 mb-4 flex items-center space-x-2">
                    <span className="text-green-400">$</span>
                    <span>npx capgo push</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l-2-2-2 2"/>
                        <path d="M21 12c0 1.657-4.03 3-9 3s-9-1.343-9-3"/>
                        <path d="M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5"/>
                        <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
                      </svg>
                    </div>
                    <span className="text-purple-200 font-medium">Rollback anytime</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-yellow-900 to-orange-900 border border-yellow-700 rounded-2xl p-6 flex items-center group hover:border-yellow-600 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    </div>
                    <span className="text-yellow-100 font-medium">Instant bug fixes</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-900 to-teal-900 border border-emerald-700 rounded-2xl p-6 flex items-center group hover:border-emerald-600 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <span className="text-emerald-100 font-medium">Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-3xl flex items-center justify-center mx-auto group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Instant updates</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Reach your users today,<br />
                not weeks later
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-3xl flex items-center justify-center mx-auto group-hover:border-green-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/20">
                <svg className="w-10 h-10 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">App Store compliant</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Compliant with Apple and<br />
                Google requirements
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-3xl flex items-center justify-center mx-auto group-hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">End-to-end encryption</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Only your users can decrypt<br />
                your updates, no one else
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapgoLanding;
