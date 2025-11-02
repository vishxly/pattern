"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import {
    ArrowRight, Check, ChevronDown, Clock, MessageSquare, Users, KanbanSquare, Sparkles, Filter
} from 'lucide-react';


const keyframes = `
  @keyframes subtle-shine {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;


export default function Landing8() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
    const heroControls = useAnimation();
    
    useEffect(() => {
      if (isHeroInView) {
        heroControls.start('visible');
      }
    }, [isHeroInView, heroControls]);
    
    return (
        <div className="bg-[#F8F8F8] text-neutral-800 font-sans antialiased selection:bg-orange-500/30">
            <style>{keyframes}</style>
            
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main>
                <div ref={heroRef}>
                  <HeroSection controls={heroControls} />
                </div>
                
                <FeatureScrollSection />
                <HowItWorksSection />
                <PricingSection />
                <FAQSection />
                <FinalCTA />
            </main>
            
            <Footer />
        </div>
    );
}

//=========== Navbar Component ===========//
const Navbar = ({ isMenuOpen, setIsMenuOpen } : { isMenuOpen: boolean, setIsMenuOpen: Function }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [ { label: 'Features', href: '#features' }, { label: 'How it Works', href: '#how-it-works' }, { label: 'Pricing', href: '#pricing' } ];
    
    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${hasScrolled ? 'backdrop-blur-lg bg-white/80 border-b border-neutral-200' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"/>
                    </div>
                    <span className="text-xl font-bold text-neutral-900 tracking-tight">Momentum</span>
                </a>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map(link => <a key={link.label} href={link.href} className="text-neutral-600 hover:text-black transition-colors">{link.label}</a>)}
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">Log In</a>
                    <motion.a href="#" className="px-4 py-2 text-sm font-semibold text-white bg-neutral-900 rounded-lg"
                        whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400 }}>
                        Get Started
                    </motion.a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -mr-2">
                        <div className="w-6 h-0.5 bg-neutral-800 mb-1.5 transition-all duration-300" style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
                        <div className="w-4 h-0.5 bg-neutral-800 ml-auto transition-all duration-300" style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
                        <div className="w-6 h-0.5 bg-neutral-800 mt-1.5 transition-all duration-300" style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}></div>
                    </button>
                </div>
            </nav>
        </header>
    );
};

//=========== Hero Section with Interactive Kanban Board ===========//
const HeroSection = ({ controls } : { controls: any }) => {
    const initialCards = [
        { id: 1, title: 'Design Landing Page', status: 'In Progress', icon: Users, users: 2, comments: 5 },
        { id: 2, title: 'API Integration', status: 'Todo', icon: Clock, users: 1, comments: 2 },
        { id: 3, title: 'Develop Feature X', status: 'In Progress', icon: KanbanSquare, users: 3, comments: 8 },
        { id: 4, title: 'Fix Bug #123', status: 'Todo', icon: Sparkles, users: 1, comments: 1 }
    ];
    const [cards, setCards] = useState(initialCards);

    const handleSort = () => {
        const sorted = [...cards].sort((a, b) => (a.status === 'In Progress' ? -1 : 1));
        setCards(sorted);
    };

    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 }}};
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' as const }}};

    return (
        <section className="py-20 md:py-28 overflow-hidden bg-[#F8F8F8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={containerVariants} initial="hidden" animate={controls}>
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-900">
                        Where Great Work Happens, Faster.
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 text-lg text-neutral-600 max-w-lg">
                        Momentum is the all-in-one workspace for your team. From tasks and projects to docs and team chat, it's the single source of truth for getting things done.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
                        <motion.a href="#" whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }} className="px-6 py-3 font-semibold text-white bg-black rounded-lg inline-flex items-center gap-2">
                            Get Started Free <ArrowRight className="w-5 h-5"/>
                        </motion.a>
                         <div className="flex -space-x-2 items-center">
                             {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/40?img=${i+5}`} className="w-10 h-10 rounded-full border-2 border-white"/>)}
                             <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-orange-500 font-semibold text-xs">+1K</div>
                         </div>
                    </motion.div>
                </motion.div>

                <motion.div className="relative p-6 bg-white/60 border border-neutral-200/80 shadow-2xl shadow-neutral-300/40 rounded-2xl" variants={containerVariants} initial="hidden" animate={controls}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">Project Phoenix</h3>
                        <motion.button onClick={handleSort} className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors"
                            whileHover={{ y: -1 }} whileTap={{ scale: 0.95}}>
                            <Filter className="w-4 h-4 text-neutral-500" /> Sort
                        </motion.button>
                    </div>
                    <div className="space-y-3">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.id} layout
                            variants={itemVariants} transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="p-3 bg-white border border-neutral-200/80 shadow-md rounded-lg"
                        >
                            <p className="font-medium text-neutral-800">{card.title}</p>
                            <div className="mt-2 flex justify-between items-center">
                                <div className={`px-2 py-0.5 text-xs rounded-full ${card.status === 'In Progress' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {card.status}
                                </div>
                                <div className="flex items-center gap-3 text-neutral-500">
                                  <div className="flex items-center gap-1"><MessageSquare className="w-4 h-4"/><span className="text-sm">{card.comments}</span></div>
                                  <div className="flex items-center gap-1"><card.icon className="w-4 h-4"/><span className="text-sm">{card.users}</span></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

//=========== Horizontal Scroll Feature Section ===========//
const FeatureScrollSection = () => {
    const features = [
        { title: "Kanban Boards", desc: "Visualize your workflow and move tasks from to-do to done.", icon: KanbanSquare },
        { title: "Real-time Chat", desc: "Communicate seamlessly with your team without leaving your workspace.", icon: MessageSquare },
        { title: "Smart Reminders", desc: "Never miss a deadline with our AI-powered, context-aware reminders.", icon: Clock },
        { title: "Team Analytics", desc: "Get insights into your team's productivity and project progress.", icon: Sparkles },
    ];
    return (
        <section id="features" className="py-20 bg-neutral-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-4xl font-extrabold tracking-tighter">Your All-In-One Toolkit</h2>
                <div className="relative mt-12">
                     <div className="flex overflow-x-auto snap-x snap-mandatory scroll-p-8 gap-8 pb-8" style={{ scrollbarWidth: 'none' }}>
                        {features.map((feature, i) => (
                             <div key={i} className="snap-center flex-shrink-0 w-[80%] md:w-[40%] lg:w-[30%]">
                                <div className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
                                  <feature.icon className="w-10 h-10 mb-4 bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-500" />
                                  <div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="mt-2 text-neutral-400">{feature.desc}</p>
                                  </div>
                                </div>
                             </div>
                        ))}
                     </div>
                </div>
            </div>
        </section>
    );
};

//=========== Sticky Image "How It Works" Section ===========//
const HowItWorksSection = () => {
    const steps = [
        { title: 'Create a Project', desc: 'Start with a goal. Define your project, set deadlines, and invite your team.', img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop' },
        { title: 'Assign Tasks', desc: 'Break down your project into actionable tasks. Assign owners and priorities to ensure clarity and accountability.', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop' },
        { title: 'Collaborate', desc: 'Discuss tasks, share files, and give feedback in real-time. Keep all project-related communication in one place.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop' },
        { title: 'Track Progress', desc: 'Watch your project come to life. Use dashboards and reports to monitor progress and celebrate milestones.', img: 'https://images.unsplash.com/photo-1552664730-d3077884978e?q=80&w=800&auto=format&fit=crop' },
    ];

    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    
    const inViews = [
      useInView(stepRefs[0], { margin: '-50% 0px -50% 0px' }),
      useInView(stepRefs[1], { margin: '-50% 0px -50% 0px' }),
      useInView(stepRefs[2], { margin: '-50% 0px -50% 0px' }),
      useInView(stepRefs[3], { margin: '-50% 0px -50% 0px' }),
    ];
    
    useEffect(() => {
        const newActiveStep = inViews.findIndex(inView => inView);
        if (newActiveStep !== -1) {
            setActiveStep(newActiveStep);
        }
    }, [inViews]);
    
    return(
        <section id="how-it-works" className="py-28">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tighter">Effortless Flow, Exceptional Results</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="relative">
                        {steps.map((step, i) => (
                             <div key={i} ref={stepRefs[i]} className={`py-12 ${activeStep === i ? '' : ''}`}>
                                 <motion.div animate={{ opacity: activeStep === i ? 1 : 0.3 }} transition={{duration: 0.3}}>
                                    <div className={`w-10 h-10 rounded-full text-lg font-bold flex items-center justify-center mb-4 transition-all duration-300 ${activeStep === i ? 'bg-black text-white scale-110' : 'bg-neutral-200 text-neutral-500'}`}>
                                        {i + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                    <p className="mt-2 text-neutral-600">{step.desc}</p>
                                </motion.div>
                             </div>
                        ))}
                    </div>
                    <div className="sticky top-20 h-[30rem] w-full rounded-2xl overflow-hidden">
                        <AnimatePresence>
                             <motion.img 
                                key={activeStep}
                                src={steps[activeStep].img} 
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                             />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};


//=========== Pricing Section with Animated Toggle ===========//
const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const tiers = [
        { name: 'Starter', price: { monthly: 0, yearly: 0 }, desc: "For individuals and small personal projects.", features: ["3 Projects", "Basic Analytics", "Community Support"], cta: "Start for Free"},
        { name: 'Pro', price: { monthly: 29, yearly: 290 }, desc: "For growing teams that need more power.", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Integrations"], cta: "Choose Pro", popular: true},
        { name: 'Enterprise', desc: "For large organizations with custom needs.", features: ["SAML SSO", "Dedicated Manager", "Custom Security", "Advanced API"], cta: "Contact Sales"},
    ];

    return (
        <section id="pricing" className="py-20 bg-neutral-100">
             <div className="max-w-6xl mx-auto px-4 text-center">
                 <h2 className="text-4xl font-extrabold tracking-tighter">Plans That Scale With You</h2>
                 <div className="mt-6 flex justify-center items-center gap-2">
                     <span className={`${billingCycle === 'monthly' ? 'text-black' : 'text-neutral-500'}`}>Monthly</span>
                     <button onClick={() => setBillingCycle(c => c === 'monthly' ? 'yearly' : 'monthly')} className="w-12 h-6 rounded-full p-1 bg-neutral-200 flex items-center">
                        <motion.div layout transition={{ type: "spring", stiffness: 400, damping: 20 }} className={`w-4 h-4 rounded-full bg-black ${billingCycle === 'yearly' && 'ml-6'}`} />
                     </button>
                     <span className={`${billingCycle === 'yearly' ? 'text-black' : 'text-neutral-500'}`}>Yearly</span>
                 </div>
                 
                 <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {tiers.map(tier => (
                      <div key={tier.name} className={`relative p-8 rounded-2xl text-left bg-white ${tier.popular ? 'border-2 border-orange-500' : 'border border-neutral-200'}`}>
                         {tier.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-orange-500 rounded-full font-semibold">Most Popular</div>}
                         <h3 className="text-2xl font-bold">{tier.name}</h3>
                         <p className="mt-2 text-neutral-600 h-10">{tier.desc}</p>
                          <div className="h-20 mt-4 flex items-center">
                          {tier.price ?
                            <div className="flex items-baseline">
                                <span className="text-4xl font-extrabold tracking-tight">$</span>
                                 <AnimatePresence mode="wait">
                                     <motion.span
                                         key={billingCycle}
                                         className="text-4xl font-extrabold tracking-tight"
                                         initial={{ y: 10, opacity: 0 }}
                                         animate={{ y: 0, opacity: 1 }}
                                         exit={{ y: -10, opacity: 0 }}
                                         transition={{ duration: 0.2 }}
                                     >
                                         {tier.price[billingCycle as 'monthly' | 'yearly']}
                                     </motion.span>
                                 </AnimatePresence>
                                <span className="ml-1 text-neutral-500 text-sm">/ {billingCycle === 'monthly' ? 'month' : 'year'}</span>
                            </div>
                           : <p className="text-2xl font-bold">Custom</p>}
                           </div>

                         <ul className="mt-6 space-y-3 text-neutral-700">
                             {tier.features.map(f => <li key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-orange-500"/>{f}</li>)}
                         </ul>
                          <a href="#" className={`mt-8 block w-full py-3 text-center rounded-lg font-semibold ${tier.popular ? 'bg-black text-white hover:bg-neutral-800' : 'bg-neutral-100 text-black hover:bg-neutral-200'}`}>
                              {tier.cta}
                          </a>
                      </div>
                    ))}
                 </div>
             </div>
        </section>
    )
}

//=========== FAQ Section ===========//
const FAQSection = () => {
    const faqs = [
        { q: 'What is Momentum?', a: 'Momentum is an all-in-one workspace designed to unify your team\'s tasks, projects, documents, and communication. It helps teams gain clarity and velocity on their most important work.' },
        { q: 'Is there a free trial available?', a: 'Yes! We offer a 14-day free trial on our Pro plan. You can also use our Starter plan for free forever for small projects.' },
        { q: 'What integrations does Momentum support?', a: 'Momentum integrates with over 50 popular tools like Slack, GitHub, Figma, Google Drive, and more, allowing you to bring your entire workflow into one place.' },
        { q:- 'Can I import my data from another tool?', a: 'Absolutely. We provide easy-to-use importers for popular project management tools like Trello, Asana, and Jira, so you can get started in minutes.' }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(0);
    
    return(
        <section id="faq" className="py-20">
            <div className="max-w-3xl mx-auto px-4">
                 <h2 className="text-center text-4xl font-extrabold tracking-tighter mb-12">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                     {faqs.map((faq, i) => (
                       <div key={i} className="border border-neutral-200 rounded-lg overflow-hidden">
                           <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left font-semibold">
                               <span>{faq.q}</span>
                               <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                           </button>
                           <AnimatePresence>
                            {openFaq === i &&
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }} 
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                    <p className="p-5 pt-0 text-neutral-600">{faq.a}</p>
                                </motion.div>
                            }
                           </AnimatePresence>
                       </div>
                     ))}
                 </div>
            </div>
        </section>
    )
};


//=========== Final CTA Section ===========//
const FinalCTA = () => (
     <section className="py-28 relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100">
         <div className="text-center max-w-2xl mx-auto px-4">
             <h2 className="text-4xl font-extrabold tracking-tighter">Start Building Momentum Today</h2>
             <p className="mt-4 text-lg text-neutral-700">Join thousands of teams shipping faster, collaborating better, and achieving their goals. It's free to get started.</p>
              <motion.a href="#" whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }} className="mt-8 px-8 py-4 font-semibold text-white bg-black rounded-lg inline-flex items-center gap-2 text-lg">
                  Try Momentum Free <ArrowRight className="w-5 h-5"/>
              </motion.a>
         </div>
     </section>
);


//=========== Footer ===========//
const Footer = () => (
     <footer className="w-full bg-neutral-100 border-t border-neutral-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                  <div className="col-span-full md:col-span-1">
                      <a href="#" className="flex items-center gap-2">
                           <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center"> <div className="w-2 h-2 rounded-full bg-white"/> </div>
                           <span className="text-xl font-bold text-neutral-900 tracking-tight">Momentum</span>
                      </a>
                      <p className="mt-4 text-sm text-neutral-500">&copy; {new Date().getFullYear()} Momentum Inc.</p>
                  </div>
                 {['Product', 'Company', 'Resources', 'Legal'].map(section => (
                     <div key={section}>
                         <h3 className="font-semibold text-neutral-800">{section}</h3>
                         <ul className="mt-4 space-y-3">
                            {['Features', 'Pricing', 'Blog', 'Support'].map(item => (
                                 <li key={item}><a href="#" className="text-sm text-neutral-600 hover:text-black">{item}</a></li>
                            ))}
                         </ul>
                     </div>
                 ))}
             </div>
         </div>
     </footer>
)
