import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkColor?: string;
  className?: string;
}

const platformIcons = [
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 122.8 122.8" className="w-6 h-6 text-[#611f69]">
        <path
          fill="currentColor"
          d="M30.7 0C23.7 0 18 5.6 18 12.6s5.6 12.6 12.6 12.6h12.6V12.6C43.3 5.6 37.7 0 30.7 0zM0 30.7c0 7 5.6 12.6 12.6 12.6H30.7V30.7c0-7-5.6-12.6-12.6-12.6S0 23.7 0 30.7zM43.3 43.3H30.7v48h12.6V43.3zM122.8 92.1c0-7-5.6-12.6-12.6-12.6s-12.6 5.6-12.6 12.6v12.6h12.6c7 0 12.6-5.6 12.6-12.6zM92.1 122.8c7 0 12.6-5.6 12.6-12.6s-5.6-12.6-12.6-12.6H79.5v12.6c0 7 5.6 12.6 12.6 12.6zM79.5 79.5h12.6v-48H79.5v48zM92.1 0c-7 0-12.6 5.6-12.6 12.6v12.6h12.6c7 0 12.6-5.6 12.6-12.6S99.1 0 92.1 0zM122.8 30.7c0-7-5.6-12.6-12.6-12.6S97.6 23.7 97.6 30.7v12.6h12.6c7 0 12.6-5.6 12.6-12.6z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-black">
        <path
          fill="currentColor"
          d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.6-3.8-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.8.8 1.7 1 .5-.4 1.1-.7 1.8-.8-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5s2.2.2 3.2.5c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.6.5 1 .9 1 2v2.9c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"
        />
      </svg>
    ),
  },
  {
    name: "GitLab",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500">
        <path
          fill="currentColor"
          d="M22.55 13.19l-2.16-6.66a.78.78 0 0 0-1.47-.06L17.04 9.8H6.96L5.08 6.47a.78.78 0 0 0-1.47.06L1.45 13.2a1.22 1.22 0 0 0 .44 1.34l9.61 7.12a1.2 1.2 0 0 0 1.45 0l9.61-7.12a1.22 1.22 0 0 0 .44-1.34z"
        />
      </svg>
    ),
  },
  {
    name: "Google Meet",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600">
        <path
          fill="currentColor"
          d="M12 11.4V7l5.2 4.2-5.2 4.2v-3.4H5v5h14V7h-2v4.4l-3-2.4-3 2.4z"
        />
      </svg>
    ),
  },
  {
    name: "Zoom",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
        <path
          fill="currentColor"
          d="M17.5 9.3v5.4l3.7 2.4c.3.2.8 0 .8-.4V7.3c0-.4-.4-.6-.8-.4l-3.7 2.4zM2 7v10c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1z"
        />
      </svg>
    ),
  },
  {
    name: "Notion",
    svg: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 text-black">
        <path
          fill="currentColor"
          d="M20 10h60a10 10 0 0 1 10 10v60a10 10 0 0 1-10 10H20A10 10 0 0 1 10 80V20A10 10 0 0 1 20 10zm50 65V40H60v16l-8-16H44v35h8V59l8 16h10z"
        />
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-500">
        <path
          fill="currentColor"
          d="M12 12a3 3 0 1 0 0-6h-3v6h3zm0 0a3 3 0 1 1 0 6h-3v-6h3zm-3-6V3a3 3 0 1 1 3 3h-3zm0 12v3a3 3 0 1 1-3-3h3zm0 0h3a3 3 0 1 1-3-3v3z"
        />
      </svg>
    ),
  },
  {
    name: "Jira",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-700">
        <path
          fill="currentColor"
          d="M12 0l12 12-12 12L0 12 12 0zm0 3.6L3.6 12 12 20.4 20.4 12 12 3.6z"
        />
      </svg>
    ),
  },
  {
    name: "Trello",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm5 3v10h4V6H8zm6 0v6h4V6h-4z"
        />
      </svg>
    ),
  },
  {
    name: "Linear",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-violet-600">
        <path fill="currentColor" d="M12 2l9 9-9 9-9-9 9-9z" />
      </svg>
    ),
  },
  {
    name: "Calendly",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-sky-500">
        <path fill="currentColor" d="M4 4h16v16H4V4zm9 4v8h-2V8h2z" />
      </svg>
    ),
  },
  {
    name: "Asana",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-400">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <circle cx="6" cy="18" r="3" fill="currentColor" />
        <circle cx="18" cy="18" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
  linkText,
  linkColor = "text-purple-500",
  className = "",
}: FeatureCardProps) => (
  <div
    className={`bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-700/60 
      backdrop-blur-md rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 
      group flex flex-col h-full relative overflow-hidden ${className}`}
  >
    {/* Optional glow on hover */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-100 via-white to-transparent opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none" />

    <div className="flex-grow">
      {/* Icon section */}
      <div className="mb-6 flex items-center justify-center min-h-[160px]">
        <div className="w-full">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white mb-3 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-[15px]">
        {description}
      </p>
    </div>

    {/* Link CTA */}
    <a
      href="#"
      className={`${linkColor} hover:opacity-80 inline-flex items-center group-hover:translate-x-1 
        transition-all duration-200 text-sm font-medium mt-auto`}
    >
      {linkText}
      <svg
        className="w-4 h-4 ml-2"
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
    </a>
  </div>
);

interface ChatMessageProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
  isBot?: boolean;
}

const ChatMessage = ({
  avatar,
  name,
  message,
  time,
  isBot = false,
}: ChatMessageProps) => (
  <div className="flex items-start gap-3 mb-4 last:mb-0">
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
        isBot ? "bg-gray-800 text-white" : "bg-indigo-100 text-indigo-600"
      }`}
    >
      {isBot ? "L" : avatar}
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-medium text-gray-900 text-sm">{name}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      {isBot ? (
        <div className="bg-indigo-500 text-white px-4 py-2 rounded-2xl rounded-tl-md inline-block">
          {message}
        </div>
      ) : (
        <p className="text-gray-600 text-sm">{message}</p>
      )}
    </div>
  </div>
);

export default function Bento() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-200 to-sky-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <header className="mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200/80">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">
                Overview
              </span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium text-gray-900 mb-4 leading-tight tracking-tight">
              Building the BI tool we <br /> always wanted
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">Why Lightdash?</p>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
          {/* Card 1: Data-driven Decisions */}
          <FeatureCard
            icon={
              <div className="relative w-full h-full">
                {/* Elegant filled area graph */}
                <svg
                  className="w-full h-32"
                  viewBox="0 0 300 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#7F56D9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#7F56D9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 80 Q50 60 100 70 Q150 30 200 50 Q250 20 300 40 V100 H0 Z"
                    fill="url(#areaGradient)"
                  />
                  <path
                    d="M0 80 Q50 60 100 70 Q150 30 200 50 Q250 20 300 40"
                    stroke="#7F56D9"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            }
            title="Data-driven Decisions"
            description="Visualize your data with our intuitive and powerful chart builder."
            linkText="Explore charts"
            linkColor="text-purple-500"
          />

          {/* Card 2: Pricing */}
          <FeatureCard
            icon={
              <div className="w-full h-full flex items-end">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 60"
                  preserveAspectRatio="xMidYMax meet"
                >
                  <g>
                    <rect
                      x="10"
                      y="40"
                      width="20"
                      height="20"
                      rx="2"
                      fill="rgb(167 139 250)"
                    />
                    <rect
                      x="40"
                      y="25"
                      width="20"
                      height="35"
                      rx="2"
                      fill="rgb(139 92 246)"
                    />
                    <rect
                      x="70"
                      y="10"
                      width="20"
                      height="50"
                      rx="2"
                      fill="rgb(124 58 237)"
                    />
                  </g>
                </svg>
              </div>
            }
            title="Pricing with no user limits"
            description="Stop paying Looker prices. No more guessing how many licenses you need."
            linkText="Check out our pricing"
            linkColor="text-purple-500"
          />

          {/* Card 3: We Listen */}
          <FeatureCard
            icon={
              <div className="w-full">
                <ChatMessage
                  avatar="JM"
                  name="James Myers"
                  message="Would it be possible to request a feature of chart builder with customizable themes?"
                  time="4:25 PM"
                />
                <ChatMessage
                  avatar="L"
                  name="Lightdash"
                  message="Of course, we're on it James!"
                  time="4:25 PM"
                  isBot={true}
                />
              </div>
            }
            title="We Listen to You"
            description="Request features and see them come to life. Your feedback shapes our product."
            linkText="Suggest a feature"
          />

          {/* Card 4: Community */}
          <FeatureCard
            icon={
              <div className="relative w-full">
                {/* Decorative SVG Background */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                  viewBox="0 0 300 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,100 C80,40 220,160 300,60 L300,0 L0,0 Z"
                    fill="url(#waveGradient)"
                  />
                  <defs>
                    <linearGradient
                      id="waveGradient"
                      x1="0"
                      y1="0"
                      x2="300"
                      y2="100"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E9D5FF" />
                      <stop offset="1" stopColor="#D8B4FE" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Chat bubble content */}
                <div className="bg-white/90 backdrop-blur-md border border-slate-200/70  p-4 text-sm text-gray-700 shadow-sm">
                  <div className="mb-2 text-xs text-gray-500">
                    <strong className="text-gray-800">Lightdash</strong> · Today
                    · 4:25 PM
                  </div>
                  <div className="mb-3">
                    Exciting news! 🎉 We're thrilled to announce a new feature.
                    Dive in and explore this latest addition!
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>💜 20</span>
                    <span>🎉 15</span>
                    <span>👏 12</span>
                  </div>
                </div>
              </div>
            }
            title="Community-built and loved"
            description="Join our community and meet other users and have your say on our roadmap!"
            linkText="Join the community"
            linkColor="text-purple-500"
          />

          {/* Card 5: Security */}
          <FeatureCard
            icon={
              <div className="space-y-4 w-full">
                {/* GDPR Badge */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-tr from-gray-100 to-white/80 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      GDPR
                    </div>
                    <div className="text-xs text-gray-500">Compliant</div>
                  </div>
                </div>

                {/* SOC2 Badge */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-tr from-gray-100 to-white/80 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      SOC2 Type II
                    </div>
                    <div className="text-xs text-gray-500">Compliant</div>
                  </div>
                </div>
              </div>
            }
            title="Secure by design"
            description="Lightdash is SOC2 and GDPR compliant."
            linkText="Learn more"
            linkColor="text-purple-600"
          />

          {/* Card 6: Integrations */}
          <FeatureCard
            icon={
              <div className="grid grid-cols-4 gap-4 w-full">
                {platformIcons.map(({ name, svg }) => (
                  <div
                    key={name}
                    title={name}
                    className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md aspect-square transition-transform group-hover:scale-105"
                  >
                    {svg}
                  </div>
                ))}
              </div>
            }
            title="Integrates everywhere"
            description="Works with the tools you already use and love."
            linkText="Learn more"
            linkColor="text-purple-500"
          />
        </div>
      </div>
    </div>
  );
}
