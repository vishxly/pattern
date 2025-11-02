import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import MagUSDLanding from "../../components/hero/mag";

export const magRegistry: LandingComponentGroup = {
  title: "MagUSD",
  description:
    "A comprehensive MagUSD landing page with links and social media.",
  category: "Hero",
  variants: {
    default: {
      title: "MagUSD",
      description:
        "A comprehensive MagUSD landing page with links and social media.",
      component: MagUSDLanding,
      image: "/images/blocks/hero/mag.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React, { useState } from "react";

const MagUSDLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 relative z-10">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-yellow-400 rounded flex items-center justify-center">
              <span className="text-black font-bold text-lg">⚡</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">MagUSD</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Product
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Partners
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Pricing
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white/80 hover:text-white transition-colors font-medium hidden sm:block">
            Sign In
          </button>
          <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-white/90 transition-all">
            Request Demo
          </button>
          <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-300 transition-all">
            Try for Free
          </button>
        </div>
      </header>

      {/* Background Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-white/30"></div>
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-white/30"></div>
        <div className="absolute w-[1600px] h-[1600px] rounded-full border border-white/20"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-8 pb-12">
        {/* New Badge */}
        <div className="flex justify-center mb-12 pt-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-5 py-3 flex items-center space-x-3 border border-white/10">
            <span className="bg-green-500 text-black text-xs px-3 py-1 rounded-full font-bold">
              New
            </span>
            <span className="text-sm text-white/90 font-medium">
              Earn with MagUSD Portal
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Beyond Stable coin
          </h1>
          <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Integrate MagUSD effortlessly with our developer-friendly SDK.
            Perfect for treasury management, sweep accounts, or customer
            yield—get started quickly and easily.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
              Try MagUSD
            </button>
            <button className="text-white border border-white/30 px-10 py-4 rounded-full font-semibold text-lg hover:border-white/50 hover:bg-white/5 transition-all">
              How it works
            </button>
          </div>
        </div>

        {/* Code Terminal */}
        <div className="max-w-5xl mx-auto mb-20 ring-8 ring-white/10 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-black/80 px-6 py-4 flex items-center border-b border-white/10">
              <div className="flex space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="p-8 font-mono text-sm overflow-x-auto">
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  1
                </span>
                <span className="text-white/60">
                  Last login: Fri May 23, 2025 22:15:47 on console
                </span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  2
                </span>
                <span className="text-white"></span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  3
                </span>
                <span className="text-green-400">
                  % npm install @magsadfi/core
                </span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  4
                </span>
                <span className="text-white/60">+ @magsadfi/core@1.1.15.5</span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-4">
                <span className="text-white/40 select-none w-4 text-right">
                  5
                </span>
                <span className="text-white/60">
                  added 23 packages, and audited 25 packages
                </span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  6
                </span>
                <span className="text-white"></span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  7
                </span>
                <span className="text-blue-300">
                  const magsdAccount = await magsdAccount.fromPrivateKey({"{"}
                </span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  8
                </span>
                <span className="text-blue-300 ml-4"> privateKey,</span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  9
                </span>
                <span className="text-blue-300 ml-4"> chainId,</span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  10
                </span>
                <span className="text-blue-300 ml-4"> config</span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-4">
                <span className="text-white/40 select-none w-4 text-right">
                  11
                </span>
                <span className="text-blue-300">{"});"}</span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  12
                </span>
                <span className="text-white"></span>
              </div>
              <div className="flex items-start space-x-6 py-1 mb-2">
                <span className="text-white/40 select-none w-4 text-right">
                  13
                </span>
                <span className="text-orange-300">
                  const principal = "500"; // 500 magUSD
                </span>
              </div>
              <div className="flex items-start space-x-6 py-1">
                <span className="text-white/40 select-none w-4 text-right">
                  14
                </span>
                <span className="text-blue-300">
                  const txHash = await magsdAccount.lend({"{"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Logos */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-12 opacity-40">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c6.627 0 12 5.373 12 12 0 5.302-3.438 9.8-8.207 11.387-.599-.111-1.028-.556-1.028-1.053v-3.694c0-1.255-.426-2.063-.894-2.473 2.933-.326 6.017-1.44 6.017-6.501 0-1.435-.512-2.607-1.354-3.523.136-.334.589-1.686-.128-3.517-1.104-.352-3.627 1.389-3.627 1.389-1.052-.295-2.183-.443-3.304-.443s-2.252.148-3.304.443c0 0-2.523-1.741-3.627-1.389-.717 1.831-.264 3.183-.128 3.517-.842.916-1.354 2.088-1.354 3.523 0 5.048 3.073 6.181 6.001 6.513-.377.324-.717.893-.836 1.726-.751.336-2.656.918-3.826-1.092-.717-1.242-2.015-1.336-2.015-1.336-1.284-.016-.086.799-.086.799.861.399 1.459 1.926 1.459 1.926.772 2.352 4.438 1.558 4.438 1.558v2.316c0 .497-.429.942-1.028 1.053C3.438 21.8 0 17.302 0 12 0 5.373 5.373 0 12 0z" />
              </svg>
              <span className="text-sm font-medium">git</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 fill-current text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 5.183c-.003.203-.156.359-.359.359-.203 0-.359-.156-.359-.359V6.641l-8.882.018-.018 8.882h8.882l-.018-1.882c0-.203.156-.359.359-.359.203 0 .359.156.359.359l.019 2.241c0 .203-.156.359-.359.359l-9.6-.019c-.203 0-.359-.156-.359-.359l.019-9.6c0-.203.156-.359.359-.359z" />
              </svg>
              <span className="text-sm font-medium">npm</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 fill-current text-orange-500"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
              </svg>
              <span className="text-sm font-medium">Lucidchart</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
              </svg>
              <span className="text-sm font-medium font-cursive">write</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 fill-current text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M1.534 5.874c.019.104.096.198.203.25l2.466 1.008c.139.057.291.002.367-.132.077-.134.041-.302-.088-.396L2.136 5.022c-.129-.094-.304-.08-.418.033-.114.113-.128.288-.034.418l.85 1.401zm20.932-1.002c.094-.13.08-.305-.033-.418-.114-.113-.289-.127-.418-.033L19.67 6.003c-.129.094-.165.262-.088.396.076.134.228.189.367.132l2.466-1.008c.107-.052.184-.146.203-.25l.85-1.401zM12 13.5c3.038 0 5.5-2.462 5.5-5.5S15.038 2.5 12 2.5 6.5 4.962 6.5 8s2.462 5.5 5.5 5.5z" />
              </svg>
              <span className="text-sm font-medium">jQuery</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 fill-current text-red-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.7 17.5L5.5 16v-3.5L10.3 14l-.5-1L5.5 11.5V8l4.8 1.5.5-1L6 7l6-1.5 6 1.5-4.8 1.5.5 1L18.5 8v3.5L13.8 13l.5 1 4.8-1.5V16l-4.8 1.5z" />
              </svg>
              <span className="text-sm font-medium">openstack</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 fill-current text-green-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.568C16.327 17.81 14.246 18.5 12 18.5s-4.327-.69-5.568-1.932C5.19 15.327 4.5 13.246 4.5 11s.69-4.327 1.932-5.568C7.673 4.19 9.754 3.5 12 3.5s4.327.69 5.568 1.932C18.81 6.673 19.5 8.754 19.5 11s-.69 4.327-1.932 5.568z" />
              </svg>
              <span className="text-sm font-medium">servicenow</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 fill-current text-blue-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5h-3v-11h3v11zm3-6.5h-2.5v-4.5h2.5v4.5zm3-2h-2.5V6h2.5v3z" />
              </svg>
              <span className="text-sm font-medium">Paysafe</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MagUSDLanding;`,
    },
  },
};
