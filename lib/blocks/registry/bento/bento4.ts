import { FooterSection } from "@/lib/blocks/components/sample/footer";
import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Bento from "../../components/bento/bento4";

export const bento4Registry: LandingComponentGroup = {
  title: "Bento 4",
  description: "Bento  is a design system for building modern interfaces.",
  category: "Bento",
  variants: {
    default: {
      title: "Bento 4",
      description: "Bento  is a design system for building modern interfaces.",
      component: Bento,
      image: "/images/blocks/bento/bento4.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React from "react";

const Bento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Not One-Size-Fits-All */}
          <div className="relative bg-white/70 backdrop-blur-md border border-purple-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
            {/* Decorative Glow Background */}
            <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
                  Not One-Size-Fits-All
                </h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-md">
                  We build what fits — not what's easiest.
                </p>
              </div>

              {/* Flowchart Container */}
              <div className="relative h-64 sm:h-80 mt-4">
                {/* Header Bars */}
                <div className="absolute top-0 left-0 flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-10 sm:w-2 sm:h-14 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-md"></div>
                  <span className="text-xs sm:text-sm text-gray-500">Created Prompts</span>
                  <div className="w-1.5 h-10 sm:w-2 sm:h-14 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-md"></div>
                </div>

                {/* STEP 1 */}
                <div className="absolute top-12 sm:top-16 left-0">
                  <div className="text-xs text-gray-400 font-semibold mb-1">
                    STEP 1
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-500 rounded-full shadow-sm"></div>
                    <span className="text-xs sm:text-sm text-gray-900">
                      I can play drums
                    </span>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">hard</span>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="absolute top-6 sm:top-8 right-8 sm:right-16 bg-white/90 border border-gray-200 rounded-xl p-3 sm:p-4 shadow-lg w-36 sm:w-48">
                  <div className="text-xs text-gray-400 font-semibold mb-1">
                    STEP 2
                  </div>
                  <div className="text-xs sm:text-sm text-gray-900 font-medium">
                    Consider life coach
                  </div>
                </div>

                {/* Eye Icon */}
                <div className="absolute top-12 sm:top-16 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100/90 rounded-full flex items-center justify-center shadow">
                  <svg
                    width="14"
                    height="14"
                    className="sm:w-[18px] sm:h-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-500"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-500"
                    />
                  </svg>
                </div>

                {/* STEP 3 */}
                <div className="absolute top-32 sm:top-40 left-8 sm:left-16 bg-white/90 border border-gray-200 rounded-xl p-3 sm:p-4 shadow-lg w-36 sm:w-44">
                  <div className="text-xs text-gray-400 font-semibold mb-1">
                    STEP 3
                  </div>
                  <div className="text-xs sm:text-sm text-gray-900 font-medium">
                    Add to toolkit
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="absolute bottom-8 sm:bottom-12 right-12 sm:right-20">
                  <div className="text-xs text-gray-400 font-semibold">
                    STEP 4
                  </div>
                  <div className="text-xs sm:text-sm text-gray-900 font-medium mt-1">
                    Be a Danny
                  </div>
                </div>

                {/* Floating Dots (decorative) */}
                <div className="absolute bottom-20 sm:bottom-24 left-8 sm:left-12 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-400 rounded-full shadow-md"></div>
                <div className="absolute bottom-24 sm:bottom-32 left-16 sm:left-24 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Built Around Your Needs */}
          <div className="relative bg-white/70 backdrop-blur-md border border-purple-300/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden transition-all duration-300 group hover:shadow-purple-300/30">
            {/* Decorative glow blobs */}
            <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-400/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-12 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-indigo-400/20 rounded-full blur-2xl z-0"></div>

            {/* Content Layer */}
            <div className="relative z-10 space-y-4 sm:space-y-6">
              {/* Heading */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
                  Built Around Your Needs
                </h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-md">
                  Whether you're scaling fast or just starting, our approach
                  adapts to you — not the other way around.
                </p>
              </div>

              {/* UI Section */}
              <div className="relative h-60 sm:h-[300px] mt-4">
                {/* Calendar Icon */}
                <div className="absolute top-0 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100/90 rounded-xl flex items-center justify-center shadow">
                  <svg
                    width="20"
                    height="20"
                    className="sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-500"
                    />
                    <line
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-500"
                    />
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-500"
                    />
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-500"
                    />
                  </svg>
                </div>

                {/* Quote */}
                <div className="absolute top-16 sm:top-20 right-2 sm:right-4 text-xs text-gray-500 italic max-w-[120px] sm:max-w-[160px] leading-snug">
                  "Let's bring your idea to life — on your terms."
                </div>

                {/* Question Prompt */}
                <div className="absolute bottom-24 sm:bottom-[120px] left-0 text-xs sm:text-sm text-gray-700 font-medium max-w-xs">
                  🤔 Not sure where to start? <br />
                  We'll guide you step-by-step to design what matters.
                </div>

                {/* CTA Button - 3D Tilt + Rounded Capsule */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2">
                  <button className="relative bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-600 text-white font-semibold py-2.5 px-5 sm:py-3 sm:px-6 rounded-full shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-[1.04] hover:-rotate-1 active:rotate-0 text-sm sm:text-base">
                    <div className="absolute inset-0 bg-white/5 rounded-full pointer-events-none"></div>
                    <span className="relative z-10">Book a 30-min call</span>
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    We'll send you a calendar invite within minutes.
                  </p>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-8 sm:top-10 left-2 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-300/60 rounded-full"></div>
                <div className="absolute top-10 sm:top-14 left-6 sm:left-10 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400/40 rounded-full"></div>

                {/* Arrow indicator */}
                <div className="absolute bottom-20 sm:bottom-24 right-4 sm:right-8 text-gray-400">
                  <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Design Experience that Delivers */}
          <div className="relative bg-white/70 backdrop-blur-md border border-purple-300/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden transition-all duration-300 group hover:shadow-purple-300/30">
            {/* Decorative background glow */}
            <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-pink-400/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-indigo-400/20 rounded-full blur-2xl z-0"></div>

            {/* Content */}
            <div className="relative z-10 space-y-4 sm:space-y-6">
              {/* Heading */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
                  Design Experience that Delivers
                </h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                  From early-stage startups to full-scale studios — 3+ years of
                  building bold, intuitive interfaces using tools like Figma and
                  Framer.
                </p>
              </div>

              {/* Tool Workflow Section */}
              <div className="relative h-48 sm:h-60 mt-4">
                {/* Workflow icons */}
                <div className="absolute top-6 sm:top-8 left-2 sm:left-4 flex items-center space-x-3 sm:space-x-5">
                  {/* Figma Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg
                      width="20"
                      height="20"
                      className="sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M8 12a4 4 0 1 1 8 0v0a4 4 0 1 1-8 0v0z" />
                      <path d="M8 8a4 4 0 1 1 0-8h4v8H8z" />
                      <path d="M12 8h4a4 4 0 1 1 0 8h-4V8z" />
                      <path d="M8 16a4 4 0 1 1 0 8h4v-8H8z" />
                    </svg>
                  </div>

                  {/* Arrow */}
                  <div className="text-gray-400">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="m9 18 6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Profile Avatar Placeholder */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-inner overflow-hidden">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-md"></div>
                  </div>

                  {/* Arrow */}
                  <div className="text-gray-400">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="m9 18 6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Framer Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      width="20"
                      height="20"
                      className="sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M6 2h12v7L6 9V2z" />
                      <path d="M6 9h12v7L6 16V9z" />
                      <path d="M6 16h6v6l-6-6z" />
                    </svg>
                  </div>
                </div>

                {/* Connection line between elements */}
                <div className="absolute top-[72px] sm:top-[88px] left-4 sm:left-6 right-4 sm:right-6 h-px bg-gray-200/60 z-0"></div>

                {/* Measurement indicator line */}
                <div className="absolute bottom-8 sm:bottom-12 left-2 sm:left-4 right-12 sm:right-16">
                  <div className="h-px bg-gray-300 relative">
                    <div className="absolute left-0 top-0 w-px h-2 sm:h-3 bg-gray-300 -translate-y-1"></div>
                    <div className="absolute right-0 top-0 w-px h-2 sm:h-3 bg-gray-300 -translate-y-1"></div>
                  </div>
                </div>

                {/* Star icon top-right */}
                <div className="absolute top-2 sm:top-4 right-4 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>

                {/* Additional connection detail */}
                <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 w-px h-4 sm:h-6 bg-gray-200/60"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Designed Together */}
          <div className="bg-white/80 backdrop-blur-sm border border-purple-200/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl transition-all duration-300 group hover:shadow-2xl">
            {/* Glowing aura */}
            <div className="absolute -top-10 -left-10 w-36 h-36 sm:w-48 sm:h-48 bg-purple-400/20 blur-3xl rounded-full pointer-events-none z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 sm:w-48 sm:h-48 bg-blue-400/20 blur-3xl rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Designed Together
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  A collaborative approach built on transparency, creativity,
                  and continuous feedback loops.
                </p>
              </div>

              {/* Value bullets */}
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 pl-4 list-disc">
                <li>Shared ownership of ideas</li>
                <li>Real-time design reviews</li>
                <li>Live prototyping with feedback</li>
              </ul>

              {/* Visual 3D blocks */}
              <div className="relative h-36 sm:h-48 flex items-center justify-center">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  {/* ME Block */}
                  <div className="relative transform rotate-12">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-xl sm:rounded-2xl shadow-2xl flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-sm sm:text-xl">ME</span>
                    </div>
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl sm:rounded-2xl -z-10"></div>
                  </div>

                  {/* Handshake Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-20 border-2 sm:border-4 border-white">
                    <svg
                      width="20"
                      height="20"
                      className="sm:w-[28px] sm:h-[28px]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11 17a4 4 0 0 1 8 0"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-blue-500"
                      />
                      <path
                        d="M20 8.5c0 6-4.5 12-8 12s-8-6-8-12a8 8 0 1 1 16 0"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-blue-500"
                      />
                      <path
                        d="M9 12a3 3 0 0 1 6 0"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-blue-500"
                      />
                    </svg>
                  </div>

                  {/* YOU Block */}
                  <div className="relative transform -rotate-12">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl sm:rounded-2xl shadow-2xl flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-sm sm:text-xl">YOU</span>
                    </div>
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl sm:rounded-2xl -z-10"></div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-300/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-blue-300/40 rounded-full animate-ping"></div>
                <div className="absolute top-8 sm:top-12 right-8 sm:right-12 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400/60 rounded-full"></div>
                <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400/60 rounded-full"></div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <button className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full transform rotate-2 shadow-md hover:shadow-xl transition-all duration-200">
                  Start Collaborating
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
`,
    },
  },
};
