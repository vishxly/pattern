"use client";
import React, { useState, useEffect, useRef, SVGProps } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Command } from 'cmdk';
import { Globe, Bot, ShieldCheck, Zap, X, Menu, Copy } from 'lucide-react';

//=========== Keyframe Animations ===========//
const keyframes = `
  @keyframes background-pan { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
  @keyframes terminal-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  @keyframes subtle-glow { 0% { box-shadow: 0 0 10px rgba(76, 29, 149, 0.2); } 100% { box-shadow: 0 0 25px rgba(76, 29, 149, 0.5); } }
`;

//=========== Main Landing Page Component ===========//
export default function CyberCoreLandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openKbar, setOpenKbar] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            setOpenKbar((open) => !open);
          }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const navLinks = [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
    ];
    
    return (
        <div className="bg-[#0A0A0A] text-neutral-300 font-sans antialiased selection:bg-purple-500/30">
            <style>{keyframes}</style>
            
            <CommandMenu open={openKbar} setOpen={setOpenKbar}/>

            {/* ---- Navbar ---- */}
            <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/5">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2">
                        <motion.div whileHover={{ rotate: 360, scale: 1.1}} transition={{ duration: 0.8, type: 'spring' }}>
                            <svg className="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61483 7.84006L12.0006 0.5L15.3864 7.84006L23.4133 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                        </motion.div>
                        <span className="text-xl font-bold text-white tracking-wide">Cyber-Core</span>
                    </a>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {navLinks.map(link => (
                          <a key={link.label} href={link.href} className="relative text-neutral-300 hover:text-white transition-colors duration-300 group">
                              {link.label}
                              <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                          </a>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                         <button onClick={() => setOpenKbar(true)} className="flex items-center gap-2 px-3 py-1.5 text-xs border border-neutral-700 rounded-md text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors">
                            Search <span className="ml-2 text-[10px] bg-neutral-700 px-1.5 py-0.5 rounded">⌘K</span>
                        </button>
                        <motion.a 
                            href="#" 
                            className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-md"
                            whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 5px 15px rgba(168, 85, 247, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            Sign Up
                        </motion.a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                           {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </nav>
            </header>

            <main>
                <HeroSection />
                <BentoGridFeatures />
                <ValueProps />
                <PricingSection />
                <TestimonialSection />
            </main>
            
            <Footer />
        </div>
    );
}

//=========== Hero Section Component with Cursor Light Effect ===========//
const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const updateMousePosition = (e: React.MouseEvent) => {
        if(containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };
    const headline = "Unify Your Dev & Sec Lifecycle";

    return (
        <section ref={containerRef} onMouseMove={updateMousePosition} className="relative py-28 md:py-36 overflow-hidden bg-[url(/binary-grid.svg)]">
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-40"
                style={{ background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`}}
            />
            <div className="max-w-4xl mx-auto text-center px-4">
                 <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white"
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.03 } } }}
                    initial="hidden" animate="visible"
                >
                    {headline.split("").map((char, index) => (
                        <motion.span key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
                    Cyber-Core is the unified platform that connects your entire software delivery lifecycle, embedding security at every stage from code to cloud.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a href="#" className="px-8 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-lg" whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.3)" }} transition={{ type: 'spring' }}>
                        Get Started
                    </motion.a>
                    <motion.a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-neutral-800/80 rounded-lg" whileHover={{ scale: 1.05, backgroundColor: 'rgb(38 38 38)'}} transition={{ type: 'spring' }}>
                        Watch Demo
                    </motion.a>
                </div>
            </div>
        </section>
    );
}


//=========== Features Section (Bento Grid) ===========//
const BentoGridFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });
  const controls = useAnimation();
  
  useEffect(() => { inView && controls.start('visible'); }, [inView, controls]);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 }}
  };

  return(
    <section id="features" ref={containerRef} className="py-20 max-w-7xl mx-auto px-4">
       <div className="text-center mb-16">
         <h2 className="text-4xl font-extrabold tracking-tighter text-white">Your Command Center for DevSecOps</h2>
         <p className="mt-4 text-lg text-neutral-400">Everything you need, beautifully integrated.</p>
       </div>

        <motion.div
            variants={gridVariants} initial="hidden" animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BentoCard icon={<ShieldCheck/>} title="Continuous Security" className="lg:col-span-2">
            <p className="text-sm text-neutral-400">Automated scanning for vulnerabilities, from your IDE to your production environment. Get real-time alerts and actionable remediation advice.</p>
            <div className="mt-4 h-48 bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800"><AnimatedTerminal/></div>
          </BentoCard>

          <BentoCard icon={<Zap/>} title="AI-Powered Remediation">
             <p className="text-sm text-neutral-400 mb-2">Our proprietary AI suggests code fixes for identified vulnerabilities, helping you patch faster and learn as you go.</p>
             <CodeSnippet/>
          </BentoCard>

          <BentoCard icon={<Bot />} title="Intelligent Policy Engine">
            <p className="text-sm text-neutral-400">Define and enforce security policies as code. Ensure compliance across all projects without slowing down your developers.</p>
            <PerformanceChart />
          </BentoCard>

           <BentoCard icon={<Globe />} title="Supply Chain Visibility" className="lg:col-span-2">
             <p className="text-sm text-neutral-400">Map your entire software supply chain. Understand third-party risks and ensure the integrity of every component you use.</p>
              <div className="mt-2 text-sm text-center">Data from multiple sources</div>
          </BentoCard>
        </motion.div>
    </section>
  )
}

// Individual components for Bento Grid
const BentoCard = ({ children, className, icon, title }: { children: React.ReactNode, className?: string, icon: React.ReactNode, title: string}) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
    transition={{ type: "spring" }}
    className={`p-6 bg-[#111111] border border-white/5 rounded-2xl ${className || ''}`}
  >
    <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded-lg">{icon}</div>
        <h3 className="font-semibold text-lg text-white">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const AnimatedTerminal = () => {
    const lines = ["git clone cyber-core/repo...", "✔ Cloned successfully!", "npm install...", "✔ Dependencies installed.", "core scan --ci...", "Found 0 critical vulnerabilities. Build passed."];
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentLine(prev => (prev < lines.length - 1 ? prev + 1 : prev));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 font-mono text-sm">
           {lines.slice(0, currentLine + 1).map((line, i) => (
             <div key={i} className="flex items-center gap-2">
                 <span>&gt;</span>
                 <p className={line.startsWith("✔") ? "text-green-400" : ""}>{line}</p>
                 {i === currentLine && currentLine < lines.length -1 && <div className="w-2 h-4 bg-green-400 animate-terminal-blink"></div>}
             </div>
           ))}
        </div>
    );
};

const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `// Before\nif (user.isAdmin()) {\n  deleteResource();\n}\n\n// After (fixed)\nif (user.isAdmin() && isAuthorized(user)) {\n  deleteResource();\n}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative mt-2">
       <button onClick={handleCopy} className="absolute top-2 right-2 p-1.5 bg-neutral-700 text-neutral-300 rounded-md hover:bg-neutral-600 transition-colors">
         <Copy className="w-4 h-4" />
       </button>
       <pre className="p-4 bg-neutral-900 text-[10px] rounded-lg border border-neutral-800 overflow-x-auto"><code>{textToCopy}</code></pre>
       {copied && <p className="absolute -bottom-7 right-0 text-xs text-green-400">Copied!</p>}
    </div>
  )
}

const PerformanceChart = () => <div className="mt-4 p-2 text-sm text-center text-neutral-500">Charts Not Available in this example</div>;

const ValueProps = () => (
    <div className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
           {[{t: "Ship Faster", d:"Automate manual tasks and remove security bottlenecks."}, {t:"Reduce Risk", d:"Proactively find and fix vulnerabilities before they hit production."}, {t:"Build Smarter", d:"Gain deep insights into your security posture and compliance."}].map(p => (
               <div key={p.t} className="text-center">
                  <h3 className="text-xl font-bold text-white">{p.t}</h3>
                  <p className="mt-2 text-neutral-400">{p.d}</p>
               </div>
           ))}
        </div>
    </div>
)


//=========== Pricing Section ===========//
const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const tiers = [
      { name: "Developer", monthly: 0, yearly: 0, features: ["For individuals", "Up to 3 repos", "Core security scans"], cta: "Start for Free"},
      { name: "Team", monthly: 29, yearly: 290, features: ["Up to 10 users", "Unlimited repos", "CI/CD integration", "AI remediations"], cta: "Choose Team Plan", popular: true},
      { name: "Enterprise", cta: "Contact Sales", features: ["Unlimited users", "SAML SSO", "Dedicated support", "Supply chain security"]},
  ];

  return(
    <section id="pricing" className="py-20 max-w-6xl mx-auto px-4">
       <div className="text-center mb-16">
         <h2 className="text-4xl font-extrabold tracking-tighter text-white">Fair Pricing for Teams of All Sizes</h2>
         <div className="mt-6 flex justify-center items-center gap-2">
           <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-neutral-500'}`}>Monthly</span>
           <button onClick={() => setBillingCycle(c => c === 'monthly' ? 'yearly' : 'monthly')} className="w-12 h-6 rounded-full p-1 bg-neutral-800 flex items-center">
               <motion.div layout transition={{ type: "spring", stiffness: 400, damping: 20 }} className={`w-4 h-4 rounded-full bg-white ${billingCycle === 'yearly' && 'ml-6'}`} />
           </button>
           <span className={`${billingCycle === 'yearly' ? 'text-white' : 'text-neutral-500'}`}>Yearly (save 20%)</span>
         </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map(tier => (
             <div key={tier.name} className={`relative p-8 rounded-2xl border ${tier.popular ? 'border-purple-500 animate-subtle-glow' : 'border-white/10'} bg-black`}>
                 {tier.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-purple-600 rounded-full">Most Popular</div>}
                 <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                 <p className="mt-4 text-5xl font-bold text-white">
                     {typeof tier.monthly === 'number' ? `$${billingCycle === 'monthly' ? tier.monthly : tier.yearly}` : "Custom"}
                 </p>
                 <ul className="mt-8 space-y-3 text-neutral-400">
                    {tier.features.map(f => <li key={f} className="flex items-center gap-2">✓ {f}</li>)}
                 </ul>
                  <a href="#" className={`mt-8 block w-full py-3 text-center rounded-lg font-semibold ${tier.popular ? 'bg-purple-600 text-white' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}>
                      {tier.cta}
                  </a>
             </div>
          ))}
       </div>
    </section>
  )
}

//=========== Testimonials Section ===========//
const TestimonialSection = () => {
    const testimonials = [
        { text: 'Cyber-Core simplified our entire security workflow overnight. It’s a must-have tool for any modern engineering team.', name: 'Sarah L.', company: 'CTO, TechCorp' },
        { text: 'The AI remediation suggestions are incredibly accurate. It not only speeds up our work but also educates our junior developers.', name: 'Mike R.', company: 'Lead Engineer, InnovateCo' },
        { text: 'We passed our last two compliance audits with flying colors thanks to the policy engine. It gives us total peace of mind.', name: 'Dana K.', company: 'DevOps Lead, SecureCloud' },
        { text: 'Finally, a DevSecOps tool that developers don’t hate using! The UI is intuitive and the integrations are seamless.', name: 'Alex J.', company: 'Founder, NextGen Solutions' },
        { text: 'The visibility into our software supply chain is unparalleled. We identified and patched critical risks we didn\'t even know we had.', name: 'Elena P.', company: 'VP of Engineering, DigitalForge' },
    ];
    
    return (
        <section id="testimonials" className="relative w-full overflow-hidden py-20 bg-neutral-950/50 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
            <div className="flex animate-infinite-scroll group-hover:pause-animation gap-8">
                {[...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} className="w-80 flex-shrink-0 p-6 rounded-lg bg-neutral-900 border border-white/10">
                        <p className="text-neutral-300">"{t.text}"</p>
                        <div className="mt-4 text-right">
                           <p className="font-semibold text-white">{t.name}</p>
                           <p className="text-sm text-neutral-500">{t.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


//=========== Command Menu (Kbar) ===========//
const CommandMenu = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {
  
  const actions = [
      { section: "Navigation", label: "Features", href: "#features" },
      { section: "Navigation", label: "Pricing", href: "#pricing" },
      { section: "Navigation", label: "Testimonials", href: "#testimonials" },
      { section: "Actions", label: "Sign Up", href: "#" },
  ];

  useEffect(() => { open && (document.body.style.overflow = 'hidden'); !open && (document.body.style.overflow = 'unset');}, [open]);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu"
      className="fixed inset-0 z-[100] font-sans md:inset-auto md:top-[15%] md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl md:rounded-lg overflow-hidden"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-neutral-900 border border-white/10 shadow-2xl">
        <Command.Input 
          placeholder="What do you need?"
          className="w-full bg-transparent p-4 text-white placeholder:text-neutral-500 focus:outline-none border-b border-white/10"
        />
        <Command.List className="p-2 max-h-[300px] overflow-y-auto">
          <Command.Empty className="p-4 text-center text-neutral-500">No results found.</Command.Empty>
            {Array.from(new Set(actions.map(a => a.section))).map(section => (
               <Command.Group key={section} heading={section} className="px-2 text-xs text-neutral-500 uppercase tracking-wider">
                  {actions.filter(a => a.section === section).map(action => (
                    <Command.Item key={action.label}
                      onSelect={() => { window.location.href = action.href; setOpen(false); }}
                      className="my-1 p-2 flex items-center justify-between text-sm rounded-md cursor-pointer text-neutral-300 hover:bg-neutral-800 hover:text-white aria-selected:bg-neutral-800 aria-selected:text-white"
                    >
                      {action.label}
                    </Command.Item>
                  ))}
               </Command.Group>
            ))}
        </Command.List>
      </div>
    </Command.Dialog>
  );
};


const Footer = () => (
     <footer className="w-full border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} Cyber-Core, Inc. All rights reserved.</p>
             <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-neutral-400 hover:text-white">Twitter</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-white">GitHub</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-white">LinkedIn</a>
             </div>
        </div>
    </footer>
)
