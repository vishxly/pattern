"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Book, GitMerge, Layers, Shield, Zap, ChevronsRight
} from 'lucide-react';

//=========== Keyframe Animations & Global Styles ===========//
const keyframes = `
  @keyframes background-pan { 0% { background-position: 15% 50%; } 100% { background-position: 0% 50%; } }
  @keyframes subtle-gradient-shine {
    0% { background-position: -100% 0; }
    100% { background-position: 100% 0; }
  }
`;

//=========== Main Landing Page Component ===========//
export default function ArcLandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className="bg-[#050505] text-neutral-200 font-sans antialiased selection:bg-indigo-500/30 overflow-x-hidden">
            <style>{keyframes}</style>
            
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main>
                <HeroSection />
                <LogoCloud />
                <UnifiedPlatformSection />
                <FeatureTabsSection />
                <TestimonialSection />
                <FinalCTA />
            </main>
            
            <Footer />
        </div>
    );
}

//=========== Navbar Component ===========//
const Navbar = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: Function }) => {
    return (
        <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"/>
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Arc</span>
                </a>
                <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                    <a href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</a>
                    <a href="#integrations" className="text-neutral-300 hover:text-white transition-colors">Integrations</a>
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors">Docs</a>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">Login</a>
                    <motion.a 
                        href="#" 
                        className="px-4 py-2 text-sm font-semibold text-white bg-white/10 rounded-lg border border-white/10"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.95 }}>
                        Book a Demo
                    </motion.a>
                </div>
                 <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -mr-2 text-white">
                       <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></div>
                       <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></div>
                    </button>
                 </div>
            </nav>
        </header>
    );
};


//=========== Hero Section with Interactive Command Dial ===========//
const HeroSection = () => {
    const features = [
        { name: 'Plan', icon: Book, text: 'Collaborative docs and project roadmaps.' },
        { name: 'Develop', icon: GitMerge, text: 'Integrated with Git. Branch, commit, and merge with ease.' },
        { name: 'Deploy', icon: Zap, text: 'Automated CI/CD pipelines to production.' },
        { name: 'Secure', icon: Shield, text: 'Continuous security monitoring and compliance.' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [features.length]);

    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 }}};
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' as const }}};

    return(
        <section className="relative min-h-screen flex items-center pt-16 bg-grid-pattern">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#050505] to-[#050505]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
                        The OS for Modern Software Teams.
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 text-lg text-neutral-400 max-w-lg">
                        Arc unifies your entire workflow—from planning and development to deployment and security—into a single, elegant command center.
                    </motion.p>
                     <motion.div variants={itemVariants} className="mt-8 flex gap-4">
                       <motion.a href="#"
                         className="relative px-6 py-3 font-semibold text-white overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg"
                         whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(124, 58, 237, 0.5)'}}>
                         <span className="relative z-10">Book a Demo <ArrowRight className="inline w-4 h-4"/></span>
                         <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-[subtle-gradient-shine_2s_infinite]"></span>
                       </motion.a>
                    </motion.div>
                </motion.div>

                 <div className="w-full h-96 flex items-center justify-center">
                    <div className="relative w-80 h-80">
                         {features.map((feature, i) => {
                            const angle = (i / features.length) * 360 - 90;
                            const isActive = i === activeIndex;
                            return (
                                <motion.button key={i} onClick={() => setActiveIndex(i)}
                                    className="absolute w-16 h-16 top-1/2 left-1/2 -mt-8 -ml-8 rounded-full flex items-center justify-center transition-colors duration-300"
                                    animate={{ 
                                        rotate: angle, 
                                        x: 130 * Math.cos(angle * Math.PI / 180),
                                        y: 130 * Math.sin(angle * Math.PI / 180),
                                        scale: isActive ? 1.2 : 1
                                    }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
                                    <div className={`p-3 rounded-full border transition-all duration-300 ${isActive ? 'bg-purple-600 border-purple-400 text-white' : 'bg-neutral-800 border-neutral-700 text-neutral-400'}`}>
                                        <feature.icon className="w-6 h-6"/>
                                    </div>
                                </motion.button>
                            )
                         })}

                         <div className="absolute w-56 h-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-full flex items-center justify-center p-4">
                             <AnimatePresence mode="wait">
                                <motion.div key={activeIndex}
                                  className="text-center"
                                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                    <p className="font-bold text-lg text-white">{features[activeIndex].name}</p>
                                    <p className="text-sm text-neutral-400">{features[activeIndex].text}</p>
                                </motion.div>
                             </AnimatePresence>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const LogoCloud = () => {
    const logos = ['notion', 'figma', 'github', 'slack', 'aws'];
    return (
      <div className="py-16 bg-[#050505]">
          <div className="max-w-5xl mx-auto px-4">
              <p className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-widest">Trusted By The Best Teams</p>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                 {logos.map(logo => (
                     <img key={logo} src={`https://cdn.worldvectorlogo.com/logos/${logo}${logo === 'github' ? '-icon' : ''}.svg`} className="h-8 invert opacity-50 hover:opacity-100 transition-opacity" alt={`${logo} logo`} />
                 ))}
              </div>
          </div>
      </div>
    );
};

//=========== Unified Platform Section ===========//
const UnifiedPlatformSection = () => {
    return(
      <section className="py-28 relative">
          <div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
          <div className="max-w-6xl mx-auto px-4 text-center">
             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Your Central Command Center.</h2>
             <p className="mt-4 text-lg max-w-2xl mx-auto text-neutral-400">Stop switching contexts. Start building momentum. Arc brings every part of your process into one lightning-fast, cohesive interface.</p>
             <motion.div className="mt-12 mx-auto max-w-5xl p-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, type: 'spring' }} viewport={{once: true, amount: 0.5}}>
                <div className="p-1 bg-[#050505] rounded-[11px]">
                  <div className="h-96 w-full rounded-lg bg-black border border-white/5 bg-[url(https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800)] bg-cover bg-center"></div>
                </div>
             </motion.div>
          </div>
      </section>
    )
}


//=========== Interactive Feature Tabs ===========//
const FeatureTabsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { title: "Smart Docs", icon: Book, content: { headline: "Where Plans Take Shape", text: "Create beautiful, collaborative documents. From technical specs to meeting notes, Arc Docs are fast, real-time, and integrated with your tasks.", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800" }},
        { title: "CI/CD Pipelines", icon: Layers, content: { headline: "Deployments on Autopilot", text: "Go from Git push to live deployment in seconds. Our powerful, YAML-configurable pipelines are secure, fast, and easy to debug.", image: "https://images.unsplash.com/photo-1634994237199-52b861616c68?q=80&w=800" }},
        { title: "Git Workflow", icon: GitMerge, content: { headline: "Development at the Speed of Thought", text: "A first-class Git experience is built right in. Manage branches, review pull requests, and resolve conflicts, all within Arc.", image: "https://images.unsplash.com/photo-1587183626249-ab28a9390237?q=80&w=800" }}
    ];
    
    return (
      <section id="features" className="py-20 bg-neutral-900/70">
          <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-extrabold tracking-tighter">Everything You Need.</h2>
              </div>
              
              <div className="flex justify-center border-b border-white/10 mb-8">
                  {tabs.map((tab, i) => (
                      <button key={tab.title} onClick={() => setActiveTab(i)}
                         className={`relative px-6 py-3 text-sm font-medium transition-colors ${activeTab === i ? 'text-white' : 'text-neutral-400 hover:text-white'}`}>
                        <div className="flex items-center gap-2"><tab.icon className="w-4 h-4" />{tab.title}</div>
                        {activeTab === i && <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500" layoutId="tab-underline"/>}
                      </button>
                  ))}
              </div>

              <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                       <div>
                         <h3 className="text-2xl font-bold text-white">{tabs[activeTab].content.headline}</h3>
                         <p className="mt-4 text-neutral-400">{tabs[activeTab].content.text}</p>
                       </div>
                       <div className="h-80 rounded-lg overflow-hidden border border-white/10">
                          <img src={tabs[activeTab].content.image} className="w-full h-full object-cover" alt={tabs[activeTab].content.headline}/>
                       </div>
                    </motion.div>
                  </AnimatePresence>
              </div>
          </div>
      </section>
    );
};

//=========== Testimonials Section with Glassmorphism ===========//
const TestimonialSection = () => {
    return(
        <section className="py-28 relative">
           <div className="text-center mb-16 max-w-3xl mx-auto px-4">
             <h2 className="text-4xl font-extrabold tracking-tighter">Loved by Teams That Ship. Fast.</h2>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {[ {name: "Elena Rodriguez", role: "Head of Engineering, Nova", text: "Arc completely transformed our workflow. We're shipping twice as fast, with more confidence than ever."}, {name: "James Cole", role: "CTO, Quantum", text: "The unified platform is a game-changer. No more context switching, just pure, unadulterated flow state."}, {name: "Samantha Lee", role: "Lead Developer, Fusion", text: "As a developer, I love it. The Git integration is seamless, and the automated pipelines are magical."} ].map(t=>(
                <div key={t.name} className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                  <p className="text-neutral-300">"{t.text}"</p>
                  <div className="mt-4">
                     <p className="font-semibold text-white">{t.name}</p>
                     <p className="text-sm text-neutral-400">{t.role}</p>
                  </div>
                </div>
              ))}
           </div>
        </section>
    );
}

//=========== Final CTA ===========//
const FinalCTA = () => (
    <section className="py-28">
      <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Start Building Your Best Work.</h2>
          <p className="mt-4 text-neutral-400">Join the best teams, shipping the best products. Sign up for Arc today, and build with momentum.</p>
           <motion.a href="#"
              className="mt-8 relative inline-flex items-center gap-2 px-8 py-3 font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }}>
             Sign Up For Free <ChevronsRight className="w-5 h-5"/>
           </motion.a>
      </div>
    </section>
)

//=========== Footer ===========//
const Footer = () => (
    <footer className="w-full border-t border-white/10 bg-[#050505]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center">
         <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} Arc Technologies Inc.</p>
          <div className="flex gap-6">
             {['Twitter', 'GitHub', 'LinkedIn'].map(link=>(
                 <a key={link} href="#" className="text-sm text-neutral-400 hover:text-white">{link}</a>
             ))}
          </div>
       </div>
    </footer>
)
