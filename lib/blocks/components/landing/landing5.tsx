"use client";

import { useState, useEffect, useRef, SVGProps } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import { clsx } from "clsx";
import Link from "next/link";

//=========== DATA (Easily Customizable) ===========//
const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
];
const testimonials = [
  {
    quote:
      "Monolith isn't just a tool; it's the foundation of our entire stack. The reliability is unparalleled.",
    name: "Alex Grant",
    role: "Lead Architect, Cybersystems",
  },
  {
    quote:
      "The performance gains were immediate and significant. The developer experience is the best I've ever encountered.",
    name: "Samantha Chi",
    role: "CTO, Fusion Dynamics",
  },
  {
    quote:
      "Rock-solid stability and an API that feels like it was designed by mind-readers. We're never looking back.",
    name: "Ben Carter",
    role: "Founder, Innovate AI",
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
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const trustLogos = [
  /* Simple URLs for easy customization */
  {
    src: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    alt: "Microsoft",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/google-3.svg", alt: "Google" },
  { src: "https://cdn.worldvectorlogo.com/logos/notion-1.svg", alt: "Notion" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg",
    alt: "Spotify",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/airbnb.svg", alt: "Airbnb" },
];
//=========== UI COMPONENTS ===========//
const Navbar = () => {
  // ... Navbar logic from previous version (can be used as-is)
  return <></>; /* We will use a simple, effective Navbar for this template */
};

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
      className="group relative px-8 py-4 text-lg font-bold text-mono-dark bg-mono-accent rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
    >
      {children}
    </motion.button>
  );
};

const InteractiveCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 500], [-10, 10]);
  const glareX = useTransform(mouseX, [0, 500], [-60, 160]);
  const glareY = useTransform(mouseY, [0, 300], [-60, 160]);
  const glareOpacity = useTransform(mouseX, [0, 500], [0.5, 0]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-72 w-full rounded-2xl bg-mono-medium border border-mono-light p-8 shadow-xl"
    >
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            glareX,
            (x) =>
              `radial-gradient(at ${x}% ${glareY.get()}%, rgba(0, 255, 153, 0.15), transparent 60%)`
          ),
          opacity: glareOpacity,
        }}
      />
    </motion.div>
  );
};

// **NEW** Hero Terminal Component
const HeroTerminal = () => {
  const textLines = [
    { text: "npm install @monolith/cli -g", time: 100 },
    { text: "monolith login", time: 80 },
    { text: "monolith init my-awesome-project", time: 120 },
    { text: "cd my-awesome-project", time: 50 },
    { text: "monolith deploy --prod", time: 150 },
    { text: "✅ Deployment complete. Your project is live!", time: 200 },
  ];
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= textLines.length) return;

    const timeout = setTimeout(() => {
      setCurrentLine((prev) => prev + textLines[lineIndex].text[prev.length]);
      if (currentLine.length === textLines[lineIndex].text.length - 1) {
        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCurrentLine("");
        }, 1000);
      }
    }, textLines[lineIndex].time);

    return () => clearTimeout(timeout);
  }, [currentLine, lineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
      className="w-full max-w-2xl h-64 bg-black/50 border border-mono-light rounded-lg shadow-2xl backdrop-blur-sm p-4 font-mono text-sm text-left"
    >
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-mono-text-dark">
        {textLines.map(
          (line, index) => index < lineIndex && <p key={index}>$ {line.text}</p>
        )}
        <p>
          $ {currentLine}
          <span className="animate-ping">_</span>
        </p>
      </div>
    </motion.div>
  );
};

//=========== MAIN PAGE COMPONENT ===========//
export default function Home() {
  return (
    <div className="w-full text-mono-text-light bg-mono-dark bg-grain overflow-x-hidden font-sans">
      {/* ========== NAVBAR ========== */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2 rounded-2xl bg-black/30 border border-mono-light backdrop-blur-lg">
          <Link href="/" className="flex items-center gap-2">
            <motion.svg
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-mono-accent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </motion.svg>
            <span className="text-xl font-bold text-mono-text-light">
              Monolith
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-mono-text-dark hover:text-mono-text-light transition-colors rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <a
            href="#"
            className="px-5 py-2 text-sm font-semibold text-mono-dark bg-mono-accent hover:opacity-90 transition-opacity rounded-lg"
          >
            {" "}
            Get Access{" "}
          </a>
        </div>
      </header>

      <main>
        {/* ========== HERO SECTION (ENRICHED) ========== */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.08),transparent_40%)]"></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-mono-text-light to-mono-text-dark bg-clip-text text-transparent">
              Engineered for Impact
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg text-mono-text-dark">
              Monolith is the ultimate high-performance toolkit for developers
              building mission-critical applications that demand stability and
              scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="z-10 mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton>Request a Demo</MagneticButton>
            <a
              href="#"
              className="px-8 py-4 font-semibold text-mono-text-dark border border-mono-light rounded-full transition-colors hover:bg-mono-medium hover:text-mono-text-light"
            >
              Read Documentation
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            className="z-10 mt-16"
          >
            <p className="text-sm text-mono-text-dark">
              POWERING THE WORLD'S MOST INNOVATIVE TEAMS
            </p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {trustLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 opacity-60 grayscale"
                />
              ))}
            </div>
          </motion.div>

          <div className="z-10 mt-16 w-full flex justify-center">
            <HeroTerminal />
          </div>
        </section>

        {/* ========== FEATURES SECTION ========== */}
        <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Built to Last.
              </h2>
              <p className="mt-4 text-lg text-mono-text-dark">
                Every component in Monolith is stress-tested for extreme
                reliability, ensuring your application remains stable under any
                condition.
              </p>
            </div>
            <InteractiveCard>
              <h3 className="text-2xl font-bold">Unbreakable Core</h3>
              <p className="mt-2 text-mono-text-dark">
                Our distributed architecture means zero single points of
                failure.
              </p>
            </InteractiveCard>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
            <InteractiveCard>
              <h3 className="text-2xl font-bold">Instant Scaling</h3>
              <p className="mt-2 text-mono-text-dark">
                Go from one user to one million without missing a beat.
              </p>
            </InteractiveCard>
            <div className="text-left md:text-right">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Designed for Velocity.
              </h2>
              <p className="mt-4 text-lg text-mono-text-dark">
                A world-class developer experience designed to help you and your
                team ship faster than ever before.
              </p>
            </div>
          </div>
        </section>

        {/* ========== PRICING SECTION ========== */}
        <section id="pricing" className="py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Predictable Pricing. No Surprises.
            </h2>
            <p className="mt-4 text-lg text-mono-text-dark max-w-xl mx-auto">
              Focus on building, not on complex billing. Our plans are designed
              to scale with your success.
            </p>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <PricingCard
                plan="Hobby"
                price={0}
                features={["1 Project", "1M API Calls/mo", "Community Support"]}
              />
              <PricingCard
                plan="Pro"
                price={150}
                features={[
                  "25 Projects",
                  "100M API Calls/mo",
                  "Email Support",
                  "Team Seats",
                ]}
                isFeatured={true}
              />
              <PricingCard
                plan="Enterprise"
                price={0}
                features={[
                  "Unlimited Scale",
                  "Dedicated Infrastructure",
                  "24/7 Support",
                  "SLA & SSO",
                ]}
                isCustom={true}
              />
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section id="testimonials" className="py-24 px-4 overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            Trusted by Industry Leaders
          </h2>
          <div className="relative mt-16 flex gap-8">
            <div
              className="flex gap-8 animate-infinite-scroll"
              aria-hidden="true"
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-[350px] flex-shrink-0 bg-mono-medium border border-mono-light rounded-2xl p-6"
                >
                  <p className="text-mono-text-light italic">"{t.quote}"</p>
                  <div className="mt-4">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-mono-accent">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA & FOOTER ========== */}
        <footer className="mt-24 py-16 px-4 border-t border-mono-light">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Build Something Solid?
            </h2>
            <p className="mt-4 text-lg text-mono-text-dark">
              Explore the Monolith platform for free. No credit card required.
            </p>
            <div className="mt-8">
              <MagneticButton>Start Building</MagneticButton>
            </div>
          </div>
          <div className="mt-16 pt-8 text-center text-mono-text-dark text-sm">
            <p>
              &copy; {new Date().getFullYear()} Monolith. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

//=========== PRICING CARD COMPONENT (Helper) ===========//
const PricingCard = ({
  plan,
  price,
  features,
  isFeatured = false,
  isCustom = false,
}: {
  plan: string;
  price: number;
  features: string[];
  isFeatured?: boolean;
  isCustom?: boolean;
}) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: isFeatured ? 0.2 : 0 }}
    className={clsx(
      "relative p-8 rounded-2xl border flex flex-col h-full",
      isFeatured
        ? "bg-mono-medium border-mono-accent shadow-2xl shadow-mono-accent/10"
        : "bg-mono-medium/50 border-mono-light"
    )}
  >
    {isFeatured && (
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-mono-accent text-mono-dark text-xs font-bold px-4 py-1 rounded-full">
        RECOMMENDED
      </div>
    )}
    <h3 className="text-xl font-semibold">{plan}</h3>
    <p className="mt-4 text-4xl font-bold">
      {isCustom ? "Custom" : `$${price}`}
      <span className={clsx("text-lg font-normal", isCustom ? "hidden" : "")}>
        /mo
      </span>
    </p>

    <ul className="mt-8 space-y-3 flex-grow text-left">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckIcon className="w-5 h-5 mt-1 text-mono-accent flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <a
      href="#"
      className={clsx(
        "w-full mt-10 py-3 text-center rounded-lg font-semibold transition-all duration-300",
        isFeatured
          ? "bg-mono-accent text-mono-dark hover:opacity-90"
          : "bg-mono-light text-mono-text-light hover:bg-opacity-80"
      )}
    >
      {isCustom ? "Contact Sales" : "Get Started"}
    </a>
  </motion.div>
);
