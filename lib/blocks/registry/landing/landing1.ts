import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import HomePage from "@/lib/blocks/components/landing/landing1";

export const landing1Registry: LandingComponentGroup = {
  title: "Nexus: AI Presence Control",
  description: "A landing page showcasing an AI orchestration platform for unified brand presence management and real-time narrative analysis.",
  category: "Landing",
  variants: {
    default: {
      title: "Nexus: AI Presence Control",
      description: "A landing page showcasing an AI orchestration platform for unified brand presence management and real-time narrative analysis.",
      component: HomePage,
      image: "/images/blocks/landing/landing1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Page",
      code: `'use client';

import React, { useState, useRef, ReactNode, FC } from "react";
import { motion, useScroll, useTransform, useMotionValue, MotionValue } from 'framer-motion';
import { ArrowUpRight, Check, Code, Search, GitBranch, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function for class names
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ----------------- TYPE DEFINITIONS -----------------

interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
  imageUrl: string;
}

// ----------------- CUSTOM HOOKS -----------------
function useCursorGlow(containerRef: React.RefObject<HTMLElement | null>) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                x.set(e.clientX - rect.left);
                y.set(e.clientY - rect.top);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [containerRef, x, y]);

    return { x, y };
}


// ----------------- UI COMPONENTS -----------------

const Button: FC<{ children: ReactNode; className?: string; variant?: 'primary' | 'secondary' }> = ({ children, className = '', variant = 'primary' }) => {
  const baseClasses = "px-7 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 group";
  const variants = {
    primary: "bg-lime-300 text-slate-900 hover:bg-lime-400 hover:shadow-lg hover:shadow-lime-500/20 transform hover:-translate-y-0.5",
    secondary: "bg-slate-800/50 border border-slate-700 text-slate-200 backdrop-blur-sm hover:bg-slate-700/80",
  };
  return (
    <button className={cn(baseClasses, variants[variant], className)}>
      {children}
    </button>
  );
};

// ----------------- LANDING PAGE SECTIONS -----------------

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header 
              initial={{ y: -100 }} 
              animate={{ y: 0 }} 
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className={cn(
                "fixed top-4 left-96 translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-full",
                scrolled ? 'bg-slate-900/50 backdrop-blur-xl border border-slate-700/80' : 'bg-transparent'
              )}>
                <div className="relative flex items-center px-4 sm:px-6 py-3">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-300 to-green-500"/>
                        <span className="text-xl font-bold text-white">Nexus</span>
                    </a>
                    
                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {['Platform', 'Solutions', 'Pricing'].map(item => (
                            <a key={item} href="#" className="text-sm text-slate-400 hover:text-white transition-colors whitespace-nowrap">{item}</a>
                        ))}
                    </nav>
                    
                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4 ml-auto flex-shrink-0">
                        <Button variant="secondary" className="px-5 py-2 text-sm">Sign In</Button>
                        <Button className="px-5 py-2 text-sm">Request Demo</Button>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-lime-300 transition-colors ml-auto"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                    opacity: mobileMenuOpen ? 1 : 0, 
                    y: mobileMenuOpen ? 0 : -20,
                    pointerEvents: mobileMenuOpen ? 'auto' : 'none'
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-40 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl overflow-hidden"
            >
                <div className="p-6 space-y-6">
                    {/* Mobile Navigation Links */}
                    <nav className="space-y-4">
                        {['Platform', 'Solutions', 'Pricing'].map(item => (
                            <a 
                                key={item} 
                                href="#" 
                                className="block text-center text-slate-300 hover:text-white transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    
                    {/* Mobile CTA Buttons */}
                    <div className="space-y-3 pt-4 border-t border-slate-700">
                        <Button variant="secondary" className="w-full justify-center">
                            Sign In
                        </Button>
                        <Button className="w-full justify-center">
                            Request Demo
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile menu backdrop */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { x, y } = useCursorGlow(heroRef);

    return (
        <section ref={heroRef} className="relative py-48 px-4 bg-slate-950 text-white overflow-hidden">
             <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500"
                style={{
                    background: \`radial-gradient(600px circle at \${x}px \${y}px, rgba(50, 200, 100, 0.15), transparent 80%)\`,
                }}
            />
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                    The Command Center for your AI Presence
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                    Nexus is the AI orchestration platform that unifies your brand's presence across all generative AI. Monitor, analyze, and optimize your narrative in one place.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="mt-10 flex gap-4 justify-center">
                    <Button>
                       Request Demo <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform"/>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

const HorizontalScrollFeatures = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const features: Feature[] = [
        { title: "AI Monitoring", description: "Continuously scan LLMs for mentions of your brand, products, and competitors. Get real-time alerts on narrative shifts.", Icon: Search, imageUrl: "https://images.unsplash.com/photo-1684332152055-9111325d7e82?q=80&w=3464&auto=format&fit=crop" },
        { title: "Content Intelligence", description: "Analyze your existing content's AI-readiness. Nexus provides actionable insights to optimize your pages for better AI interpretation.", Icon: Code, imageUrl: "https://images.unsplash.com/photo-1698223941154-2078655f46a2?q=80&w=3438&auto=format&fit=crop" },
        { title: "Optimization Workflows", description: "From insight to action in minutes. Use our integrated workflows to create and publish AI-native articles that position you as an authority.", Icon: GitBranch, imageUrl: "https://images.unsplash.com/photo-1701328906915-e2a22cf8b010?q=80&w=3540&auto=format&fit=crop" },
    ];
    
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-slate-950">
            <div className="sticky top-0 h-screen bg-slate-950 flex items-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-slate-700 text-center px-4">Unified. Powerful. Essential.</h2>
                </div>
                <motion.div style={{ x }} className="flex gap-8 pl-12">
                     {features.map((feature, i) => (
                        <div key={i} className="relative w-[80vw] md:w-[45vw] h-[60vh] flex-shrink-0 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                            <img src={feature.imageUrl} className="w-full h-full object-cover opacity-20" alt={feature.title} />
                             <div className="absolute inset-0 z-10 p-8 sm:p-12 h-full flex flex-col justify-end">
                                <feature.Icon className="w-8 sm:w-10 h-8 sm:h-10 mb-4 text-lime-300"/>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 max-w-md text-sm sm:text-base">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};


const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    { name: "Figma", quote: "Nexus gave us unprecedented clarity into our AI footprint. It's now a cornerstone of our content strategy.", author: "Elena Vega, Director of Content" },
    { name: "Notion", quote: "The ability to monitor and react to our AI narrative in real-time is a complete game-changer.", author: "Ben Carter, Head of Growth" },
    { name: "Stripe", quote: "We identified critical misinformation about our API through Nexus and were able to correct our public-facing docs, which had an immediate impact.", author: "Aisha Khan, Lead Technical Writer" },
    { name: "Dropbox", quote: "For any brand that takes its digital presence seriously, Nexus is not a 'nice to have,' it's essential.", author: "Marcus Thorne, VP of Marketing" },
  ];

  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tighter">Trusted by the platforms you trust</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              onMouseEnter={() => setActiveTestimonial(index)}
              onClick={() => setActiveTestimonial(index)}
              className={cn( "p-4 border rounded-lg cursor-pointer transition-all duration-300",
                activeTestimonial === index ? 'bg-slate-800 border-lime-400' : 'bg-slate-900 border-slate-800'
              )}>
                <p className="text-center font-bold text-lg sm:text-2xl text-white">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="relative h-48 sm:h-56 text-center flex items-center justify-center p-6 sm:p-8 bg-slate-900 rounded-2xl border border-slate-800">
           {testimonials.map((t, index) => (
             <motion.div
               key={t.name}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: activeTestimonial === index ? 1 : 0, y: activeTestimonial === index ? 0 : 10 }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-center"
             >
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-white max-w-3xl">"{t.quote}"</p>
               <p className="mt-4 text-slate-400 font-semibold text-sm sm:text-base">{t.author}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const FinalCTA = () => (
    <section className="relative py-24 px-4 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950 to-slate-950 z-10" />
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(120,220,150,0.1),_transparent_60%)]" />
        <div className="relative z-20 max-w-3xl mx-auto text-center">
             <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white tracking-tighter">Orchestrate Your AI Narrative.</h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">Stop guessing what AI thinks about you. Take command with Nexus. See the platform in action and understand why the world's most innovative brands are already on board.</p>
             <div className="mt-10">
                <Button className="px-8 py-4 text-lg">
                    Schedule Your Demo
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform"/>
                </Button>
            </div>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-slate-950 border-t border-slate-800 px-4 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-8 md:mb-0">
                     <a href="#" className="flex items-center gap-2 justify-center md:justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-300 to-green-500"/>
                        <span className="text-xl font-bold text-white">Nexus</span>
                    </a>
                    <p className="text-slate-400 mt-2 text-sm">The Command Center for your AI Presence.</p>
                </div>
                 <nav className="flex flex-wrap gap-6 text-sm text-slate-400 justify-center">
                     <a href="#" className="hover:text-white transition-colors">Platform</a>
                     <a href="#" className="hover:text-white transition-colors">Pricing</a>
                     <a href="#" className="hover:text-white transition-colors">About</a>
                     <a href="#" className="hover:text-white transition-colors">Contact</a>
                </nav>
            </div>
             <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Nexus AI, Inc. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


export default function HomePage() {
    return (
        <div className="bg-slate-950 font-sans antialiased">
           <Header />
            <main>
                <Hero />
                <HorizontalScrollFeatures />
                <Testimonials />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
`,
    },
  },
};
