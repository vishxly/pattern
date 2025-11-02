import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Landing from "../../components/hero/orca";

export const orcaRegistry: LandingComponentGroup = {
  title: "Orca",

  description: "A sleek hero section with a modern design.",
  category: "Hero",
  variants: {
    default: {
      title: "Orca",
      description: "A sleek hero section with a modern design.",
      component: Landing,
      image: "/images/blocks/hero/orca.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React from "react";
import {
  ArrowRight,
  Shield,
  BarChart3,
  Search,
  Activity,
  Users,
  Target,
  AlertTriangle,
  Settings,
  Menu,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-blue-700 to-neutral-950 relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: \`
            linear-gradient(rgba(147, 197, 253, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 197, 253, 0.15) 1px, transparent 1px)
          \`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating geometric shapes - adjusted for mobile */}
      <div className="absolute top-32 left-4 sm:left-16 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500/40 to-purple-600/30 rounded-3xl transform rotate-12 blur-sm"></div>
      <div className="absolute top-20 right-8 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-indigo-500/35 to-blue-600/25 rounded-3xl transform -rotate-12 blur-sm"></div>
      <div className="absolute bottom-40 left-4 sm:left-20 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-purple-500/40 to-indigo-600/30 rounded-3xl transform rotate-45 blur-sm"></div>
      <div className="absolute bottom-60 right-4 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-400/45 to-purple-500/35 rounded-2xl transform -rotate-30 blur-sm"></div>

      {/* Scattered dots */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300/90 rounded-full shadow-lg shadow-blue-300/50"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300/80 rounded-full shadow-lg shadow-purple-300/50"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-300/90 rounded-full shadow-lg shadow-indigo-300/50"></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-200/80 rounded-full shadow-lg shadow-blue-200/50"></div>

      {/* Subtle background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 sm:w-80 h-56 sm:h-80 bg-purple-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-400/6 rounded-full blur-3xl"></div>

        {/* Enhanced grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: \`
              linear-gradient(rgba(59, 130, 246, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.8) 1px, transparent 1px)
            \`,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 py-6 sm:py-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 sm:w-9 h-8 sm:h-9 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-blue-200" />
            </div>
            <span className="text-white font-medium text-lg sm:text-xl tracking-tight">
              Orca
            </span>
          </div>

          {/* Navigation - hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            {["Home", "Features", "Pricing", "Solution", "About Us"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-blue-200/80 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-blue-200 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>

          {/* CTA Button - hidden on small mobile */}
          <button className="hidden sm:block bg-gradient-to-r from-blue-500 to-black hover:from-blue-400 hover:to-neutral-800 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 text-sm shadow-lg shadow-blue-500/30">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 pt-8 sm:pt-20 pb-8 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Status Badge */}
          <div className="flex justify-center mb-8 sm:mb-16">
            <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-lg shadow-blue-500/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-blue-100 text-xs sm:text-sm font-medium">
                Enhanced security suite
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light text-white leading-[1.1] mb-4 sm:mb-8 tracking-tight px-4">
              Security that scales
              <br />
              <span className="text-blue-300 font-extralight">
                with your business
              </span>
            </h1>

            <p className="text-base sm:text-lg text-blue-200/90 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Comprehensive API security monitoring with intelligent threat
              detection and real-time vulnerability assessment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-24 px-4">
            <button className="bg-gradient-to-r from-blue-500 to-[#1a1a2e] hover:from-blue-400 hover:to-[#0d0d1a] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/30">
              Start Free Trial
            </button>

            <button className="border border-blue-400/40 text-blue-200 hover:text-white hover:border-blue-300 bg-blue-900/20 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10">
              View Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto">
            {/* Glow effect behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20 rounded-3xl blur-3xl scale-105"></div>
            
            <div className="relative bg-gradient-to-br from-black/80 via-blue-950/50 to-black/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-blue-400/30 shadow-2xl overflow-hidden shadow-blue-500/20">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-900/60 via-black/60 to-purple-900/40 px-4 sm:px-8 py-4 sm:py-6 border-b border-blue-400/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-500/30 to-purple-600/30 border border-blue-400/40 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-blue-200" />
                  </div>
                  <span className="text-blue-100 font-medium text-sm sm:text-base">
                    Orca Security
                  </span>
                  <div className="hidden sm:block ml-8">
                    <h2 className="text-lg sm:text-xl font-light text-white">
                      API Management
                    </h2>
                  </div>
                  {/* Status indicators */}
                  <div className="hidden md:flex items-center gap-4 ml-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                      <span className="text-emerald-200 text-xs">Live</span>
                    </div>
                    <div className="text-blue-300/60 text-xs">Last sync: 2min ago</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Sidebar - collapsed on mobile */}
                <div className="w-full lg:w-72 bg-gradient-to-b from-blue-900/40 via-black/60 to-purple-900/30 border-b lg:border-b-0 lg:border-r border-blue-400/20 p-3 sm:p-6 backdrop-blur-sm">
                  {/* User Profile */}
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-gradient-to-r from-blue-800/40 via-purple-800/30 to-blue-800/40 rounded-xl sm:rounded-2xl mb-4 sm:mb-8 border border-blue-400/30 shadow-lg shadow-blue-500/20">
                    <div className="w-7 sm:w-9 h-7 sm:h-9 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-full flex items-center justify-center text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-500/30">
                      NS
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs sm:text-sm">
                        Niko Santos
                      </div>
                      <div className="text-blue-300/80 text-xs">
                        Security Admin
                      </div>
                    </div>
                  </div>

                  {/* Navigation Items - horizontal scroll on mobile */}
                  <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                    {[
                      { icon: BarChart3, label: "Overview", active: false },
                      { icon: Search, label: "Discovery", active: false },
                      { icon: Shield, label: "API Security", active: true },
                      {
                        icon: Activity,
                        label: "Infrastructure",
                        active: false,
                      },
                      { icon: Users, label: "Access Control", active: false },
                      { icon: Target, label: "Attack Paths", active: false },
                      { icon: AlertTriangle, label: "Alerts", active: false },
                      { icon: Settings, label: "Settings", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={\`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap lg:whitespace-normal \${
                          item.active
                            ? "bg-gradient-to-r from-blue-800/60 via-purple-800/50 to-blue-800/60 text-white border border-blue-400/40 shadow-lg shadow-blue-500/30"
                            : "text-blue-300/80 hover:text-white hover:bg-gradient-to-r hover:from-blue-800/30 hover:to-purple-800/20 hover:border hover:border-blue-400/20"
                        }\`}
                      >
                        <item.icon className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                        <span className="font-medium text-xs sm:text-sm">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 sm:p-8 bg-gradient-to-br from-black/60 via-blue-950/30 to-purple-950/40 backdrop-blur-sm">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
                    {[
                      {
                        label: "Critical",
                        value: "12",
                        change: "+8%",
                        color: "red",
                        bgColor: "bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-800/20",
                        borderColor: "border-red-400/40",
                        shadowColor: "shadow-red-500/20",
                      },
                      {
                        label: "High",
                        value: "34",
                        change: "+12%",
                        color: "orange",
                        bgColor: "bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-yellow-600/20",
                        borderColor: "border-orange-400/40",
                        shadowColor: "shadow-orange-500/20",
                      },
                      {
                        label: "Medium",
                        value: "156",
                        change: "-3%",
                        color: "yellow",
                        bgColor: "bg-gradient-to-br from-yellow-500/20 via-yellow-600/10 to-amber-600/20",
                        borderColor: "border-yellow-400/40",
                        shadowColor: "shadow-yellow-500/20",
                      },
                      {
                        label: "Resolved",
                        value: "1,284",
                        change: "+24%",
                        color: "green",
                        bgColor: "bg-gradient-to-br from-emerald-500/20 via-green-600/10 to-emerald-700/20",
                        borderColor: "border-emerald-400/40",
                        shadowColor: "shadow-emerald-500/20",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className={\`\${stat.bgColor} rounded-xl sm:rounded-2xl p-3 sm:p-6 border \${stat.borderColor} backdrop-blur-sm shadow-lg \${stat.shadowColor}\`}
                      >
                        <div className="text-blue-300/80 text-xs font-medium uppercase tracking-wider mb-2 sm:mb-3">
                          {stat.label}
                        </div>
                        <div className="text-lg sm:text-2xl font-light text-white mb-1 sm:mb-2">
                          {stat.value}
                        </div>
                        <div
                          className={\`text-xs font-medium \${
                            stat.change.startsWith("+")
                              ? "text-emerald-400"
                              : "text-blue-300/80"
                          }\`}
                        >
                          {stat.change} vs last week
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                    {/* API Endpoints */}
                    <div className="bg-gradient-to-br from-blue-800/40 via-purple-800/20 to-blue-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-400/30 backdrop-blur-sm shadow-lg shadow-blue-500/20">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-white font-medium text-sm sm:text-base">
                          API Endpoints
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                          <div className="text-blue-300/80 text-xs">Last 24h</div>
                        </div>
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { name: "auth.api.service.com", requests: "2.4k", status: "secure" },
                          { name: "data.internal.api.com", requests: "1.8k", status: "warning" },
                          { name: "webhook.service.app", requests: "1.2k", status: "secure" },
                          { name: "api.gateway.prod", requests: "892", status: "secure" },
                          { name: "legacy.system.api", requests: "543", status: "critical" },
                        ].map((endpoint) => (
                          <div
                            key={endpoint.name}
                            className="flex justify-between items-center py-1 sm:py-2 p-2 rounded-lg bg-blue-900/20 border border-blue-400/20"
                          >
                            <div className="flex items-center gap-2">
                              <div className={\`w-2 h-2 rounded-full \${
                                endpoint.status === 'secure' ? 'bg-emerald-400 shadow-emerald-400/50' :
                                endpoint.status === 'warning' ? 'bg-yellow-400 shadow-yellow-400/50' :
                                'bg-red-400 shadow-red-400/50'
                              } shadow-lg\`}></div>
                              <span className="text-blue-100 text-xs sm:text-sm font-medium truncate mr-2">
                                {endpoint.name}
                              </span>
                            </div>
                            <span className="text-blue-300/80 text-xs sm:text-sm flex-shrink-0">
                              {endpoint.requests}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Security Metrics */}
                    <div className="bg-gradient-to-br from-purple-800/40 via-blue-800/20 to-purple-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-400/30 backdrop-blur-sm shadow-lg shadow-purple-500/20">
                      <h3 className="text-white font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                        Security Metrics
                      </h3>

                      {/* Mini world map with connection lines */}
                      <div className="relative h-24 sm:h-32 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-black/60 rounded-xl overflow-hidden mb-4 sm:mb-6 border border-blue-400/30 backdrop-blur-sm shadow-inner">
                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          <defs>
                            <linearGradient
                              id="lineGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style={{
                                  stopColor: "rgb(59, 130, 246)",
                                  stopOpacity: 0.6,
                                }}
                              />
                              <stop
                                offset="50%"
                                style={{
                                  stopColor: "rgb(147, 51, 234)",
                                  stopOpacity: 0.8,
                                }}
                              />
                              <stop
                                offset="100%"
                                style={{
                                  stopColor: "rgb(59, 130, 246)",
                                  stopOpacity: 0.6,
                                }}
                              />
                            </linearGradient>
                          </defs>
                          <path
                            d="M40,40 Q120,20 200,60"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                          />
                          <path
                            d="M60,80 Q140,60 220,40"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                          />
                        </svg>

                        {/* Geographic points */}
                        <div className="absolute top-6 sm:top-8 left-8 sm:left-10 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
                        <div className="absolute top-8 sm:top-12 right-12 sm:right-16 w-2 sm:w-3 h-2 sm:h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse"></div>
                        <div className="absolute bottom-6 sm:bottom-8 left-10 sm:left-16 w-2 h-2 bg-indigo-300 rounded-full shadow-lg shadow-indigo-300/50"></div>
                        <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-2 sm:w-3 h-2 sm:h-3 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 animate-pulse"></div>
                      </div>

                      {/* Activity bars */}
                      <div className="grid grid-cols-10 gap-1 h-6 sm:h-8 mb-4">
                        {[0.3, 0.7, 0.5, 0.9, 0.4, 0.8, 0.6, 0.2, 0.7, 0.5].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-blue-600 via-purple-500 to-blue-400 rounded-sm opacity-80 shadow-lg"
                              style={{ height: \`\${height * 100}%\` }}
                            ></div>
                          )
                        )}
                      </div>

                      {/* Security status */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-blue-300/80">Threat Level</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                          <span className="text-yellow-200">Moderate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
