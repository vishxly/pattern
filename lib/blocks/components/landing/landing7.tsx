// lib/blocks/components/landing/landing7.tsx

'use client';

import { useState, useEffect, useRef, SVGProps } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { clsx } from 'clsx';
import Link from 'next/link';


const navLinks = [ { name: "Features", href: "#features" }, { name: "Workflow", href: "#workflow" }, { name: "Pricing", href: "#pricing" }];
const trustLogos = [ /* Simple URLs for easy customization */
    { src: "https://cdn.worldvectorlogo.com/logos/segment-2.svg", alt: "Segment" },
    { src: "https://cdn.worldvectorlogo.com/logos/datadog-icon.svg", alt: "Datadog" },
    { src: "https://cdn.worldvectorlogo.com/logos/intercom-2.svg", alt: "Intercom" },
    { src: "https://cdn.worldvectorlogo.com/logos/zapier.svg", alt: "Zapier" },
    { src: "https://cdn.worldvectorlogo.com/logos/notion-1.svg", alt: "Notion" },
    { src: "https://cdn.worldvectorlogo.com/logos/figma-1.svg", alt: "Figma" },
];
const features = [
    { title: "Real-time Data Sync", description: "Connect all your tools and experience a unified, real-time flow of information across your entire stack.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.622-3.385m-5.043-.025a15.998 15.998 0 01-3.388-1.621m-5.043.025a15.998 15.998 0 00-3.388-1.622m5.043-.025a15.998 15.998 0 01-1.622 3.385m3.388 1.621a15.998 15.998 0 01-1.622 3.385m5.043.025a15.998 15.998 0 00-3.388 1.622m5.043-.025a15.998 15.998 0 013.388 1.622m-5.043.025a15.998 15.998 0 003.388 1.622m-5.043.025a15.998 15.998 0 011.622-3.385" /></svg> },
    { title: "AI-Powered Insights", description: "Our intelligent engine analyzes your data streams to surface actionable insights and automate complex decisions.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H7.5A2.25 2.25 0 005.25 7.5v9a2.25 2.25 0 002.25 2.25zm0-9.495c1.683-.984 3.406-1.516 5.25-1.516s3.567.532 5.25 1.516" /></svg> },
    { title: "Collaborative Workspaces", description: "A shared environment where teams can build, test, and deploy integrations together, with granular permissions.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023 1.09-2.025 1.09-2.025a4.5 4.5 0 10-4.04-4.04c-1.026.57-2.027 1.09-2.027 1.09a4.5 4.5 0 104.04 4.04z" /></svg> },
];
const testimonials = [
    { quote: "Synapse transformed our data strategy. The real-time sync is a game-changer, and the insights are indispensable.", name: "Eleanor Vance", role: "Head of Data, Nexus Corp" },
    { quote: "The most intuitive and powerful integration platform I've ever used. We onboarded our entire team in a single afternoon.", name: "Marcus Chen", role: "Lead Engineer, Strata AI" },
    { quote: "Finally, a tool that respects developer workflow. Building complex automation pipelines is now a pleasure, not a chore.", name: "Sofia Al-Rashid", role: "Automation Architect, Digital Horizon" },
];


//=========== UI COMPONENTS ===========//
const SpotlightCard = ({ children, from = "rgba(99, 102, 241, 0.15)", to = "transparent" }: { children: React.ReactNode, from?: string, to?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0); const mouseY = useMotionValue(0);
    const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(clientX - left); mouseY.set(clientY - top);
    };
    const background = useTransform( mouseX, (x) => `radial-gradient(600px circle at ${x}px ${mouseY.get()}px, ${from}, ${to} 80%)`);
    return (<div ref={ref} onMouseMove={handleMouseMove} className="group relative rounded-xl border border-syn-border bg-syn-card p-8 shadow-2xl transition-shadow duration-300 hover:shadow-black/10">
         <motion.div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background }}/>
        {children}
      </div>
    );
};

const PricingToggle = ({ isYearly, setIsYearly }: { isYearly: boolean, setIsYearly: (val: boolean) => void }) => {
    return (
        <div className="relative mx-auto mt-6 flex w-fit items-center rounded-full border border-syn-border p-1 bg-syn-dark">
            <button onClick={() => setIsYearly(false)} className="relative z-10 rounded-full px-4 py-2 text-sm transition-colors text-syn-text-secondary hover:text-syn-text">Monthly</button>
            <button onClick={() => setIsYearly(true)} className="relative z-10 rounded-full px-4 py-2 text-sm transition-colors text-syn-text-secondary hover:text-syn-text">Yearly</button>
            <motion.div layoutId="pricing-toggle-highlighter" transition={{ type: "spring", stiffness: 300, damping: 30 }} className={clsx( "absolute inset-y-1 z-0 w-1/2 rounded-full bg-syn-border", { 'left-1': !isYearly, 'left-1/2': isYearly } )} />
            <span className="pointer-events-none absolute right-2 top-[-20px] -translate-y-full text-xs font-semibold text-syn-brand-primary">Save 20% Annually</span>
        </div>
    );
};


export default function Home() {
    const [isYearly, setIsYearly] = useState(false);
    
    return (
        <div className="w-full text-syn-text bg-syn-bg font-sans overflow-x-hidden">

            <header className="fixed top-0 left-0 right-0 z-50 p-4">
                 <div className="max-w-7xl mx-auto flex items-center justify-between p-2 rounded-full bg-black/30 border border-syn-border backdrop-blur-lg">
                    <Link href="/" className="flex items-center gap-2">
                        <svg className="w-8 h-8 text-syn-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span className="text-xl font-bold">Synapse</span>
                    </Link>
                     <nav className="hidden md:flex items-center gap-2">
                         {navLinks.map(link => (<Link key={link.href} href={link.href} className="px-4 py-2 text-sm text-syn-text-secondary hover:text-syn-text transition-colors rounded-lg">{link.name}</Link>))}
                     </nav>
                     <a href="#pricing" className="px-5 py-2 text-sm font-semibold text-syn-bg bg-syn-text hover:opacity-90 transition-opacity rounded-lg"> Get Started </a>
                </div>
             </header>
            
            <main>
                <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                    <div className="absolute inset-0 z-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
                        <HeroSVG />
                    </div>
                     
                    <div className="z-10 mt-16 sm:mt-0">
                         <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-syn-text to-syn-text-secondary bg-[length:200%_auto] animate-gradient-pan">
                           Unify Your Workflow
                        </motion.h1>
                        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="mt-6 max-w-2xl mx-auto text-lg text-syn-text-secondary">
                           Synapse is the central nervous system for your data. Integrate any tool, automate any process, and unlock insights at the speed of thought.
                        </motion.p>
                         <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 relative inline-block">
                           <a href="#pricing" className="relative z-10 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-syn-brand-primary to-syn-brand-secondary rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                             Start Building Free
                           </a>
                           <div className="absolute inset-0 rounded-full z-0 blur-xl animate-pulse-glow" />
                        </motion.div>
                         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} className="z-10 mt-16">
                             <p className="text-sm text-syn-text-secondary font-semibold uppercase tracking-wider">Trusted by teams shaping the future</p>
                             <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                                 {trustLogos.map((logo, i) => (
                                     <img key={i} src={logo.src} alt="Client Logo" className="h-7 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
                                 ))}
                             </div>
                        </motion.div>
                    </div>
                </section>
                
                <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">The Platform for Intelligent Integration</h2>
                    <p className="mt-4 text-lg text-syn-text-secondary max-w-xl mx-auto text-center">Go beyond simple automation. Build powerful, resilient, and intelligent workflows.</p>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                         {features.map((feature, i) => (<motion.div key={i} initial={{opacity:0, y: 50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay: i * 0.1}} viewport={{once: true}}><SpotlightCard from="rgba(99, 102, 241, 0.15)" to="rgba(168, 85, 247, 0.15)">
                                <div className="text-syn-brand-secondary mb-4 w-12 h-12">{feature.icon}</div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="mt-2 text-syn-text-secondary">{feature.description}</p>
                            </SpotlightCard></motion.div>))}
                    </div>
                </section>
                
                <section id="workflow" className="py-24">
                     <div className="max-w-4xl mx-auto text-center">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Your Workflow, Unified.</h2>
                         <p className="mt-4 text-lg text-syn-text-secondary max-w-xl mx-auto">Connect your tools with our visual builder and bring your ideal process to life in minutes.</p>
                     </div>
                     <WorkflowVisual />
                </section>
                
                <section id="pricing" className="py-24 bg-syn-dark">
                     <div className="max-w-6xl mx-auto px-4 text-center">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pricing that Adapts to You</h2>
                         <p className="mt-4 text-lg text-syn-text-secondary max-w-xl mx-auto">Start for free and scale as your needs evolve. No hidden costs.</p>
                         <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
                         <div className="mt-12 grid gap-8 lg:grid-cols-3 items-start">
                             <PricingTier isYearly={isYearly} plan="Personal" monthlyPrice={0} features={["5 Workflows", "1,000 Tasks/mo", "Community Support"]} />
                             <PricingTier isYearly={isYearly} plan="Team" monthlyPrice={79} features={["50 Workflows", "50,000 Tasks/mo", "Shared Workspaces", "Priority Support"]} isFeatured={true} />
                             <PricingTier isYearly={isYearly} plan="Enterprise" features={["Unlimited Workflows", "Custom Task Limits", "Dedicated Support", "SAML SSO"]} isCustom={true} />
                         </div>
                     </div>
                </section>
                 
                 <section id="testimonials" className="py-24 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Loved by Teams Worldwide</h2>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration:0.5, delay: i * 0.1}} viewport={{once: true}}
                                className="border border-syn-border rounded-xl p-8 bg-syn-card">
                                <p className="text-syn-text italic">"{t.quote}"</p>
                                <div className="mt-6">
                                    <p className="font-semibold">{t.name}</p>
                                    <p className="text-sm text-syn-brand-primary">{t.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                 </section>

                 <footer className="mt-24 py-16 px-4">
                     <div className="max-w-2xl mx-auto text-center">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Connect Everything. <br />
                           <span className="bg-clip-text text-transparent bg-gradient-to-r from-syn-brand-primary to-syn-brand-secondary">Automate Anything.</span>
                         </h2>
                         <p className="mt-6 text-lg text-syn-text-secondary">Join the platform that puts your data in motion. Sign up for free and run your first workflow in minutes.</p>
                         <div className="mt-8 relative inline-block">
                           <a href="#pricing" className="relative z-10 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-syn-brand-primary to-syn-brand-secondary rounded-full shadow-lg transition-transform duration-300 hover:scale-105"> Start Your Free Trial </a>
                           <div className="absolute inset-0 rounded-full z-0 blur-xl animate-pulse-glow" />
                         </div>
                     </div>
                     <div className="mt-16 pt-8 border-t border-syn-border text-center text-syn-text-secondary text-sm">
                        <p>&copy; {new Date().getFullYear()} Synapse Inc. All Rights Reserved.</p>
                     </div>
                 </footer>
            </main>
        </div>
    );
}

//=========== HELPER COMPONENTS ===========//

const HeroSVG = () => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
    const handleMouseMove = (event: React.MouseEvent) => {
        if (!ref.current) return;
        mouseX.set(event.clientX); mouseY.set(event.clientY);
    };
    const x = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 0], [-10, 10]);
    const y = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 0], [-10, 10]);

    return (
         <motion.div ref={ref} onMouseMove={handleMouseMove} style={{ x, y }} transition={{type:"spring", stiffness:100, damping:20}}
            className="absolute inset-0 z-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
            <svg className="absolute w-full h-full inset-0 text-syn-border/50">
                <circle cx="50%" cy="50%" r="20%" stroke="currentColor" fill="none" strokeWidth="1" style={{ strokeDasharray: "10, 10" }}/>
                <circle cx="50%" cy="50%" r="35%" stroke="currentColor" fill="none" strokeWidth="0.5" />
                {Array.from({length: 8}).map((_, i) => (<line key={i} x1="50%" y1="50%" x2="50%" y2="0" stroke="url(#line-gradient)" strokeWidth="1" style={{ transform: `rotate(${i*45}deg)`, transformOrigin: '50% 50%' }} />))}
                <motion.circle cx="50%" cy="50%" r="30" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1.5" fill="url(#node-glow)" className="animate-pulse-glow"/>
                <defs><radialGradient id="node-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)"/><stop offset="100%" stopColor="rgba(168, 85, 247, 0)"/></radialGradient><linearGradient id="line-gradient" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="rgba(23, 23, 23, 0)" /><stop offset="100%" stopColor="rgba(99, 102, 241, 0.5)" /></linearGradient></defs>
            </svg>
        </motion.div>
    );
};

const WorkflowVisual = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    return (
        <div ref={ref} className="mt-16 max-w-5xl mx-auto px-4 relative">
             <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <motion.div initial={{opacity:0, y:30}} animate={isInView ? {opacity:1, y:0} : {}} transition={{delay:0.2}}><SpotlightCard><h3 className="text-xl font-semibold">1. Connect</h3><p className="mt-2 text-syn-text-secondary">Link your tools with our one-click authenticators.</p></SpotlightCard></motion.div>
                <motion.div initial={{opacity:0, y:30}} animate={isInView ? {opacity:1, y:0} : {}} transition={{delay:0.4}}><SpotlightCard><h3 className="text-xl font-semibold">2. Build</h3><p className="mt-2 text-syn-text-secondary">Visually orchestrate data flows and trigger actions.</p></SpotlightCard></motion.div>
                <motion.div initial={{opacity:0, y:30}} animate={isInView ? {opacity:1, y:0} : {}} transition={{delay:0.6}}><SpotlightCard><h3 className="text-xl font-semibold">3. Automate</h3><p className="mt-2 text-syn-text-secondary">Deploy your workflow and let Synapse handle the rest.</p></SpotlightCard></motion.div>
            </div>
            {/* Animated Beams */}
             <svg className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 hidden md:block">
                 <motion.path d="M 16.66% 0, 50% 0" stroke="url(#beam-gradient)" strokeWidth="2" strokeLinecap="round" style={{strokeDasharray:300, strokeDashoffset:300}} animate={isInView ? {strokeDashoffset: 0} : {}} transition={{duration:1, delay:1, ease:"easeInOut"}}/>
                 <motion.path d="M 50% 0, 83.33% 0" stroke="url(#beam-gradient)" strokeWidth="2" strokeLinecap="round" style={{strokeDasharray:300, strokeDashoffset:300}} animate={isInView ? {strokeDashoffset: 0} : {}} transition={{duration:1, delay:1.5, ease:"easeInOut"}}/>
                 <defs><linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="300" y2="0"><stop stopColor="#6366f1" /><stop offset="1" stopColor="#a855f7" /></linearGradient></defs>
            </svg>
        </div>
    );
}

const PricingTier = ({ plan, monthlyPrice = 0, features, isFeatured = false, isCustom = false, isYearly = false }: { plan:string, monthlyPrice?:number, features:string[], isFeatured?:boolean, isCustom?:boolean, isYearly?:boolean }) => {
    const yearlyPrice = Math.round((monthlyPrice * 12) * 0.8);
    return (
     <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: isFeatured ? 0.2 : 0 }}
        className={clsx( "relative p-8 rounded-2xl border flex flex-col h-full", isFeatured ? "bg-syn-card border-syn-brand-primary shadow-2xl shadow-syn-brand-primary/10" : "bg-syn-card/50 border-syn-border" )} >
        {isFeatured && <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-syn-brand-primary to-syn-brand-secondary text-white text-xs font-bold px-4 py-1 rounded-full">POPULAR</div>}
        <h3 className="text-xl font-semibold">{plan}</h3>
        {isCustom ? ( <p className="mt-4 text-4xl font-bold">Custom</p> ) : (
            <div className="flex items-end mt-4"><p className="text-4xl font-bold">${isYearly ? (yearlyPrice / 12) : monthlyPrice}</p><span className="ml-2 text-syn-text-secondary">/ month</span></div>)}
        <ul className="mt-8 space-y-3 flex-grow text-left text-syn-text-secondary">{features.map((f,i) => (<li key={i} className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-syn-brand-primary flex-shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg><span>{f}</span></li>))}</ul>
        <a href="#" className={clsx("w-full mt-10 py-3 text-center rounded-lg font-semibold transition-all duration-300", isFeatured ? "bg-gradient-to-r from-syn-brand-primary to-syn-brand-secondary text-white hover:opacity-90" : "bg-syn-border text-syn-text hover:bg-opacity-80")}>{isCustom ? "Contact Sales" : "Choose Plan"}</a>
    </motion.div>
    );
};
