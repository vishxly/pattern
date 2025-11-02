import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import PromptPlexLanding from "../../components/hero/promptplex";

export const promptplexRegistry: LandingComponentGroup = {
  title: "PromptPlexLanding",
  description: " A landing page for PromptPlex",
  category: "Hero",
  variants: {
    default: {
      title: "PromptPlexLanding",
      description: " A landing page for PromptPlex",
      component: PromptPlexLanding,
      image: "/images/blocks/hero/promptplex.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `export default function PromptPlexLanding() {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Main intense diagonal yellow beam - more prominent */}
          <div className="absolute top-0 right-0 w-[1000px] h-[1400px] bg-gradient-to-bl from-yellow-300/40 via-yellow-400/30 via-yellow-300/20 to-transparent rotate-12 transform translate-x-40 -translate-y-40 blur-2xl"></div>
  
          {/* Secondary intense beam for the bright streak effect */}
          <div className="absolute top-0 right-0 w-[800px] h-[1200px] bg-gradient-to-bl from-yellow-200/50 via-yellow-300/35 to-transparent rotate-15 transform translate-x-32 -translate-y-32 blur-xl"></div>
  
          {/* Bright core beam - the most intense part */}
          <div className="absolute top-0 right-0 w-[600px] h-[1000px] bg-gradient-to-bl from-yellow-100/30 via-yellow-200/25 to-transparent rotate-12 transform translate-x-28 -translate-y-28 blur-lg"></div>
  
          {/* Additional accent lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-yellow-200/25 rounded-full blur-2xl"></div>
        </div>
  
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-semibold">PromptPlex</span>
          </div>
  
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              Latest Prompts
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              Founding Member
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
  
          <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium border border-neutral-700 transition-colors text-sm sm:text-base">
            Add to Chrome
          </button>
        </header>
  
        {/* Hero Section */}
        <main className="relative z-10 px-4 sm:px-6 py-8 sm:py-16">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 leading-tight">
              Ultimate Command Center
              <br />
              for Your AI Prompts.
            </h1>
  
            <p className="text-lg sm:text-xl text-neutral-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              ChatGPT with organized prompt libraries, smart variables,
              <br className="hidden sm:block" />
              custom tones, and collaborative sharing.
            </p>
  
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
                Add to Chrome
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-neutral-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:border-neutral-500 transition-colors">
                Browse Prompts
              </button>
            </div>
          </div>
  
          {/* Dashboard Interface */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-black rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
              {/* Dashboard Header */}
              <div className="bg-black px-3 sm:px-6 py-4 border-b border-neutral-700">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-neutral-400">Category</span>
                      <select className="bg-neutral-700 text-white text-sm px-2 sm:px-3 py-1 rounded border border-neutral-600">
                        <option>All</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-neutral-400">Tag</span>
                      <select className="bg-neutral-700 text-white text-sm px-2 sm:px-3 py-1 rounded border border-neutral-600">
                        <option>All</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-neutral-400 hidden sm:inline">Sort by</span>
                      <span className="text-sm text-neutral-400 sm:hidden">Sort</span>
                      <select className="bg-neutral-700 text-white text-sm px-2 sm:px-3 py-1 rounded border border-neutral-600">
                        <option>Most pop...</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-neutral-400">Language</span>
                      <select className="bg-neutral-700 text-white text-sm px-2 sm:px-3 py-1 rounded border border-neutral-600">
                        <option>All</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-neutral-400">Live crawling</span>
                      <div className="w-10 h-5 bg-green-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                    <span className="text-sm text-neutral-400">Showing 20 of 1416</span>
                  </div>
                </div>
              </div>
  
              <div className="flex flex-col lg:flex-row">
                {/* Sidebar - Hidden on small screens, shown on large */}
                <div className="hidden lg:block w-64 bg-black border-r border-neutral-700 p-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-white bg-neutral-800 px-3 py-2 rounded">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">My Prompts</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-400 px-3 py-2 hover:text-white cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                      <span className="text-sm">Favorites</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-400 px-3 py-2 hover:text-white cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Prompt Library</span>
                      <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full font-medium">PRO</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-400 px-3 py-2 hover:text-white cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Public Prompts</span>
                    </div>
                  </div>
  
                  <div className="mt-8">
                    <div className="flex items-center space-x-2 text-neutral-400 px-3 py-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Content Writing</span>
                    </div>
                    <div className="text-xs text-neutral-500 px-3 ml-6">7 prompts • 4 folders</div>
                  </div>
  
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 text-neutral-400 px-3 py-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">SEO</span>
                    </div>
                    <div className="text-xs text-neutral-500 px-3 ml-6">12 prompts • 1 folder</div>
                  </div>
  
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 text-neutral-400 px-3 py-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Grammar</span>
                    </div>
                    <div className="text-xs text-neutral-500 px-3 ml-6">4 prompts • 2 folders</div>
                  </div>
  
                  <div className="mt-8 text-center text-neutral-500 text-sm">No more folders</div>
                </div>
  
                {/* Main Content */}
                <div className="flex-1 p-3 sm:p-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Search library prompts..."
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-600"
                    />
                  </div>
  
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-white">Prompts</h2>
                  </div>
  
                  {/* Prompt Cards Grid - Responsive */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                    {/* Card 1 */}
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 sm:p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-white text-sm pr-2">Structure Article with 15+ Headings</h3>
                        <button className="text-neutral-400 hover:text-white flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 line-clamp-3">
                        Craft a detailed, SEO-optimized article on any topic. This prompt first generates a structured
                        outline with 15+ headings, then...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">SEO</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">Article Writing</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">+4</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>355</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            </svg>
                            <span>16</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
  
                    {/* Card 2 */}
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 sm:p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-white text-sm pr-2">Advanced SEO Content Engine</h3>
                        <button className="text-neutral-400 hover:text-white flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 line-clamp-3">
                        Generate a comprehensive, 2500+ word article complete with SEO. Includes a title, meta
                        description, a detailed outline in a table, the f...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-orange-600 px-2 py-1 rounded text-xs">PRO</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">SEO</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">Article Writing</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">+4</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>351</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            </svg>
                            <span>0</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
  
                    {/* Card 3 */}
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 sm:p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-white text-sm pr-2">Long-Form SEO Article from Title & Keywords</h3>
                        <button className="text-neutral-400 hover:text-white flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 line-clamp-3">
                        Provide an article title and target keywords, and this prompt will generate a long-form,
                        comprehensive article designed to...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-orange-600 px-2 py-1 rounded text-xs">PRO</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">SEO</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">Article Writing</span>
                        <span className="bg-neutral-700 px-2 py-1 rounded text-xs">+3</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>347</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            </svg>
                            <span>1</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
  
                    {/* Card 4 */}
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 sm:p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-white text-sm pr-2">
                          Yoast SEO Article from Primary & Secondary Keywords
                        </h3>
                        <button className="text-neutral-400 hover:text-white flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 line-clamp-3">
                        Writes a 100% unique article (600-1000 words) using primary and secondary keywords. Includes a
                        title, meta description, and a more...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-orange-600 px-2 py-1 rounded text-xs">PRO</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>298</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            </svg>
                            <span>2</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
  
                    {/* Card 5 */}
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 sm:p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-white text-sm pr-2">Goal-Driven Content Rewriter</h3>
                        <button className="text-neutral-400 hover:text-white flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 line-clamp-3">
                        Paste your text to have it rewritten for improved clarity, engagement, and a more professional
                        tone. Perfect for enhancing existing...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-orange-600 px-2 py-1 rounded text-xs">PRO</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>245</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            </svg>
                            <span>3</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
  
                    {/* Card 6 */}
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 sm:p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-white text-sm pr-2">Competitor Outranker Article Generator</h3>
                        <button className="text-neutral-400 hover:text-white flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 line-clamp-3">
                        Provide a competitor's article topic and an optional URL for context to generate a new, more
                        comprehensive, and SEO-optimized...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="bg-orange-600 px-2 py-1 rounded text-xs">PRO</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>189</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            </svg>
                            <span>1</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                          <span>0</span>
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
    )
  }`,
    },
  },
};
