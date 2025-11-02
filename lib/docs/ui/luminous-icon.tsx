import React from "react";

export interface LuminousIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  description?: string;
  customClass?: string;
}

export interface LuminousIconsProps {
  items: LuminousIconsItem[];
  className?: string;
  variant?: "default" | "compact" | "large";
}

const colorVariants: Record<
  string,
  { bg: string; shadow: string; accent: string }
> = {
  emerald: {
    bg: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.1) 100%)",
    shadow: "0 8px 32px rgba(16, 185, 129, 0.15)",
    accent: "rgba(16, 185, 129, 0.3)",
  },
  sapphire: {
    bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)",
    shadow: "0 8px 32px rgba(59, 130, 246, 0.15)",
    accent: "rgba(59, 130, 246, 0.3)",
  },
  amethyst: {
    bg: "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)",
    shadow: "0 8px 32px rgba(147, 51, 234, 0.15)",
    accent: "rgba(147, 51, 234, 0.3)",
  },
  rose: {
    bg: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(225, 29, 72, 0.1) 100%)",
    shadow: "0 8px 32px rgba(244, 63, 94, 0.15)",
    accent: "rgba(244, 63, 94, 0.3)",
  },
  amber: {
    bg: "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 100%)",
    shadow: "0 8px 32px rgba(245, 158, 11, 0.15)",
    accent: "rgba(245, 158, 11, 0.3)",
  },
  teal: {
    bg: "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(13, 148, 136, 0.1) 100%)",
    shadow: "0 8px 32px rgba(20, 184, 166, 0.15)",
    accent: "rgba(20, 184, 166, 0.3)",
  },
  slate: {
    bg: "linear-gradient(135deg, rgba(100, 116, 139, 0.2) 0%, rgba(71, 85, 105, 0.1) 100%)",
    shadow: "0 8px 32px rgba(100, 116, 139, 0.15)",
    accent: "rgba(100, 116, 139, 0.3)",
  },
};

const LuminousIcons: React.FC<LuminousIconsProps> = ({
  items,
  className = "",
  variant = "default",
}) => {
  const getColorStyle = (color: string) => {
    if (colorVariants[color]) {
      return colorVariants[color];
    }
    // Fallback for custom colors
    return {
      bg: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
      shadow: `0 8px 32px ${color}15`,
      accent: `${color}30`,
    };
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return {
          container: "gap-4",
          button: "w-16 h-16",
          icon: "w-6 h-6",
          label: "text-sm",
        };
      case "large":
        return {
          container: "gap-8",
          button: "w-24 h-24",
          icon: "w-8 h-8",
          label: "text-lg",
        };
      default:
        return {
          container: "gap-6",
          button: "w-20 h-20",
          icon: "w-7 h-7",
          label: "text-base",
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${variantClasses.container} p-6 ${className}`}
    >
      {items.map((item, index) => {
        const colorStyle = getColorStyle(item.color);

        return (
          <div
            key={index}
            className={`group relative flex flex-col items-center ${
              item.customClass || ""
            }`}
          >
            <button
              type="button"
              aria-label={item.label}
              className={`relative ${variantClasses.button} rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/30 focus:scale-105 active:scale-95`}
              style={{
                background: colorStyle.bg,
                boxShadow: `${colorStyle.shadow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: colorStyle.bg,
                  filter: "blur(10px)",
                  zIndex: -1,
                }}
              />

              {/* Icon container */}
              <div className="absolute inset-0 flex items-center justify-center text-white/90 group-hover:text-white transition-colors duration-200">
                <div
                  className={`${variantClasses.icon} flex items-center justify-center`}
                >
                  {React.cloneElement(item.icon as React.ReactElement<any>, {
                    className: `w-full h-full ${
                      (item.icon.props as any)?.className || ""
                    }`,
                  })}
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                    animation: "shimmer 2s infinite",
                  }}
                />
              </div>
            </button>

            {/* Label */}
            <div className="mt-3 text-center">
              <h3
                className={`font-medium text-gray-800 dark:text-gray-200 ${variantClasses.label} group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200`}
              >
                {item.label}
              </h3>
              {item.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}

      {/* Keyframes for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LuminousIcons;
