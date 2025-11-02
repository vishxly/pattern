"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useTransform, animate } from 'framer-motion';
import {
    BrainCircuit, Zap, BarChart3, Database, ChevronRight, Menu, X, Bot, Rocket
} from 'lucide-react';

//=========== Keyframe Animations & Utility Functions ===========//
const keyframes = `
  @keyframes subtle-pan { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
  @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
  @keyframes stroke-draw { to { stroke-dashoffset: 0; } }
`;



export default function NovaLandingPage() {
    return (
        <div className="bg-[#020010] text-neutral-300 font-sans antialiased selection:bg-cyan-300/20 overflow-x-hidden">
            <style>{keyframes}</style>
            
            <AuroraBackground />
            
            <Navbar />

            <main className="relative z-10">
                <HeroSection />
                <LogoCloud />
                <SolutionSection />
                <FeatureGrid />
                <TestimonialMarquee />
                <FinalCTA />
            </main>
            
            <Footer />
        </div>
    );
}

//=========== Page Components ===========//
const AuroraBackground = () => (
    <div className="fixed inset-0 z-0 opacity-40">
      <div className="absolute inset-0 bg-[url(/grid-sm.svg)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-cyan-500/10 to-[#020010]"></div>
    </div>
)

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/5' : ''}`}>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
             <a href="#" className="flex items-center gap-2">
                 <Zap className="w-6 h-6 text-cyan-400"/>
                 <span className="text-xl font-bold text-white tracking-tight">Nova</span>
             </a>
              <div className="hidden md:flex gap-8 text-sm font-medium">
                  {['Features', 'Solution', 'Pricing'].map(item => 
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors">{item}</a>)}
              </div>
              <div className="hidden md:flex gap-4 items-center">
                  <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">Sign In</a>
                  <motion.a href="#" className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }} whileTap={{ scale: 0.95}}>
                     Get started
                  </motion.a>
              </div>
          </nav>
        </header>
    );
}

const HeroSection = () => {
    const headline = "Transform Data into Decisions.".split(' ');
    
    return (
      <section className="min-h-screen flex items-center justify-center pt-16 -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 }}}}>
                 <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white" variants={{ hidden:{}, visible:{ transition:{ staggerChildren: 0.08 }}}}>
                    {headline.map((word, i) =>
                        <motion.span key={i} className="inline-block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' }} }}>
                          {word}&nbsp;
                        </motion.span>)}
                 </motion.h1>
                 <motion.p className="mt-6 text-lg text-neutral-400 max-w-lg" variants={{hidden:{opacity:0}, visible:{opacity:1, transition:{delay:0.5}}}}>
                    Nova is the AI-native intelligence platform that turns complex datasets into actionable insights with the power of natural language.
                 </motion.p>
                 <motion.div className="mt-8" variants={{hidden:{opacity:0}, visible:{opacity:1, transition:{delay:0.7}}}}>
                    <motion.input type="email" placeholder="Enter your work email" className="w-full sm:w-auto px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder-neutral-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none"/>
                    <motion.button className="mt-4 sm:mt-0 sm:ml-4 px-6 py-3 font-semibold text-black bg-cyan-400 rounded-lg"
                      whileHover={{ scale: 1.05, y: -2}} whileTap={{ scale: 0.98 }}>
                      Get started <ChevronRight className="inline w-4 h-4"/>
                    </motion.button>
                 </motion.div>
              </motion.div>

              <TiltCard />
          </div>
      </section>
    );
}

const TiltCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const rotateX = useTransform(y, [-150, 150], [20, -20]);
    const rotateY = useTransform(x, [-150, 150], [-20, 20]);
  
    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const { width, height, left, top } = rect;
      x.set(e.clientX - (left + width / 2));
      y.set(e.clientY - (top + height / 2));
    };
  
    const handleMouseLeave = () => { x.set(0); y.set(0); };
    
    return(
       <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
           style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
           className="relative w-full h-96 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-end shadow-2xl shadow-cyan-500/10">
          <div style={{ transform: "translateZ(50px)" }} className="text-white">
             <h3 className="text-2xl font-bold">Revenue Q3</h3>
             <p className="text-4xl font-extrabold text-cyan-400 mt-2">$2.8M</p>
             <p className="text-green-400 text-sm font-semibold">+12.5% vs Q2</p>
          </div>
          <div style={{ transform: "translateZ(25px)" }} className="absolute bottom-8 right-8 text-xs text-neutral-500">
             <Bot className="w-4 h-4 mb-1" />
             AI Generated Insight
          </div>
       </motion.div>
    );
}

const LogoCloud = () => (
    <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-neutral-500 uppercase">Powering data teams at world-class companies</p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'].map(logo => (
                  <img key={logo} src={`https://cdn.worldvectorlogo.com/logos/${logo.toLowerCase()}${logo === 'Microsoft' || logo==='Amazon' ? '-2' : '-1'}.svg`} className="h-8 invert opacity-40 hover:opacity-80 transition-opacity" alt={`${logo} logo`} />
                ))}
            </div>
        </div>
    </div>
);


const SolutionSection = () => {
    return (
      <section className="py-28 relative">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/10 to-transparent"></div>
          <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-extrabold tracking-tighter">Break Through The Noise</h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto text-neutral-400">Your data holds the answers. Nova connects to all your sources and uses AI to surface the insights that matter—before you even know to ask.</p>
              <DataStreamVisualization />
          </div>
      </section>
    );
};


const DataStreamVisualization = () => {
    const streamItems = Array.from({ length: 50 });
    return (
        <div className="relative h-64 mt-12 w-full max-w-3xl mx-auto [mask-image:linear-gradient(to_right,transparent,white,transparent)] overflow-hidden">
            {streamItems.map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-8 md:w-12 bg-cyan-400/50 rounded-full"
                initial={{ x: '-100%', y: Math.random() * 256 - 128 }}
                animate={{ x: '100vw' }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5
                }}
              />
            ))}
        </div>
    );
}

const FeatureGrid = () => (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BentoCard icon={BrainCircuit} title="Natural Language Query" className="lg:col-span-2">
                <p className="text-neutral-400 text-sm">Ask questions in plain English. Nova understands your intent and generates complex queries and visualizations instantly.</p>
                <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm">
                    <span className="text-cyan-400">&gt;</span> Show me monthly revenue growth for product X...
                </div>
            </BentoCard>

            <BentoCard icon={BarChart3} title="Automated Dashboards">
                 <p className="text-neutral-400 text-sm">Real-time dashboards that build themselves. Nova surfaces key metrics based on your data patterns.</p>
                 <AnimatedLineChart/>
            </BentoCard>
          
            <BentoCard icon={Database} title="Connect Everything">
                 <p className="text-neutral-400 text-sm">Dozens of native integrations. From databases to SaaS tools, bring all your data into one unified view.</p>
                 <div className="mt-4 grid grid-cols-4 gap-4">
                    {['Google-BigQuery-icon','Snowflake_Logo','postgresql','mongodb-icon'].map(l=><img key={l} src={`https://cdn.worldvectorlogo.com/logos/${l}.svg`} className="w-8 h-8 opacity-80"/>)}
                 </div>
            </BentoCard>
          
            <BentoCard icon={Rocket} title="Predictive Models" className="lg:col-span-2">
                <p className="text-neutral-400 text-sm">Go beyond historical data. Leverage AI to forecast future trends, identify opportunities, and mitigate risks proactively.</p>
                <ParticleConstellation />
            </BentoCard>
        </div>
      </div>
    </section>
);

const BentoCard = ({ children, className, icon: Icon, title }: { children: React.ReactNode, className?: string, icon: React.ElementType, title: string}) => (
  <div className={`p-6 bg-black/40 border border-white/10 rounded-3xl ${className}`}>
     <Icon className="w-8 h-8 mb-4 text-cyan-400"/>
     <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
     {children}
  </div>
);

const AnimatedLineChart = () => {
  const ref = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [length, setLength] = useState(0);

  useEffect(() => {
    if(pathRef.current) {
        setLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 100 40" className="w-full h-24 mt-4">
        <path ref={pathRef}
            d="M 5 35 Q 25 5, 45 20 T 85 10"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="2"
            strokeDasharray={length}
            strokeDashoffset={inView ? 0 : length}
            style={{transition: inView ? 'stroke-dashoffset 2s ease-out' : 'none' }}
        />
    </svg>
  );
};


const ParticleConstellation = () => {
    const particles = Array.from({ length: 30 });
    return(
      <div className="relative w-full h-32 mt-4">
          {particles.map((_, i) => (
             <motion.div
               key={i}
               className="absolute rounded-full bg-cyan-400/50"
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 width: '3px',
                 height: '3px'
               }}
               animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
               }}
               transition={{
                   duration: Math.random() * 2 + 1,
                   repeat: Infinity,
                   repeatType: 'reverse',
                   ease: 'easeInOut'
               }}
             />
          ))}
      </div>
    );
};


const TestimonialMarquee = () => {
    const testimonials = [
        { quote: "Nova gave us superpowers. We now make data-driven decisions in minutes, not weeks.", author: "CEO, QuantumLeap" },
        { quote: "The natural language query is magic. It has completely democratized data access for our entire company.", author: "Head of Product, Orbit" },
        { quote: "We've tried every BI tool. Nova is the first one that feels like it was built for this decade.", author: "CTO, FusionWorks" },
        { quote: "Forecasting our revenue used to be guesswork. With Nova's predictive models, it's a science.", author: "CFO, Pinnacle" }
    ];
    return(
        <section id="testimonials" className="py-20 relative overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex animate-[marquee_40s_linear_infinite]">
              {[...testimonials, ...testimonials].map((t, i) =>(
                <div key={i} className="flex-shrink-0 w-80 md:w-96 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 mx-4">
                    <p>"{t.quote}"</p>
                    <p className="mt-4 font-semibold text-cyan-300">- {t.author}</p>
                </div>
              ))}
            </div>
        </section>
    );
};

const FinalCTA = () => (
     <section className="py-28 relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="max-w-2xl mx-auto text-center px-4 relative z-10">
           <h2 className="text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">Your Data's Next Chapter.</h2>
           <p className="mt-4 text-lg text-neutral-400">Unlock the potential hidden in your data. Start your journey with Nova today and see what the future holds.</p>
           <motion.a href="#"
             className="mt-8 inline-block px-8 py-3.5 font-semibold text-lg text-black bg-cyan-400 rounded-lg shadow-2xl shadow-cyan-400/20"
             whileHover={{ scale: 1.05, y: -3 }}
             transition={{ type: 'spring' }}
            >
              Start for Free
           </motion.a>
        </div>
     </section>
);


const Footer = () => (
    <footer className="w-full border-t border-white/5 bg-[#020010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center">
         <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} Nova AI, Inc.</p>
         <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'Docs'].map(link=>(
                 <a href="#" className="text-sm text-neutral-400 hover:text-white">{link}</a>
            ))}
         </div>
      </div>
    </footer>
);
