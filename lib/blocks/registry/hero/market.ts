import { FooterSection } from "@/lib/blocks/components/sample/footer";
import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Market from "../../components/hero/market";

export const marketRegistry: LandingComponentGroup = {
  title: "Market",
  description: "Complete footer sections for your landing page.",
  category: "Hero",
  variants: {
    default: {
      title: "Market Section",
      description: "A comprehensive footer with links and social media.",
      component: Market,
      image: "/images/blocks/hero/market.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Menu,
  X,
  BrainCircuit,
  MessageSquare,
  PieChart,
  Database,
  GitBranch,
  Sparkles,
  Star,
} from "lucide-react";

const NavLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a
    href="#"
    className="relative text-white/70 hover:text-white transition-all duration-500 group font-medium"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full"></span>
  </a>
);

interface BrandLogoProps {
  icon: React.ReactNode;
  name: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ icon, name }) => (
  <div className="flex items-center gap-2 lg:gap-3 text-white/40 hover:text-white/80 transition-all duration-500 cursor-pointer transform hover:scale-105">
    {icon}
    <span className="font-medium text-sm lg:text-base tracking-wide">
      {name}
    </span>
  </div>
);

export default function Market() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const specialists = [
    {
      top: "15%",
      left: "85%",
      size: 52,
      delay: 0.5,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    {
      top: "30%",
      left: "15%",
      size: 44,
      delay: 0,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    },
    {
      top: "40%",
      left: "90%",
      size: 68,
      delay: 1,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      top: "75%",
      left: "80%",
      size: 52,
      delay: 1.5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b2942e?w=80&h=80&fit=crop&crop=face",
    },
    {
      top: "80%",
      left: "35%",
      size: 60,
      delay: 0.2,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    },
    {
      top: "20%",
      left: "60%",
      size: 48,
      delay: 0.8,
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
  ];

  const icons = [
    { top: "25%", left: "55%", delay: 0.3, Icon: BrainCircuit },
    { top: "55%", left: "20%", delay: 0.8, Icon: PieChart },
    { top: "65%", left: "65%", delay: 1.2, Icon: MessageSquare },
    { top: "15%", left: "30%", delay: 0.6, Icon: Database },
    { top: "85%", left: "5%", delay: 1.5, Icon: GitBranch },
  ];

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    animationDuration: Math.random() * 20 + 10,
    delay: Math.random() * -20,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-purple-800 to-slate-950 flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

        {/* Floating particles */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-white/10 animate-floating-slow"
            style={{
              left: \`\${element.left}%\`,
              width: \`\${element.size}px\`,
              height: \`\${element.size}px\`,
              animationDuration: \`\${element.animationDuration}s\`,
              animationDelay: \`\${element.delay}s\`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower gradient */}
      <div
        className="absolute pointer-events-none z-0 opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: \`radial-gradient(circle 400px at \${mousePosition.x}px \${mousePosition.y}px, rgba(168,85,247,0.15), transparent 40%)\`,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Navigation */}
      <header className="px-6 lg:px-12 py-6 flex items-center justify-between z-20 flex-shrink-0 backdrop-blur-sm">
        <div className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-end rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-500"
            style={{ transform: "skew(-8deg)" }}
          >
            <div className="w-4 h-8 bg-slate-900 rounded-r-xl" />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Marketeam
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <NavLink>Your Team</NavLink>
          <NavLink>Solutions</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Pricing</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button className="text-white/70 hover:text-white font-medium transition-all duration-300 hover:scale-105">
            Log In
          </button>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-slate-900 text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 group-hover:bg-slate-800">
              Join Now
            </div>
          </button>
        </div>

        <button
          className="lg:hidden z-50 p-2 rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute inset-0 bg-slate-950/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 text-xl">
          <NavLink>Your Team</NavLink>
          <NavLink>Solutions</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Pricing</NavLink>
          <div className="mt-12 flex flex-col items-center gap-6">
            <button className="text-white/70 hover:text-white font-medium transition-colors duration-300">
              Log In
            </button>
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900 text-white rounded-full px-8 py-3 font-semibold">
                Join Now
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 grid lg:grid-cols-2 items-center px-6 lg:px-12 pb-10 lg:pb-0 z-10">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-white/80">
            <Sparkles className="w-4 h-4" />
            Trusted by 1000+ companies
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.9] text-white">
            Unlock Top{" "}
            <span className="text-black animate-gradient-x">
              Marketing Talent
            </span>{" "}
            You Thought Was Out of Reach
          </h1>

          <p className="text-xl lg:text-2xl text-white/60 font-light leading-relaxed max-w-2xl">
            Connect with world-class marketing specialists in seconds. No
            contracts, no hassles — just results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="group relative overflow-hidden bg-black text-white rounded-full px-4 py-2 font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                Start Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={\`https://images.unsplash.com/photo-\${
                      i === 1
                        ? "1472099645785-5658abf4ff4e"
                        : i === 2
                        ? "1438761681033-6461ffad8d80"
                        : i === 3
                        ? "1534528741775-53994a69daeb"
                        : "1507003211169-0a1dd7228f2d"
                    }?w=40&h=40&fit=crop&crop=face\`}
                    className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    alt="user"
                  />
                ))}
              </div>
              <div className="text-white/60">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium">Loved by 10k+ users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 lg:relative w-full h-full">
          {/* Enhanced Orbits */}
          {/* Enhanced Orbits */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] border border-white/20  rounded-full animate-spin-slow shadow-[0_0_50px_rgba(168,85,247,0.1)]" />
            <div
              className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] lg:w-[700px] lg:h-[700px] border border-white/30  rounded-full animate-spin-slow shadow-[0_0_80px_rgba(236,72,153,0.05)]"
              style={{
                animationDirection: "reverse",
                animationDuration: "50s",
              }}
            />
            <div
              className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] border border-white/40 rounded-full animate-spin-slow"
              style={{
                animationDuration: "25s",
              }}
            />
          </div>

          <div className="w-full h-full relative">
            {/* Enhanced Center Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 lg:p-8 text-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                20k+
              </div>
              <div className="text-base lg:text-lg text-white/70 font-medium mt-2">
                Specialists
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>

            {/* Enhanced Specialists Avatars */}
            {specialists.map((s, i) => (
              <div
                key={\`s-\${i}\`}
                className="absolute rounded-full border-2 border-purple-400/30 shadow-2xl animate-float hover:scale-110 transition-all duration-500 cursor-pointer group"
                style={{
                  width: s.size,
                  height: s.size,
                  top: s.top,
                  left: s.left,
                  animationDelay: \`\${s.delay}s\`,
                  boxShadow:
                    "0 0 30px rgba(168,85,247,0.3), inset 0 0 0 2px rgba(255,255,255,0.1)",
                }}
              >
                <img
                  src={s.img}
                  alt="specialist"
                  className="w-full h-full object-cover rounded-full group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
            ))}

            {/* Enhanced Icon Blocks */}
            {icons.map(({ top, left, delay, Icon }, i) => (
              <div
                key={\`i-\${i}\`}
                className="absolute bg-black backdrop-blur-xl border border-white/10 p-3 lg:p-4 rounded-2xl shadow-2xl animate-float hover:scale-110 hover:border-purple-400/30 transition-all duration-500 cursor-pointer group"
                style={{ top, left, animationDelay: \`\${delay}s\` }}
              >
                <Icon className="w-5 h-5 lg:w-7 lg:h-7 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Enhanced Footer Logos */}
      <footer className="px-6 lg:px-12 pb-8 lg:pb-10 flex-shrink-0 z-10">
        <div className="text-center lg:text-left mb-6">
          <p className="text-white/40 text-sm font-medium">
            Trusted by industry leaders
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-10 lg:gap-x-16 gap-y-6">
          <BrandLogo
            icon={
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                D
              </span>
            }
            name="Dreamure"
          />
          <BrandLogo icon={null} name="SWITCH.WIN" />
          <BrandLogo
            icon={
              <div className="w-5 h-5 rounded-full border-2 border-current opacity-60" />
            }
            name="Sphere"
          />
          <BrandLogo
            icon={
              <div
                className="w-4 h-5 bg-current opacity-60"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
                }}
              />
            }
            name="PinSpace"
          />
          <BrandLogo
            icon={
              <div className="w-5 h-5 bg-transparent border-2 border-current rotate-45 opacity-60" />
            }
            name="Visionix"
          />
        </div>
      </footer>

      <style jsx global>{\`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap");
        .font-sans {
          font-family: "Inter", sans-serif;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes floating-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) rotate(180deg);
            opacity: 1;
          }
        }
        .animate-floating-slow {
          animation: floating-slow 15s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      \`}</style>
    </div>
  );
}
`,
    },
  },
};
