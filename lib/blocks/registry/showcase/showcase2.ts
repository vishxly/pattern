import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import FeatureSpotlight from "@/lib/blocks/components/showcase/showcase2";

export const showcase2Registry: LandingComponentGroup = {
  title: "Feature Spotlight",
  description: "A dynamic landing page showcasing key features with animated transitions, testimonials, and progress indicators.",
  category: "Showcase",
  variants: {
    default: {
      title: "Feature Spotlight",
      description: "A dynamic landing page showcasing key features with animated transitions, testimonials, and progress indicators.",
      component: FeatureSpotlight,
      image: "/images/blocks/showcase/showcase2.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Page",
      code: `import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  id: string;
  title: string;
  description: string;
  metrics: {
    value: string;
    label: string;
    trend: "up" | "down" | "neutral";
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

interface FeatureSpotlightProps {
  features?: Feature[];
  autoPlay?: boolean;
  interval?: number;
}

const defaultFeatures: Feature[] = [
  {
    id: "analytics",
    title: "Real-time Analytics",
    description: "Get instant insights into your performance with advanced analytics that update in real-time. Track what matters most to your business.",
    metrics: [
      { value: "99.9%", label: "Uptime", trend: "up" },
      { value: "2.3s", label: "Load Time", trend: "up" },
      { value: "847%", label: "Growth", trend: "up" },
    ],
    testimonial: {
      quote: "The analytics dashboard transformed how we make decisions. We can see patterns we never noticed before.",
      author: "Sarah Chen",
      role: "Head of Growth",
      company: "TechFlow",
      avatar: "SC",
    },
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v18h18M7 16l4-4 4 4 4-4"
        />
        <circle cx="7" cy="16" r="2" fill="currentColor" />
        <circle cx="11" cy="12" r="2" fill="currentColor" />
        <circle cx="15" cy="16" r="2" fill="currentColor" />
        <circle cx="19" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat detection to keep your data safe.",
    metrics: [
      { value: "0", label: "Breaches", trend: "neutral" },
      { value: "256-bit", label: "Encryption", trend: "up" },
      { value: "24/7", label: "Monitoring", trend: "up" },
    ],
    testimonial: {
      quote: "Security was our biggest concern moving to the cloud. This platform exceeded all our compliance requirements.",
      author: "Michael Rodriguez",
      role: "CISO",
      company: "SecureBank",
      avatar: "MR",
    },
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    description: "Seamless real-time collaboration with your team. Share, comment, and work together from anywhere in the world.",
    metrics: [
      { value: "10x", label: "Faster", trend: "up" },
      { value: "95%", label: "Satisfaction", trend: "up" },
      { value: "500K+", label: "Users", trend: "up" },
    ],
    testimonial: {
      quote: "Our remote team finally feels connected. The collaboration features are intuitive and powerful.",
      author: "Emma Thompson",
      role: "Design Lead",
      company: "CreativeStudio",
      avatar: "ET",
    },
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        />
        <circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        />
      </svg>
    ),
    color: "#8b5cf6",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function FeatureSpotlight({
  features = defaultFeatures,
  autoPlay = true,
  interval = 5000,
}: FeatureSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (interval / 50));
      });
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [autoPlay, interval, features.length]);

  const activeFeature = features[activeIndex];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-blue-50/30 to-transparent dark:via-blue-950/30 rounded-full animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-sm font-medium text-gray-600 dark:text-gray-400 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            POWERED BY INNOVATION
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-6">
            Features that drive results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the tools that top teams use to achieve extraordinary outcomes
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Feature Selector */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => {
                  setActiveIndex(index);
                  setProgress(0);
                }}
                className={\`group relative w-full text-left p-6 rounded-2xl transition-all duration-300 \${
                  index === activeIndex
                    ? "bg-white dark:bg-gray-900 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                    : "bg-white/50 dark:bg-gray-900/50 hover:bg-white/80 dark:hover:bg-gray-900/80 border border-transparent"
                }\`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Progress bar for active item */}
                {index === activeIndex && autoPlay && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r rounded-full"
                    style={{
                      background: \`linear-gradient(to right, \${feature.color}, \${feature.color}80)\`,
                      width: \`\${progress}%\`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: \`\${progress}%\` }}
                    transition={{ duration: 0.1 }}
                  />
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={\`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 \${
                      index === activeIndex
                        ? \`bg-gradient-to-br \${feature.gradient} text-white shadow-lg\`
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                    }\`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={\`font-semibold text-lg mb-2 transition-colors duration-300 \${
                        index === activeIndex
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }\`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={\`text-sm transition-colors duration-300 \${
                        index === activeIndex
                          ? "text-gray-600 dark:text-gray-400"
                          : "text-gray-500 dark:text-gray-500"
                      }\`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Selection indicator */}
                  <div
                    className={\`w-3 h-3 rounded-full transition-all duration-300 \${
                      index === activeIndex
                        ? \`bg-gradient-to-br \${feature.gradient} shadow-lg scale-100\`
                        : "bg-gray-300 dark:bg-gray-600 scale-75"
                    }\`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Feature Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow effect */}
              <div
                className={\`absolute inset-0 bg-gradient-to-br \${activeFeature.gradient} opacity-20 blur-3xl rounded-3xl\`}
              />

              {/* Main card */}
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeFeature.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <span
                          className={\`text-2xl font-bold bg-gradient-to-r \${activeFeature.gradient} bg-clip-text text-transparent\`}
                        >
                          {metric.value}
                        </span>
                        {metric.trend === "up" && (
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {metric.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  {/* Quote icon */}
                  <div
                    className={\`absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br \${activeFeature.gradient} rounded-full flex items-center justify-center text-white text-lg font-bold\`}
                  >
                    "
                  </div>

                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 pl-6">
                    {activeFeature.testimonial.quote}
                  </blockquote>

                  <div className="flex items-center gap-4 pl-6">
                    {/* Avatar */}
                    <div
                      className={\`w-12 h-12 rounded-full bg-gradient-to-br \${activeFeature.gradient} flex items-center justify-center text-white font-bold text-sm\`}
                    >
                      {activeFeature.testimonial.avatar}
                    </div>

                    {/* Author info */}
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {activeFeature.testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {activeFeature.testimonial.role} at {activeFeature.testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setProgress(0);
              }}
              className={\`w-3 h-3 rounded-full transition-all duration-300 \${
                index === activeIndex
                  ? \`bg-gradient-to-r \${features[activeIndex].gradient} scale-125\`
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }\`}
            />
          ))}
        </div>
      </div>

      <style jsx>{\`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      \`}</style>
    </section>
  );
}
`,
    },
  },
};
