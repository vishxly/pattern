import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import HomePage from "@/lib/blocks/components/landing/landing13";

export const landing13Registry: LandingComponentGroup = {
  title: "zeroUI: AI Brand Visibility",
  description: "A landing page showcasing an AI visibility platform with features, pricing, testimonials, and FAQs.",
  category: "Landing",
  variants: {
    default: {
      title: "zeroUI: AI Brand Visibility",
      description: "A landing page showcasing an AI visibility platform with features, pricing, testimonials, and FAQs.",
      component: HomePage,
      image: "/images/blocks/landing/landing13.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Page",
      code: `// /src/app/page.tsx
"use client";

import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  FC,
  ReactNode,
} from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CheckIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

// Fixed SVG components with proper typing
const InsightsIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20V10" /> <path d="M18 20V4" /> <path d="M6 20V16" />
  </svg>
);

const WorkflowsIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="8" height="8" x="3" y="3" rx="2" />{" "}
    <rect width="8" height="8" x="13" y="13" rx="2" />{" "}
    <path d="M11 21v-8a2 2 0 0 0-2-2H3" /> <path d="M13 3v8a2 2 0 0 0 2 2h8" />
  </svg>
);

const AnalyticsIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />{" "}
    <circle cx="9" cy="7" r="4" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" />{" "}
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const UserIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />{" "}
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TwitterIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LinkedInIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const MagneticWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPosition({
      x: clientX - (left + width / 2),
      y: clientY - (top + height / 2),
    });
  };
  const reset = () => setPosition({ x: 0, y: 0 });
  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.6 }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  [key: string]: any;
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform";
  const primaryClasses =
    "bg-primary text-primary-foreground relative overflow-hidden group hover:scale-105 active:scale-100";
  const secondaryClasses =
    "bg-transparent border border-secondary text-secondary-foreground hover:bg-secondary";
  return (
    <MagneticWrapper>
      <button
        className={cn(
          baseClasses,
          variant === "primary" ? primaryClasses : secondaryClasses,
          className
        )}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    </MagneticWrapper>
  );
};

const AccordionItem = ({ item }: { item: FaqItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-muted-foreground">{item.answer}</p>
      </motion.div>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 1 }}
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 ease-in-out rounded-full mx-auto max-w-7xl",
        scrolled
          ? " backdrop-blur-xl border border-white/5 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <CheckIcon className="text-white h-6 w-6" />
          <span className="text-xl font-bold text-black">Zeroui</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          {["Platform", "Pricing", "Resources", "Enterprise"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-muted-foreground hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
          <Button variant="secondary" className="px-5 py-2 hidden md:block">
            Log In
          </Button>
          <Button className="px-4 py-2 text-sm">Get a Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:hidden"
          >
            <nav className="flex flex-col gap-4">
              {["Platform", "Pricing", "Resources", "Enterprise"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-muted-foreground hover:text-white transition-colors duration-300 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <Button variant="secondary" className="w-full">
                  Log In
                </Button>
                <Button className="w-full">Get a Demo</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <section ref={containerRef} className="relative h-[110vh] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 "
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </motion.div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
        >
          Get Your Brand Mentioned by AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl"
        >
          zeroUI is the leading platform for AI Visibility. We empower the
          world's best brands to get discovered in ChatGPT, Perplexity, and
          every other answer engine.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button className="w-full sm:w-auto">
            Get a Demo <ChevronRightIcon className="inline ml-2 h-4 w-4" />
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            Sign Up
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-20 w-full max-w-6xl shadow-2xl shadow-purple-500/10"
        >
          <div className="relative rounded-xl border border-white/10 bg-neutral-200 backdrop-blur-lg p-2">
            <div className="w-full h-64 md:h-96 lg:h-[480px] bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-lg">Dashboard Preview</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Clients = () => {
  const logos = [
    "MongoDB",
    "Indeed",
    "Mercury",
    "DocuSign",
    "Zapier",
    "Ramp",
    "Golin",
    "Chime",
    "Rippling",
    "Brex",
  ];
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 px-4">
        POWERING THE TEAMS AT THE WORLD'S MOST INNOVATIVE COMPANIES
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-infinite-scroll group-hover:paused">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 sm:w-64 h-24 flex items-center justify-center"
            >
              <span className="text-lg sm:text-2xl text-gray-500 font-semibold">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

const FeaturesGrid = () => {
  const features: Feature[] = [
    {
      title: "Answer Engine Insights",
      description:
        "Track your AI visibility, see where and how AI mentions your brand, and uncover actionable insights to enhance your presence.",
      Icon: InsightsIcon,
    },
    {
      title: "Intelligent Workflows",
      description:
        "Create, optimize, and publish AI-native content at scale while ensuring maximum visibility across all search platforms.",
      Icon: WorkflowsIcon,
    },
    {
      title: "Agent Analytics",
      description:
        "Gain full visibility into how AI agents see your website. Optimize your content for crawlers and unlock new opportunities.",
      Icon: AnalyticsIcon,
    },
  ];
  return (
    <section className="py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need for AI visibility.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            The only platform that puts you in control of what AI says about
            you.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative p-8 rounded-2xl bg-secondary border border-white/5 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(120,119,198,0.1),_transparent_30%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <feature.Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      author: "Sarah Johnson",
      company: "VP of Marketing, Innovate Inc.",
      avatarUrl: "/avatar1.png",
      quote:
        "zeroUI completely changed how we approach our content strategy. Our visibility on AI platforms has skyrocketed, leading to a 300% increase in qualified leads.",
    },
    {
      author: "Michael Chen",
      company: "Head of SEO, DataCorp",
      avatarUrl: "/avatar2.png",
      quote:
        "The insights we get from zeroUI are unparalleled. We can now pinpoint exactly how AI sees our brand and optimize our online presence with surgical precision.",
    },
    {
      author: "Emily Rodriguez",
      company: "Digital Strategy Lead, NextGen Solutions",
      avatarUrl: "/avatar3.png",
      quote:
        "As an enterprise, we need control and reliability. zeroUI's platform is not only powerful but also secure and compliant, giving us the confidence to scale our AI visibility efforts globally.",
    },
  ];
  return (
    <section className="py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by the world's leading brands
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Don't just take our word for it. Here's what they have to say.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="p-8 rounded-2xl bg-secondary border border-white/5 flex flex-col justify-between"
            >
              <div>
                <p className="text-lg italic text-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      name: "Growth",
      price: "$499",
      description: "For ambitious teams ready to scale their AI visibility.",
      features: [
        "Full Platform Access",
        "5 Tracked Domains",
        "10,000 AI Queries/mo",
        "Weekly Reporting",
        "Email Support",
      ],
    },
    {
      name: "Business",
      price: "Custom",
      description:
        "For established businesses needing advanced control and insights.",
      features: [
        "All Growth features",
        "Unlimited Domains",
        "Custom Query Limits",
        "API Access",
        "Dedicated Account Manager",
        "SOC2 & Compliance",
      ],
      isPopular: true,
    },
    {
      name: "Agency",
      price: "Custom",
      description: "For agencies managing AI visibility for multiple clients.",
      features: [
        "Multi-client Dashboard",
        "Whitelabel Reporting",
        "Team Collaboration",
        "Co-marketing Opportunities",
        "Partner Discounts",
      ],
    },
  ];
  return (
    <section className="py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Flexible plans for ambitious teams
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Choose the plan that's right for your growth trajectory.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(
                "relative p-8 rounded-2xl bg-secondary border border-white/5 flex flex-col",
                plan.isPopular && "border-primary/50"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">
                  /mo
                </span>
              </p>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full mt-10"
                variant={plan.isPopular ? "primary" : "secondary"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs: FaqItem[] = [
    {
      question: "What is AI Visibility?",
      answer:
        "AI Visibility is the practice of optimizing your brand's online presence to be discoverable, accurately represented, and recommended by AI systems like ChatGPT, Google AI Overviews, and Perplexity.",
    },
    {
      question: "How is this different from traditional SEO?",
      answer:
        "While traditional SEO focuses on ranking in list-based search results, AI Visibility focuses on being cited and mentioned within conversational, synthesized AI answers. It requires a different approach to content, structure, and authority building.",
    },
    {
      question: "Which AI engines do you support?",
      answer:
        "zeroUI tracks your visibility across all major AI answer engines, including ChatGPT (all models), Google AI Overviews, Perplexity, Microsoft Copilot, and more. Our platform is continuously updated to include new and emerging AI systems.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. For monthly plans, the cancellation will take effect at the end of the current billing cycle. For annual plans, please contact our support team.",
    },
  ];
  return (
    <section className="py-20 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>
        <div className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCta = () => {
  return (
    <section className="py-20 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.2),transparent_60%)]"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Take Control of Your AI Visibility
        </h2>
        <p className="mt-6 text-base md:text-lg lg:text-xl text-muted-foreground">
          Stop guessing. Start optimizing. Get your brand mentioned by AI and
          reach millions of new customers.
        </p>
        <div className="mt-10">
          <Button className="py-4 px-8 text-lg">Get a Demo Today</Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerLinks = {
    Platform: ["Insights", "Workflows", "Analytics", "Pricing"],
    Resources: ["Blog", "Case Studies", "Guides", "Developer API"],
    Company: ["About Us", "Careers", "Contact", "Terms of Service"],
  };
  return (
    <footer className="border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="flex items-center gap-2">
            <CheckIcon className="text-white h-8 w-8" />
            <span className="text-2xl font-bold text-white">zeroUI</span>
          </a>
          <p className="mt-4 text-muted-foreground text-sm">
            The leading platform for AI Visibility.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} zeroUI , Inc. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" aria-label="Twitter">
            <TwitterIcon className="h-5 w-5 fill-muted-foreground hover:fill-white transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedInIcon className="h-5 w-5 fill-muted-foreground hover:fill-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function HomePage() {
  return (
    <div className="bg-background text-foreground selection:bg-purple-500/50">
      <Header />
      <main>
        <Hero />
        <Clients />
        <FeaturesGrid />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
`,
    },
  },
};
