import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Bento from "../../components/bento/bento5";

export const bento5Registry: LandingComponentGroup = {
  title: "Bento",
  description: "Dark Bento is a design system for building modern interfaces.",
  category: "Bento",
  variants: {
    default: {
      title: "Dark Bento",
      description: "Dark Bento is a design system for building modern interfaces.",
      component: Bento,
      image: "/images/blocks/bento/bento5.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React from "react";

const Bento = () => {
  const LineChart = ({
    data,
    color = "chart-blue",
  }: {
    data: number[];
    color?: string;
  }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * 200;
        const y = 60 - ((value - min) / range) * 40;
        return \`\${x},\${y}\`;
      })
      .join(" ");

    return (
      <svg width="200" height="60" className="overflow-visible">
        <polyline
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          points={points}
          className="drop-shadow-sm"
        />
      </svg>
    );
  };

  const ProgressBar = ({
    percentage,
    color = "primary",
  }: {
    percentage: number;
    color?: string;
  }) => (
    <div className="w-full bg-neutral-800 rounded-full h-2">
      <div
        className={\`h-2 rounded-full transition-all duration-300\`}
        style={{
          width: \`\${percentage}%\`,
          background: color === "primary"
          ? "linear-gradient(135deg, #93c5fd, #3b82f6)"  // blue-300 to blue-500
          : "linear-gradient(135deg, #6ee7b7, #10b981)" // emerald-300 to emerald-500
        
        }}
      />
    </div>
  );

  // Message Icon SVG
  const MessageIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white"
    >
      <path
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Chart Icon SVG
  const ChartIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400"
    >
      <path
        d="M3 3v18h18M7 16l4-4 4 4 4-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Memory/CPU Icon SVG
  const CPUIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="9"
        y="9"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  // Communication Hub Icon
  const HubIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  // Campaign/Target Icon
  const TargetIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );

  // Star/Favorite Icon
  const StarIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-yellow-400"
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
      />
    </svg>
  );

  // Shield/Security Icon
  const ShieldIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400"
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );

  // Fingerprint Icon (Enhanced)
  const FingerprintIcon = () => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className="mx-auto"
    >
      <path
        d="M40 10C50.4934 10 59 18.5066 59 29C59 39.4934 50.4934 48 40 48C29.5066 48 21 39.4934 21 29C21 18.5066 29.5066 10 40 10Z"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M40 15C47.732 15 54 21.268 54 29C54 36.732 47.732 43 40 43C32.268 43 26 36.732 26 29C26 21.268 32.268 15 40 15Z"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M40 20C44.9706 20 49 24.0294 49 29C49 33.9706 44.9706 38 40 38C35.0294 38 31 33.9706 31 29C31 24.0294 35.0294 20 40 20Z"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M40 25C42.2091 25 44 26.7909 44 29C44 31.2091 42.2091 33 40 33C37.7909 33 36 31.2091 36 29C36 26.7909 37.7909 25 40 25Z"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="40" cy="29" r="2" fill="#3b82f6" />

      {/* Fingerprint lines */}
      <path
        d="M15 55C18 52 22 50 26 50"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M54 50C58 50 62 52 65 55"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 65C23 62 27 60 31 60"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M49 60C53 60 57 62 60 65"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  // Uptime Monitor Icon
  const MonitorIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="8"
        y1="21"
        x2="16"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="17"
        x2="12"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 10l3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-800 rounded-xl overflow-hidden">
          {/* First Card - Secure Messaging */}
          <div className="bg-black border-r border-b border-neutral-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageIcon />
                </div>
                <span className="text-white font-medium">Irung</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-lg p-4 mb-6">
                <p className="text-sm text-white">
                  Hey <span className="text-yellow-400">@bernard</span>, I've
                  updated the dashboard metrics.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Secure Messaging
              </h3>
              <p className="text-sm text-gray-400">
                End-to-end encrypted communications for enterprise.
              </p>
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="bg-black border-r border-b border-neutral-800 p-6  sm:border-r lg:border-r">
            <div className="flex items-center gap-2 mb-4">
              <ChartIcon />
              <h3 className="text-lg font-semibold text-white">
                Analytics Dashboard
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Data visualization tools to transform complex metrics into
              insights.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-white font-medium">Mobile</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    <span className="text-sm text-white">Mobile</span>
                    <span className="text-sm font-semibold text-white">
                      224
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-white">Desktop</span>
                    <span className="text-sm font-semibold text-white">56</span>
                  </div>
                </div>
              </div>
              <LineChart
                data={[20, 25, 30, 35, 45, 50, 60]}
                color="chart-green"
              />
            </div>
          </div>

          {/* Memory Usage + Resource Monitoring */}
          <div className="bg-black border-b border-neutral-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CPUIcon />
                <h3 className="text-lg font-semibold text-white">
                  Memory Usage
                </h3>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">56 GB / 128 GB</span>
                <span className="text-sm font-semibold text-white">45%</span>
              </div>
              <ProgressBar percentage={45} color="primary" />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Resource Monitoring
              </h3>
              <p className="text-sm text-gray-400">
                Real-time tracking of system performance to optimize efficiency.
              </p>
            </div>
          </div>

          {/* Communication Hub */}
          <div className="bg-black border-r border-b border-neutral-800 p-6">
            <div className="flex items-center gap-2 mb-2">
              <HubIcon />
              <h3 className="text-lg font-semibold text-white">
                Communication Hub
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Centralized platform for team collaboration across channels.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4 border border-white/20 shadow-md">
              <p className="text-sm text-white mb-3">
                Great work on the components and registry. Big fan.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm" />
                <span className="text-sm text-gray-300 italic">Shadcn</span>
              </div>
            </div>
          </div>

          {/* Campaign */}
          <div className="bg-black border-r border-b border-neutral-800 p-6  sm:border-r lg:border-r">
            <div className="flex items-center gap-2 mb-2">
              <TargetIcon />
              <h3 className="text-lg font-semibold text-white">Campaign</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Loyalty program loyalty program
            </p>

            <div className="flex gap-3 mb-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-lg p-3 flex-1">
                <p className="text-xs text-gray-300 mb-1">Start Date</p>
                <p className="text-sm text-white">Feb 6, 2024 a...</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-lg p-3 flex-1">
                <p className="text-xs text-gray-300 mb-1">Start Date</p>
                <p className="text-sm text-white">Feb 6, 2024 a...</p>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              Connected to{" "}
              <span className="text-green-400">12 Marketing Campaigns</span>.
            </p>
          </div>

          {/* Favorite Kits */}
          <div className="bg-black border-b border-neutral-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <StarIcon />
              <h3 className="text-lg font-semibold text-white">
                Favorite Kits
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-black">Q</span>
                  </div>
                  <span className="text-sm text-white">Quartz</span>
                </div>
                <span className="text-xs text-gray-400">Now</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full" />
                  <span className="text-sm text-white">Steps</span>
                </div>
                <span className="text-xs text-gray-400">90</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-white mb-2">
                This year, you're walking more on average{" "}
                <span className="text-white font-semibold">
                  than you did in 2023
                </span>
                .
              </p>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl font-bold text-white">8,081</span>
                    <span className="text-xs text-gray-400">Steps/day</span>
                  </div>
                  <ProgressBar percentage={80} color="primary" />
                  <span className="text-xs text-gray-400">2024</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg text-gray-400">5,412</span>
                    <span className="text-xs text-gray-400">Steps/day</span>
                  </div>
                  <span className="text-xs text-gray-400">2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Reliability */}
          <div className="bg-white/5 backdrop-blur-md border-r border-white/10 p-6 relative overflow-hidden rounded-lg">
            {/* Background Waveform */}
            <svg
              viewBox="0 0 300 100"
              className="absolute top-0 right-0 w-48 h-24 opacity-10"
              fill="none"
            >
              <path
                d="M0 80 C 50 20, 150 150, 300 40"
                stroke="white"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>

            {/* Title */}
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <ShieldIcon />
              <h3 className="text-lg font-semibold text-white">
                Service Reliability
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 relative z-10 mb-4">
              Enterprise infrastructure ensuring operations with minimal
              downtime.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 text-sm text-white relative z-10">
              <div>
                <p className="text-gray-400">Uptime</p>
                <p className="font-semibold text-green-400">99.99%</p>
              </div>
              <div>
                <p className="text-gray-400">Last Downtime</p>
                <p className="font-semibold">52 days ago</p>
              </div>
              <div>
                <p className="text-gray-400">Region</p>
                <p className="font-semibold">US-East (N. Virginia)</p>
              </div>
              <div>
                <p className="text-gray-400">Security</p>
                <p className="font-semibold text-blue-400">TLS 1.3 | AES-256</p>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-4">
              <span className="inline-block text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-medium">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Identity Verification */}
          <div className="bg-black border-r border-neutral-800 p-6 sm:border-r lg:border-r">
            <h3 className="text-lg font-semibold text-white mb-2">
              Identity Verification
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Multi-factor authentication with biometrics for maximum security.
            </p>
            <div className="flex justify-center">
              <FingerprintIcon />
            </div>
          </div>

          {/* Uptime Monitoring */}
          <div className="bg-black p-6">
            <div className="flex items-center gap-2 mb-2">
              <MonitorIcon />
              <h3 className="text-lg font-semibold text-white">
                Uptime Monitoring
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Continuous service monitoring with alerts and recovery procedures.
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-white">Uptime</span>
                <span className="text-lg font-bold text-green-400">99.9%</span>
              </div>
              <div className="grid grid-cols-20 gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className={\`h-4 rounded-sm \${
                      Math.random() > 0.05 ? "bg-green-500" : "bg-white/20"
                    }\`}
                  />
                ))}
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
