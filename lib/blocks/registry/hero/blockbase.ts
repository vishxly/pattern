import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import BlockbaseLanding from "../../components/hero/blockbase";

export const blockbaseRegistry: LandingComponentGroup = {
  title: "Blockbase",
  description:
    "A modern, dark-themed landing page template for showcasing your product with a focus on instant updates and user engagement.",
  category: "Hero",
  variants: {
    default: {
      title: "Blockbase",
      description:
        "A modern, dark-themed landing page template for showcasing your product with a focus on instant updates and user engagement.",
      component: BlockbaseLanding,
      image: "/images/blocks/hero/blockbase.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `export default function BlockbaseLanding() {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: \`
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            \`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
  
        {/* Purple gradient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-violet-600/25 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
  
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L22 20H2L12 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Blockbase</span>
          </div>
  
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              Benefits
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              Testimonials
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              FAQs
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              Pricing
            </a>
          </nav>
  
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold border border-gray-700 hover:bg-gray-800 transition-colors">
            Get early access
          </button>
        </header>
  
        {/* Hero Section */}
        <main className="relative z-10 px-6 py-12">
          {/* Early Access Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400 font-medium">Early Access</span>
            </div>
          </div>
  
          {/* Main Headline */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">Launch and Scale Web3</span>
              <br />
              <span className="text-white">Applications </span>
              <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
                Effortlessly
              </span>
            </h1>
  
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              All you need to build, deploy, and monitor decentralized
              <br />
              applications, no DevOps, no setup, just ship.
            </p>
  
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors border border-gray-700">
                Get Early Access
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all">
                Explore More
              </button>
            </div>
          </div>
  
          {/* Feature Cards */}
          <div className="max-w-7xl mx-auto mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {/* Speed Card */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-violet-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 h-80 flex flex-col justify-between hover:border-purple-400/50 transition-all duration-300 shadow-2xl shadow-purple-900/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Speed</h3>
                    <div className="w-8 h-8 border border-gray-400 rounded-lg flex items-center justify-center hover:border-white transition-colors">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div
                      className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none"
                      style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
                    >
                      1
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Reliability Card (Center, Larger) */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-900/60 via-purple-800/50 to-violet-900/60 backdrop-blur-xl border border-purple-500/40 rounded-3xl p-8 h-96 flex flex-col justify-between hover:border-purple-400/60 transition-all duration-300 shadow-2xl shadow-purple-900/30">
                  <div className="flex-1 flex items-center justify-center">
                    <div
                      className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none"
                      style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}
                    >
                      2
                    </div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-white">Reliability</span>
                    <div className="w-8 h-8 border border-gray-400 rounded-lg flex items-center justify-center hover:border-white transition-colors">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Simplicity Card */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-violet-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 h-80 flex flex-col justify-between hover:border-purple-400/50 transition-all duration-300 shadow-2xl shadow-purple-900/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Simplicity</h3>
                    <div className="w-8 h-8 border border-gray-400 rounded-lg flex items-center justify-center hover:border-white transition-colors">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div
                      className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none"
                      style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }`,
    },
  },
};
