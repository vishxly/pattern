import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import FlowwtLanding from "../../components/hero/flowwt";

export const flowwtRegistry: LandingComponentGroup = {
  title: "flowwt",
  description:
    "Flowwt is a free, open-source, and self-hosted workflow automation tool.",
  category: "Hero",
  variants: {
    default: {
      title: "flowwt",
      description:
        "Flowwt is a free, open-source, and self-hosted workflow automation tool.",
      component: FlowwtLanding,
      image: "/images/blocks/hero/flowwt.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState, useEffect } from "react";
import {
  Play,
  Search,
  Bell,
  Settings,
  Users,
  BarChart3,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  MessageCircle,
  HelpCircle,
  Plus,
  Minus,
  Menu,
  X,
  Check,
} from "lucide-react";

const FlowwtLanding = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What makes Flowwt different from other workflow tools?",
      answer:
        "Flowwt is specifically designed for startups and remote teams, offering AI-powered automation, seamless integrations, and an intuitive interface that requires no technical expertise to set up.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Most teams are up and running within 15 minutes. Our onboarding process guides you through connecting your tools and setting up your first automation workflows.",
    },
    {
      question: "Can I integrate with my existing tools?",
      answer:
        "Yes! Flowwt integrates with 200+ popular tools including Slack, Gmail, Trello, Asana, Google Workspace, Microsoft 365, and many more.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Absolutely! We provide 24/7 customer support via chat, email, and video calls. Our team is here to help you succeed with Flowwt.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header
        className={\` w-full z-50 transition-all duration-300 \${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        } border-b border-gray-200/50\`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Flowwt
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Features", "Integrations", "Pricing", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-sky-500 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                )
              )}
              <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-4">
                {[
                  "About",
                  "Features",
                  "Integrations",
                  "Pricing",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-600 hover:text-sky-500 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full bg-gradient-to-r from-sky-400 to-sky-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center bg-sky-100/80 text-sky-800 px-4 py-2 rounded-full text-sm mb-8 shadow-sm animate-pulse">
              <span className="mr-2 text-lg">✨</span>
              NEW - Introducing AI-Powered Workflows
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Smarter workflows.
              <br />
              Faster{" "}
              <span className="bg-gradient-to-r from-sky-400 to-sky-400 bg-clip-text text-transparent">
                teams
              </span>
              .
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Flowwt helps teams automate repetitive tasks and streamline their
              internal workflows—perfect for startups and remote teams looking
              to scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg">
                Get Started Free
              </button>
              <button className="text-gray-600 hover:text-gray-900 flex items-center px-8 py-4 rounded-xl hover:bg-gray-100/80 transition-all duration-200 font-medium">
                <Play className="mr-3 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-200/50 hover:shadow-3xl transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Dashboard Overview
                </h3>
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl w-full sm:w-64 focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bell className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                    <Settings className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
                {[
                  {
                    label: "Total Revenue",
                    value: "$45,231",
                    change: "+8.2%",
                    positive: true,
                  },
                  {
                    label: "New Orders",
                    value: "1,257",
                    change: "+3.1%",
                    positive: true,
                  },
                  {
                    label: "Customers",
                    value: "3,789",
                    change: "-2.4%",
                    positive: false,
                  },
                  {
                    label: "Avg Order Value",
                    value: "$219.54",
                    change: "+5.7%",
                    positive: true,
                  },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {metric.label}
                    </div>
                    <div
                      className={\`text-xs font-medium \${
                        metric.positive ? "text-green-600" : "text-red-600"
                      }\`}
                    >
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Revenue Breakdown
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Monthly Recurring</span>
                      <span className="font-semibold text-gray-900">
                        $12.5k
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">One-time Sales</span>
                      <span className="font-semibold text-gray-900">$8.2k</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Order #1234 completed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>New customer registered</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Quick Actions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-sky-100 text-sky-800 rounded-lg text-sm font-medium hover:bg-sky-200 transition-colors">
                      New Project
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 -right-4 sm:-right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 w-64 hidden lg:block animate-float">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-sky-400 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Quick Commands
                  </div>
                  <div className="text-sm text-gray-600">
                    Keyboard Shortcuts
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { action: "New Task", shortcut: "⌘N" },
                  { action: "Search", shortcut: "⌘K" },
                  { action: "Settings", shortcut: "⌘," },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-700">{item.action}</span>
                    <span className="text-gray-400 font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                      {item.shortcut}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-12 -left-4 sm:-left-12 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 text-white w-72 hidden lg:block animate-float-delayed">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-sky-400 text-white p-1.5 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-lg font-medium text-gray-900">
                  Do more with less
                </div>
              </div>
              <div className="text-gray-400 mb-4">effort and zero chaos</div>
              <div className="text-sm opacity-90 text-gray-400">
                Automate your workflow in minutes, not hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "78%", label: "Increase in Productivity" },
              { stat: "52%", label: "Reduction in Manual Tasks" },
              { stat: "3.2x", label: "Faster Task Completion" },
              { stat: "+37%", label: "Team Satisfaction" },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.stat}
                </div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why startups rely
              <br />
              on Flowwt{" "}
              <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                daily
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by over 10,000+ teams worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - Light Sky + Cool Teal */}
            <div className="relative rounded-3xl p-10 bg-gradient-to-br from-sky-300 via-sky-400 to-sky-500 text-white shadow-xl border border-sky-300/30 hover:scale-[1.025] transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-sky-300/10 to-transparent opacity-30 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                  Automate Repetitive Tasks
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-8">
                  Set up intelligent workflows that run automatically, saving
                  you hours of manual work every week.
                </p>
                <div className="flex">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-md hover:bg-white/30 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-sky-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Minty Aqua + Soft Cyan */}
            <div className="relative rounded-3xl p-10 bg-gradient-to-br from-white via-neutral-100 to-gray-50 text-black shadow-xl border-emerald-300/30 hover:scale-[1.025] transition-all duration-500 overflow-hidden group border border-gray-200">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/20 via-teal-300/10 to-transparent opacity-30 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                  Built for Remote Teams
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  Collaborate seamlessly with team members anywhere in the world
                  with real-time updates and notifications.
                </p>
                <div className="flex gap-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-black rounded-full animate-pulse"
                      style={{ animationDelay: \`\${i * 0.2}s\` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 - Classy White with Teal Accent */}
            <div className="relative rounded-3xl p-10 bg-gradient-to-br from-white via-neutral-100 to-gray-50 text-gray-900 border border-gray-200 shadow-xl hover:scale-[1.025] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-100/30 to-transparent z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                  Real-Time Team Dashboard
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  Monitor team progress and project status with beautiful,
                  intuitive dashboards that update in real-time.
                </p>
                <div className="flex justify-start">
                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-md">
                    <BarChart3 className="w-6 h-6 text-teal-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Light Aqua + Cool Sky */}
            <div className="relative rounded-3xl p-10 bg-gradient-to-br from-sky-300 via-sky-400 to-sky-500 text-white shadow-xl border-cyan-300/30 hover:scale-[1.025] transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-cyan-300/10 to-transparent opacity-30 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                  Seamless Integrations
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-8">
                  Connect with 200+ tools including Slack, Gmail, Trello,
                  Notion, and many more with one-click setup.
                </p>
                <div className="flex gap-4">
                  {[MessageCircle, Calendar, Users].map((Icon, i) => (
                    <div
                      key={i}
                      className="p-3 bg-white/15 backdrop-blur-md rounded-xl hover:bg-white/25 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Connect Your Tools */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Connect Your Favorite Tools
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Integrate with your favorite apps and services in seconds. No
                  complex setup required—just point, click, and automate.
                </p>
                <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
                  View All Integrations
                </button>
              </div>
              <div className="bg-gradient-to-br from-sky-300 to-sky-500 rounded-3xl p-8 w-full lg:w-96 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Set Up Smart Automations */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Set Up Smart Automations
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Create powerful workflows that trigger actions across all your
                  connected apps automatically. No coding required.
                </p>
                <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
                  Start Automating
                </button>
              </div>
              <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-3xl p-8 w-full lg:w-96 shadow-2xl">
                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-white rounded-full shadow-sm"></div>
                      <div className="h-3 bg-white/30 rounded-full flex-1"></div>
                      <ArrowRight className="w-4 h-4 text-white/70" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Track Everything */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Track Everything from One Place
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Get a complete overview of all your projects, tasks, and team
                  performance in one beautiful, unified dashboard.
                </p>
                <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
                  Explore Dashboard
                </button>
              </div>
              <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-3xl p-8 w-full lg:w-96 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-4 bg-white/30 rounded-full"></div>
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="h-32 bg-white/20 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-white/70" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-8 bg-white/20 rounded-lg"></div>
                    <div className="h-8 bg-white/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Features */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Whoever you are on the team,
            <br />
            Flowwt just{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent">
              works beautifully
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {[
              {
                title: "For Project Managers",
                desc: "Keep projects on track with automated status updates, timeline management, and team coordination tools.",
              },
              {
                title: "For Developers",
                desc: "Streamline deployments, automate testing workflows, and integrate with your existing development tools.",
              },
              {
                title: "For Marketing Teams",
                desc: "Automate campaigns, track performance across channels, and nurture leads effortlessly.",
              },
              {
                title: "For Sales Teams",
                desc: "Nurture leads automatically, track deal progress, and close more deals faster with smart workflows.",
              },
              {
                title: "For HR Teams",
                desc: "Streamline onboarding, automate employee management processes, and improve team satisfaction.",
              },
              {
                title: "For Operations",
                desc: "Optimize business processes, reduce manual work, and scale operations efficiently.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_60px_rgba(14,165,233,0.15)] transition-all duration-300 hover:scale-[1.03] group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Proven impact. Trusted by
            <br />
            fast-moving{" "}
            <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
              teams
            </span>
          </h2>

          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 mt-16 shadow-2xl border border-white/20 relative z-10 bg-gradient-to-br from-sky-300 to-sky-500 text-white">
            {/* Avatar + Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-10 gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-white/10 p-[2px] shadow-inner">
                <div className="w-full h-full rounded-full bg-sky-900/20 flex items-center justify-center text-white text-lg font-bold">
                  SJ
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-xl sm:text-2xl">
                  Sarah Johnson
                </div>
                <div className="opacity-90 text-base sm:text-lg">
                  Product Manager at TechCorp
                </div>
              </div>
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-2xl mb-10 opacity-95 leading-relaxed italic max-w-3xl mx-auto">
              “Flowwt has completely transformed how our team operates. We've
              saved countless hours on repetitive tasks and can now focus on
              what really matters — building great products for our customers.”
            </p>

            {/* Stars */}
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current transition-transform duration-200 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Still have{" "}
              <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                questions?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Can't find the answer you're looking for? Chat with our friendly
              team.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-gray-50/80 transition-colors duration-200"
                  onClick={() => toggleFaq(i)}
                >
                  <h3 className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === i ? (
                    <Minus className="w-6 h-6 text-sky-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="relative inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-gradient-to-r from-sky-400 via-sky-500 to-sky-500 text-white font-semibold text-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-300/40">
              <span className="z-10">Contact Support</span>
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 hover:opacity-[0.03] transition duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-sky-500 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,_#7dd3fc,_#bae6fd,_#e0f2fe)]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,_#bae6fd,_#e0f2fe,_transparent)]"></div>
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-2xl opacity-35 bg-[radial-gradient(circle,_#e0f2fe,_#bae6fd,_transparent)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to ditch the chaos and
            <br />
            automate your workflow?
          </h2>
          <p className="text-xl sm:text-2xl opacity-90 mb-12 leading-relaxed">
            Join over 10,000 teams who've already made the switch
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-sky-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
            <button className="text-white border-2 border-white/30 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm opacity-75 mt-6">
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Flowwt
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Empowering teams to work smarter, not harder, with intelligent
                automation and seamless workflows.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <div className="space-y-3">
                {["Features", "Integrations", "Pricing", "API"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-600 hover:text-sky-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <div className="space-y-3">
                {["About", "Blog", "Careers", "Press"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-600 hover:text-sky-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <div className="space-y-3">
                {["Help Center", "Contact", "Status", "Community"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-gray-600 hover:text-sky-500 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600">
                © 2025 Flowwt. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-600 hover:text-sky-500 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{\`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -2s;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      \`}</style>
    </div>
  );
};

export default FlowwtLanding;
`,
    },
  },
};
