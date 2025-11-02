import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Bento from "../../components/bento/bento1";

export const bento1Registry: LandingComponentGroup = {
  title: "Bento",
  description:
    "Bento is a full-featured landing page template for your next project.",
  category: "Bento",

  variants: {
    default: {
      title: "Bento",
      description:
        "Bento is a full-featured landing page template for your next project.",
      component: Bento,
      image: "/images/blocks/bento/bento1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Bento",
      code: `"use client";
import React from "react";

export default function Bento() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 px-4 sm:px-8 py-8 sm:py-16">
        {/* Header */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-bold tracking-wider text-green-400">
              zeroUI
            </span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 leading-tight">
            Everything You Need
          </h1>
          <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto px-4">
            The ultimate Team Management system that saves you time & money.
          </p>
        </div>

        {/* Responsive Bento Grid Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Single Column */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:hidden">
            {/* Full Visibility Card */}
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-64">
              <div className="relative mb-6 h-24 flex items-center justify-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                {/* Fewer floating icons for mobile */}
                <div className="absolute top-0 left-4 w-6 h-6 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                Full Visibility
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Task management like never before. Full control of your team.
              </p>
            </div>

            {/* Scale Your Business Card */}
            <div className="bg-neutral-900 border border-green-400 rounded-2xl p-6 h-64">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">
                      System Online
                    </span>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-green-400/30 to-cyan-400/30 rounded-2xl p-4 h-20 overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/40 to-teal-400/40"></div>
                    <svg
                      className="w-full h-full text-green-400"
                      fill="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M20,30 Q25,25 35,30 L40,35 Q45,40 35,45 L30,50 Q20,45 20,35 Z"
                        opacity="0.8"
                      />
                      <path
                        d="M55,25 Q65,20 75,25 L80,30 Q85,35 75,40 L70,45 Q60,40 55,35 Z"
                        opacity="0.8"
                      />
                      <path
                        d="M25,55 Q35,50 45,55 L50,60 Q55,65 45,70 L40,75 Q30,70 25,65 Z"
                        opacity="0.8"
                      />
                      <path
                        d="M60,50 Q70,45 80,50 L85,55 Q90,60 80,65 L75,70 Q65,65 60,60 Z"
                        opacity="0.8"
                      />
                    </svg>
                    <div className="absolute inset-0 rounded-full border border-green-400/50"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                Scale Your Business
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                An effective team management system makes all the difference.
              </p>
            </div>

            {/* Advanced Communication Card */}
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-56">
              <div className="mb-4 space-y-2">
                <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-xs font-medium">
                      Adrian commented...
                    </span>
                  </div>
                </div>
                <div className="bg-green-400/30 rounded-lg h-8"></div>
                <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-xs font-medium">
                      Invoice triggered
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-300">
                Advanced Communication
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Notifications & internal communication optimization.
              </p>
            </div>

            {/* Data Encryption Card */}
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-60">
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/30 to-cyan-400/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-green-400/40"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                Data Encryption
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Data base encryption to protect all intelligence & intellectual
                property.
              </p>
            </div>

            {/* Optimized Dashboard Card */}
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-72">
              <div className="mb-4">
                <div className="bg-black/50 rounded-xl p-3 border border-neutral-600">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">F</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs">
                        Fluidity
                      </div>
                      <div className="text-neutral-400 text-xs">Main Menu</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-2 py-1.5 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-black rounded"></div>
                      </div>
                      <span className="text-green-400 text-xs font-medium">
                        Dashboard
                      </span>
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2 text-neutral-400">
                      <div className="w-3 h-3 rounded border border-neutral-500"></div>
                      <span className="text-xs">Payments</span>
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2 text-neutral-400">
                      <div className="w-3 h-3 rounded border border-neutral-500"></div>
                      <span className="text-xs">Team Tasks</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                Optimized Dashboard
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Minimalistic & effective performance mode dashboard.
              </p>
            </div>

            {/* 24/7 Support Card */}
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-36">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-green-600">
                  24 / 7 Support
                </h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Our custom trained support team is at your service help if
                needed.
              </p>
            </div>

            {/* Quality Security Card */}
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-36">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-green-600">
                  Quality Security
                </h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Industry standard security practices to protect you.
              </p>
            </div>
          </div>

          {/* Tablet: 2 Column Grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-6">
              {/* Full Visibility Card */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-72">
                <div className="relative mb-6 h-32 flex items-center justify-center">
                  <div className="w-18 h-18 bg-green-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-9 h-9 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-4 w-7 h-7 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 right-1 w-7 h-7 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-1 left-1 w-7 h-7 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4 w-7 h-7 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-300">
                  Full Visibility
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Task management like never before. Full control of your team.
                </p>
              </div>

              {/* Scale Your Business Card */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-72">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">
                        System Online
                      </span>
                    </div>
                  </div>
                  <div className="relative bg-gradient-to-br from-green-400/30 to-cyan-400/30 rounded-2xl p-5 h-28 overflow-hidden flex items-center justify-center">
                    <div className="w-20 h-20 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/40 to-teal-400/40"></div>
                      <svg
                        className="w-full h-full text-green-400"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                      >
                        <path
                          d="M20,30 Q25,25 35,30 L40,35 Q45,40 35,45 L30,50 Q20,45 20,35 Z"
                          opacity="0.8"
                        />
                        <path
                          d="M55,25 Q65,20 75,25 L80,30 Q85,35 75,40 L70,45 Q60,40 55,35 Z"
                          opacity="0.8"
                        />
                        <path
                          d="M25,55 Q35,50 45,55 L50,60 Q55,65 45,70 L40,75 Q30,70 25,65 Z"
                          opacity="0.8"
                        />
                        <path
                          d="M60,50 Q70,45 80,50 L85,55 Q90,60 80,65 L75,70 Q65,65 60,60 Z"
                          opacity="0.8"
                        />
                      </svg>
                      <div className="absolute inset-0 rounded-full border border-green-400/50"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-300">
                  Scale Your Business
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  An effective team management system makes all the difference.
                </p>
              </div>

              {/* Advanced Communication Card */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-72">
                <div className="mb-4 space-y-2.5">
                  <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">
                        Adrian commented...
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-400/30 rounded-lg h-10"></div>
                  <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">
                        Invoice triggered
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-300">
                  Advanced Communication
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Notifications & internal communication optimization.
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-6">
              {/* Data Encryption Card */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-80">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400/30 to-cyan-400/30 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center">
                        <svg
                          className="w-7 h-7 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-green-400/40"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Data Encryption
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Data base encryption to protect all intelligence &
                  intellectual property.
                </p>
              </div>

              {/* Optimized Dashboard Card */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-80">
                <div className="mb-5">
                  <div className="bg-black/50 rounded-xl p-4 border border-neutral-600">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-neutral-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">F</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">
                          Fluidity
                        </div>
                        <div className="text-neutral-400 text-xs">
                          Main Menu
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-3 py-2 flex items-center gap-3">
                        <div className="w-3.5 h-3.5 bg-green-400 rounded flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-black rounded"></div>
                        </div>
                        <span className="text-green-400 text-sm font-medium">
                          Dashboard
                        </span>
                      </div>
                      <div className="px-3 py-2 flex items-center gap-3 text-neutral-400">
                        <div className="w-3.5 h-3.5 rounded border border-neutral-500"></div>
                        <span className="text-sm">Payments</span>
                      </div>
                      <div className="px-3 py-2 flex items-center gap-3 text-neutral-400">
                        <div className="w-3.5 h-3.5 rounded border border-neutral-500"></div>
                        <span className="text-sm">Team Tasks</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Optimized Dashboard
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Minimalistic & effective performance mode dashboard.
                </p>
              </div>

              {/* Support and Security Cards - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                {/* 24/7 Support Card */}
                <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 h-32">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-green-400">
                      24/7 Support
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Our support team is at your service.
                  </p>
                </div>

                {/* Quality Security Card */}
                <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 h-32">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-green-600">
                      Quality Security
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Industry standard security practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original 3 Column Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {/* First Column */}
            <div className="space-y-6">
              {/* Full Visibility Card - Large */}
              <div
                className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 h-80 relative overflow-hidden"
                style={{
                  backgroundImage: \`
      radial-gradient(circle, rgba(34,197,94,0.15) 1px, transparent 1px),
      radial-gradient(circle, rgba(115,115,115,0.07) 1px, transparent 1px)
    \`,
                  backgroundSize: "18px 18px",
                  backgroundPosition: "0 0, 9px 9px",
                }}
              >
                <div className="relative mb-8 h-40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center z-10">
                    <svg
                      className="w-10 h-10 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-3 text-gray-300">
                  Full Visibility
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Task management like never before. Full control of your team.
                </p>
              </div>

              {/* Optimized Dashboard Card - Small */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-96">
                <div className="mb-6">
                  <div className="bg-black/50 rounded-2xl p-4 border border-green-400/40">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center border border-green-400/60">
                        <span className="text-white text-sm font-bold">F</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">
                          Fluidity
                        </div>
                        <div className="text-neutral-400 text-xs">
                          Main Menu
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-3 py-2 flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-400 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-black rounded"></div>
                        </div>
                        <span className="text-green-400 text-sm font-medium">
                          Dashboard
                        </span>
                      </div>
                      <div className="px-3 py-2 flex items-center gap-3 text-neutral-400">
                        <div className="w-4 h-4 rounded border border-neutral-500"></div>
                        <span className="text-sm">Payments</span>
                      </div>
                      <div className="px-3 py-2 flex items-center gap-3 text-neutral-400">
                        <div className="w-4 h-4 rounded border border-neutral-500"></div>
                        <span className="text-sm">Team Tasks</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-300">
                  Optimized Dashboard
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Minimalistic & effective performance mode dashboard.
                </p>
              </div>
            </div>

            {/* Second Column - Middle */}
            <div className="space-y-6">
              {/* 24/7 Support Card - Small */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-44">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-green-600">
                    24 / 7 Support
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Our custom trained support team is at your service help if
                  needed.
                </p>
              </div>

              {/* Scale Your Business Card - Large with Globe */}
              <div className="bg-neutral-900 border border-green-400/80  rounded-2xl p-8 h-80">
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-green-500/40 bg-gradient-to-r from-green-500/10 via-green-400/10 to-neutral-800/20 shadow-inner shadow-green-500/10">
                      <div className="relative">
                        {/* Glowing ring behind pulse */}
                        <div className="absolute inset-0 rounded-full bg-green-400/30 blur-sm"></div>
                        <div className="w-3.5 h-3.5 bg-green-400 rounded-full animate-pulse relative z-10 shadow-md shadow-green-400/40"></div>
                      </div>
                      <span className="text-green-400 text-sm font-medium">
                        System Online
                      </span>
                    </div>
                  </div>

                  {/* Globe SVG */}
                  <div className="relative bg-gradient-to-br from-green-400/30 to-cyan-400/30 rounded-2xl p-6 h-32 overflow-hidden flex items-center justify-center">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/40 to-teal-400/40"></div>

                      <svg
                        className="w-full h-full"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Earth Circle */}
                        <circle
                          cx="256"
                          cy="256"
                          r="250"
                          fill="currentColor"
                          className="text-emerald-400"
                        />

                        {/* Continents (simplified real-world paths) */}
                        <path
                          fill="#ffffff"
                          d="M150 180l30 10 10 20 40-10 10-20 30 0 10 10 0 30-20 10-10 30 20 10 30-10 10-30 40-10 30 10 10 20-10 30-20 10-30 0-10 10 10 30-10 10-20-10-10-20-30 10-30-10-10-20-20 10-20-10-10-30 10-30-20-10-20-10z"
                          opacity="0.7"
                        />
                      </svg>

                      {/* Globe border */}
                      <div className="absolute inset-0 rounded-full border border-green-400/50"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-300">
                  Scale Your Business
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  An effective team management system makes all the difference.
                </p>
              </div>

              {/* Quality Security Card - Small */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 h-44">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-400 rounded-md flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11v1m0 2v.5m-3-4a3 3 0 1 1 6 0v.5a6.5 6.5 0 0 1-6.5 6.5m8-7v.5c0 3.5-2.1 6.5-5 7.8M6.5 12.5v.5c0 2.2 1 4.2 2.7 5.6"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="9.5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        opacity="0.3"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-medium text-green-600">
                    Quality Security
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Industry standard security practices to protect you.
                </p>
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-6">
              {/* Advanced Communication Card - Large */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 h-80">
                <div className="mb-6 space-y-3">
                  <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">
                        Adrian commented...
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-400/30 rounded-lg h-12"></div>
                  <div className="bg-green-400/20 border border-green-400/40 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">
                        Invoice triggered
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-300">
                  Advanced Communication
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Notifications & internal communication optimization.
                </p>
              </div>

              {/* Data Encryption */}
              <div
                className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 h-96 relative overflow-hidden flex flex-col justify-between"
                style={{
                  backgroundImage: \`
      radial-gradient(circle, rgba(34,197,94,0.2) 1.5px, transparent 1px),
      radial-gradient(circle, rgba(115,115,115,0.1) 1.5px, transparent 1px)
    \`,
                  backgroundSize: "22px 22px",
                  backgroundPosition: "0 0, 11px 11px",
                }}
              >
                {/* Top Section: Icon */}
                <div className="flex justify-center mt-2">
                  <div className="relative w-48 h-48">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-green-400/30 to-cyan-400/30 flex items-center justify-center">
                      <div className="w-36 h-36 rounded-full bg-neutral-800 flex items-center justify-center">
                        <svg
                          className="w-20 h-20 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-green-400/40"></div>
                  </div>
                </div>

                {/* Bottom Section: Text */}
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-3 text-gray-300">
                    Data Encryption
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Database encryption to protect all intelligence &
                    intellectual property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{\`
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4ade80;
        }
      \`}</style>
    </div>
  );
}
`,
    },
  },
};
