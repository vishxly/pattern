import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Inbound from "../../components/hero/inbound";

export const inboundRegistry: LandingComponentGroup = {
  title: "Inbound",
  description:
    "A modern and sleek landing page design with a focus on email forwarding and AI agents.",
  category: "Hero",
  variants: {
    default: {
      title: "Inbound",
      description:
        "A modern and sleek landing page design with a focus on email forwarding and AI agents.",
      component: Inbound,
      image: "/images/blocks/hero/inbound.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React from "react";
import {
  Mail,
  ArrowRight,
  Zap,
  Code,
  HeartHandshake,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom component for the hand-drawn arrow
const SquigglyArrow = () => (
  <svg
    width="85"
    height="40"
    viewBox="0 0 85 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-0 -bottom-8 md:-right-16 md:-bottom-4 text-purple-400 transform scale-75 md:scale-100"
  >
    <path
      d="M2.35728 17.3821C11.4996 9.68445 23.4758 4.4533 35.5383 2.15833C47.6008 -0.136647 59.816 -0.041072 71.5383 2.99999C76.4996 4.28211 81.3573 6.38211 82.8573 11.3821C84.3573 16.3821 80.6996 20.2821 76.5383 22.1583C62.6996 28.2821 48.0383 30.1583 33.6996 27.3821C22.6996 25.2821 12.3573 20.3821 2.85728 12.8821"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.19043 18.2885L1.04758 12.441L7.51477 9.94727"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Inbound() {
  return (
    <div className=" mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="px-6 md:px-10 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">inbound</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Help
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 hidden sm:block"
            >
              Get Started
            </Button>
            <Button className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 h-9 rounded-lg hover:bg-purple-200 transition-colors">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center px-4 pt-10 pb-20 md:pt-16 md:pb-32">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full mb-6">
          <Mail className="w-4 h-4" />
          <span className="text-xs font-semibold">
            Super charge your options with mails
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tighter mb-4">
          Easy Email <br className="hidden md:block" />
          Forwarding With <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
            AI Agents
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-gray-500 mb-8">
          No matter what project you're working on, we've got you covered with
          the best wireframe kits for any platform.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.05)] relative">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <input
              type="text"
              placeholder="Yourdomain.com"
              className="w-full h-11 px-4 text-sm bg-gray-50 rounded-md border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400 shrink-0">
              <span>Forwarding to</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full h-11 px-4 text-sm bg-gray-50 rounded-md border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Button className="w-full md:w-auto h-11 bg-purple-600 text-white text-sm font-semibold px-5 rounded-lg hover:bg-purple-700 transition-colors shrink-0">
              Create Free Alias <ArrowRight className="w-4 h-4 ml-1 inline" />
            </Button>
          </div>
          <SquigglyArrow />
        </div>

        {/* Envelope Visual */}
        <div className="mt-24 md:mt-32 relative h-48 md:h-64 flex justify-center">
          <div className="absolute -top-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-purple-200 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative flex items-center gap-2 bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
                <Globe className="w-4 h-4" />
                <span>Domain Aggregation</span>
              </div>
            </div>
          </div>

          {/* Envelope Back */}
          <div
            className="absolute bottom-0 w-64 h-32 md:w-96 md:h-48 bg-gray-50 rounded-lg shadow-inner"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          />
          {/* Envelope Front */}
          <div
            className="absolute bottom-0 w-64 h-32 md:w-96 md:h-48 bg-white shadow-lg"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%)" }}
          />

          {/* Icons */}
          <div className="absolute -top-10 md:-top-16 flex items-end gap-4 md:gap-8">
            <div className="transform -rotate-12 transition-transform duration-300 hover:scale-110">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-400 text-white rounded-lg flex items-center justify-center">
                  <Zap className="w-6 md:w-7" />
                </div>
              </div>
            </div>
            <div className="transform translate-y-4 transition-transform duration-300 hover:scale-110">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center">
                  <Code className="w-6 md:w-7" />
                </div>
              </div>
            </div>
            <div className="transform rotate-12 transition-transform duration-300 hover:scale-110">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-400 text-white rounded-lg flex items-center justify-center">
                  <HeartHandshake className="w-6 md:w-7" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 text-2xl md:text-3xl font-bold text-gray-200 select-none">
            inbound
          </div>
        </div>
      </main>
    </div>
  );
}`,
    },
  },
};
