'use client';

import { useState, useEffect, useRef, SVGProps } from 'react';
import { motion, useMotionValue, useInView, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import Link from 'next/link';

//=========== DATA ===========//
const navLinks = [ { name: "Features", href: "#features" }, { name: "Pricing", href: "#pricing" }];

//=========== HELPER COMPONENTS ===========//

// The custom cursor follower dot
const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return <div ref={cursorRef} className="fixed w-3 h-3 bg-atlas-brand rounded-full pointer-events-none z-[100] transition-transform duration-75 ease-out"></div>
};

// Animated command menu for the hero section
const CommandMenu = () => {
    const commands = ["Initialize project...", "Fetching dependencies...", "Deploying to edge network...", "Optimizing assets...", "✅ Deployment successful!"];
    const [currentCommand, setCurrentCommand] = useState(commands[0]);
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => { i = (i + 1) % commands.length; setCurrentCommand(commands[i]); }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-2xl bg-atlas-bg border border-atlas-border rounded-lg shadow-2xl p-4 mt-12 flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-atlas-brand"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
            <AnimatePresence mode="wait">
                <motion.p key={currentCommand} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}
                    className="font-mono text-sm text-atlas-text-secondary">{currentCommand}</motion.p>
            </AnimatePresence>
        </div>
    );
};


//=========== MAIN PAGE COMPONENT ===========//
export default function Home() {
    return (
        <div className="w-full text-atlas-text bg-atlas-dark font-sans overflow-x-hidden antialiased">
            <CustomCursor />
            
            <header className="fixed top-4 left-0 right-0 z-50 max-w-6xl mx-auto px-4">
                 <div className="flex items-center justify-between p-2 rounded-2xl bg-black/30 border border-atlas-border backdrop-blur-lg">
                    <Link href="/" className="flex items-center gap-2">
                        <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, type: 'spring' }} className="w-8 h-8 rounded-full border-2 border-atlas-brand flex items-center justify-center font-bold">A</motion.div>
                        <span className="text-xl font-bold">Atlas</span>
                    </Link>
                     <nav className="hidden md:flex items-center gap-2">
                         {navLinks.map(link => (<Link key={link.href} href={link.href} className="px-4 py-2 text-sm text-atlas-text-secondary hover:text-atlas-text transition-colors rounded-lg">{link.name}</Link>))}
                     </nav>
                     <a href="#" className="px-5 py-2 text-sm font-semibold text-atlas-text bg-atlas-brand hover:opacity-90 transition-opacity rounded-lg shadow-[0px_0px_20px_-5px_theme(colors.atlas.brand)]"> Sign Up </a>
                </div>
             </header>
            
            <main>
                <section className="relative min-h-screen flex flex-col items-center justify-center p-4 pt-32 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"/>
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-atlas-dark" />
                    
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }} className="z-20 text-center">
                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-atlas-text to-atlas-text-secondary">
                            Orchestrate Complexity.
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg text-atlas-text-secondary">
                            Atlas provides the primitives for building powerful, scalable, and reliable software. Move faster, with confidence.
                        </p>
                        <CommandMenu />
                    </motion.div>
                </section>

                <section id="features" className="py-24 px-4 max-w-6xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">A Better Way to Build</h2>
                    </AnimatedSection>
                    
                     <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
                         <AnimatedSection delay={0.1}>
                             <div className="p-8 bg-atlas-bg border border-atlas-border rounded-xl">
                                <h3 className="text-2xl font-bold flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-atlas-brand"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>Developer-First API</h3>
                                <p className="mt-4 text-atlas-text-secondary">A meticulously designed API that feels like an extension of your own codebase. Elegant, powerful, and ridiculously fast.</p>
                             </div>
                         </AnimatedSection>
                         <AnimatedSection delay={0.2}>
                            <CodeComparison />
                         </AnimatedSection>
                     </div>
                </section>
                
                 <section id="pricing" className="py-24">
                     <div className="max-w-6xl mx-auto px-4 text-center">
                        <AnimatedSection>
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Fair Pricing for Teams of All Sizes</h2>
                         <p className="mt-4 text-lg text-atlas-text-secondary max-w-xl mx-auto">Start for free and scale affordably as you grow. No enterprise contracts needed.</p>
                        </AnimatedSection>
                         <div className="mt-16 grid gap-8 lg:grid-cols-3">
                             <PricingTier plan="Starter" price={0} features={["1 Project", "100k API Calls/mo", "Community Support"]} delay={0.1} />
                             <PricingTier plan="Pro" price={99} features={["10 Projects", "20M API Calls/mo", "Email Support", "Team Collaboration"]} isFeatured={true} delay={0.2} />
                             <PricingTier plan="Scale" price={499} features={["Unlimited Projects", "100M+ API Calls/mo", "Dedicated Support", "SLA & SSO"]} delay={0.3}/>
                         </div>
                     </div>
                 </section>
                
                <footer className="mt-24 py-16 px-4 border-t border-atlas-border bg-atlas-bg">
                     <div className="max-w-2xl mx-auto text-center">
                         <h2 className="text-4xl font-bold tracking-tight">Ready to Accelerate?</h2>
                         <p className="mt-4 text-lg text-atlas-text-secondary">Create an account and start building with Atlas today. Free forever for personal projects.</p>
                         <div className="mt-8">
                             <a href="#" className="px-8 py-4 font-semibold text-white bg-atlas-brand rounded-lg shadow-[0px_0px_30px_-5px_theme(colors.atlas.brand)] transition-transform hover:scale-105 inline-block">Start Your Free Project</a>
                        </div>
                     </div>
                     <div className="mt-16 pt-8 text-center text-atlas-text-secondary text-sm">
                        <p>&copy; {new Date().getFullYear()} Atlas Corp. All Rights Reserved.</p>
                     </div>
                </footer>
            </main>
        </div>
    );
}

//=========== HELPER COMPONENTS ===========//

// Section animation wrapper
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; }) => {
    const ref = useRef(null); const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (<motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}>
            {children}
        </motion.div>
    );
};

// Interactive Before/After code comparison
const CodeComparison = () => {
    const [isAtlas, setIsAtlas] = useState(true);
    const oldWayCode = `function processData(data) {\n  let result = [];\n  for (let i = 0; i < data.length; i++) {\n    if (data[i].active) {\n      // ...complex logic\n      result.push(data[i]);\n    }\n  }\n  return result;\n}`;
    const atlasWayCode = `import { Atlas } from '@atlas/sdk';\n\nAtlas.connect(API_KEY)\n  .from('users')\n  .filter('active', true)\n  .select('*')\n  .stream();`;
    
    return (
        <div className="bg-atlas-bg border border-atlas-border rounded-xl p-4 min-h-[250px] relative overflow-hidden">
             <div className="flex justify-center mb-4 border-b border-atlas-border">
                <button onClick={() => setIsAtlas(false)} className={`px-4 py-2 text-sm transition-colors rounded-t-md ${!isAtlas ? 'bg-atlas-border text-atlas-text' : 'text-atlas-text-secondary'}`}>The Old Way</button>
                <button onClick={() => setIsAtlas(true)} className={`px-4 py-2 text-sm transition-colors rounded-t-md ${isAtlas ? 'bg-atlas-border text-atlas-text' : 'text-atlas-text-secondary'}`}>The Atlas Way</button>
            </div>
            <AnimatePresence mode="wait">
                 <motion.pre key={isAtlas ? 'atlas' : 'old'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                    className="text-sm font-mono whitespace-pre-wrap">
                    <code>{isAtlas ? atlasWayCode : oldWayCode}</code>
                 </motion.pre>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-atlas-brand/20 to-transparent pointer-events-none animate-shine opacity-20"/>
        </div>
    );
};

// Pricing card component
const PricingTier = ({ plan, price, features, isFeatured = false, isCustom = false, delay=0 }: { plan:string, price?:number, features:string[], isFeatured?:boolean, isCustom?:boolean, delay?: number }) => (
     <AnimatedSection delay={delay}>
     <div className={clsx( "relative p-8 rounded-xl border flex flex-col h-full", isFeatured ? "bg-atlas-card border-atlas-brand shadow-2xl shadow-atlas-brand/10" : "bg-atlas-card border-atlas-border" )}>
        {isFeatured && <div className="absolute top-0 right-8 -translate-y-1/2 bg-atlas-brand text-white text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED</div>}
        <h3 className="text-xl font-semibold">{plan}</h3>
        {isCustom ? ( <p className="mt-4 text-2xl font-semibold">Contact Us</p> ) : (
            <div className="flex items-end mt-4"><p className="text-5xl font-extrabold">${price}</p><span className="ml-2 text-atlas-text-secondary">/ month</span></div>)}
        <ul className="mt-8 space-y-3 flex-grow text-left text-atlas-text-secondary">
            {features.map((f,i) => (<li key={i} className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-atlas-brand flex-shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg><span>{f}</span></li>))}
        </ul>
        <a href="#" className={clsx("w-full mt-10 py-3 text-center rounded-lg font-semibold transition-all duration-300", isFeatured ? "bg-atlas-brand text-white hover:opacity-90 shadow-[0px_0px_20px_-10px_theme(colors.atlas.brand)]" : "bg-atlas-border text-atlas-text hover:bg-opacity-80")}>
            {isCustom ? "Contact Sales" : "Get Started"}
        </a>
    </div>
    </AnimatedSection>
);
