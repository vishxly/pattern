"use client";

import { useState, useEffect, useRef, SVGProps } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { clsx } from "clsx";

//=========== DATA (EASILY CUSTOMIZABLE) ===========//
const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
];

const clientLogos = [
  {
    src: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    alt: "Microsoft",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg",
    alt: "Spotify",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/airbnb.svg", alt: "Airbnb" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
    alt: "Netflix",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/google-3.svg", alt: "Google" },
  { src: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg", alt: "Amazon" },
  { src: "https://cdn.worldvectorlogo.com/logos/notion-1.svg", alt: "Notion" },
];

const testimonials = [
  {
    quote:
      "Arc revolutionized our development workflow. The platform's intuitive design and powerful features helped us ship 3x faster.",
    name: "Eleanor Vantage",
    role: "CTO, QuantumLeap",
    rating: 5,
    avatar: "EV",
  },
  {
    quote:
      "The architectural elegance and performance optimization are unmatched. Migrating to Arc was transformational for our entire organization.",
    name: "Marcus Thorne",
    role: "CEO, Innovate Inc.",
    rating: 5,
    avatar: "MT",
  },
  {
    quote:
      "Finally, a platform that combines power with simplicity. Arc's developer experience is second to none.",
    name: "Sofia Rossi",
    role: "Lead Developer, TechFlow",
    rating: 5,
    avatar: "SR",
  },
];

const features = [
  {
    title: "Enterprise Security",
    description:
      "Military-grade encryption and compliance standards that protect your most sensitive data and infrastructure.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Auto-Scaling Infrastructure",
    description:
      "Seamlessly handle traffic spikes from 1 to 1M users with our intelligent load balancing and resource optimization.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    title: "Developer-First API",
    description:
      "Intuitive REST and GraphQL APIs with comprehensive documentation, SDKs, and real-time webhooks.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Global Edge Network",
    description:
      "Lightning-fast content delivery with 200+ edge locations worldwide, ensuring optimal performance everywhere.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928L6.116 13.46a3.743 3.743 0 00-1.043-.06 10.814 10.814 0 00-7.073 2.849c0-2.22.398-4.347 1.128-6.31.729-1.964 1.807-3.744 3.158-5.222A10.814 10.814 0 0112.75 3.03z"
        />
      </svg>
    ),
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    title: "Advanced Analytics",
    description:
      "Real-time insights into performance, user behavior, and system health with customizable dashboards.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l-1-3m1 3l-1-3m-16.5-15.75h1.5m-1.5 0l1 3m16.5-18.75h-1.5m1.5 0l-1 3"
        />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Team Collaboration",
    description:
      "Built-in tools for code review, project management, and seamless team workflows with role-based permissions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-500",
  },
];

//=========== ICON COMPONENTS ===========//
const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = ({
  isFilled = true,
  className = "w-4 h-4",
}: {
  isFilled?: boolean;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={clsx(className, isFilled ? "text-yellow-400" : "text-gray-300")}
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.828 3.782c.16.33.477.553.84.597l4.172.606c.732.106 1.025.998.494 1.514l-3.018 2.942a.998.998 0 00-.286.883l.712 4.156c.125.728-.638 1.284-1.288.948l-3.73-1.96a.998.998 0 00-.93 0l-3.73 1.96c-.65.336-1.413-.22-1.288-.948l.712-4.156a.998.998 0 00-.286-.883L1.132 9.489c-.53-.516-.238-1.408.494-1.514l4.172-.606a.998.998 0 00.84-.597l1.828-3.782z"
      clipRule="evenodd"
    />
  </svg>
);

//=========== UI COMPONENTS ===========//
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    let lastY = 0;
    return scrollY.onChange((latest) => {
      if (latest > lastY && latest > 100) setHidden(true);
      else setHidden(false);
      lastY = latest;
    });
  }, [scrollY]);

  const variants = { visible: { y: 0 }, hidden: { y: "-120%" } };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 left-4 right-4 max-w-7xl mx-auto z-50 flex items-center justify-between px-4 py-3 rounded-3xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5c1.035 0 1.875-.84 1.875-1.875v-9.75c0-1.035-.84-1.875-1.875-1.875H3.75c-1.035 0-1.875.84-1.875 1.875v9.75c0 1.035.84 1.875 1.875 1.875z"
            />
          </svg>
        </div>
        <span className="font-bold text-xl text-gray-900">Arc</span>
      </div>

      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all rounded-xl"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#pricing"
          className="hidden sm:flex px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 transition-all rounded-xl shadow-lg shadow-teal-500/25"
        >
          Get Started
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl lg:hidden"
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="block px-4 py-3 text-sm font-semibold text-center text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-xl shadow-lg"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default function Landing3() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="w-full text-gray-900 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-x-hidden">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <motion.header
        ref={heroRef}
        style={{ opacity: heroTextOpacity, y: heroTextY }}
        className="min-h-screen pt-24 pb-16 px-4 relative flex flex-col items-center justify-center"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-teal-100/20 via-transparent to-green-100/20 rotate-12 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-100/20 via-transparent to-teal-100/20 -rotate-12 blur-3xl" />
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-teal-700 bg-teal-50 border border-teal-200 rounded-full"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Now in Public Beta
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Build the Future with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-green-500 to-teal-700">
              Digital Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Arc provides the architectural foundation for modern applications.
            Build, scale, and innovate with enterprise-grade infrastructure and
            developer-first tools.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#pricing"
              className="group px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 transition-all rounded-2xl shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Start Building Today
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#features"
              className="px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 transition-all rounded-2xl shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Features
            </a>
          </motion.div>
        </motion.div>
      </motion.header>

      <main className="relative">
        {/* ========== SOCIAL PROOF ========== */}
        <section className="py-16 border-y border-gray-200/50 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-sm font-medium text-gray-500 mb-8"
            >
              Trusted by innovative companies worldwide
            </motion.p>
            <div className="relative overflow-hidden">
              <div className="flex gap-12 animate-scroll">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURES GRID ========== */}
        <section id="features" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Everything you need to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
                  {" "}
                  succeed
                </span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Comprehensive tools and infrastructure designed for modern
                development teams
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div
                    className={clsx(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                      feature.gradient
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={clsx(
                      "inline-flex p-3 rounded-2xl bg-gradient-to-br mb-6 text-white transition-transform group-hover:scale-110",
                      feature.gradient
                    )}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div
                      className={clsx(
                        "w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-white",
                        feature.gradient
                      )}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WORKFLOW SECTION ========== */}
        <section
          id="workflow"
          className="py-24 bg-gradient-to-br from-gray-50 to-teal-50/50"
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                From concept to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
                  {" "}
                  production
                </span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Our streamlined workflow gets you from idea to deployed
                application in minutes, not hours
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-teal-200 via-green-200 to-teal-200 -translate-x-0.5 hidden lg:block"></div>

              <div className="space-y-16 lg:space-y-24">
                {[
                  {
                    title: "Design & Architect",
                    description:
                      "Start with our intuitive project builder. Choose from enterprise templates or create custom architectures that fit your exact needs.",
                    step: "01",
                  },
                  {
                    title: "Develop & Iterate",
                    description:
                      "Write code with our powerful IDE integration, automated testing, and instant preview environments. Ship faster with AI-powered suggestions.",
                    step: "02",
                  },
                  {
                    title: "Deploy & Scale",
                    description:
                      "One-click deployments to our global infrastructure. Auto-scaling ensures your app performs under any load, anywhere in the world.",
                    step: "03",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className={clsx(
                      "flex items-center gap-8 lg:gap-16",
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}
                  >
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 text-white font-bold text-lg shadow-lg">
                          {item.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex-1 relative">
                      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
                        <div className="w-full h-48 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl flex items-center justify-center">
                          <div
                            className={clsx(
                              "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg",
                              i === 0
                                ? "from-red-500 to-orange-500"
                                : i === 1
                                ? "from-green-500 to-emerald-500"
                                : "from-indigo-500 to-blue-500"
                            )}
                          >
                            {i === 0 && (
                              <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                                />
                              </svg>
                            )}
                            {i === 1 && (
                              <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            )}
                            {i === 2 && (
                              <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== PRICING SECTION ========== */}
        <section id="pricing" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Simple, transparent
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
                  {" "}
                  pricing
                </span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Choose the perfect plan for your team. Start free, scale as you
                grow.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
              <PricingCard
                plan="Starter"
                price={0}
                period="Forever free"
                features={[
                  "3 Projects",
                  "5GB Storage",
                  "Community Support",
                  "Basic Analytics",
                  "SSL Certificates",
                ]}
                buttonText="Get Started"
                popular={false}
              />
              <PricingCard
                plan="Pro"
                price={49}
                period="per month"
                features={[
                  "Unlimited Projects",
                  "100GB Storage",
                  "Priority Support",
                  "Advanced Analytics",
                  "Team Collaboration",
                  "Custom Domains",
                ]}
                buttonText="Start Free Trial"
                popular={true}
              />
              <PricingCard
                plan="Enterprise"
                price={0}
                period="Custom pricing"
                features={[
                  "Unlimited Everything",
                  "Dedicated Support",
                  "SLA Guarantee",
                  "Advanced Security",
                  "Custom Integrations",
                  "White-label Options",
                ]}
                buttonText="Contact Sales"
                popular={false}
                isEnterprise={true}
              />
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section
          id="testimonials"
          className="py-24 bg-gradient-to-br from-gray-50 to-teal-50/50"
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Loved by developers
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
                  {" "}
                  worldwide
                </span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                See what industry leaders are saying about Arc
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon
                        key={j}
                        isFilled={j < testimonial.rating}
                        className="w-4 h-4"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-teal-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="py-24 px-4 bg-gradient-to-br from-teal-500 via-green-500 to-teal-700 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Ready to build something amazing?
            </h2>
            <p className="mt-6 text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who chose Arc to power their next
              breakthrough. Start building today with our free tier.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="group px-8 py-4 text-lg font-semibold text-teal-600 bg-white hover:bg-gray-50 transition-all rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Free Trial
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#features"
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all rounded-2xl backdrop-blur-sm"
              >
                View Documentation
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "50k+", label: "Developers" },
                { number: "1M+", label: "Projects Built" },
                { number: "99.9%", label: "Uptime SLA" },
                { number: "200+", label: "Global Locations" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-white"
                >
                  <div className="text-2xl md:text-3xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-teal-200 text-sm font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-16 bg-slate-50 text-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5c1.035 0 1.875-.84 1.875-1.875v-9.75c0-1.035-.84-1.875-1.875-1.875H3.75c-1.035 0-1.875.84-1.875 1.875v9.75c0 1.035.84 1.875 1.875 1.875z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl text-gray-900">Arc</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                The architectural foundation for modern applications. Built by
                developers, for developers.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Product",
                links: [
                  "Features",
                  "Pricing",
                  "Documentation",
                  "API Reference",
                ],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Status",
                  "Community",
                  "Contact Support",
                ],
              },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-900 mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Arc Technologies. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

const PricingCard = ({
  plan,
  price,
  period,
  features,
  buttonText,
  popular = false,
  isEnterprise = false,
}: {
  plan: string;
  price: number;
  period: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  isEnterprise?: boolean;
}) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: popular ? 0 : 0.2 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={clsx(
      "relative p-8 rounded-3xl h-full flex flex-col transition-all duration-500",
      popular
        ? "bg-gradient-to-br from-teal-500 to-green-500 text-white shadow-2xl scale-105 border-2 border-teal-500"
        : "bg-white text-gray-900 border-2 border-gray-100 shadow-lg hover:shadow-2xl"
    )}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
        Most Popular
      </div>
    )}

    <div className="mb-8">
      <h3
        className={clsx(
          "text-xl font-bold mb-2",
          popular ? "text-white" : "text-gray-900"
        )}
      >
        {plan}
      </h3>
      <div className="flex items-baseline gap-2">
        {isEnterprise ? (
          <span className="text-3xl font-bold">Custom</span>
        ) : (
          <>
            <span className="text-4xl font-bold">${price}</span>
            <span
              className={clsx(
                "text-sm",
                popular ? "text-teal-100" : "text-gray-500"
              )}
            >
              {period}
            </span>
          </>
        )}
      </div>
    </div>

    <ul className="space-y-4 flex-grow mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <CheckIcon
            className={clsx(
              "w-5 h-5 flex-shrink-0",
              popular ? "text-teal-200" : "text-green-500"
            )}
          />
          <span
            className={clsx(
              "text-sm",
              popular ? "text-teal-50" : "text-gray-600"
            )}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <button
      className={clsx(
        "w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105",
        popular
          ? "bg-white text-teal-600 hover:bg-gray-50 shadow-lg"
          : "bg-gradient-to-r from-teal-500 to-green-500 text-white hover:from-teal-600 hover:to-green-600 shadow-lg shadow-teal-500/25"
      )}
    >
      {buttonText}
    </button>
  </motion.div>
);
