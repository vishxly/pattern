import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import IntegrationMatrix from "@/lib/blocks/components/showcase/showcase5";

export const showcase5Registry: LandingComponentGroup = {
  title: "Integration Matrix",
  description: "A visually stunning landing page showcasing integrations via an interactive network diagram with parallax effects.",
  category: "Showcase",
  variants: {
    default: {
      title: "Integration Matrix",
      description: "A visually stunning landing page showcasing integrations via an interactive network diagram with parallax effects.",
      component: IntegrationMatrix,
      image: "/images/blocks/showcase/showcase5.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Showcase+Component",
      code: `"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- Types and Interfaces (unchanged) ---
interface Logo {
  id: string;
  name: string;
  svg: React.ReactNode;
}

interface IntegrationMatrixProps {
  logos?: Logo[];
  title?: string;
  description?: string;
  mainLogo?: {
    name: string;
    svg: React.ReactNode;
  };
}

// --- Default Data (unchanged) ---
const defaultLogos: Logo[] = [
  {
    id: "aws",
    name: "AWS",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.42 12.3c-.3 0-.58.07-.84.2a3.3 3.3 0 0 0-1.83.84 3.4 3.4 0 0 0-1.2 2.38c0 .32.03.65.1.96l.16.58h1.5l-.1-.4a2 2 0 0 1 .68-1.92c.42-.4 1-.61 1.6-.61.64 0 1.2.22 1.62.63.4.4.63.92.63 1.5v.35l-.01.2-4.54.9c-1.3.26-2.22.9-2.22 2s.92 1.73 2.22 2c1.3.28 2.5.28 3.8 0 1.3-.27 2.22-.9 2.22-2v-1.12l-1.5-.32v.8a2 2 0 0 1-.68 1.52c-.42.4-1 .62-1.6.62s-1.2-.2-1.62-.6a2.08 2.08 0 0 1-.63-1.52v-.4l6.15-1.25c.32 0 .58-.08.79-.22.2-.14.3-.34.3-.59v-1.7c0-.96-.4-1.78-1.2-2.38a3.3 3.3 0 0 0-1.83-.85c-.26-.13-.54-.2-.84-.2zm-.12 7.72c-.52 0-.9-.16-1.14-.46a1.14 1.14 0 0 1-.4-1.24l4.52-1-3 2.7zM22 13.5l-2.43-1.82 1.36-1.36-1.09-1.09-1.36 1.36L16.5 8h-1.55l2.43 2.43-1.64 1.64-2.43-2.43H11.8v1.55l1.82 1.82-1.36 1.36 1.09 1.09 1.36-1.36L18.5 15h1.55l-2.43-2.43 1.64-1.64L22 13.5zM6.6 2l-2.1 3.9h4.2L6.6 2zm4.18 0L8.6 5.9h4.35L10.78 2zM0 7.4V22h24V7.4H0z"
        />
      </svg>
    ),
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.33 2.02L6.5 10.38l-2.88-1.5L.93 11.23l4.63 2.37L4.5 22h3.25l1.45-5.22l5.85-2.25l5.2 5.47h3.75l-7-7.23l5-5.23l-2.25-2.5zm-3.5 10.15l-3.23.4l.65-4.43z"
        />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.13 8.35c-1-1.8-3-2.4-3.5-2.53a4.7 4.7 0 0 0-3.3-1.1c-1.4 0-2.8.5-3.6 1.5a4.5 4.5 0 0 0-3.8-1.5c-1 0-2 .3-2.8 1-1.3 1-2.2 2.5-2.2 4.1 0 .2 0 .3.1.5v.1c.1.2.1.4.2.6a4.4 4.4 0 0 0-1 2.8 4.7 4.7 0 0 0 1.2 3.1 4.7 4.7 0 0 0 3.2 1.4h.3l.3.2c.2.2.5.4.8.5h.3a1.5 1.5 0 0 0 .5.1h6.6a1.6 1.6 0 0 0 .7-.1 10.6 10.6 0 0 0 2.2-1.5c1-1 1.7-2.4 1.8-3.9a5.5 5.5 0 0 0-1.8-4.5zM8 12.15H4.8v2.4H8v-2.4zm4.8 0H9.6v2.4h3.2v-2.4zm4.8 0h-3.2v2.4h3.2v-2.4zm0-4.8H16v2.4h1.6v-2.4zm-4.8 0h-3.2v2.4H11.2v-2.4z"
        />
      </svg>
    ),
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.2 12.1L6.6 8.9l-.3 3.2zM12 2l-7.5 4v12L12 22l7.5-4V6zm5 14.5l-5-2.9v-5.2l2-1.2 3 1.8z"
        />
      </svg>
    ),
  },
  {
    id: "datadog",
    name: "Datadog",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M0 12.3c.1-.1.1-.1.1-.2S.3 12 .3 12c.1 0 .1-.1.2-.1h1.5l1.2-1.2a1.7 1.7 0 0 1 2.4 0l1.2 1.2h3l1.2-1.2a1.7 1.7 0 0 1 2.4 0l1.2 1.2H18l1.2-1.2a1.7 1.7 0 0 1 2.4 0l1.2 1.2h1.1c.1 0 .2.1.3.1s.1.1.2.2c0 .1.1.2.1.3s-.1.2-.1.3l-2.6 6c0 .1-.1.1-.1.2c0 .1 0 .1 0 0l-3-6.6-1.2 1.2a1.7 1.7 0 0 1-2.4 0L14 12l-1.2 1.2a1.7 1.7 0 0 1-2.4 0L9.2 12 8 13.2a1.7 1.7 0 0 1-2.4 0L4.4 12l-3 6.6a.4.4 0 0 1 0 .3c0 .1-.1.1-.2.2s-.1.1-.2.1c-.2 0-.3-.1-.3-.3l-1.3-3L0 12.3zM10.7 0a4.1 4.1 0 0 0-2.3.7 2 2 0 0 0-1 1.7 2 2 0 0 0 1 1.8A4.1 4.1 0 0 0 10.7 5a4.1 4.1 0 0 0 2.3-.7 2 2 0 0 0 1-1.8 2 2 0 0 0-1-1.7 4.1 4.1 0 0 0-2.3-.7z"
        />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.63 24s-3.5-2.2-3.5-5.3S11 13.2 12.63 13s3.5 2.2 3.5 5.4-1.8 5.6-2.4 5.6zm.5-9.35a.5.5 0 0 0-.5.5v5.8a.5.5 0 0 0 1 0v-5.8a.5.5 0 0 0-.5-.5zM12 0C7.2 0 4.5 4.8 4.5 9.75S7.2 19.5 12 19.5s7.5-4.8 7.5-9.75S16.8 0 12 0zm-1 15a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm2 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1z"
        />
      </svg>
    ),
  },
];

const defaultMainLogo = {
  name: "Your Platform",
  svg: (
    <svg viewBox="0 0 48 48" className="w-20 h-20 text-white">
      <defs>
        <linearGradient id="hub-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#hub-gradient)"
        d="M24,4C12.95,4,4,12.95,4,24s8.95,20,20,20s20-8.95,20-20S35.05,4,24,4z M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12 s12,5.37,12,12S30.63,36,24,36z"
      />
      <circle cx="24" cy="24" r="6" fill="#1e1b4b" opacity="0.5" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),
};

const NODE_SIZE = 60;
const HUB_SIZE = 120;
const CANVAS_SIZE = 600;

// --- Helper Functions and Components ---

/**
 * FIXED ParticleGrid Component:
 * Now uses useMemo to calculate stable, randomized positions on the first client render.
 */
/**
 * Alternative: Deterministic ParticleGrid Component
 * Uses mathematical functions instead of Math.random() to ensure consistent SSR/client rendering
 */
const ParticleGrid: React.FC<{
  canvasSize: number;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
}> = ({ canvasSize, mouseX, mouseY }) => {
  const numDots = 150;
  const dotSize = 0.8;
  const areaPadding = 20;

  // Generate deterministic positions using mathematical functions
  const dotPositions = useMemo(() => {
    return Array.from({ length: numDots }, (_, i) => {
      // Use sine and cosine with different frequencies for pseudo-random but deterministic placement
      const seed1 = i * 0.618 + 0.1; // Golden ratio for better distribution
      const seed2 = i * 0.314 + 0.7; // Pi-based offset

      const posX =
        (Math.sin(seed1 * 17) * 0.5 + 0.5) * (canvasSize - areaPadding * 2) +
        areaPadding;
      const posY =
        (Math.cos(seed2 * 23) * 0.5 + 0.5) * (canvasSize - areaPadding * 2) +
        areaPadding;

      return { posX, posY };
    });
  }, [canvasSize, numDots, areaPadding]);

  return (
    <g>
      {dotPositions.map(({ posX, posY }, i) => {
        const transformX = useTransform(mouseX, [0, 1], [posX - 5, posX + 5]);
        const transformY = useTransform(mouseY, [0, 1], [posY - 5, posY + 5]);

        // Use deterministic opacity based on index instead of Math.random()
        const opacity = Math.sin(i * 0.1) * 0.15 + 0.25; // Range: 0.1 to 0.4

        return (
          <motion.circle
            key={i}
            cx={transformX}
            cy={transformY}
            r={dotSize}
            fill="#a78bfa"
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{
              duration: 1,
              delay: (i % 30) * 0.1, // Stagger delays deterministically
            }}
          />
        );
      })}
    </g>
  );
};

const LogoNode: React.FC<
  Logo & {
    x: number;
    y: number;
    isHovered: boolean;
    isDimmed: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    delay: number;
  }
> = ({
  x,
  y,
  svg,
  name,
  isHovered,
  isDimmed,
  onMouseEnter,
  onMouseLeave,
  delay,
}) => {
  return (
    <motion.g
      transform={\`translate(\${x}, \${y})\`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: isDimmed ? 0.4 : 1 }}
      transition={{
        scale: { delay, type: "spring", stiffness: 300, damping: 15 },
        opacity: { duration: 0.2 },
      }}
    >
      <motion.circle
        r={NODE_SIZE / 2}
        fill="rgba(2, 6, 23, 0.7)"
        stroke="rgba(196, 181, 253, 0.3)"
        strokeWidth="1"
        className="backdrop-blur-sm"
      />
      <motion.circle
        r={NODE_SIZE / 2}
        fill="none"
        stroke="rgba(196, 181, 253, 1)"
        strokeWidth="1.5"
        filter={isHovered ? "url(#pulse-glow)" : ""}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ strokeDasharray: "0, 1", strokeLinecap: "round" }}
      />
      <foreignObject
        x={-NODE_SIZE / 2}
        y={-NODE_SIZE / 2}
        width={NODE_SIZE}
        height={NODE_SIZE}
      >
        <div className="w-full h-full flex items-center justify-center p-3 text-white">
          {svg}
        </div>
      </foreignObject>

      {isHovered && (
        <text
          textAnchor="middle"
          y={NODE_SIZE / 2 + 20}
          fill="#a78bfa"
          fontSize="12"
        >
          {name}
        </text>
      )}
    </motion.g>
  );
};

const ConnectionPath: React.FC<{
  to: { x: number; y: number };
  isHovered: boolean;
  delay: number;
}> = ({ to, isHovered, delay }) => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  const pulseVariants = {
    idle: { pathLength: 0, opacity: 0, pathOffset: 1 },
    pulse: {
      pathLength: 0.2,
      opacity: [0, 1, 0],
      pathOffset: [0, 0.8],
      transition: { duration: 1.2, ease: [0.4, 0, 0.6, 1], repeat: Infinity },
    },
  };

  return (
    <g>
      <motion.path
        d={\`M\${CANVAS_SIZE / 2},\${CANVAS_SIZE / 2} L\${to.x},\${to.y}\`}
        fill="none"
        stroke="rgba(129, 140, 248, 0.15)"
        strokeWidth="1"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay }}
      />
      {isHovered && (
        <motion.path
          d={\`M\${CANVAS_SIZE / 2},\${CANVAS_SIZE / 2} L\${to.x},\${to.y}\`}
          fill="none"
          stroke="rgba(196, 181, 253, 1)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      {isHovered && (
        <motion.path
          d={\`M\${CANVAS_SIZE / 2},\${CANVAS_SIZE / 2} L\${to.x},\${to.y}\`}
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial="idle"
          animate="pulse"
        />
      )}
    </g>
  );
};

// --- Main Component ---
export default function IntegrationMatrix({
  logos = defaultLogos,
  title = "The Integration Matrix",
  description = "A living network of powerful integrations. Connect your services in a seamless, intelligent, and visually stunning ecosystem.",
  mainLogo = defaultMainLogo,
}: IntegrationMatrixProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax mouse effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [0, 1], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    // Clamp the value between 0 and 1
    const xClamped = Math.max(0, Math.min(1, (event.clientX - left) / width));
    const yClamped = Math.max(0, Math.min(1, (event.clientY - top) / height));

    mouseX.set(xClamped);
    mouseY.set(yClamped);
  };

  const handleMouseLeave = () => {
    // Reset to center on mouse leave
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Calculate node positions
  const radius = CANVAS_SIZE / 2 - NODE_SIZE / 2 - 30;
  const logoNodes = logos.map((logo, index) => {
    // Standard angular placement calculation (no randomness)
    const angle = (index / logos.length) * 2 * Math.PI - Math.PI / 2;
    return {
      ...logo,
      x: CANVAS_SIZE / 2 + radius * Math.cos(angle),
      y: CANVAS_SIZE / 2 + radius * Math.sin(angle),
    };
  });

  const initialDelay = 0.5;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#020617] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Header (omitted for brevity, assume unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-4">
            {title}
          </h2>
          <p className="text-lg text-indigo-200/70 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* SVG Canvas */}
        <motion.div
          className="relative h-[600px] flex items-center justify-center"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <svg
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              viewBox={\`0 0 \${CANVAS_SIZE} \${CANVAS_SIZE}\`}
              className="overflow-visible"
            >
              {/* --- FILTERS DEFINITION --- */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="pulse-glow">
                  <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                  <feColorMatrix
                    in="coloredBlur"
                    type="matrix"
                    values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 2 0"
                    result="matrix"
                  />
                  <feMerge>
                    <feMergeNode in="matrix" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Particle Grid (Uses FIXED component) */}
              <ParticleGrid
                canvasSize={CANVAS_SIZE}
                mouseX={springX}
                mouseY={springY}
              />

              {/* Connection Paths */}
              {logoNodes.map((node, i) => (
                <ConnectionPath
                  key={node.id}
                  to={{ x: node.x, y: node.y }}
                  isHovered={hoveredNode === node.id}
                  delay={initialDelay + i * 0.05}
                />
              ))}

              {/* Central Hub (unchanged logic) */}
              <g
                onMouseEnter={() => setHoveredNode("hub")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.circle
                  cx={CANVAS_SIZE / 2}
                  cy={CANVAS_SIZE / 2}
                  r={HUB_SIZE / 2 + 5}
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.3)"
                  strokeWidth="1"
                  initial={{ opacity: 0, r: HUB_SIZE / 2 }}
                  animate={{ opacity: 1, r: HUB_SIZE / 2 + 5 }}
                  transition={{
                    duration: 0.5,
                    delay: initialDelay,
                    ease: "easeOut",
                  }}
                />
                <foreignObject
                  x={CANVAS_SIZE / 2 - HUB_SIZE / 2}
                  y={CANVAS_SIZE / 2 - HUB_SIZE / 2}
                  width={HUB_SIZE}
                  height={HUB_SIZE}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: initialDelay }}
                    className="w-full h-full flex items-center justify-center cursor-pointer rounded-full"
                  >
                    {mainLogo.svg}
                  </motion.div>
                </foreignObject>
              </g>

              {/* Logo Nodes (unchanged logic) */}
              {logoNodes.map((node, i) => (
                <LogoNode
                  key={node.id}
                  {...node}
                  isHovered={hoveredNode === node.id}
                  isDimmed={
                    !!hoveredNode &&
                    hoveredNode !== node.id &&
                    hoveredNode !== "hub"
                  }
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  delay={initialDelay + i * 0.05}
                />
              ))}
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
`,
    },
  },
};
