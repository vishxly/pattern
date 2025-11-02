export default function InvistraLanding() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
  
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">Invistra</span>
          </div>
  
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Benefits
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Testimonials
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              FAQs
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Pricing
            </a>
          </nav>
  
          <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
            Join Newsletter
          </button>
        </header>
  
        {/* Hero Section */}
        <main className="relative z-10 px-6 py-12">
          {/* Experience Free Button */}
          <div className="text-center mb-12">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg">
              Experience It Free Today
            </button>
          </div>
  
          {/* Main Headline */}
          <div className="max-w-5xl mx-auto text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6">
              <span className="text-gray-900">Stay Safe With Invisible</span>
              <br />
              <span className="text-gray-900">Protection and </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Full Privacy
              </span>
            </h1>
  
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Real-time detection, invisible protection, and
              <br />
              uncompromised privacy, all in one seamless solution.
            </p>
  
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors shadow-lg">
                Join Newsletter
              </button>
            </div>
          </div>
  
          {/* Feature Cards */}
          <div className="max-w-7xl mx-auto mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Smart Detection */}
              <div className="text-center group bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/70 transition-all duration-300 shadow-sm">
                <div className="relative mb-8 flex justify-center">
                  <div className="w-32 h-32 relative">
                    {/* Pink crystal background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 to-purple-300/40 rounded-full blur-xl"></div>
                    {/* Crystal shape */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 transform rotate-45 rounded-lg shadow-2xl">
                        <div className="absolute inset-2 bg-gradient-to-br from-pink-300 to-purple-400 rounded-md transform -rotate-45">
                          <div className="absolute inset-1 bg-gradient-to-br from-pink-200 to-purple-300 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Detection</h3>
                <p className="text-gray-600 mb-2">Analyzes threats in real-time.</p>
                <p className="text-gray-600 mb-6">Stops attacks before they happen.</p>
                <a
                  href="#"
                  className="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
  
              {/* Silent Protection */}
              <div className="text-center group bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/70 transition-all duration-300 shadow-sm">
                <div className="relative mb-8 flex justify-center">
                  <div className="w-32 h-32 relative">
                    {/* Purple shield background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 to-blue-300/40 rounded-full blur-xl"></div>
                    {/* Shield crystal shape */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-20 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-t-full rounded-b-lg shadow-2xl">
                        <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-blue-500 rounded-t-full rounded-b-md">
                          <div className="absolute inset-1 bg-gradient-to-br from-purple-300 to-blue-400 rounded-t-full rounded-b-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Silent Protection</h3>
                <p className="text-gray-600 mb-2">Designed to stay out of sight.</p>
                <p className="text-gray-600 mb-6">Built to keep threats out of reach.</p>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-2 border-white"></div>
                  </div>
                  <a
                    href="#"
                    className="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center space-x-1"
                  >
                    <span>Our Users</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
  
              {/* Total Privacy */}
              <div className="text-center group bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/70 transition-all duration-300 shadow-sm">
                <div className="relative mb-8 flex justify-center">
                  <div className="w-32 h-32 relative">
                    {/* Blue crystal background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-full blur-xl"></div>
                    {/* Crystal shape */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 transform rotate-12 rounded-lg shadow-2xl">
                        <div className="absolute inset-2 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-md transform -rotate-12">
                          <div className="absolute inset-1 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Privacy</h3>
                <p className="text-gray-600 mb-2">No tracking. No data sharing.</p>
                <p className="text-gray-600 mb-6">You stay in control of your info.</p>
                <a
                  href="#"
                  className="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Company Logos Footer */}
          <div className="max-w-6xl mx-auto mt-24 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between opacity-40">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-lg font-semibold text-gray-400">Sisyphus</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-lg font-semibold text-gray-400">Acme Corp</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-lg font-semibold text-gray-400">Nietzsche</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-lg font-semibold text-gray-400">FocalPoint</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="text-lg font-semibold text-gray-400">Biosynthesis</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  