import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import TalonLanding from "../../components/hero/talon";

export const talonRegistry: LandingComponentGroup = {
  title: "TalonLanding",
  description: " A landing page for Talon AI",
  category: "Hero",
  variants: {
    default: {
      title: "TalonLanding",
      description: " A landing page for Talon AI",
      component: TalonLanding,
      image: "/images/blocks/hero/talon.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState } from "react";

const TalonLanding = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [textInput, setTextInput] = useState("");

  const languages = ["English", "French", "Spanish", "German", "Dutch"];

  const detectionResults = [
    {
      label: "AI-generated",
      percentage: 0,
      color: "text-blue-600",
      dotColor: "bg-blue-600",
    },
    {
      label: "AI-generated & AI-refined",
      percentage: 0,
      color: "text-purple-600",
      dotColor: "bg-purple-600",
    },
    {
      label: "Human-written & AI-refined",
      percentage: 0,
      color: "text-red-600",
      dotColor: "bg-red-600",
    },
    {
      label: "Human-written",
      percentage: 0,
      color: "text-green-600",
      dotColor: "bg-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-center px-8 py-8">
        <div className="flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl border border-gray-200/50 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">Talon</span>
          </div>

          <nav className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Home
            </a>
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Features
              </a>
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              About us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Blog
            </a>
          </nav>

          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-gray-700 font-medium">Book a demo</span>
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-8 pt-8 pb-20">
        {/* Rating */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-blue-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-medium text-sm">
              4.9 on Clutch
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-gray-900 text-center">
            Track{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
              AI generated
            </span>
            <br />
            content instantly for free
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-center leading-relaxed">
            In a world where crime evolves as fast as technology,
            <br className="hidden sm:inline" />
            the{" "}
            <span className="font-semibold text-gray-800">
              AI detective
            </span>{" "}
            stands as the ultimate investigator.
          </p>

          <button className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 hover:from-sky-500 hover:to-indigo-700 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">Book a demo</span>
            <svg
              className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-10 transition duration-300 blur-sm" />
          </button>
        </div>

        {/* Detection Tool */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Rainbow Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 rounded-[1.5rem] blur-2xl opacity-80 z-0"></div>

          {/* Main Dashboard Container */}
          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden z-10">
            {/* Language Tabs */}
            <div className="border-b border-gray-200 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={\`px-3 py-1 text-sm font-medium transition-colors \${
                        selectedLanguage === lang
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }\`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Add text to begin analysis
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Text Input */}
                <div>
                  <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="To analyze text, add at least 80 words..."
                    className="w-full h-80 p-4 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                  <div className="mt-6">
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center space-x-2">
                      <span>Detect</span>
                      <span className="text-lg">🔍</span>
                    </button>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  {detectionResults.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-gray-700 font-medium">
                        {result.label}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div
                          className={\`w-2 h-2 rounded-full \${result.dotColor}\`}
                        ></div>
                        <span className={\`text-sm font-medium \${result.color}\`}>
                          {result.percentage}% Average
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-12 opacity-50">
            <span className="text-gray-400 font-light text-xl">glow</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 font-semibold text-lg">
                Empower
              </span>
              <svg
                className="w-6 h-6 text-blue-600 transform rotate-45"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 14l3-3 7 7-1.41 1.41L10 13.83l-1.59 1.59L7 14z" />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="text-gray-600 font-medium text-lg">
                Basecamp
              </span>
            </div>
            <span className="text-gray-500 font-medium text-lg">Windmill</span>
            <span className="text-gray-700 font-bold tracking-wider text-lg">
              CAPSULE
            </span>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="text-gray-600 font-medium text-lg">
                Basecamp
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TalonLanding;
`,
    },
  },
};
