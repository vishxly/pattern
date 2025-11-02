'use client';

import { SVGProps, useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence, useAnimation } from 'framer-motion';
import { clsx } from 'clsx';
import Link from 'next/link';

//=========== DATA / CONTENT ===========//
const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
];

const features = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m18.132 4.506A11.953 11.953 0 0112 21c-2.998 0-5.74-1.1-7.843-2.918" /></svg>, title: "Global Edge Network", desc: "Deploy your applications closer to your users for ultra-low latency and a seamless experience worldwide." },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.96 14.96 0 00-5.84-2.56m0 0a14.96 14.96 0 01-5.84-2.56m5.84 2.56v-4.82a6 6 0 015.84-7.38z" /></svg>, title: "Instant Git Push", desc: "Push your code and watch it go live instantly. Our CI/CD pipeline automates everything in between." },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Automated Scaling", desc: "Our infrastructure intelligently scales with your traffic, ensuring peak performance without any manual intervention." }
];

const faqs = [
    { q: "What is OrbitDeploy?", a: "OrbitDeploy is a next-generation cloud platform that simplifies the process of deploying, hosting, and scaling modern web applications and services." },
    { q: "What frameworks are supported?", a: "We support all major frameworks out-of-the-box, including Next.js, React, Vue, Svelte, and more. You can also deploy custom Node.js servers or static sites." },
    { q: "How does the free plan work?", a: "The Scout plan is free forever and includes generous limits for personal projects and hobbies. No credit card required to get started." },
    { q: "Can I use a custom domain?", a: "Yes, all plans, including the free Scout plan, support custom domains with free, automatically renewing SSL certificates." }
];

//=========== Animated Navbar ===========//
const Navbar = () => {
    const [activeTab, setActiveTab] = useState(navLinks[0].href);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8, delay: 0.5 }}
            className="fixed top-4 left-0 right-0 max-w-2xl mx-auto z-50 flex items-center justify-between p-2 rounded-full border border-white/10 bg-black/30 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">
            <Link href="/" className="ml-2">
                <motion.svg
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.8, type: 'spring' }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.109 1.109 0 00-.57 1.664l.143.258a1.109 1.109 0 001.664.57l.143-.048a2.25 2.25 0 011.161.886l.51.766c.319.48.226 1.121-.216 1.49l-1.068.89a1.125 1.125 0 00-.405.864v.568c0 .334-.148.65-.405.864l-1.068.89c-.442.369-.535 1.01-.216 1.49l.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.109 1.109 0 00-.57 1.664l.143.258a1.109 1.109 0 001.664.57l.143-.048a2.25 2.25 0 011.161.886l.51.766c.319.48.226 1.121-.216 1.49l-1.068.89a1.125 1.125 0 00-.405.864v.568a1.125 1.125 0 01-.405.864l-1.068.89c-.442.369-.535 1.01-.216 1.49l.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.109 1.109 0 00-.57 1.664l.143.258a1.109 1.109 0 001.664.57l.143-.048a2.25 2.25 0 011.161.886l.51.766c.319.48.226 1.121-.216 1.49l-1.068.89a1.125 1.125 0 00-.405.864v.568" />
                </motion.svg>
            </Link>

            <div className="flex items-center space-x-1">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setActiveTab(link.href)}
                        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeTab === link.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        {activeTab === link.href && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 bg-white/10"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {link.name}
                    </Link>
                ))}
            </div>
            <AuroraButton small href="#pricing">Get Started</AuroraButton>
        </motion.nav>
    );
};

//=========== Reusable UI Components ===========//
const AuroraButton = ({ small = false, href, children }: { small?: boolean, href: string, children: React.ReactNode }) => (
    <Link href={href} className={clsx("relative inline-flex overflow-hidden rounded-full p-[1.5px] focus:outline-none transition-transform duration-300 hover:scale-105", small ? "h-10" : "h-12")}>
        <span className="absolute inset-[-1000%] animate-[aurora_5s_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={clsx("inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 font-medium text-white backdrop-blur-3xl", small ? "px-5 text-sm" : "px-6")}>
            {children}
        </span>
    </Link>
);

const AccordionItem = ({ q, a }: { q: string; a: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-6 flex justify-between items-center">
                <span className="text-lg font-medium text-white">{q}</span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-gray-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden">
                        <p className="pb-6 text-gray-400">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


//=========== Main Page Component ===========//
export default function Landing2() {
    return (
        <div className="w-full text-white bg-[#0c0a1a] overflow-x-hidden">
            <Navbar />
            
            {/* ========== HERO SECTION ========== */}
            <header className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-b from-purple-900/20 via-black/10 to-transparent"></div>

                <div className="absolute z-10 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 opacity-30 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                        <circle cx="250" cy="250" r="110" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                        <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <circle cx="250" cy="250" r="80" fill="url(#planet-gradient)" />
                        <defs><radialGradient id="planet-gradient"><stop stopColor="#6D28D9" /><stop offset="1" stopColor="#0c0a1a" /></radialGradient></defs>
                        <g id="orbit-1"><circle cx="100" cy="100" r="10" fill="rgba(255, 255, 255, 0.7)" /></g>
                        <g id="orbit-2"><circle cx="30" cy="30" r="6" fill="rgba(255, 255, 255, 0.5)" /></g>
                    </svg>
                </div>
                
                <div className="relative z-20 space-y-6">
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
                    >
                        Launch in Minutes.
                        <br />
                        Scale for Millennia.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="max-w-xl mx-auto text-lg text-gray-300"
                    >
                        OrbitDeploy is the ultimate platform for deploying and scaling applications with stellar performance and unparalleled simplicity.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        className="pt-4 flex items-center justify-center space-x-4"
                    >
                        <AuroraButton href="#process">Begin Launch</AuroraButton>
                    </motion.div>
                </div>
            </header>
            
            <main className="relative z-10">

                {/* ========== FEATURES SECTION ========== */}
                <section id="features" className="py-24 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Your Mission Control</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">All the power, none of the complexity. We handle the infrastructure, so you can focus on building.</p>

                        <div className="mt-16 grid gap-8 md:grid-cols-3">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/5 to-transparent feature-card overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(167,139,250,0.1),_transparent_40%)] opacity-0 transition-opacity duration-500 glow"></div>
                                    <div className="relative z-10">
                                        {feature.icon}
                                        <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                                        <p className="mt-2 text-gray-400">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== PROCESS SECTION ========== */}
                <section id="process" className="py-24 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Three Steps to Orbit</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Our launch sequence is designed for speed and simplicity. Go from code to global in under a minute.</p>
                    </div>

                    <div className="max-w-md mx-auto mt-20 relative">
                         {/* Connecting line */}
                         <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10"></div>
                        
                         {[
                             { title: "Connect Your Repository", description: "Link your GitHub, GitLab, or Bitbucket account. We automatically detect your framework and settings." },
                             { title: "Configure Your Build", description: "Adjust environment variables and build settings if needed. Our smart defaults handle most configurations." },
                             { title: "Launch!", description: "Hit deploy and watch as we build, optimize, and launch your application on our global edge network." },
                         ].map((step, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: i * 0.2 }}
                                className="relative pl-12 pb-16"
                             >
                                 <div className="absolute left-0 top-1">
                                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-[#0c0a1a]">
                                         <span className="font-bold text-sm">{i + 1}</span>
                                    </div>
                                 </div>
                                 <h3 className="text-xl font-semibold">{step.title}</h3>
                                 <p className="mt-2 text-gray-400">{step.description}</p>
                             </motion.div>
                         ))}
                    </div>
                </section>


                {/* ========== TESTIMONIALS SECTION ========== */}
                <section id="testimonials" className="py-24 px-4">
                     <div className="max-w-6xl mx-auto text-center">
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Galaxy of Innovators</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Trusted by solo developers and enterprise teams who are building the future.</p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {[
                            { quote: "OrbitDeploy is a game-changer. What used to take our team hours now takes minutes. The performance is just unbelievable.", name: "Sara L.", role: "Lead Engineer, TechCorp" },
                            { quote: "The best developer experience I've ever had. It's so intuitive, I almost forgot I was dealing with infrastructure at all.", name: "Mike R.", role: "Founder, StartupX" },
                            { quote: "Migrating to OrbitDeploy cut our cloud bill by 40% and improved our site speed by 2x. A total no-brainer.", name: "Jian L.", role: "CTO, Future creative" },
                        ].map((t, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 50, rotate: -3 }}
                                whileInView={{ opacity: 1, y: 0, rotate: i === 1 ? 2 : -2 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7 }}
                                className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-lg"
                             >
                                <p className="text-gray-300 italic">"{t.quote}"</p>
                                <div className="mt-6">
                                     <p className="font-semibold text-white">{t.name}</p>
                                     <p className="text-sm text-purple-400">{t.role}</p>
                                </div>
                             </motion.div>
                        ))}
                    </div>
                </section>


                {/* ========== PRICING SECTION ========== */}
                <section id="pricing" className="py-24 px-4 bg-black/10">
                     <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Find Your Perfect Trajectory</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Simple, transparent pricing that grows with you. No hidden fees, just pure performance.</p>
                        
                        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-center">
                           <PricingCard plan="Scout" price="29" features={['10 GB Storage', '1M Monthly Requests', 'Community Support', 'Global CDN']} />
                           <PricingCard plan="Explorer" price="99" features={['100 GB Storage', '25M Monthly Requests', 'Priority Support', 'Custom Domains', 'Advanced Analytics']} isFeatured />
                           <PricingCard plan="Pioneer" price="299" features={['Unlimited Storage', '100M+ Requests', 'Dedicated Support', 'Serverless Functions', 'DDoS Protection']} />
                        </div>
                    </div>
                </section>

                {/* ========== FAQ SECTION ========== */}
                <section className="py-24 px-4 max-w-3xl mx-auto">
                    <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight">Pre-Flight Checklist</h2>
                    <div className="mt-12">
                        {faqs.map((faq, i) => <AccordionItem key={i} q={faq.q} a={faq.a} />)}
                    </div>
                </section>
                
            </main>
            
            {/* ========== FOOTER ========== */}
            <footer className="border-t border-white/10 py-8 px-4 mt-20">
                <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
                    <h3 className="text-2xl font-bold">Ready to take flight?</h3>
                    <div className="mt-6">
                        <AuroraButton href="#pricing">Launch Your Project Now</AuroraButton>
                    </div>
                    <p className="mt-10 text-gray-500 text-sm">&copy; {new Date().getFullYear()} OrbitDeploy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

// Re-defining the Pricing Card from the previous answer as it is used here
const PricingCard = ({ plan, price, features, isFeatured = false }: { plan: string, price: string, features: string[], isFeatured?: boolean }) => {
    const cardClasses = clsx(
        "relative rounded-2xl p-8 border backdrop-blur-xl transition-all duration-300 h-full", {
        'border-purple-500 shadow-2xl shadow-purple-500/20 transform-gpu md:scale-105 bg-black/20': isFeatured,
        'border-gray-700/50 hover:border-purple-400/80 bg-white/5': !isFeatured
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: isFeatured ? 0.2 : 0 }}
            className={cardClasses}
        >
            {isFeatured && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                </div>
            )}
            <h3 className="text-xl font-semibold text-white">{plan}</h3>
            <p className="mt-2 text-4xl font-bold text-white">${price}<span className="text-lg font-normal text-gray-400">/mo</span></p>
            <ul className="mt-8 space-y-4">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full mt-10 py-3 rounded-lg font-semibold transition-all duration-300 ${isFeatured ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90' : 'bg-gray-700/50 text-white hover:bg-gray-600/70'}`}>
                Choose {plan}
            </button>
        </motion.div>
    );
};
