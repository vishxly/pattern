import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import AnimatedParticle404 from "@/lib/blocks/components/notfound/notfound4";

export const notfound4Registry: LandingComponentGroup = {
  title: "Cosmic 404: Lost in Space",
  description: "A stylish 404 page with animated particles, a glowing backdrop, and interactive navigation.",
  category: "Notfound",
  variants: {
    default: {
      title: "Cosmic 404: Lost in Space",
      description: "A stylish 404 page with animated particles, a glowing backdrop, and interactive navigation.",
      component: AnimatedParticle404,
      image: "/images/blocks/notfound/notfound4.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Notfound+Component",
      code: `import { useState, useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function AnimatedParticle404() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(initialParticles);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          
          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) {
            particle.vx *= -1;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY < 0 || newY > window.innerHeight) {
            particle.vy *= -1;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          // Mouse attraction
          const dx = mousePos.x - newX;
          const dy = mousePos.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            particle.vx += dx * force * 0.0001;
            particle.vy += dy * force * 0.0001;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden flex items-center justify-center"
    >
      {/* Particle system */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              boxShadow: \`0 0 \${particle.size * 2}px rgba(255, 255, 255, 0.3)\`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Connection lines between nearby particles */}
      <svg className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) =>
          particles.slice(i + 1).map((otherParticle, j) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) {
              const opacity = (80 - distance) / 80 * 0.2;
              return (
                <line
                  key={\`\${i}-\${j}\`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                  opacity={opacity}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Animated 404 */}
        <div className="mb-12 relative">
          <h1 className="text-7xl md:text-9xl font-light text-white relative z-10">
            <span className="inline-block animate-bounce">4</span>
            <span 
              className="inline-block mx-4 relative"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              0
              <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-xl animate-ping" />
            </span>
            <span 
              className="inline-block"
              style={{
                animation: 'bounce 2s ease-in-out infinite 0.2s',
              }}
            >
              4
            </span>
          </h1>
          
          {/* Glowing backdrop */}
          <div className="absolute inset-0 text-7xl md:text-9xl font-light text-blue-400/20 blur-lg">
            404
          </div>
        </div>

        {/* Content with elegant typography */}
        <div className="space-y-8 max-w-xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-blue-100">
              Drifting in Digital Space
            </h2>
            <p className="text-lg text-blue-200/80 leading-relaxed">
              You've wandered into uncharted digital territory. The page you're seeking 
              has scattered like stardust across the cosmos.
            </p>
          </div>

          {/* Interactive navigation */}
          <div className="pt-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Navigate Home</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </span>
              
              {/* Button particle effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse" />
              </div>
            </button>
          </div>

          {/* Secondary action */}
          <div className="pt-4">
            <button className="text-blue-300/70 hover:text-blue-200 transition-colors duration-200 font-light">
              ← Return to previous page
            </button>
          </div>
        </div>

        {/* Mouse cursor effect */}
        <div 
          className="fixed w-6 h-6 border border-white/30 rounded-full pointer-events-none z-20 transition-transform duration-100"
          style={{
            left: mousePos.x - 12,
            top: mousePos.y - 12,
            transform: \`scale(\${particles.length > 0 ? 1 : 0})\`,
          }}
        />
      </div>
    </div>
  );
}
`,
    },
  },
};
