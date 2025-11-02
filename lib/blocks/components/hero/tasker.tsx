export default function TaskerLanding() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center space-x-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center 
    bg-gradient-to-br from-sky-400 to-blue-500 
    shadow-md shadow-sky-500/40 
    ring-1 ring-white/30"
          >
            <svg
              className="w-5 h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
            </svg>
          </div>

          <span className="text-xl font-semibold text-gray-900">Tasker</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            How it Works
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Templates
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </a>
        </nav>

        <button
          className="relative px-3 py-2 sm:px-4 rounded-full font-medium text-sm sm:text-base
    bg-blue-600 hover:bg-blue-500/30 text-white 
    backdrop-blur-md border border-blue-300/30 shadow-lg shadow-blue-500/40 
    ring-4 ring-blue-400/40 hover:ring-blue-400/60 transition-all"
        >
          Contact us
        </button>
      </header>

      {/* Hero Section */}
      <main className="relative px-4 sm:px-6 py-8 sm:py-16 overflow-hidden ">
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Discord */}
          <div className="absolute top-8  left-[10%] sm:left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 sm:w-7 sm:h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>

          {/* Figma */}
          <div className="absolute top-8 sm:top-20 right-[10%] sm:right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 sm:w-7 sm:h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.038H8.148z" />
            </svg>
          </div>

          {/* Google Meet */}
          <div className="absolute top-24 sm:top-40 left-4 sm:left-16 w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 sm:w-7 sm:h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Slack */}
          <div className="absolute top-24 sm:top-40 right-4 sm:right-16 w-8 h-8 sm:w-12 sm:h-12 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 sm:w-7 sm:h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
            </svg>
          </div>

          {/* Center Tasker Icon */}
          <div
            className="absolute -top-2 mt-4 lg:mt-0 sm:top-2 left-1/2 transform -translate-x-1/2 
    w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center 
    backdrop-blur-md border border-blue-300/30 shadow-lg shadow-blue-500/40 
    ring-2 ring-blue-400 hover:ring-blue-400/60 transition-all"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md shadow-sky-500/40">
              <svg
                className="w-3 h-3 sm:w-5 sm:h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Blue Arc */}
          <div className="absolute top-12 sm:top-24 left-1/2 transform -translate-x-1/2 w-64 h-32 sm:w-96 sm:h-48">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
              <path
                d="M50 150 Q200 50 350 150"
                stroke="url(#blueGradient)"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="blueGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-6 lg:mt-0 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 sm:mb-8 leading-tight">
            Your task
            <br />
            finally <em className="italic font-light">under control</em>
          </h1>

          {/* Task Cards Visualization */}
          <div className="relative mb-8 sm:mb-12 flex justify-center items-center">
            {/* Background Cards - Hidden on mobile, show fewer on tablet */}
            <div className="hidden sm:flex space-x-2 md:space-x-4 opacity-40">
              {[...Array(window.innerWidth < 768 ? 3 : 7)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-24 sm:w-24 sm:h-32 md:w-32 md:h-40 bg-white rounded-lg shadow-md border border-gray-200 p-2 sm:p-3"
                >
                  <div className="text-xs text-gray-500 mb-1 sm:mb-2">
                    PayPal
                  </div>
                  <div className="text-xs font-medium text-gray-700 mb-1">
                    Framer Projects
                  </div>
                  <div className="text-xs text-gray-500">3 files</div>
                  <div className="mt-2 sm:mt-4 w-4 h-4 sm:w-6 sm:h-6 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            {/* Highlighted Center Card */}
            <div
              className="absolute hidden sm:block w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-48 
  bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl 
  shadow-2xl p-3 sm:p-4 text-white transform scale-110"
            >
              <div className="text-xs opacity-80 mb-1 sm:mb-2">PayPal</div>
              <div className="text-xs sm:text-sm font-medium mb-1">
                Framer Projects
              </div>
              <div className="text-xs opacity-80 mb-2 sm:mb-4">3 files</div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Tame your to-do list with a task manager that brings order,
            <br className="hidden sm:block" />
            speed, and simplicity to your daily workflow.
          </p>

          <button
            className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-2 mx-auto 
    bg-blue-600 hover:bg-blue-500/30 text-white 
    backdrop-blur-md border border-blue-300/30 shadow-lg shadow-blue-500/40 
    ring-4 ring-blue-400/40 hover:ring-blue-400/60 transition-all"
          >
            <span>Start for Free</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </main>

      {/* Footer with Company Logos */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-12 opacity-40">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 3L4 14h7v7l9-11h-7V3z" />
              </svg>
              <span className="text-sm sm:text-lg font-medium text-gray-500">
                Sisyphus
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
              <span className="text-sm sm:text-lg font-medium text-gray-500">
                Acme Corp
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
              <span className="text-sm sm:text-lg font-medium text-gray-500">
                Nietzsche
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm sm:text-lg font-medium text-gray-500">
                FocalPoint
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span className="text-sm sm:text-lg font-medium text-gray-500">
                Biosynthesis
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
