import { ComponentGroup } from "@/lib/docs/types";
import AvatarDemo from "../components/avatar";

export const avatarRegistry: ComponentGroup = {
  name: "avatarRegistry",
  title: "Avatar",
  description:
    "An animated avatar component with dynamic color fallbacks, hover effects, and grouping capabilities.",
  category: "components",
  components: ["AvatarDemo"],
  // Installation configuration
  installation: {
    cliCommand: 'npx shadcn@latest add "https://zeroui.vercel.app/r/avatar"',
    dependencies: ["framer-motion"],
    componentPath: "components/ui/avatar.tsx",
    utilsCode: "",
  },
  props: [
    {
      name: "src",
      type: "string",
      description: "The URL of the image to display in the avatar.",
      required: false,
    },
    {
      name: "alt",
      type: "string",
      description: "Alternative text for the image, used for accessibility.",
      required: false,
    },
    {
      name: "name",
      type: "string",
      description:
        "The name of the user, used for the tooltip and generating fallback initials and colors. Defaults to 'Anonymous'.",
      required: false,
    },
    {
      name: "size",
      type: "number",
      description:
        "The size (width and height) of the avatar in pixels. Defaults to 64.",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the avatar container.",
      required: false,
    },
    {
      name: "id",
      type: "string | number",
      description: "A unique identifier for the avatar, useful when in a list.",
      required: false,
    },
    {
      name: "enableDynamicColor",
      type: "boolean",
      description:
        "If true, generates a unique background gradient from the 'name' prop for the fallback. Defaults to true.",
      required: false,
    },
    {
      name: "avatars (AvatarGroup)",
      type: "AvatarProps[]",
      description:
        "An array of avatar prop objects to be rendered in the group.",
      required: true,
    },
    {
      name: "max (AvatarGroup)",
      type: "number",
      description:
        "The maximum number of avatars to display before showing a count. Defaults to 5.",
      required: false,
    },
  ],

  variants: {
    basic: {
      title: "Interactive Avatar Group",
      description:
        "A dynamic group of avatars that animate on hover, revealing curved tooltips and a unique glow.",
      component: AvatarDemo,
      image: "/images/components/avatar-basic.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Interactive+Avatars",
      code: `"use client";
import { AvatarGroup } from "@/lib/docs/ui/avatar";

const AvatarDemo = () => {
  const sampleAvatars = [
    {
      id: 1,
      name: "Alex",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Jack",
      src: "https://i.pinimg.com/736x/87/ef/33/87ef33097caeac96fdef8ab2e71db3dd.jpg",
    },
    {
      id: 3,
      name: "Mike",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Emma",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Maxine",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "David",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Lisa",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-white text-2xl font-light mb-2 tracking-wide">
          HOVER AVATAR COMPONENT
        </h1>
        <p className="text-gray-400 text-sm mb-16">
          Hover over any avatar to see the effect
        </p>

        {/* Main Avatar Group */}
        <div className="mb-16">
          <AvatarGroup
            avatars={sampleAvatars}
            size={80}
            className="mb-8"
            max={7}
            enableDynamicColor={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarDemo;
`,
      manualCode: `"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

// --- Helper to generate a unique gradient for each avatar's fallback ---
const generateGradientFromName = (name: string) => {
  let hash = 0;
  if (name.length === 0) return "linear-gradient(135deg, #888, #555)";
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0;
  }
  const h = hash % 360;
  return \`linear-gradient(135deg, hsl(\${h}, 70%, 60%), hsl(\${
    (h + 40) % 360
  }, 80%, 45%))\`;
};

// --- A constant for the neutral fallback gradient ---
const NEUTRAL_GRADIENT = "linear-gradient(135deg, #555, #333)";

// --- Updated Avatar Component ---
interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: number;
  className?: string;
  id?: string | number;
  enableDynamicColor?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name = "Anonymous",
  size = 64,
  className = "",
  enableDynamicColor = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const showFallback = !src || imageError;
  const uniqueId = useMemo(
    () => \`path-\${Math.random().toString(36).substr(2, 9)}\`,
    []
  );

  // --- LOGIC FOR CHOOSING THE BACKGROUND ---
  const backgroundGradient = useMemo(() => {
    return enableDynamicColor
      ? generateGradientFromName(name)
      : NEUTRAL_GRADIENT;
  }, [name, enableDynamicColor]);

  // Framer Motion variants for hover animation
  const avatarVariants = {
    initial: { scale: 1, y: 0, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
    hover: {
      scale: 1.1,
      y: -10,
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      transition: { type: "spring" as const, stiffness: 300, damping: 15 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 10, scale: 0.9 },
    hover: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  const fallbackInitials = name?.charAt(0).toUpperCase();

  return (
    <motion.div
      variants={avatarVariants}
      initial="initial"
      whileHover="hover"
      className={\`relative inline-block cursor-pointer bg-transparent rounded-full \${className}\`}
      style={{ width: size, height: size, background: 'transparent' }}
    >
      {/* Background Glow Effect - Only show when dynamic color is enabled */}
      {enableDynamicColor && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: backgroundGradient, filter: "blur(12px)" }}
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            hover: { opacity: 0.7, scale: 1.1 },
          }}
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}

      {/* Curved Text Tooltip */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-full pointer-events-none"
        style={{ width: size * 1.5, height: size * 0.7 }}
      >
        <motion.svg
          viewBox={\`0 0 \${size * 1.5} \${size * 0.7}\`}
          className="overflow-visible"
          variants={textVariants}
        >
          <path
            id={uniqueId}
            d={\`M 0 \${size * 0.6} Q \${size * 0.75} 0 \${size * 1.5} \${
              size * 0.6
            }\`}
            fill="none"
          />
          <text
            fill="white"
            className="text-xs font-bold tracking-wider"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            <textPath
              href={\`#\${uniqueId}\`}
              startOffset="50%"
              textAnchor="middle"
            >
              {name.toUpperCase()}
            </textPath>
          </text>
        </motion.svg>
      </div>

      {/* Avatar Container for Image and Fallback */}
      <div
        className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-white/20"
        style={{ 
          background: showFallback ? backgroundGradient : (enableDynamicColor ? backgroundGradient : 'transparent')
        }}
      >
        {!showFallback ? (
          <motion.img
            src={src}
            alt={alt || name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white font-bold"
            style={{ fontSize: size * 0.5 }}
          >
            {fallbackInitials}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- FIXED AvatarGroup Component - Now forwards enableDynamicColor prop ---
interface AvatarGroupProps {
  avatars: AvatarProps[];
  size?: number;
  className?: string;
  max?: number;
  enableDynamicColor?: boolean; // Added this prop
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  size = 48,
  className = "",
  max = 5,
  enableDynamicColor = true, // Added default value
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const visibleAvatars = avatars.slice(0, max);
  const hiddenCount = avatars.length - max;
  const overlap = size / 3;

  return (
    <div
      className={\`relative flex items-center bg-transparent \${className}\`}
      style={{ height: size, background: 'transparent' }}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {visibleAvatars.map((avatar, i) => (
        <div
          key={avatar.id || i}
          className="absolute"
          onMouseEnter={() => setHoveredIndex(i)}
          style={{
            left: i * (size - overlap),
            zIndex: hoveredIndex === i ? 99 : visibleAvatars.length - i,
          }}
        >
          <Avatar 
            {...avatar} 
            size={size} 
            enableDynamicColor={enableDynamicColor} // <-- PASS THE PROP DOWN
          />
        </div>
      ))}

      {hiddenCount > 0 && (
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: visibleAvatars.length * (size - overlap),
            zIndex: 0,
          }}
        >
          <div
            className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-white font-bold border-2 border-white/20"
            style={{ width: size, height: size, fontSize: size * 0.4 }}
          >
            +{hiddenCount}
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
export type { AvatarProps, AvatarGroupProps };
`,
    },
  },
};
