'use client'
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Define the types for logos and component props
interface Logo {
  id: string;
  name: string;
  svg: React.ReactNode;
}

interface IntegrationConstellationProps {
  logos?: Logo[];
  title?: string;
  description?: string;
  mainLogo?: {
    name: string;
    svg: React.ReactNode;
  };
}

// --- Default Data ---
// You can replace these with your actual integration logos
const defaultLogos: Logo[] = [
  { id: "slack", name: "Slack", svg: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52h5.042a2.527 2.527 0 0 1 2.521 2.52v5.042a2.527 2.527 0 0 1-2.521 2.52H8.834a2.528 2.528 0 0 1-2.521-2.52v-5.042zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.527 2.527 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.52v5.042a2.527 2.527 0 0 1-2.521 2.52H3.792a2.528 2.528 0 0 1-2.52-2.52V8.834a2.528 2.528 0 0 1 2.52-2.521h5.042zM18.958 8.834a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.522 2.52h-2.52V8.834zM17.687 8.834a2.527 2.527 0 0 1-2.521 2.52h-5.042a2.527 2.527 0 0 1-2.521-2.52V3.792a2.527 2.527 0 0 1 2.521-2.52h2.521a2.528 2.528 0 0 1 2.521 2.52v5.042zM15.165 18.958a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.521-2.522v-2.52h2.521zM15.165 17.687a2.527 2.527 0 0 1-2.521-2.52v-5.042a2.527 2.527 0 0 1 2.521-2.52h5.042a2.528 2.528 0 0 1 2.52 2.52v2.521a2.528 2.528 0 0 1-2.52 2.521h-5.042z"/></svg> },
  { id: "github", name: "GitHub", svg: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  { id: "jira", name: "Jira", svg: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.23 0a12.23 12.23 0 0 0-9.2 21.05l7.95-7.95a3.04 3.04 0 0 1 4.31-4.31l7.95-7.95A12.23 12.23 0 0 0 12.23 0zM3.04 3.04a12.23 12.23 0 0 0 0 17.28l7.95-7.95a3.04 3.04 0 0 1 0-4.31L3.04 3.04z"/></svg> },
  { id: "google-drive", name: "Google Drive", svg: <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M15.54 8.27L9.89 18.39l-4.24-7.35z"/><path fill="#34A853" d="M2.14 14.73l5.66-9.8h8.4L2.14 14.73z"/><path fill="#FBBC05" d="M9.89 4.93l-5.66 9.8h11.31l-5.65-9.8z"/><path fill="#EA4335" d="M15.54 8.27L9.89 4.93l-1.9 3.34h9.45z"/></svg> },
  { id: "trello", name: "Trello", svg: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM11 17H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zm6 0h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1z"/></svg> },
  { id: "zoom", name: "Zoom", svg: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H7v-4h4v4zm5 0h-4v-4h4v4zm0-5h-4V7h4v4zm-5 0H7V7h4v4z"/></svg> },
  { id: "salesforce", name: "Salesforce", svg: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71c-.34.34-.78.53-1.25.53s-.91-.19-1.25-.53c-.68-.68-.68-1.8 0-2.48l2.48-2.48c.68-.68 1.8-.68 2.48 0 .68.68.68 1.8 0 2.48l-2.46 2.48zm-4.55-4.55c-.68-.68-.68-1.8 0-2.48l2.48-2.48c.68-.68 1.8-.68 2.48 0 .68.68.68 1.8 0 2.48l-2.48 2.48c-.68.68-1.8.68-2.48 0z"/></svg> },
  { id: "dropbox", name: "Dropbox", svg: <svg viewBox="0 0 24 24"><path fill="currentColor" d="m6.25 4.43-5.74 3.73 5.74 3.73 5.75-3.73L6.25 4.43zm11.5 0-5.75 3.73 5.75 3.73 5.74-3.73-5.74-3.73zm-5.75 4.25-5.74 3.73L12 16.14l5.75-3.73-5.75-3.73zm0 4.24-5.74 3.73L12 20.39l5.75-3.73-5.75-3.73z"/></svg> },
];

const defaultMainLogo = {
  name: "Your Product",
  svg: (
    <svg viewBox="0 0 40 40" className="w-16 h-16 text-white">
      <defs>
        <linearGradient id="main-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <path
        d="M20,2C9.0,2,2,9.0,2,20s7.0,18,18,18s18-7.0,18-18S31.0,2,20,2z M20,34c-7.7,0-14-6.3-14-14S12.3,6,20,6 s14,6.3,14,14S27.7,34,20,34z"
        fill="url(#main-grad)"
      />
      <path
        d="M22,13h-4c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1V14C23,13.4,22.6,13,22,13z M29,13h-4c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1V14C30,13.4,29.6,13,29,13z M15,13h-4c-0.6,0-1,0.4-1,1v12 c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1V14C16,13.4,15.6,13,15,13z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  ),
};

// --- Main Component ---
export default function IntegrationConstellation({
  logos = defaultLogos,
  title = "A Universe of Integrations",
  description = "Connect your workflow with the tools you love. Our ecosystem is designed to be seamless, powerful, and endlessly extensible.",
  mainLogo = defaultMainLogo,
}: IntegrationConstellationProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const numLogos = logos.length;
  const radius = 220; // Adjust this for the orbit size

  return (
    <section ref={containerRef} className="relative bg-neutral-950 text-white py-24 md:py-32 overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-[linear-gradient(120deg,_#0f172a_0%,_#1e1b4b_50%,_#4c1d95_100%)] bg-[size:400%_400%]"
        ></motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.3)_0%,_transparent_50%)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
            {title}
          </h2>
          <p className="text-lg text-purple-200/80 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Constellation */}
        <div className="relative h-[450px] md:h-[500px] flex items-center justify-center">
          <motion.div
            className="absolute"
            style={{ perspective: 1000 }}
          >
            {/* Main Logo - The Sun of our Solar System */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.2, type: "spring" },
                },
              }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-black/30 rounded-full flex items-center justify-center border border-purple-500/50 backdrop-blur-sm">
                {mainLogo.svg}
              </div>
            </motion.div>

            {/* Orbiting Logos */}
            {logos.map((logo, index) => {
              const angle = (index / numLogos) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={logo.id}
                  className="absolute top-1/2 left-1/2"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: 0, y: 0, scale: 0.5 },
                    visible: {
                      opacity: 1,
                      x: [0, x],
                      y: [0, y],
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.5 + index * 0.1,
                        ease: "circOut",
                      },
                    },
                  }}
                  onHoverStart={() => setHovered(logo.id)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <motion.div
                    animate={{
                      scale: hovered === logo.id ? 1.5 : (hovered ? 0.8 : 1),
                      zIndex: hovered === logo.id ? 10 : 1,
                      opacity: hovered === logo.id ? 1 : (hovered ? 0.6 : 1),
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 md:w-20 md:h-20 -m-8 md:-m-10 cursor-pointer"
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <div className="absolute inset-0 bg-black/40 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 group-hover:bg-black/60"></div>
                      <div className="relative text-white/80 w-8 h-8 md:w-10 md:h-10 transition-colors duration-300">
                        {logo.svg}
                      </div>
                      {hovered === logo.id && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-6 text-xs text-purple-300 whitespace-nowrap"
                        >
                          {logo.name}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
