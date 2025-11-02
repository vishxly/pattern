"use client"
import React, { useState, useEffect, useRef, SVGProps } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

//=========== Hero Background Effect ===========//
const AuroraBackground = ({ children }: { children: React.ReactNode }) => (
  <div className="relative bg-neutral-950">
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
    </div>
    <div
      style={{
        WebkitMaskImage: "radial-gradient(100% 100% at top left,white,transparent)",
        maskImage: "radial-gradient(100% 100% at top left,white,transparent)",
      }}
      className="absolute inset-0 bg-neutral-900 bg-[url(/grid.svg)]"
    ></div>
    <div className="relative z-10">{children}</div>
  </div>
);

//=========== SVG Icon Components ===========//

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 5h18M3 12h18M3 19h18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 10L12 14L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

//=========== Animated Components ===========//

const AnimatedFinancialChart = () => {
  return (
    <div className="p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/10">
      <style jsx>{`
        @keyframes draw-line {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes pulse-dot {
          0%, 100% {
            r: 4;
            opacity: 1;
            filter: drop-shadow(0 0 3px currentColor);
          }
          50% {
            r: 6;
            opacity: 0.8;
            filter: drop-shadow(0 0 6px currentColor);
          }
        }
        .chart-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 2s ease-out forwards;
        }
        .chart-dot {
          animation: pulse-dot 2.5s ease-in-out infinite;
        }
      `}</style>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-neutral-400">Portfolio Value</p>
          <p className="text-2xl font-bold text-white">$12,845.67</p>
        </div>
        <p className="text-sm font-semibold text-green-400">+2.31%</p>
      </div>
      <svg width="100%" height="150" viewBox="0 0 300 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <path d="M 0 80 Q 50 20, 100 60 T 200 50 T 300 20" fill="url(#chart-gradient)" stroke="none"/>
        <path className="chart-line" d="M 0 80 Q 50 20, 100 60 T 200 50 T 300 20" fill="none" stroke="#A78BFA" strokeWidth="2"/>
        <circle className="chart-dot" cx="300" cy="20" r="4" fill="#A78BFA" stroke="#FFF" strokeWidth="1.5" />
      </svg>
    </div>
  );
};


//=========== Section Wrapper ===========//
const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="py-20 px-4"
    >
      {children}
    </motion.section>
  );
};

//=========== New Landing Page Component ===========//
export default function Landing1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ];

  const features = [
    { title: "AI-Powered Insights", description: "Let our AI analyze market trends and provide you with actionable, personalized investment strategies.", icon: '🧠' },
    { title: "Automated Portfolio", description: "Set your risk tolerance and goals. We handle the rest, automatically rebalancing your portfolio.", icon: '⚙️' },
    { title: "Bank-Level Security", description: "Your assets are protected with multi-layer encryption and security protocols.", icon: '🛡️' },
    { title: "Global Market Access", description: "Invest in stocks, ETFs, and crypto from markets all around the world, all from one single platform.", icon: '🌎' },
  ];

  const testimonials = [
    { quote: "Aura Finance changed the way I see investing. The AI insights are a game-changer.", name: "Sarah J.", role: "Tech Lead" },
    { quote: "Finally, a platform that's both powerful for serious investors and simple for beginners.", name: "Michael B.", role: "Product Manager" },
    { quote: "The security and transparency give me peace of mind. I've moved my entire portfolio here.", name: "Eva L.", role: "Freelance Designer" },
  ];

  const pricingTiers = [
    { name: "Explorer", monthly: 15, yearly: 150, description: "For those just starting their investment journey.", features: ["AI-powered stock picks", "Portfolio tracking", "Community access"], cta: "Start Exploring" },
    { name: "Ascend", monthly: 49, yearly: 490, description: "For the serious investor ready to scale.", features: ["Everything in Explorer", "Automated rebalancing", "Advanced analytics", "Priority support"], cta: "Start Ascending", popular: true },
    { name: "Apex", monthly: 99, yearly: 990, description: "For the professional who demands the best.", features: ["Everything in Ascend", "Dedicated AI advisor", "Direct market access", "API access"], cta: "Reach the Apex" },
  ];

  const faqs = [
      { q: "What is Aura Finance?", a: "Aura Finance is an AI-powered investment platform designed to help you make smarter financial decisions. We provide automated portfolio management, data-driven insights, and access to global markets." },
      { q: "Is my money safe?", a: "Absolutely. We use bank-level, 256-bit encryption and are members of SIPC, meaning your securities are insured up to $500,000. Your security is our absolute priority." },
      { q: "What can I invest in?", a: "Aura provides access to a wide range of assets, including US and international stocks, ETFs (Exchange Traded Funds), and major cryptocurrencies." },
      { q: "Can I cancel my subscription anytime?", a: "Yes, you have complete flexibility. You can upgrade, downgrade, or cancel your plan at any time directly from your account dashboard with no hidden fees." },
  ]
  
  return (
    <AuroraBackground>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-neutral-950/50 border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
              <a href="#" className="text-xl font-bold text-white tracking-wider">AURA</a>
              <div className="hidden md:flex items-center gap-8">
                  {navLinks.map(link => (
                      <a key={link.label} href={link.href} className="text-sm text-neutral-300 hover:text-white transition-colors duration-300">
                          {link.label}
                      </a>
                  ))}
              </div>
              <div className="hidden md:flex items-center gap-4">
                  <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors duration-300">Sign In</a>
                  <motion.a 
                    href="#" 
                    className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-md shadow-lg shadow-purple-600/20 hover:bg-purple-700"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                      Get Started
                  </motion.a>
              </div>
              <div className="md:hidden">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                      {isMenuOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}
                  </button>
              </div>
          </nav>
          {/* Mobile menu */}
          <div className={`md:hidden absolute top-16 left-0 w-full bg-neutral-900 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen border-t border-b border-white/10 py-4' : 'max-h-0 py-0'}`}>
              <div className="flex flex-col items-center gap-4">
                  {navLinks.map(link => <a key={link.label} href={link.href} className="text-neutral-300 hover:text-white">{link.label}</a>)}
                  <a href="#" className="mt-4 px-6 py-2 text-white bg-purple-600 rounded-md">Get Started</a>
              </div>
          </div>
      </header>

      <main className="text-white">
          <Section>
            <div className="text-center max-w-4xl mx-auto pt-20 pb-10">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        The Future of Investing is
                        <span className="relative inline-block"> Aura.
                            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-purple-500 animate-[pulse_4s_ease-in-out_infinite] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></span>
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 max-w-xl mx-auto text-lg text-neutral-300"
                >
                    Harness the power of Artificial Intelligence to build a smarter, more resilient portfolio.
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8"
                >
                    <motion.a 
                      href="#" 
                      className="inline-block px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-2xl shadow-purple-600/30 hover:bg-purple-700"
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                        Create Your Portfolio
                    </motion.a>
                </motion.div>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                className="max-w-4xl mx-auto"
            >
              <AnimatedFinancialChart />
            </motion.div>
          </Section>
          
          <Section>
            <div id="features" className="max-w-6xl mx-auto">
              <h2 className="text-center text-4xl font-bold tracking-tighter">Smarter, Not Harder.</h2>
              <p className="text-center mt-2 text-lg text-neutral-400">Everything you need to master your financial future.</p>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-neutral-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section>
              <div id="testimonials" className="max-w-5xl mx-auto">
                  <h2 className="text-center text-4xl font-bold tracking-tighter">Loved by Investors Worldwide</h2>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {testimonials.map((testimonial, i) => (
                          <motion.div 
                            key={i}
                            className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.15 }}
                          >
                            <p className="text-neutral-300">"{testimonial.quote}"</p>
                            <div className="mt-4">
                              <p className="font-semibold text-white">{testimonial.name}</p>
                              <p className="text-sm text-neutral-400">{testimonial.role}</p>
                            </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </Section>

          <Section>
              <div id="pricing" className="max-w-6xl mx-auto">
                  <h2 className="text-center text-4xl font-bold tracking-tighter">Pricing That Fits Your Ambition</h2>
                  <p className="text-center mt-2 text-lg text-neutral-400">Choose your plan. Change your future.</p>

                  <div className="mt-8 flex justify-center items-center gap-4">
                      <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-neutral-500'}`}>Monthly</span>
                      <button 
                          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                          className="w-14 h-8 rounded-full p-1 bg-neutral-800 flex items-center transition-colors duration-300"
                      >
                          <motion.div 
                              layout 
                              transition={{ type: "spring", stiffness: 700, damping: 30 }}
                              className={`w-6 h-6 rounded-full bg-purple-600 ${billingCycle === 'yearly' && 'ml-6'}`} 
                          />
                      </button>
                      <span className={`${billingCycle === 'yearly' ? 'text-white' : 'text-neutral-500'}`}>Yearly</span>
                  </div>

                  <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingTiers.map((tier) => (
                      <div key={tier.name} className={`relative p-8 rounded-2xl border ${tier.popular ? 'border-purple-500' : 'border-neutral-800'} bg-neutral-900`}>
                        {tier.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-purple-600 rounded-full">Most Popular</div>}
                        <h3 className="text-2xl font-semibold">{tier.name}</h3>
                        <p className="mt-2 text-neutral-400">{tier.description}</p>
                        <p className="mt-8 text-5xl font-bold">
                            ${billingCycle === 'monthly' ? tier.monthly : tier.yearly}
                            <span className="text-xl font-normal text-neutral-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                        </p>
                        <a href="#" className={`mt-8 block w-full py-3 px-6 text-center rounded-lg font-semibold ${tier.popular ? 'bg-purple-600 text-white' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}>
                            {tier.cta}
                        </a>
                        <ul className="mt-8 space-y-4 text-sm">
                            {tier.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <CheckIcon className="h-5 w-5 text-purple-400" />
                                    <span className="text-neutral-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
              </div>
          </Section>

          <Section>
              <div id="faq" className="max-w-3xl mx-auto">
                <h2 className="text-center text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <div className="mt-12 space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full flex justify-between items-center p-5 text-left"
                      >
                        <span className="font-semibold text-white">{faq.q}</span>
                        <ChevronDownIcon className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`grid transition-all duration-300 ease-in-out ${activeFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <p className="p-5 pt-0 text-neutral-400">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </Section>
          
          <Section>
            <div className="text-center py-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Start Building Your Legacy Today</h2>
                <motion.a 
                  href="#" 
                  className="mt-8 inline-block px-10 py-4 text-xl font-semibold text-white bg-purple-600 rounded-lg shadow-2xl shadow-purple-600/30 hover:bg-purple-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                    Get Started for Free
                </motion.a>
            </div>
          </Section>
      </main>

      <footer className="w-full border-t border-white/10 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                  <h3 className="font-semibold text-white">Product</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                      <li><a href="#features" className="text-neutral-400 hover:text-white">Features</a></li>
                      <li><a href="#pricing" className="text-neutral-400 hover:text-white">Pricing</a></li>
                      <li><a href="#" className="text-neutral-400 hover:text-white">Security</a></li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-semibold text-white">Company</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                      <li><a href="#" className="text-neutral-400 hover:text-white">About</a></li>
                      <li><a href="#" className="text-neutral-400 hover:text-white">Careers</a></li>
                      <li><a href="#" className="text-neutral-400 hover:text-white">Press</a></li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-semibold text-white">Resources</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                      <li><a href="#" className="text-neutral-400 hover:text-white">Blog</a></li>
                      <li><a href="#" className="text-neutral-400 hover:text-white">Help Center</a></li>
                      <li><a href="#faq" className="text-neutral-400 hover:text-white">FAQ</a></li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-semibold text-white">Legal</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                      <li><a href="#" className="text-neutral-400 hover:text-white">Terms</a></li>
                      <li><a href="#" className="text-neutral-400 hover:text-white">Privacy</a></li>
                  </ul>
              </div>
          </div>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-center text-sm text-neutral-500">
              <p>&copy; {new Date().getFullYear()} Aura Finance, Inc. All rights reserved.</p>
          </div>
      </footer>

    </AuroraBackground>
  );
}
