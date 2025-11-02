'use client';

import React, { useState, useRef, useEffect, FC, ReactNode } from "react";
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Check, Plus, Minus, Cpu, Shield, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function for robust class name management
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- TYPE DEFINITIONS ---
interface Tab { id: string; label: string; icon: React.ElementType; content: ReactNode; }
interface FAQItem { question: string; answer: string; }

// --- UI COMPONENTS with Microinteractions ---

const Button = ({ children }: { children: ReactNode }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-magenta-500 to-purple-600 overflow-hidden"
    >
        <span className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10">{children}</span>
    </motion.button>
);

const GlassCard = ({ children, className }: { children: ReactNode; className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useSpring(0.5, { stiffness: 400, damping: 20 });
    const mouseY = useSpring(0.5, { stiffness: 400, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        mouseX.set(x / width);
        mouseY.set(y / height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };
    
    const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={cn("relative p-8 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md shadow-2xl shadow-black/40", className)}
        >
             <div style={{ transform: "translateZ(50px)"}}>{children}</div>
        </motion.div>
    );
};

// --- PAGE SECTIONS ---

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed top-0 left-0 right-0 z-50 py-4"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between rounded-full bg-black/30 border border-white/10 backdrop-blur-md px-6 py-3 shadow-lg">
                    <a href="#" className="flex items-center gap-2">
                        <motion.div 
                            className="w-7 h-7 bg-gradient-to-br from-magenta-500 to-purple-600 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'linear'}}
                        />
                        <span className="text-xl font-bold text-white">Stellar</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        {['Features', 'Integrations', 'Pricing', 'Docs'].map(item => (
                            <a key={item} href="#" className="text-sm text-gray-300 hover:text-white transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-magenta-500 group-hover:w-full transition-all duration-300"/>
                            </a>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                       <Button><span className="text-sm">Get Started</span></Button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-black text-white pt-20">
            {/* You would typically use a more optimized particle library here */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_100%)]"/>
            
            <motion.div style={{y}} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                 <motion.div
                    initial="hidden" animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
                    }}
                 >
                     <motion.h1
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 }}}}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                    >
                        Your Analytics, Reimagined.
                    </motion.h1>
                     <motion.p
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 }}}}
                        className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Stellar is the unified command center for your data. Ingest, analyze, and visualize complex metrics with unparalleled speed and clarity.
                    </motion.p>
                     <motion.div
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 }}}}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button>
                           Get Started <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <motion.a 
                            href="#"
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="font-semibold px-6 py-3 text-gray-300 hover:text-white transition-colors"
                        >
                            Contact Sales
                        </motion.a>
                     </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 80, delay: 1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%] translate-y-1/3"
            >
                <Image
                    src="https://framerusercontent.com/images/pm2q2mR8nOQRJgVf2lnz0zrzbY.png"
                    width={2400} height={1480} alt="Dashboard Preview"
                    className="rounded-t-2xl shadow-2xl shadow-magenta-500/20"
                    priority
                />
            </motion.div>
        </section>
    );
};


const FeatureTabs = () => {
    const tabs: Tab[] = [
        { id: 'power', label: 'Powerful Core', icon: Cpu, content: <FeatureContent title="Engineered for Performance" description="Our distributed backend can process billions of data points in milliseconds. Never wait for a query again." img="/feature1.png"/> },
        { id: 'speed', label: 'Real-time Insights', icon: Zap, content: <FeatureContent title="Insights as they happen" description="Connect directly to live data streams. Build real-time dashboards that empower your team to act instantly." img="/feature2.png"/> },
        { id: 'security', label: 'Ironclad Security', icon: Shield, content: <FeatureContent title="Security at the heart" description="With end-to-end encryption and enterprise-grade compliance, your data is always protected and secure." img="/feature3.png"/> }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0]);
  
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#05000C]">
             <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">The complete analytics toolkit.</h2>
                     <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Everything you need to turn raw data into strategic advantage.</p>
                </div>

                 <div className="flex justify-center mb-8 gap-4">
                     {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "relative px-5 py-2 text-sm md:text-base font-semibold text-gray-300 rounded-full transition-colors",
                                activeTab.id !== tab.id && 'hover:bg-white/10'
                            )}
                        >
                             {activeTab.id === tab.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                             <span className="relative z-10 flex items-center gap-2">
                                <tab.icon className="w-5 h-5"/>{tab.label}
                            </span>
                        </button>
                    ))}
                 </div>
                 
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab.content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

const FeatureContent = ({title, description, img}: {title: string; description: string; img: string}) => (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 bg-black/20 rounded-3xl border border-white/10">
        <div className="text-white text-center lg:text-left">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="mt-4 text-gray-300">{description}</p>
        </div>
        <div>
            {/* Using a placeholder. In a real project, use actual images. */}
            <div className="w-full h-80 bg-gradient-to-br from-magenta-500/20 to-purple-600/20 rounded-2xl border border-white/10 shadow-lg"/>
        </div>
    </div>
);


const Pricing = () => {
  return (
    <section className="py-24 bg-[#05000C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Pricing for teams of all sizes.</h2>
                 <p className="mt-4 text-lg text-gray-400">Simple, predictable pricing. No surprises.</p>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-sm mx-auto lg:max-w-none">
                 {/* Card 1 */}
                 <GlassCard>
                    <h3 className="text-xl font-semibold text-white">Starter</h3>
                    <p className="mt-2 text-gray-400">For small teams getting started.</p>
                    <p className="mt-8"><span className="text-5xl font-bold text-white">$49</span> <span className="text-gray-400">/mo</span></p>
                    <ul className="mt-8 space-y-4 text-gray-300">
                         {['1M data points/mo', '5 dashboards', 'Email support'].map(f => (
                             <li key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-cyan-400"/> {f}</li>
                         ))}
                    </ul>
                 </GlassCard>

                 {/* Card 2 - Highlighted */}
                 <div className="relative p-0.5 rounded-3xl bg-gradient-to-b from-magenta-500 to-purple-600 shadow-2xl shadow-purple-500/30">
                     <GlassCard className="!bg-[#0C0517] h-full">
                         <h3 className="text-xl font-semibold text-white">Pro</h3>
                         <p className="mt-2 text-magenta-300">For growing teams that need more.</p>
                         <p className="mt-8"><span className="text-5xl font-bold text-white">$199</span> <span className="text-gray-400">/mo</span></p>
                         <ul className="mt-8 space-y-4 text-gray-300">
                             {['50M data points/mo', 'Unlimited dashboards', 'Priority support', 'API access'].map(f => (
                                 <li key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-cyan-400"/> {f}</li>
                             ))}
                         </ul>
                     </GlassCard>
                 </div>
                 
                 {/* Card 3 */}
                 <GlassCard>
                     <h3 className="text-xl font-semibold text-white">Enterprise</h3>
                    <p className="mt-2 text-gray-400">For large-scale, custom deployments.</p>
                    <p className="mt-8 text-5xl font-bold text-white">Let's Talk</p>
                     <ul className="mt-8 space-y-4 text-gray-300">
                         {['Unlimited data points', 'Dedicated infrastructure', '24/7 support', 'SSO & compliance'].map(f => (
                            <li key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-cyan-400"/> {f}</li>
                        ))}
                    </ul>
                 </GlassCard>
            </div>
        </div>
    </section>
  );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs: FAQItem[] = [
        { question: "What kind of data sources can I connect?", answer: "Stellar connects to over 50 data sources out-of-the-box, including databases like PostgreSQL and MySQL, data warehouses like Snowflake and BigQuery, and event-streaming platforms like Kafka." },
        { question: "Is my data secure?", answer: "Absolutely. We employ end-to-end encryption for data in transit and at rest. Stellar is SOC 2 Type II compliant and offers additional enterprise-grade security features." },
        { question: "Can I try Stellar before I buy?", answer: "Yes! All of our plans come with a 14-day free trial. You can get started and connect your first data source in under 5 minutes." },
    ];

    return (
        <section className="py-24 bg-[#05000C] text-white">
            <div className="max-w-3xl mx-auto px-4">
                 <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                     {faqs.map((faq, index) => (
                        <motion.div key={index} layout className="border border-white/10 rounded-xl overflow-hidden">
                             <motion.button layout className="w-full flex justify-between items-center text-left p-6 font-semibold" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <span>{faq.question}</span>
                                <motion.div animate={{ rotate: openIndex === index ? 45 : 0 }}><Plus /></motion.div>
                             </motion.button>
                            <AnimatePresence>
                                 {openIndex === index && (
                                     <motion.div
                                        initial="collapsed" animate="open" exit="collapsed"
                                        variants={{ open: { opacity: 1, height: 'auto' }, collapsed: { opacity: 0, height: 0 } }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <p className="p-6 pt-0 text-gray-300">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-12 bg-black px-4 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Stellar, Inc. All rights reserved.</p>
        </div>
    </footer>
)

// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
    return (
        // Define custom theme colors in tailwind.config.js for a real project
        <div className="bg-black font-sans antialiased [--magenta-500:theme(colors.fuchsia.500)] [--purple-600:theme(colors.purple.600)]">
           <Header />
            <main>
                <Hero />
                <FeatureTabs />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
