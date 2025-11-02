import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Marquee from "@/lib/docs/ui/marquee"; // Import the enhanced Marquee component
import { ChevronRight, Zap } from "lucide-react";

// Enhanced testimonial data with more variety
const testimonials = [
  {
    name: "Alex Rivera",
    handle: "@alex_codes",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    body: "The adaptive speed and magnetic hover effects are absolutely mind-blowing. This is the future of web animations!",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    handle: "@samanthadesigns",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    body: "The 3D depth effect makes our testimonials feel alive. Clients are constantly asking how we achieved this premium look.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    handle: "@michael_builds",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    body: "Interactive controls and auto-reverse? Genius! Finally, a marquee that users actually want to interact with.",
    rating: 5,
  },
  {
    name: "Jessica Martinez",
    handle: "@jess_creates",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    body: "The motion blur and parallax effects create an incredibly immersive experience. This is next-level UI design.",
    rating: 5,
  },
  {
    name: "David Park",
    handle: "@david_designs",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    body: "Smart looping and adaptive speed mean it works perfectly with any content. Revolutionary stuff!",
    rating: 5,
  },
  {
    name: "Emily Watson",
    handle: "@emily_ux",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    body: "Finally, a marquee component that doesn't feel dated. The interactive features make it actually engaging!",
    rating: 5,
  },
];

const companies = [
  "Stripe",
  "Netflix",
  "Google",
  "Meta",
  "Amazon",
  "Microsoft",
  "Apple",
  "Tesla",
  "SpaceX",
  "OpenAI",
];

// Enhanced testimonial card with premium effects
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <figure className="relative w-80 cursor-pointer rounded-3xl border border-gray-200/30 bg-gradient-to-br from-white/80 to-gray-50/50 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] dark:border-gray-700/30 dark:from-gray-800/80 dark:to-gray-900/50 group">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <blockquote className="text-gray-800 dark:text-gray-200 relative z-10 leading-relaxed">
      "{testimonial.body}"
    </blockquote>

    <div className="flex items-center mt-2 mb-4 relative z-10">
      {[...Array(testimonial.rating)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-1 shadow-sm"
        />
      ))}
    </div>

    <figcaption className="mt-4 flex items-center gap-3 relative z-10">
      <Avatar className="ring-2 ring-white/50 shadow-lg">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
          {testimonial.name[0]}
        </AvatarFallback>
      </Avatar>
      <div>
        <cite className="font-semibold text-gray-900 dark:text-white not-italic text-lg">
          {testimonial.name}
        </cite>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {testimonial.handle}
        </p>
      </div>
    </figcaption>

    <ChevronRight className="absolute bottom-4 right-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />

    {/* Animated border effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
  </figure>
);

// Company logo card component
const CompanyCard = ({ company }: { company: string }) => (
  <div className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200/50 dark:border-gray-600/50">
    <span className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
      {company}
    </span>
  </div>
);

// Main demo component
const MarqueeDemo = () => {
  return (
    <div className="min-h-screen w-full py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
            <Zap size={16} />
            <span className="text-sm font-semibold">
              Revolutionary UI Components
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200">
            Next-Level Marquee Experience
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Featuring adaptive speed, magnetic hover, 3D depth effects,
            interactive controls, motion blur, parallax scrolling, and
            intelligent auto-reverse capabilities.
          </p>
        </div>

        {/* Revolutionary Testimonials Marquee */}
        <div className="mb-20">
          <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
            Interactive Testimonials with Magnetic Hover & 3D Depth
          </h2>
          <Marquee
            direction="up"
            pauseOnHover
            adaptiveSpeed
            magneticHover
            depthEffect
            interactiveControls
            motionBlur
            glowOnHover
            className="h-96"
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>

        {/* Ultra-Fast Company Logos with Auto-Reverse */}
        <div className="mb-20">
          <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
            Auto-Reversing Company Showcase with Parallax
          </h2>
          <Marquee
            speed="ultra"
            autoReverse
            reverseInterval={8}
            parallaxIntensity={0.3}
            fadeEdges
            className="py-8"
          >
            {companies.map((company, i) => (
              <CompanyCard key={i} company={company} />
            ))}
          </Marquee>
        </div>

        {/* Horizontal Testimonials with Motion Blur */}
        <div className="mb-20">
          <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
            Horizontal Scroll with Motion Blur & Interactive Controls
          </h2>
          <Marquee
            direction="left"
            speed="normal"
            pauseOnHover
            interactiveControls
            motionBlur
            magneticHover
            className="py-4"
          >
            {testimonials.slice(0, 4).map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Adaptive Speed",
              desc: "Automatically adjusts speed based on content width for optimal viewing",
            },
            {
              title: "Magnetic Hover",
              desc: "Items snap to center and scale up when hovered for premium interaction",
            },
            {
              title: "3D Depth Effect",
              desc: "Perspective transforms create realistic depth and dimension",
            },
            {
              title: "Interactive Controls",
              desc: "Play, pause, and reverse controls for complete user control",
            },
            {
              title: "Motion Blur",
              desc: "Realistic motion blur effects for smooth, cinematic animation",
            },
            {
              title: "Auto-Reverse",
              desc: "Intelligent auto-reverse with customizable intervals",
            },
            {
              title: "Parallax Scrolling",
              desc: "Elements move at different speeds creating immersive depth",
            },
            {
              title: "Smart Looping",
              desc: "Intelligent content detection for seamless infinite loops",
            },
            {
              title: "Glow Effects",
              desc: "Dynamic glow and shadow effects on hover interactions",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Usage Examples */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
            Usage Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                Basic Usage
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
                {`<Marquee direction="left" speed="normal" pauseOnHover>
  {items.map(item => (
    <YourComponent key={item.id} data={item} />
  ))}
</Marquee>`}
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                Advanced Features
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
                {`<Marquee
  direction="up"
  adaptiveSpeed
  magneticHover
  depthEffect
  interactiveControls
  motionBlur
  autoReverse
  reverseInterval={10}
  parallaxIntensity={0.3}
>
  {content}
</Marquee>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeDemo;
