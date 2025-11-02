import React from "react";
import {
  Play,
  Download,
  Users,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Target,
  Heart,
  Quote,
  Eye,
} from "lucide-react";

const ZenoLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-light italic text-red-600">
            Zeno
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-medium">
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              About Zeno
            </a>
          </nav>
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm font-medium">
            Start Free <span className="text-lg">→</span>
          </button>
        </div>
      </header>

      {/* Main Container with subtle background */}
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30 pointer-events-none"></div>

        <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center py-16 lg:py-24">
            {/* Top banner */}
            <div className="inline-flex items-center bg-purple-50 border border-purple-200 px-6 py-2 rounded-full mb-12">
              <span className="text-sm text-red-700">
                All 13 tools. Just{" "}
              </span>
              <span className="text-sm font-semibold text-red-800 mx-1">
                $0
              </span>
              <span className="text-sm text-red-700">
                /day. Try it free.
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight mb-8">
              <span className="text-gray-900">From </span>
              <span className="inline-flex items-center gap-3">
                <span className="text-gray-900">YouTube</span>
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-red-500 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-current ml-1" />
                </div>
              </span>
              <span className="text-gray-900"> to</span>
              <br />
              <span className="text-gray-800">Actionable Insights </span>
              <span className="italic text-red-600 font-light">
                in Seconds
              </span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Zeno turns any video into{" "}
                <span className="font-semibold text-gray-900">
                  8 powerful cards
                </span>{" "}
                — key ideas, action steps, tweet
                <br className="hidden sm:block" />
                hooks, book recs, and more.{" "}
                <span className="text-red-600 font-medium">
                  Learn faster. Create smarter. Execute better.
                </span>
              </p>
            </div>

            {/* Input section */}
            <div className="max-w-2xl mx-auto mb-20">
              <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-full p-2 shadow-lg border border-gray-100">
                <input
                  type="text"
                  placeholder="Drop a YouTube video here..."
                  className="flex-1 px-6 py-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-lg"
                />
                <button className="bg-gradient-to-r from-[#FF0000] to-[#CC0000] text-white px-8 py-4 rounded-full hover:from-[#E60000] hover:to-[#B30000] transition-all font-semibold text-lg shadow-lg">
                  Let's Go
                </button>
              </div>
            </div>
          </div>

          {/* The 8 Cards Preview Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The 8 Cards
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A 30-minute course becomes a 2-minute action plan
              </p>
            </div>

            {/* First row of cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="bg-green-100 p-6 rounded-2xl border border-green-200">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-2 text-lg">
                  Key Insights
                </h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Extract the main takeaways and core concepts from any video
                  content
                </p>
              </div>

              <div className="bg-orange-100 p-6 rounded-2xl border border-orange-200">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-orange-800 mb-2 text-lg">
                  Social Boosts
                </h3>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Ready-to-share social media content and engaging hooks
                </p>
              </div>

              <div className="bg-blue-100 p-6 rounded-2xl border border-blue-200">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800 mb-2 text-lg">
                  Action Steps
                </h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Practical next steps you can implement immediately
                </p>
              </div>

              <div className="bg-pink-100 p-6 rounded-2xl border border-pink-200">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-pink-800 mb-2 text-lg">
                  Entrepreneurial Sparks
                </h3>
                <p className="text-pink-700 text-sm leading-relaxed">
                  Business ideas and opportunities to explore
                </p>
              </div>
            </div>

            {/* Second row of cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-sky-100 p-6 rounded-2xl border border-sky-200">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-sky-800 mb-2 text-lg">
                  Book Mentions
                </h3>
                <p className="text-sky-700 text-sm leading-relaxed">
                  Referenced books and learning resources mentioned
                </p>
              </div>

              <div className="bg-purple-100 p-6 rounded-2xl border border-purple-200">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-purple-800 mb-2 text-lg">SOTD</h3>
                <p className="text-purple-700 text-sm leading-relaxed">
                  Highlight Reels
                </p>
              </div>

              <div className="bg-amber-100 p-6 rounded-2xl border border-amber-200">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-amber-800 mb-2 text-lg">
                  Reflect & Insight
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Personal reflection prompts and deeper insights
                </p>
              </div>

              <div className="bg-violet-100 p-6 rounded-2xl border border-violet-200">
                <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-violet-800 mb-2 text-lg">
                  Quote Gems
                </h3>
                <p className="text-violet-700 text-sm leading-relaxed">
                  Memorable quotes and wisdom from the content
                </p>
              </div>
            </div>
          </div>

          {/* User Testimonials Section */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900">
                What <span className="text-gray-500">Users Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial Card 1 */}
              <div className="bg-red-400 text-white p-8 rounded-3xl shadow-lg">
                <p className="text-base leading-relaxed mb-6">
                  “Zeno AI has completely transformed how I process educational
                  content. I can extract actionable insights from hours of
                  videos in just minutes.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                  <div>
                    <p className="font-semibold">Sarah Mitchell</p>
                    <p className="text-sm text-gray-200">
                      Learning & Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
                <p className="text-base leading-relaxed mb-6 text-gray-800">
                  “This tool has revolutionized my content creation process. I
                  can quickly turn long-form videos into engaging social media
                  content.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">Marcus Chen</p>
                    <p className="text-sm text-gray-500">Content Creator</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="bg-red-400 text-white p-8 rounded-3xl shadow-lg">
                <p className="text-base leading-relaxed mb-6">
                  “I love how Zeno breaks down complex videos into digestible,
                  actionable insights. It’s become an essential part of my
                  learning toolkit.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full" />
                  <div>
                    <p className="font-semibold">Alex Rivera</p>
                    <p className="text-sm text-gray-200">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who It's For Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
                Who <span className="text-gray-500">It's For</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-purple-50 border border-purple-100 p-8 rounded-3xl text-center">
                <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Lifelong Learners
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Skip the fluff. Learn faster than your favorite creators.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl text-center">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Content Creators
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Turn videos into ready-made tweet hooks, course ideas, and
                  short-form content.
                </p>
              </div>

              <div className="bg-pink-50 border border-pink-100 p-8 rounded-3xl text-center">
                <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Busy Professionals
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No time? No problem. Turn a 30+ min video into 2-min
                  summaries.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl text-center">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Indie Hackers & Founders
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mine videos for business insights, product ideas, and mental
                  models.
                </p>
              </div>

              <div className="bg-red-50 border border-red-100 p-8 rounded-3xl text-center">
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Educators & Coaches
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Curate video-based curriculums in seconds. Add your voice,
                  share with students.
                </p>
              </div>
            </div>
          </div>

          {/* Simple Pricing Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
                Simple <span className="text-gray-500">Pricing</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Creator Plan
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                </div>
                <p className="text-gray-600 mb-8">
                  For casual content consumers
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      5 video analyses per month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Basic 8 card types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Standard processing</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-4 rounded-full hover:bg-gray-800 transition-colors font-semibold">
                  Get Started Free
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#FF0000] to-[#CC0000] text-white p-8 rounded-3xl shadow-2xl transform scale-105">
                <h3 className="font-bold text-xl mb-2">Pro Plan</h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold">$19</span>
                </div>

                <p className="text-red-100 mb-8">Most popular for creators</p>

                <ul className="space-y-4 mb-10">
                  {[
                    "Unlimited video analyses",
                    "All 13 advanced tools",
                    "Priority processing",
                    "Export & sharing options",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      </div>
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-white text-[#FF0000] py-4 rounded-full hover:bg-red-50 transition-colors font-semibold">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Team Plan
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                </div>
                <p className="text-gray-600 mb-8">
                  For teams and organizations
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Team collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-4 rounded-full hover:bg-gray-800 transition-colors font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Zeno in Action Section */}
          <div className="mb-32">
            <div className="bg-gradient-to-r from-red-100 via-red-400 to-red-00 rounded-3xl p-10 md:p-16 lg:p-24 text-center text-white shadow-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold italic tracking-tight mb-6">
                Zeno in Action
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
                Turn long videos into short execution plans — in seconds.
              </p>

              <div className="flex justify-center">
                <button
                  className="w-20 h-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-200 shadow-inner"
                  aria-label="Play Demo"
                >
                  <Play className="w-10 h-10 text-white fill-current ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-5xl lg:text-7xl font-light mb-4">
                  <span className="italic text-red-400">Zeno</span>{" "}
                  <span className="text-gray-800">AI</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Turn long videos into short execution plans — in seconds.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <h3 className="font-bold text-gray-900 mb-6 text-lg">
                    Product
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        How it Works
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        API
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Integrations
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-6 text-lg">
                    Use Cases
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Content Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Educators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Researchers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Students
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-6 text-lg">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ZenoLandingPage;
