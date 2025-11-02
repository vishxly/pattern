import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import CompleteLandingPage from "@/lib/blocks/components/landing/landing18";

export const landing18Registry: LandingComponentGroup = {
  title: "Zero UI: Modern Web Components",
  description:
    "A sleek landing page showcasing pixel-perfect, responsive UI components with smooth animations and testimonials.",
  category: "Landing",
  variants: {
    default: {
      title: "Zero UI: Modern Web Components",
      description:
        "A sleek landing page showcasing pixel-perfect, responsive UI components with smooth animations and testimonials.",
      component: CompleteLandingPage,
      image: "/images/blocks/landing/landing18.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Component",
      code: `'use client'; // Required for Framer Motion hooks like useInView

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';

// --- Type Definitions ---
interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string; // Added id property
}

interface Feature {
    title: string;
    desc: string;
    icon: string;
}

interface Testimonial {
    name: string;
    role: string;
    quote: string;
    avatar: string;
}

// --- Reusable Animation Variants for Framer Motion ---
const FADE_IN_UP: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } // A smooth cubic-bezier curve
    },
};

const STAGGER_CONTAINER: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// --- Helper Component to Animate Sections on Scroll ---
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
    const ref = React.useRef<HTMLElement>(null);
    // Triggers the animation when the element is 150px from the bottom of the viewport
    const isInView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={STAGGER_CONTAINER}
            className={className}
        >
            {children}
        </motion.section>
    );
};

// --- The Complete Landing Page Component ---
const CompleteLandingPage: React.FC = () => {
    // Feature data with proper typing
    const features: Feature[] = [
        { title: "Pixel-Perfect Design", desc: "Every component is designed with meticulous attention to detail.", icon: "🎨" },
        { title: "Fully Responsive", desc: "Flawless performance on any screen size, from mobile to desktop.", icon: "📱" },
        { title: "Dark Mode Ready", desc: "Beautifully styled for both light and dark themes out of the box.", icon: "🌙" },
    ];

    // Testimonial data with proper typing
    const testimonials: Testimonial[] = [
        { 
            name: "Sarah L.", 
            role: "Lead Developer @ Stripe", 
            quote: "Zero UI has accelerated our development process by at least 40%. The components are intuitive, well-documented, and simply beautiful. A true game-changer.", 
            avatar: "/avatars/avatar-1.png" 
        },
        { 
            name: "Mike R.", 
            role: "Product Designer @ Vercel", 
            quote: "As a designer, I appreciate the thought and craft that went into this. It's aesthetically pleasing and incredibly easy to customize to fit our brand. Highly recommended!", 
            avatar: "/avatars/avatar-2.png" 
        }
    ];

    return (
        <div className="bg-white dark:bg-black">
            {/* Header / Navigation */}
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="#" className="text-xl font-bold text-black dark:text-white">
                            Zero UI
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                             <Link href="#features" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                Features
                             </Link>
                             <Link href="#testimonials" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                Testimonials
                             </Link>
                             <Link href="#pricing" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                Pricing
                             </Link>
                        </nav>
                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#" className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white dark:text-black bg-black dark:bg-white rounded-full">
                                Get Started
                            </Link>
                         </motion.div>
                    </div>
                </div>
            </motion.header>

            <main>
                {/* Hero Section */}
                <AnimatedSection className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-4 pt-20 md:pt-40 text-center">
                    <motion.h1 
                        variants={FADE_IN_UP} 
                        className="relative z-10 max-w-6xl text-4xl font-semibold text-black md:text-6xl lg:text-8xl dark:text-white leading-tight"
                    >
                       Build Beautiful UIs with Zero UI
                    </motion.h1>
                    <motion.p 
                        variants={FADE_IN_UP} 
                        className="relative z-10 mx-auto mt-6 max-w-3xl text-base text-neutral-700 md:text-xl dark:text-neutral-400"
                    >
                        Zero UI blends expert design with cutting-edge technology to create
                        intuitive user interfaces, enhancing every aspect of your digital
                        experience.
                    </motion.p>
                    <motion.div variants={FADE_IN_UP} className="relative z-10 mt-10">
                        <motion.a 
                            href="#"
                            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)" }} 
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium px-8 py-4"
                        >
                            Get started
                            <svg 
                                stroke="currentColor" 
                                fill="currentColor" 
                                strokeWidth="0" 
                                viewBox="0 0 24 24" 
                                className="h-4 w-4" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" 
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mt-20 rounded-[32px] w-full border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800"
                    >
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] bg-gradient-to-t from-transparent via-white to-white dark:via-black/90 dark:to-black" />
                        <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
                            <Image
                                alt="Zero UI showcase"
                                loading="eager"
                                width={1200}
                                height={675}
                                decoding="async"
                                className="rounded-[20px] object-cover"
                                src="/blocks/mail-dark.webp"
                            />
                        </div>
                    </motion.div>
                </AnimatedSection>
                
                {/* Features Section */}
                <AnimatedSection id="features" className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <motion.div variants={FADE_IN_UP}>
                             <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
                                Everything You Need
                             </h2>
                             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                                Crafted for Excellence
                             </p>
                             <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                                Zero UI provides the best components to build modern, beautiful applications faster than ever.
                             </p>
                        </motion.div>
                        <motion.div variants={STAGGER_CONTAINER} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    variants={FADE_IN_UP}
                                    className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800"
                                >
                                    <div className="text-4xl">{feature.icon}</div>
                                    <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </AnimatedSection>
                
                {/* Testimonials Section */}
                <AnimatedSection id="testimonials" className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
                     <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                         <motion.h2 
                            variants={FADE_IN_UP} 
                            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
                         >
                            Loved By The Best
                         </motion.h2>
                         <motion.p 
                            variants={FADE_IN_UP} 
                            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
                         >
                            Here's what our users are saying about their experience.
                         </motion.p>
                        <motion.div variants={STAGGER_CONTAINER} className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {testimonials.map((testimonial, i) => (
                                <motion.figure
                                    key={i}
                                    variants={FADE_IN_UP}
                                    className="p-8 text-left bg-white dark:bg-black rounded-2xl border border-neutral-200 dark:border-neutral-800"
                                >
                                    <blockquote className="text-lg text-gray-700 dark:text-gray-300">
                                        <p>"{testimonial.quote}"</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <Image 
                                            className="h-10 w-10 rounded-full" 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name} 
                                            width={40} 
                                            height={40}
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </figcaption>
                                </motion.figure>
                            ))}
                        </motion.div>
                    </div>
                </AnimatedSection>

                {/* Final CTA */}
                <AnimatedSection className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                         <motion.h2 
                            variants={FADE_IN_UP} 
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
                         >
                            Ready to Elevate Your UI?
                         </motion.h2>
                         <motion.p 
                            variants={FADE_IN_UP} 
                            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400"
                         >
                            Join thousands of developers and designers building incredible experiences. Get started with Zero UI today and build better, faster.
                         </motion.p>
                        <motion.div variants={FADE_IN_UP} className="mt-10">
                             <motion.a 
                                href="#"
                                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.5)" }} 
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold px-8 py-4 shadow-lg"
                            >
                                Get Zero UI Now
                            </motion.a>
                        </motion.div>
                    </div>
                </AnimatedSection>
            </main>
            
            {/* Footer */}
             <footer className="border-t border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
                     <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                         <div className="pb-6">
                            <Link href="#features" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                Features
                            </Link>
                         </div>
                         <div className="pb-6">
                            <Link href="#testimonials" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                Testimonials
                            </Link>
                         </div>
                         <div className="pb-6">
                            <Link href="#pricing" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                Pricing
                            </Link>
                         </div>
                     </nav>
                     <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                        &copy; 2024 Zero UI, Inc. All rights reserved.
                     </p>
                </div>
            </footer>
        </div>
    );
};

export default CompleteLandingPage;
`,
    },
  },
};
