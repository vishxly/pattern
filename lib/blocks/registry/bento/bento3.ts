import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Bento from "../../components/bento/bento3";

export const bento3Registry: LandingComponentGroup = {
  title: "Bento 3",
  description: "A collection of versatile components for building modern UIs.",
  category: "Bento",
  variants: {
    default: {
      title: "Bento 3",
      description:
        "A collection of versatile components for building modern UIs.",

      component: Bento,
      image: "/images/blocks/bento/bento3.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Bento+Section",
      code: `const Bento = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              "zeroUI Beta is currently being used by more
              <br />
              than 200 Active agencies"
            </p>
            <button className="relative inline-flex items-center justify-center px-7 py-3 font-semibold text-white rounded-xl bg-[#6D28D9] bg-opacity-80 backdrop-blur-sm shadow-[0_4px_20px_rgba(109,40,217,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group overflow-hidden">
              {/* Outer animated glow layer */}
              <span className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 group-hover:opacity-40 blur-lg animate-pulse z-0"></span>

              {/* Middle subtle static border */}
              <span className="absolute inset-0.5 rounded-xl border border-purple-300 opacity-40 z-0"></span>

              {/* Inner white transparent border (glass edge) */}
              <span className="absolute inset-1 rounded-lg border border-white border-opacity-10 z-0"></span>

              {/* Text content */}
              <span className="relative z-10">Join the Waitlist</span>
            </button>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              Why Teams choose
              <br />
              <span className="font-medium">zeroUI</span> ?
            </h1>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Outer border wrapper */}
          <div className="p-1 rounded-3xl border border-neutral-200">
            {/* Inner card with inner border */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
              <div className="mb-6">
                <svg
                  width="160"
                  height="120"
                  viewBox="0 0 160 120"
                  className="mx-auto"
                >
                  {/* Rectangles */}
                  <rect
                    x="20"
                    y="20"
                    width="40"
                    height="25"
                    rx="4"
                    fill="#f3f4f6"
                    stroke="#e5e7eb"
                  />
                  <rect
                    x="100"
                    y="20"
                    width="40"
                    height="25"
                    rx="4"
                    fill="#f3f4f6"
                    stroke="#e5e7eb"
                  />
                  <rect
                    x="20"
                    y="70"
                    width="40"
                    height="25"
                    rx="4"
                    fill="#f3f4f6"
                    stroke="#e5e7eb"
                  />
                  <rect
                    x="100"
                    y="70"
                    width="40"
                    height="25"
                    rx="4"
                    fill="#f3f4f6"
                    stroke="#e5e7eb"
                  />

                  {/* Central node */}
                  <circle cx="80" cy="57" r="15" fill="#6366f1" />
                  <rect
                    x="72"
                    y="53"
                    width="6"
                    height="2"
                    fill="white"
                    rx="1"
                  />
                  <rect
                    x="72"
                    y="57"
                    width="10"
                    height="2"
                    fill="white"
                    rx="1"
                  />
                  <rect
                    x="72"
                    y="61"
                    width="8"
                    height="2"
                    fill="white"
                    rx="1"
                  />

                  {/* Connection lines */}
                  <line
                    x1="60"
                    y1="32"
                    x2="65"
                    y2="45"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="32"
                    x2="95"
                    y2="45"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="82"
                    x2="65"
                    y2="69"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="82"
                    x2="95"
                    y2="69"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />

                  {/* Label */}
                  <text
                    x="80"
                    y="110"
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                    fontSize="10"
                  >
                    AI Agent
                  </text>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Automated Code Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Check your design against supported codes with one click.
              </p>
            </div>
          </div>

          {/* Multi Software Integration */}
          {/* Outer border wrapper */}
          <div className="p-1 rounded-3xl border border-neutral-200">
            {/* Inner card with inner border */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="mb-6">
                <svg
                  width="160"
                  height="120"
                  viewBox="0 0 160 120"
                  className="mx-auto"
                >
                  {/* Software icons arranged in a circle */}
                  <g transform="translate(80,60)">
                    {/* Center circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r="20"
                      fill="#f8fafc"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                    />

                    {/* App icons around the circle */}
                    <rect
                      x="-35"
                      y="-35"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#10b981"
                    />
                    <rect
                      x="23"
                      y="-35"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#3b82f6"
                    />
                    <rect
                      x="23"
                      y="23"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#ef4444"
                    />
                    <rect
                      x="-35"
                      y="23"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#f59e0b"
                    />
                    <rect
                      x="-6"
                      y="-45"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#8b5cf6"
                    />
                    <rect
                      x="35"
                      y="-6"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#06b6d4"
                    />

                    {/* Connection lines */}
                    <line
                      x1="-20"
                      y1="-20"
                      x2="-14"
                      y2="-14"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="20"
                      y1="-20"
                      x2="14"
                      y2="-14"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="20"
                      y1="20"
                      x2="14"
                      y2="14"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="-20"
                      y1="20"
                      x2="-14"
                      y2="14"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Multi Software Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Analyze directly inside your existing workflow—no interruptions.
              </p>
            </div>
          </div>

          {/* Effortless Communication */}
          <div className="p-1 rounded-3xl border border-neutral-200">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="mb-6">
                <svg
                  width="160"
                  height="120"
                  viewBox="0 0 160 120"
                  className="mx-auto"
                >
                  {/* Chat interface mockup */}
                  <rect
                    x="20"
                    y="15"
                    width="120"
                    height="90"
                    rx="8"
                    fill="#fafafa"
                    stroke="#e5e7eb"
                  />

                  {/* Header */}
                  <rect
                    x="20"
                    y="15"
                    width="120"
                    height="25"
                    rx="8"
                    fill="#6366f1"
                  />
                  <circle cx="35" cy="27" r="3" fill="white" />
                  <rect
                    x="45"
                    y="25"
                    width="30"
                    height="2"
                    fill="white"
                    opacity="0.8"
                    rx="1"
                  />
                  <rect
                    x="45"
                    y="29"
                    width="20"
                    height="2"
                    fill="white"
                    opacity="0.6"
                    rx="1"
                  />

                  {/* Messages */}
                  <rect
                    x="30"
                    y="50"
                    width="40"
                    height="12"
                    rx="6"
                    fill="#e0e7ff"
                  />
                  <rect
                    x="30"
                    y="65"
                    width="35"
                    height="12"
                    rx="6"
                    fill="#e0e7ff"
                  />
                  <rect
                    x="90"
                    y="55"
                    width="45"
                    height="12"
                    rx="6"
                    fill="#ddd6fe"
                  />
                  <rect
                    x="85"
                    y="70"
                    width="50"
                    height="12"
                    rx="6"
                    fill="#ddd6fe"
                  />

                  {/* Avatar circles */}
                  <circle cx="25" cy="56" r="4" fill="#8b5cf6" />
                  <circle cx="145" cy="61" r="4" fill="#6366f1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Effortless Communication
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Send our analysis summary with your submission to head off
                revision requests.
              </p>
            </div>
          </div>

          {/* SOC2 Compliant & Secure */}
          <div className="p-1 rounded-3xl border border-neutral-200">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 md:col-span-1 lg:col-span-1">
              <div className="mb-6">
                <svg
                  width="160"
                  height="120"
                  viewBox="0 0 160 120"
                  className="mx-auto"
                >
                  {/* Security checklist */}
                  <rect
                    x="30"
                    y="20"
                    width="100"
                    height="80"
                    rx="8"
                    fill="#fafafa"
                    stroke="#e5e7eb"
                  />

                  {/* Checkmarks */}
                  <circle cx="45" cy="40" r="6" fill="#10b981" />
                  <path
                    d="M42 40 L44 42 L48 38"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />

                  <circle cx="45" cy="60" r="6" fill="#10b981" />
                  <path
                    d="M42 60 L44 62 L48 58"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />

                  <circle cx="45" cy="80" r="6" fill="#10b981" />
                  <path
                    d="M42 80 L44 82 L48 78"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Text lines */}
                  <rect
                    x="60"
                    y="38"
                    width="50"
                    height="2"
                    fill="#d1d5db"
                    rx="1"
                  />
                  <rect
                    x="60"
                    y="42"
                    width="35"
                    height="2"
                    fill="#e5e7eb"
                    rx="1"
                  />

                  <rect
                    x="60"
                    y="58"
                    width="45"
                    height="2"
                    fill="#d1d5db"
                    rx="1"
                  />
                  <rect
                    x="60"
                    y="62"
                    width="40"
                    height="2"
                    fill="#e5e7eb"
                    rx="1"
                  />

                  <rect
                    x="60"
                    y="78"
                    width="55"
                    height="2"
                    fill="#d1d5db"
                    rx="1"
                  />
                  <rect
                    x="60"
                    y="82"
                    width="30"
                    height="2"
                    fill="#e5e7eb"
                    rx="1"
                  />

                  {/* Shield icon */}
                  <path
                    d="M80 25 L85 20 L90 25 L90 35 C90 40 85 45 80 45 C75 45 70 40 70 35 L70 25 Z"
                    fill="#6366f1"
                    opacity="0.1"
                  />
                  <path
                    d="M80 25 L85 20 L90 25 L90 35 C90 40 85 45 80 45 C75 45 70 40 70 35 L70 25 Z"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                SOC2 Compliant & Secure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Check your design against supported codes with one click.
              </p>
            </div>
          </div>

          {/* 30-Day Free Trial */}

          <div className="relative md:col-span-2 lg:col-span-2">
            <div className="absolute inset-0 rounded-[22px] border border-neutral-300 pointer-events-none z-0" />

            {/* Actual card — unchanged layout, content, and size */}
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="mb-6">
                <svg
                  width="300"
                  height="120"
                  viewBox="0 0 300 120"
                  className="mx-auto"
                >
                  {/* Credit cards stack */}
                  <g transform="translate(150,60)">
                    <rect
                      x="-60"
                      y="-15"
                      width="90"
                      height="55"
                      rx="8"
                      fill="url(#gradient3)"
                      transform="rotate(-15)"
                    />
                    <rect
                      x="-60"
                      y="-15"
                      width="90"
                      height="55"
                      rx="8"
                      fill="url(#gradient2)"
                      transform="rotate(-5)"
                    />
                    <rect
                      x="-60"
                      y="-15"
                      width="90"
                      height="55"
                      rx="8"
                      fill="url(#gradient1)"
                      transform="rotate(5)"
                    />
                    <g transform="rotate(5)">
                      <rect
                        x="-50"
                        y="-5"
                        width="20"
                        height="3"
                        fill="white"
                        opacity="0.9"
                        rx="1"
                      />
                      <rect
                        x="-50"
                        y="2"
                        width="15"
                        height="2"
                        fill="white"
                        opacity="0.7"
                        rx="1"
                      />
                      <rect
                        x="-25"
                        y="15"
                        width="30"
                        height="2"
                        fill="white"
                        opacity="0.8"
                        rx="1"
                      />
                      <rect
                        x="-25"
                        y="19"
                        width="25"
                        height="2"
                        fill="white"
                        opacity="0.6"
                        rx="1"
                      />
                    </g>
                  </g>

                  {/* Gradients */}
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                    <linearGradient
                      id="gradient3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#64748b" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                30-Day Free Trial — No credit card required
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Try zeroUI for 30 days yourself and see why Teams are choosing
                it to boost their work and reduce losses over time and money
              </p>
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
