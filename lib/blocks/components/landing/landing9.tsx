'use client';

import { useState, useRef, SVGProps } from 'react';
import { motion, useScroll, useInView, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import Link from 'next/link';

//=========== DATA (Easily Customizable) ===========//
const navLinks = [ { name: "Features", href: "#features" }, { name: "How It Works", href: "#workflow" }, { name: "Pricing", href: "#pricing" }];
const testimonials = [
    { quote: "Chroma isn't just software; it's a new way of thinking about our data. The clarity it brings to complex processes is simply astounding.", name: "Sarah Jenkins", role: "Head of Analytics, BrightData" },
    { quote: "The user experience is flawless. It feels less like a tool and more like an extension of our own team. Our productivity has doubled.", name: "Michael Chou", role: "Product Lead, Quantum Inc." },
    { quote: "A masterpiece of design and functionality. It has fundamentally changed how we approach our workflow.", name: "Amelia Rodriguez", role: "Creative Director, Visionary Studio" }
];


//=========== UI COMPONENTS ===========//

// The interactive, draggable glass spheres for the hero section
const DraggableSphere = ({ constraints, size, color, initialPos, delay=0 }: {
    constraints: React.RefObject<HTMLDivElement | null>;
    size: string;
    color: string;
    initialPos: Record<string, string>;
    delay?: number;
}) => (
    <motion.div
        drag dragConstraints={constraints} dragElastic={0.6}
        className="absolute cursor-grab active:cursor-grabbing"
        initial={{ opacity: 0, scale: 0.5, ...initialPos }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: delay, type: 'spring' }}
    >
        <div className={clsx("rounded-full animate-float", size)}
            style={{
                background: `radial-gradient(circle at 30% 30%, ${color}, #ffffff)`,
                boxShadow: `0 0 40px 10px ${color}66`,
            }} />
    </motion.div>
);


//=========== MAIN PAGE COMPONENT ===========//
export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="w-full text-chroma-text bg-chroma-bg font-sans overflow-x-hidden">
            <header className="fixed top-4 left-0 right-0 z-50 max-w-5xl mx-auto px-2">
                 <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center justify-between p-2 rounded-2xl border border-chroma-border bg-chroma-card/80 backdrop-blur-xl shadow-lg">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400"/>
                        <span className="text-xl font-bold text-chroma-text">Chroma</span>
                    </Link>
                     <nav className="hidden md:flex items-center gap-2">
                         {navLinks.map(link => (<Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-chroma-text-secondary hover:text-chroma-text transition-colors rounded-lg">{link.name}</Link>))}
                     </nav>
                     <a href="#pricing" className="px-5 py-2 text-sm font-semibold text-white bg-chroma-primary hover:opacity-90 transition-opacity rounded-lg"> Get Started </a>
                </motion.nav>
            </header>

            <main>
                <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(150,150,220,0.1),transparent_60%)] bg-[length:400%_400%] animate-aurora"/>
                    
                    {/* Interactive Glass Spheres */}
                    <DraggableSphere constraints={heroRef} size="w-32 h-32" color="#a855f7" initialPos={{ top: "15%", left: "15%" }} delay={0.6} />
                    <DraggableSphere constraints={heroRef} size="w-48 h-48" color="#3b82f6" initialPos={{ top: "60%", left: "20%" }} delay={0.8} />
                    <DraggableSphere constraints={heroRef} size="w-24 h-24" color="#22d3ee" initialPos={{ top: "25%", right: "20%" }} delay={1.0} />
                    <DraggableSphere constraints={heroRef} size="w-40 h-40" color="#f471b5" initialPos={{ bottom: "15%", right: "15%" }} delay={1.2} />
                     
                    <div className="relative z-10 text-center">
                        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-5xl md:text-8xl font-bold tracking-tight text-chroma-text">
                            Find Clarity in Complexity.
                        </motion.h1>
                        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="mt-6 max-w-2xl mx-auto text-lg text-chroma-text-secondary">
                            Chroma is the revolutionary new platform that transforms your chaotic data into beautiful, actionable insights. See your workflow in a new light.
                        </motion.p>
                         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} className="mt-8">
                             <a href="#pricing" className="group relative px-8 py-4 text-lg font-semibold text-white bg-chroma-primary rounded-xl overflow-hidden">
                                <span className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent transition-transform duration-300 group-hover:scale-y-150" />
                                <span className="relative">Start Your Free Trial</span>
                            </a>
                        </motion.div>
                    </div>
                </section>

                <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A Spectrum of Possibilities</h2>
                        <p className="mt-4 text-lg text-chroma-text-secondary max-w-xl mx-auto">Discover the core features that make Chroma the most powerful tool in its class.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <GlowingBorderCard title="Unified Dashboard" description="Bring all your metrics into one stunning, customizable view." />
                        <GlowingBorderCard title="Predictive AI" description="Leverage machine learning to forecast trends and identify opportunities." />
                        <GlowingBorderCard title="Seamless Integrations" description="Connect with hundreds of tools you already use, in just a few clicks." />
                    </div>
                </section>
                
                <section id="workflow" className="py-24">
                     <div className="max-w-4xl mx-auto text-center">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Your Workflow, Illuminated.</h2>
                         <p className="mt-4 text-lg text-chroma-text-secondary max-w-xl mx-auto">From raw data to final insight in three effortless steps.</p>
                     </div>
                     <WorkflowVisual />
                </section>

                <section id="pricing" className="py-24 bg-white/50">
                     <div className="max-w-6xl mx-auto px-4 text-center">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Simple Plans, Powerful Results</h2>
                         <p className="mt-4 text-lg text-chroma-text-secondary max-w-xl mx-auto">Choose a plan that scales with you. No hidden fees. 14-day free trial on all paid plans.</p>
                         
                         <div className="mt-12 grid gap-8 lg:grid-cols-3 items-stretch">
                             <PricingTier plan="Personal" monthlyPrice={0} features={["1 Workspace", "3 Connected Sources", "Basic Analytics"]} />
                             <PricingTier plan="Pro" monthlyPrice={59} features={["5 Workspaces", "20 Connected Sources", "AI Insights Engine", "Team Collaboration"]} isFeatured={true} />
                             <PricingTier plan="Enterprise" features={["Unlimited Everything", "Dedicated Support", "SAML SSO & Audit Logs"]} isCustom={true} />
                         </div>
                     </div>
                </section>
                
                <footer className="py-24">
                     <div className="max-w-xl mx-auto text-center px-4">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to See Clearly?</h2>
                         <p className="mt-6 text-lg text-chroma-text-secondary">Start your free trial today and discover what Chroma can do for you. No credit card required.</p>
                         <div className="mt-8">
                             <a href="#pricing" className="group relative px-8 py-4 text-lg font-semibold text-white bg-chroma-primary rounded-xl overflow-hidden">
                                <span className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent transition-transform duration-300 group-hover:scale-y-150" />
                                <span className="relative">Start Building for Free</span>
                            </a>
                        </div>
                     </div>
                     <div className="mt-16 pt-8 border-t border-gray-200 text-center text-chroma-text-secondary text-sm">
                        <p>&copy; {new Date().getFullYear()} Chroma Labs Inc. All Rights Reserved.</p>
                     </div>
                 </footer>

            </main>
        </div>
    );
}

//=========== HELPER COMPONENTS ===========//

const GlowingBorderCard = ({ title, description }: { title: string, description: string }) => (
    <motion.div initial={{opacity:0, y: 50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} viewport={{once: true, amount: 0.3}}
        className="relative p-8 rounded-2xl bg-chroma-card border border-chroma-border shadow-lg group">
        <div className="absolute inset-0.5 rounded-2xl bg-chroma-bg z-0"/>
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
             <div className="absolute -inset-2 animate-border-spin rounded-3xl [background:conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#3b82f6_50%,#22d3ee_100%)]"/>
        </div>
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-chroma-text">{title}</h3>
            <p className="mt-2 text-chroma-text-secondary">{description}</p>
        </div>
    </motion.div>
);

const WorkflowVisual = () => {
    const ref = useRef<HTMLDivElement>(null); const isInView = useInView(ref, { once: true, amount: 0.4 });
    const lineVariants = { hidden: { pathLength: 0 }, visible: { pathLength: 1 } };
    return (<div ref={ref} className="mt-20 max-w-5xl mx-auto px-4 relative">
             <div className="grid md:grid-cols-3 gap-y-16 relative z-10">
                <WorkflowStep num="1" title="Connect" description="Link your data sources in seconds." delay={0.2} isInView={isInView} />
                <WorkflowStep num="2" title="Visualize" description="Build insightful dashboards with our drag & drop editor." delay={0.4} isInView={isInView}/>
                <WorkflowStep num="3" title="Accelerate" description="Share insights and drive decisions across your team." delay={0.6} isInView={isInView}/>
            </div>
            <svg className="absolute top-10 left-0 w-full h-full hidden md:block" preserveAspectRatio="none">
                 <motion.path d="M 16.66% 0, 50% 0" stroke="url(#beam)" strokeWidth="2" strokeLinecap="round" variants={lineVariants} initial="hidden" animate={isInView ? "visible" : ""} transition={{ duration: 1, delay: 0.8, ease: "easeInOut"}} />
                 <motion.path d="M 50% 0, 83.33% 0" stroke="url(#beam)" strokeWidth="2" strokeLinecap="round" variants={lineVariants} initial="hidden" animate={isInView ? "visible" : ""} transition={{ duration: 1, delay: 1.2, ease: "easeInOut"}}/>
                 <defs><linearGradient id="beam" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="300" y2="0"><stop stopColor="#a855f7"/><stop offset="1" stopColor="#3b82f6"/></linearGradient></defs>
            </svg>
        </div>);
}

const WorkflowStep = ({ num, title, description, delay, isInView }: { num: string; title: string; description: string; delay: number; isInView: boolean }) => (
    <motion.div initial={{opacity:0, y:30}} animate={isInView ? {opacity:1, y:0} : {}} transition={{delay}} className="text-center px-4">
         <div className="relative w-16 h-16 bg-white/80 border-2 border-white rounded-full flex items-center justify-center font-bold text-2xl text-chroma-primary mx-auto shadow-lg backdrop-blur-sm">
            {num}
            <div className="absolute inset-0 rounded-full border border-chroma-border"/>
         </div>
        <h3 className="mt-4 text-xl font-bold text-chroma-text">{title}</h3>
        <p className="mt-2 text-chroma-text-secondary">{description}</p>
    </motion.div>
);

const PricingTier = ({ plan, monthlyPrice = 0, features, isFeatured = false, isCustom = false }: {
    plan: string;
    monthlyPrice?: number;
    features: string[];
    isFeatured?: boolean;
    isCustom?: boolean;
}) => {
    // A simplified state management for demo. A real app would pass state down from the toggle.
    const isYearly = false; 
    return (
     <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: isFeatured ? 0.2 : 0 }}
        className={clsx( "relative p-8 rounded-2xl flex flex-col h-full bg-chroma-card border border-chroma-border shadow-lg backdrop-blur-xl", { 'border-chroma-primary': isFeatured })}>
        {isFeatured && <div className="absolute top-0 right-8 -translate-y-1/2 bg-chroma-primary text-white text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED</div>}
        <h3 className="text-xl font-bold text-chroma-text">{plan}</h3>
        {isCustom ? ( <p className="mt-4 text-2xl font-semibold">Contact Us</p> ) : (
            <div className="flex items-end mt-4"><p className="text-4xl font-bold">${monthlyPrice}</p><span className="ml-2 text-chroma-text-secondary">/ month</span></div>)}
        <ul className="mt-8 space-y-3 flex-grow text-chroma-text-secondary">{features.map((f,i) => (<li key={i} className="flex items-center gap-3"><span className="text-chroma-primary">&bull;</span><span>{f}</span></li>))}</ul>
        <a href="#" className={clsx("w-full mt-10 py-3 text-center rounded-lg font-semibold transition-all duration-300", isFeatured ? "bg-chroma-primary text-white hover:opacity-90" : "bg-white hover:bg-gray-100 text-chroma-text")}>{isCustom ? "Contact Sales" : "Choose Plan"}</a>
    </motion.div>
    )
};
