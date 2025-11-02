import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import HomePage from "@/lib/blocks/components/landing/landing14";

export const landing14Registry: LandingComponentGroup = {
  title: "Clarity: AI Visibility Platform",
  description: "A modern landing page showcasing AI-powered brand visibility tools, featuring interactive elements and clear pricing.",
  category: "Landing",
  variants: {
    default: {
      title: "Clarity: AI Visibility Platform",
      description: "A modern landing page showcasing AI-powered brand visibility tools, featuring interactive elements and clear pricing.",
      component: HomePage,
      image: "/images/blocks/landing/landing14.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Page",
      code: `'use client';

import React, { useState, useRef, useEffect, FC, ReactNode } from "react";
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Bot, Zap, LineChart, Star, Minus, Plus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ----------------- TYPE DEFINITIONS -----------------

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  Icon: React.ElementType;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}


// ----------------- UI COMPONENTS -----------------

const Button = ({ children, variant = 'primary', className = '', ...props }: { children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost'; className?: string, [key: string]: any }) => {
    const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-700 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5",
        secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
        ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
    };
    
    return (
        <button className={cn(baseClasses, variants[variant], className)} {...props}>
            {children}
        </button>
    );
};

// ----------------- LANDING PAGE SECTIONS -----------------

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-transparent'
          )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center gap-2">
                         <div className="bg-slate-900 p-1.5 rounded-lg"><Star className="text-white h-5 w-5"/></div>
                        <span className="text-xl font-bold text-slate-900">Clarity</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        {['Features', 'Solutions', 'Pricing', 'Resources'].map(item => (
                            <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost">Log In</Button>
                        <Button variant="primary">Get Started Free</Button>
                    </div>
                     <div className="md:hidden">
                        <button className="text-slate-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,230,250,0.5),_transparent_80%)] -z-1" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900"
                >
                    Win the New Age of Search
                </motion.h1>
                <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
                >
                    Clarity is the definitive AI visibility platform. We give brands the power to control their narrative across ChatGPT, Perplexity, and every other answer engine.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" className="px-8 py-4 text-lg">
                       Request a Demo <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button variant="secondary" className="px-8 py-4 text-lg">
                        Sign Up
                    </Button>
                </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="mt-20 w-full max-w-6xl mx-auto"
                >
                     <div className="relative rounded-xl shadow-2xl shadow-slate-200 border border-slate-200 bg-white p-2">
                        <Image 
                            src="https://framerusercontent.com/images/9j6Vo0f1Cj0T3C0K55d7wW2Q2c.png" 
                            width={2400} 
                            height={1480} 
                            alt="Clarity Dashboard"
                            className="rounded-lg w-full h-auto"
                            priority
                        />
                     </div>
                 </motion.div>
            </div>
        </section>
    );
};

const ClientLogos = () => {
    const logos = ["asana", "webflow", "notion", "figma", "stripe", "dropbox"];
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 mb-8">
                    TRUSTED BY THE WORLD’S MOST INNOVATIVE COMPANIES
                </p>
                 <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <motion.div
                         className="flex items-center justify-center md:justify-start"
                         initial={{ x: 0 }}
                         animate={{ x: '-100%' }}
                         transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
                    >
                    {duplicatedLogos.map((logo, index) => (
                         <Image 
                             key={index} 
                             src={\`https://cdn.worldvectorlogo.com/logos/\${logo}.svg\`} 
                             alt={logo} 
                             width={120} 
                             height={40} 
                             className="mx-8 h-8 w-auto grayscale opacity-60" 
                         />
                    ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const HowItWorks = () => {
    const steps = [
        { 
            number: "01", 
            title: "Connect Your Data", 
            description: "Easily integrate your website and content sources. Clarity's AI agents begin analyzing how you're seen across all answer engines.", 
            Icon: Zap 
        },
        { 
            number: "02", 
            title: "Uncover Insights", 
            description: "Our platform identifies gaps, misinformation, and opportunities. Understand exactly what your customers are asking and what the AI is telling them.", 
            Icon: LineChart 
        },
        { 
            number: "03", 
            title: "Optimize & Publish", 
            description: "Use our intelligent workflows to create, optimize, and publish AI-native content at scale, ensuring your brand narrative is accurate and visible.", 
            Icon: Bot 
        },
    ];

    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900">Go from insight to impact in three steps.</h2>
                    <p className="mt-4 text-lg text-slate-600">Clarity makes shaping your AI narrative intuitive and seamless.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200" aria-hidden="true" />
                     <div className="space-y-16">
                         {steps.map((step, index) => (
                              <motion.div
                                 key={step.number}
                                 className="relative flex items-center"
                                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 transition={{ duration: 0.6, ease: "easeOut" }}
                                 viewport={{ once: true, amount: 0.5 }}
                              >
                                  <div className={cn("w-1/2 flex", index % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8 order-2")}>
                                      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-full max-w-sm">
                                         <step.Icon className="h-8 w-8 text-green-500 mb-4" />
                                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                          <p className="text-slate-600">{step.description}</p>
                                      </div>
                                  </div>
                                   <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                      <div className="bg-slate-900 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg">
                                        {step.number}
                                      </div>
                                  </div>
                                   <div className={cn("w-1/2", index % 2 === 0 ? "order-2" : " ")}></div>
                              </motion.div>
                         ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


const FeatureShowcase = () => {
    const features: FeatureCardProps[] = [
      { id: 1, title: 'AI Visibility Monitoring', description: "Track your brand's presence across every major AI platform in real-time. Know immediately when your narrative changes.", Icon: LineChart },
      { id: 2, title: 'Competitive Intelligence', description: "See how competitors are mentioned and benchmark your AI performance against theirs. Identify opportunities to win the conversation.", Icon: Zap },
      { id: 3, title: 'Content Optimization Engine', description: "Our AI-powered engine analyzes your content and provides actionable recommendations to improve its visibility and accuracy.", Icon: Bot },
    ];
    const [activeFeature, setActiveFeature] = useState(features[0]);
    const featureRef = useRef(null);
    const isInView = useInView(featureRef, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if(isInView) {
            const interval = setInterval(() => {
                 setActiveFeature(prev => {
                    const nextIndex = (prev.id % features.length);
                    return features[nextIndex];
                });
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isInView, features.length]);
    

    const featureImages: Record<number, string> = {
        1: "https://framerusercontent.com/images/154x41mMXB3TqBns4h2hQdqk5s.png",
        2: "https://framerusercontent.com/images/U3zYK4j5zBsz2d5Rf4x3s20wco.png",
        3: "https://framerusercontent.com/images/3yvWkz5sFQPZcs9AqnLz1O9cI.png",
    }
    
    return (
      <section ref={featureRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900">A powerful, unified platform.</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Clarity integrates every tool you need to take control of your AI narrative, from tracking and analytics to creation and optimization.</p>
            </div>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative w-full h-96 md:h-[600px] bg-slate-100 rounded-2xl overflow-hidden shadow-inner shadow-slate-200">
                    <AnimatePresence>
                         <motion.div
                            key={activeFeature.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 p-4"
                         >
                            <Image
                                src={featureImages[activeFeature.id]}
                                alt={activeFeature.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                 <div className="flex flex-col gap-8">
                     {features.map((feature) => (
                        <div key={feature.id} className={cn(
                            "p-6 rounded-lg transition-all duration-300",
                            activeFeature.id === feature.id ? 'bg-slate-100' : 'bg-transparent'
                        )}>
                             <feature.Icon className={cn(
                                "h-8 w-8 mb-3 transition-colors duration-300",
                                activeFeature.id === feature.id ? 'text-green-500' : 'text-slate-400'
                             )} />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                 </div>
             </div>
        </div>
      </section>
    )
}

const TestimonialsSlider = () => {
    const testimonials: Testimonial[] = [
        { quote: "Clarity has been indispensable. We finally have a clear view of our AI presence and the tools to actively shape it.", author: "Sarah Lee", title: "CMO, Asana", avatarUrl: "https://i.pravatar.cc/150?u=a01" },
        { quote: "The competitive intelligence feature alone is worth its weight in gold. We've uncovered so many opportunities.", author: "Mike Ross", title: "Head of Growth, Webflow", avatarUrl: "https://i.pravatar.cc/150?u=a02" },
        { quote: "A must-have tool for any modern marketing stack. We went from reactive to proactive on our AI strategy in weeks.", author: "Jessica Chen", title: "Director of Digital, Notion", avatarUrl: "https://i.pravatar.cc/150?u=a03" },
        { quote: "The insights are incredible. Clarity surfaces what your customers are really asking AI, which is a goldmine for content strategy.", author: "David Kim", title: "SEO Manager, Figma", avatarUrl: "https://i.pravatar.cc/150?u=a04" },
    ];
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-slate-50 text-white">
            <div className="text-center mb-16 px-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black">Don't just take our word for it.</h2>
                 <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">See why marketing leaders at the world's best companies choose Clarity to win the new age of search.</p>
            </div>
             <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
                <motion.div
                    className="flex items-stretch"
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div key={index} className="w-[380px] md:w-[450px] flex-shrink-0 mx-4 bg-slate-200 p-8 rounded-2xl flex flex-col">
                            <p className="text-slate-500 text-lg flex-grow">"{testimonial.quote}"</p>
                             <div className="mt-6 flex items-center">
                                <Image src={testimonial.avatarUrl} alt={testimonial.author} width={40} height={40} className="rounded-full" />
                                <div className="ml-4">
                                    <p className="font-semibold text-slate-700">{testimonial.author}</p>
                                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                 </motion.div>
             </div>
        </section>
    )
}

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const plans = [
        { name: 'Starter', monthly: 29, annually: 24, description: 'For individuals and small projects.', features: ['1 User', '10 Keyword Tracks', 'Basic Analytics'] },
        { name: 'Pro', monthly: 99, annually: 79, description: 'For growing teams and businesses.', features: ['5 Users', '100 Keyword Tracks', 'Competitive Intel', 'Content Engine'], isPopular: true },
        { name: 'Enterprise', price: 'Custom', description: 'For large organizations at scale.', features: ['Unlimited Users', 'API Access', 'Dedicated Support', 'SSO'] }
    ];

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900">Pricing that scales with you</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">Simple, transparent pricing. No hidden fees, ever.</p>
                     <div className="mt-8 flex justify-center items-center gap-4">
                        <span className="font-medium text-slate-600">Monthly</span>
                        <div onClick={() => setIsAnnual(!isAnnual)} className="relative w-12 h-6 bg-slate-200 rounded-full cursor-pointer">
                            <motion.div className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5" layout transition={{type: 'spring', stiffness: 700, damping: 30}} style={{left: isAnnual ? 'calc(100% - 1.5rem)' : '0.25rem'}} />
                        </div>
                         <span className="font-medium text-slate-600">Annually</span>
                        <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Save 20%</span>
                     </div>
                </div>
                 <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                     {plans.map((plan) => (
                        <div key={plan.name} className={cn(
                            'p-8 rounded-2xl border flex flex-col transition-all duration-300',
                            plan.isPopular ? 'border-green-500 bg-green-50/50' : 'border-slate-200 bg-slate-50'
                        )}>
                            <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                            <p className="mt-2 text-slate-600 min-h-[40px]">{plan.description}</p>
                             <div className="mt-6">
                                {plan.price ? (
                                    <span className="text-4xl font-bold tracking-tighter text-slate-900">{plan.price}</span>
                                ) : (
                                    <>
                                        <span className="text-4xl font-bold tracking-tighter text-slate-900">\${isAnnual ? plan.annually : plan.monthly}</span>
                                        <span className="text-slate-500"> / mo</span>
                                    </>
                                )}
                            </div>
                            <ul className="mt-8 space-y-4 text-slate-600 flex-grow">
                                {plan.features.map(feature => (
                                     <li key={feature} className="flex items-start">
                                         <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full mt-10" variant={plan.isPopular ? 'primary' : 'secondary'}>
                                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
                            </Button>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};

const FinalCTA = () => {
    return (
        <section className="py-24 px-4 bg-slate-50">
             <div className="max-w-4xl mx-auto">
                 <div className="bg-slate-200 text-slate-900 p-12 text-center rounded-2xl relative overflow-hidden">
                     <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Ready to win with AI search?</h2>
                        <p className="mt-4 text-lg text-slate-700 max-w-xl mx-auto">Start your journey with Clarity today. Get a demo and see how you can take control of your AI narrative.</p>
                         <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="mt-8 inline-block"
                         >
                            <Button className="px-8 py-4 text-lg bg-white text-slate-900 hover:bg-slate-200">
                                Request a Demo <ArrowRight className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
             </div>
        </section>
    );
};

const Footer = () => {
    const footerLinks = {
        'Product': ['Features', 'Pricing', 'Integrations', 'Updates'],
        'Company': ['About', 'Careers', 'Contact', 'Blog'],
        'Resources': ['Help Center', 'API Docs', 'Case Studies', 'Security'],
        'Legal': ['Privacy Policy', 'Terms of Service'],
    };

    return (
        <footer className="bg-white border-t border-slate-200 px-4 pt-16 pb-8">
            <div className="max-w-7xl mx-auto">
                 <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    <div className="col-span-2 pr-8">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="bg-slate-900 p-1.5 rounded-lg"><Star className="text-white h-5 w-5"/></div>
                            <span className="text-xl font-bold text-slate-900">Clarity</span>
                        </a>
                        <p className="text-slate-600">The definitive AI visibility platform.</p>
                    </div>
                     {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="col-span-1">
                            <h4 className="font-semibold text-slate-900 mb-4 text-sm">{title}</h4>
                            <ul className="space-y-3">
                                {links.map(link => (
                                     <li key={link}>
                                         <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm">
                                             {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                 </div>

                <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Clarity, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};


export default function HomePage() {
    return (
        <div className="bg-white text-slate-800 antialiased">
           <Header />
            <main>
                <Hero />
                <ClientLogos />
                <HowItWorks />
                <FeatureShowcase />
                <TestimonialsSlider />
                <Pricing />
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
