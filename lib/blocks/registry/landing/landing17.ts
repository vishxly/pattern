import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import LandingPage from "@/lib/blocks/components/landing/landing17";

export const landing17Registry: LandingComponentGroup = {
  title: "Zero UI: Dream to Reality",
  description: "A modern landing page showcasing a component library with smooth animations, key features, and customer testimonials.",
  category: "Landing",
  variants: {
    default: {
      title: "Zero UI: Dream to Reality",
      description: "A modern landing page showcasing a component library with smooth animations, key features, and customer testimonials.",
      component: LandingPage,
      image: "/images/blocks/landing/landing17.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Component",
      code: `"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion, useInView, Variants } from 'framer-motion';


const FADE_IN_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};


interface IconProps {
  className?: string;
  [key: string]: any;
}

const CodeBracketIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
);

const BoltIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const DevicePhoneMobileIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
);


interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            id={id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={STAGGER_CONTAINER}
            className={className}
        >
            {children}
        </motion.section>
    );
};

const LandingPage: React.FC = () => {
    return (
        <div className='bg-white selection:bg-blue-200'>
            {/* Header */}
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className='bg-white/80 backdrop-blur-sm pt-4 sticky top-0 z-[100]'
            >
                <div className="w-full">
                    <div className="flex flex-row self-center items-center justify-between py-3 mx-auto px-8 w-full lg:w-[80%]">
                        <Link href="/" className="font-bold text-black text-xl tracking-tighter">Zero UI</Link>
                        <div className="hidden lg:flex flex-row flex-1 items-center justify-center space-x-2 text-sm">
                            <motion.div whileHover={{ y: -2 }}><Link href="/#home" className="text-black/70 hover:text-black/100 px-3 py-1.5 transition-colors duration-300">Home</Link></motion.div>
                            <motion.div whileHover={{ y: -2 }}><Link href="/#product" className="text-black/70 hover:text-black/100 px-3 py-1.5 transition-colors duration-300">Product</Link></motion.div>
                            <motion.div whileHover={{ y: -2 }}><Link href="#pricing" className="text-black/70 hover:text-black/100 px-3 py-1.5 transition-colors duration-300">Pricing</Link></motion.div>
                        </div>
                        <div className="hidden lg:flex items-center gap-2">
                                <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link href="/login" className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-lg border border-black/10 shadow-sm">Login</Link>
                                </motion.div>
                                <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link href="/signup" className="px-5 py-2 text-sm font-semibold rounded-lg bg-black shadow-lg text-white">Sign up</Link>
                                </motion.div>
                        </div>
                        <div className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-black/90"><path d="M4 6l16 0M4 12l16 0M4 18l16 0"/></svg>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Hero Section */}
            <main id="home">
                 <AnimatedSection className="relative flex max-w-7xl rounded-b-3xl mt-2 mb-20 md:my-20 mx-auto flex-col items-center justify-center pt-16 overflow-hidden px-4 md:px-8 bg-gradient-to-t from-blue-100/50 via-white to-white">
                    <div className="text-balance relative z-20 mx-auto max-w-6xl text-center">
                        <motion.h1 variants={FADE_IN_UP} className="text-4xl font-bold tracking-tight text-gray-800 md:text-7xl bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent pb-2">
                            Where Your <motion.span 
                                initial={{ opacity: 0, scale: 0.5 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                transition={{ duration: 0.5, delay: 0.5 }} 
                                className="inline-block bg-gradient-to-b from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                Dreams
                            </motion.span>
                        </motion.h1>
                        <motion.h1 variants={FADE_IN_UP} className="text-4xl font-bold tracking-tight text-gray-800 md:text-7xl bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent">
                             Become <motion.span
                                 initial={{ opacity: 0, scale: 0.5 }} 
                                 animate={{ opacity: 1, scale: 1 }} 
                                 transition={{ duration: 0.5, delay: 0.8 }} 
                                 className="inline-block bg-gradient-to-b from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                Reality
                            </motion.span>
                        </motion.h1>
                    </div>
                    <motion.p variants={FADE_IN_UP} className="relative z-20 mx-auto mt-6 max-w-2xl px-4 text-center text-base/relaxed text-gray-600 sm:text-lg">
                        Discover breathtaking destinations and seamless travel planning with our expert guidance. Unforgettable experiences await—book your journey today!
                    </motion.p>
                    <motion.div variants={FADE_IN_UP} className="my-8 z-10 md:mb-20">
                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link href="/login" className="px-8 py-4 font-bold relative rounded-lg bg-black shadow-xl text-white flex items-center justify-center">
                                Get Started
                            </Link>
                         </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                        className="pt-[2rem] w-full min-h-[21rem] relative"
                    >
                         <div className="absolute top-0 left-0 right-0 z-10">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="relative mx-auto h-[600px] w-[300px] md:h-[680px] md:w-[340px] group"
                             >
                                <motion.div 
                                    whileHover={{ scale: 1.02 }} 
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 rounded-[50px] border-[14px] border-black bg-black shadow-2xl"
                                >
                                     <div className="absolute left-1/2 top-[0.5rem] h-[1.8rem] w-[6rem] -translate-x-1/2 rounded-full bg-black z-10"><div className="absolute right-3 top-1/2 -translate-y-1/2 w-[0.6rem] h-[0.6rem] rounded-full bg-[#1a1a1a] ring-[1.5px] ring-[#2a2a2a]"><div className="absolute inset-[1.5px] rounded-full bg-[#0f0f0f]"><div className="absolute inset-[1.5px] rounded-full bg-[#151515] ring-[0.75px] ring-[#202020]" /></div></div></div>
                                     <div className="relative h-full w-full overflow-hidden rounded-[35px] bg-white">
                                        <Image src={'https://images.pexels.com/photos/1317943/pexels-photo-1317943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="Travel Destination" layout="fill" objectFit="cover" className="h-full w-full" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatedSection>
            </main>

            {/* Features Section */}
            <AnimatedSection id="product" className="py-20 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <motion.p variants={FADE_IN_UP} className="font-semibold text-blue-600">Our Features</motion.p>
                        <motion.h2 variants={FADE_IN_UP} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">An Experience Like No Other</motion.h2>
                        <motion.p variants={FADE_IN_UP} className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">We've built a platform with a stunning user experience to make your next project a breeze.</motion.p>
                    </div>
                    <motion.div variants={STAGGER_CONTAINER} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div variants={FADE_IN_UP} whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }} className="group p-8 bg-gray-50/50 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                             <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500 text-white transition-transform duration-300 group-hover:scale-110"><BoltIcon className="h-6 w-6" /></div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">Blazing Fast</h3><p className="mt-2 text-base text-gray-600">Built with performance in mind from the ground up, delivering a snappy, responsive experience.</p>
                        </motion.div>
                        <motion.div variants={FADE_IN_UP} whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }} className="group p-8 bg-gray-50/50 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                           <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500 text-white transition-transform duration-300 group-hover:scale-110"><DevicePhoneMobileIcon className="h-6 w-6" /></div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">Fully Responsive</h3><p className="mt-2 text-base text-gray-600">Every component is meticulously crafted to look and feel great on any screen size.</p>
                        </motion.div>
                        <motion.div variants={FADE_IN_UP} whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }} className="group p-8 bg-gray-50/50 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                           <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500 text-white transition-transform duration-300 group-hover:scale-110"><CodeBracketIcon className="h-6 w-6" /></div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">Developer Friendly</h3><p className="mt-2 text-base text-gray-600">Clean, understandable code that's a joy to work with, making customization simple and fast.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </AnimatedSection>
            
            {/* Testimonials Section */}
            <AnimatedSection id="pricing" className="bg-gray-50 py-20 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                     <div className="text-center">
                        <motion.p variants={FADE_IN_UP} className="font-semibold text-blue-600">Loved by teams worldwide</motion.p>
                        <motion.h2 variants={FADE_IN_UP} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Our Customers Are Our Biggest Fans</motion.h2>
                        <motion.p variants={FADE_IN_UP} className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Listen to what they have to say about their experience with Zero UI.</motion.p>
                    </div>
                    <motion.div variants={STAGGER_CONTAINER} className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div variants={FADE_IN_UP} whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 }}} className="bg-white p-8 rounded-2xl shadow-lg relative">
                             <svg className="absolute top-6 left-6 h-10 w-10 text-blue-100" fill="currentColor" viewBox="0 0 32 32"><path d="M9.33,12.5h4.33L10,21.5H5.67L9.33,12.5ZM21.33,12.5h4.33L22,21.5H17.67L21.33,12.5Z"/></svg>
                            <blockquote className="relative z-10"><p className="text-lg text-gray-700">"The attention to detail is astonishing. This isn't just another UI kit; it's a complete design system that has supercharged our workflow."</p></blockquote>
                             <footer className="mt-6 flex items-center gap-4"><Image className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Alex Rivera" width={48} height={48} /><div><div className="text-base font-semibold text-gray-900">Alex Rivera</div><div className="text-sm text-gray-500">CTO, Innovate Inc.</div></div></footer>
                        </motion.div>
                         <motion.div variants={FADE_IN_UP} whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 }}} className="bg-white p-8 rounded-2xl shadow-lg relative">
                           <svg className="absolute top-6 left-6 h-10 w-10 text-blue-100" fill="currentColor" viewBox="0 0 32 32"><path d="M9.33,12.5h4.33L10,21.5H5.67L9.33,12.5ZM21.33,12.5h4.33L22,21.5H17.67L21.33,12.5Z"/></svg>
                             <blockquote className="relative z-10"><p className="text-lg text-gray-700">"Zero UI has the most elegant and responsive components I've ever worked with. Our users love the new look and feel of our application."</p></blockquote>
                           <footer className="mt-6 flex items-center gap-4"><Image className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Jane Doe" width={48} height={48} /><div><div className="text-base font-semibold text-gray-900">Jane Doe</div><div className="text-sm text-gray-500">Lead Designer, Creative Co.</div></div></footer>
                        </motion.div>
                         <motion.div variants={FADE_IN_UP} whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 }}} className="bg-white p-8 rounded-2xl shadow-lg relative">
                           <svg className="absolute top-6 left-6 h-10 w-10 text-blue-100" fill="currentColor" viewBox="0 0 32 32"><path d="M9.33,12.5h4.33L10,21.5H5.67L9.33,12.5ZM21.33,12.5h4.33L22,21.5H17.67L21.33,12.5Z"/></svg>
                            <blockquote className="relative z-10"><p className="text-lg text-gray-700">"We were able to launch our MVP in weeks instead of months thanks to Zero UI. It's an absolute game-changer for startups."</p></blockquote>
                           <footer className="mt-6 flex items-center gap-4"><Image className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Michael Foster" width={48} height={48} /><div><div className="text-base font-semibold text-gray-900">Michael Foster</div><div className="text-sm text-gray-500">Founder, TechSprint</div></div></footer>
                        </motion.div>
                    </motion.div>
                 </div>
            </AnimatedSection>
            
            {/* CTA Section */}
             <AnimatedSection className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <motion.svg
                        variants={FADE_IN}
                        viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true"
                    >
                         <circle cx="512" cy="512" r="512" fill="url(#gradient-circle)" fillOpacity="0.7"></circle>
                         <defs><radialGradient id="gradient-circle"><stop stopColor="#007BFF"></stop><stop offset="1" stopColor="#00BFFF"></stop></radialGradient></defs>
                    </motion.svg>
                     <motion.div variants={STAGGER_CONTAINER} className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <motion.h2 variants={FADE_IN_UP} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to build your next masterpiece?<br/>Start your journey with Zero UI.</motion.h2>
                        <motion.p variants={FADE_IN_UP} className="mt-6 text-lg leading-8 text-gray-300">Experience the difference that a high-quality, elegant UI can make.</motion.p>
                        <motion.div variants={FADE_IN_UP} className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/signup" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">Get started</Link>
                            </motion.div>
                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/#product" className="text-sm font-semibold leading-6 text-white group">Learn more <span aria-hidden="true" className="transition-transform transform group-hover:translate-x-1 inline-block">→</span></Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        variants={{
                             visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        }}
                        className="relative mt-16 h-80 lg:mt-8">
                         <Image className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="1824" height="1080" />
                    </motion.div>
                </div>
            </AnimatedSection>
            
            {/* Footer */}
            <AnimatedSection className="bg-gray-50/70 border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                     <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                         <div className="space-y-8 xl:col-span-1">
                            <span className="font-bold text-gray-800 text-2xl tracking-tighter">Zero UI</span>
                             <p className="text-gray-500 text-base">The ultimate UI toolkit to bring your ideas to life.</p>
                         </div>
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                             <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div><h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Solutions</h3><ul className="mt-4 space-y-4"><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Marketing</Link></li><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Analytics</Link></li><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Commerce</Link></li></ul></div>
                                <div className="mt-12 md:mt-0"><h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Support</h3><ul className="mt-4 space-y-4"><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Pricing</Link></li><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Docs</Link></li><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Guides</Link></li></ul></div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                 <div><h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3><ul className="mt-4 space-y-4"><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">About</Link></li><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Blog</Link></li><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Jobs</Link></li></ul></div>
                                <div className="mt-12 md:mt-0"><h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Legal</h3><ul className="mt-4 space-y-4"><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Privacy</Link></li><li><Link href="#" className="text-base text-gray-600 hover:text-gray-900 hover:underline">Terms</Link></li></ul></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-200 pt-8"><p className="text-base text-gray-500 text-center">&copy; 2024 Zero UI, Inc. All rights reserved.</p></div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default LandingPage;
`,
    },
  },
};
