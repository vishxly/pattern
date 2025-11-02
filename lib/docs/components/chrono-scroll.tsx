// pages/product-tour.tsx
import {
    ChronoScroll,
    ChronoScrollViewport,
    ChronoScrollContent,
    ChronoScrollEvents,
    ChronoScrollEvent,
  } from "@/lib/docs/ui/chrono-scroll"; // Adjust path as needed
  import Image from "next/image";
  
  const moments = [
    {
      title: "Sign Up in Seconds",
      description:
        "Create your account with just your email. Our streamlined process gets you into the dashboard instantly, with no credit card required upfront.",
      image: "https://placehold.co/1200x800/6366F1/FFFFFF?text=1.+Sign+Up",
    },
    {
      title: "Connect Your Data",
      description:
        "Easily integrate with your favorite services through our secure API connections. From spreadsheets to databases, we support it all.",
      image: "https://placehold.co/1200x800/10B981/FFFFFF?text=2.+Connect",
    },
    {
      title: "Visualize Your Insights",
      description:
        "Our interactive dashboard brings your data to life. Drag and drop widgets, create custom reports, and discover trends you never knew existed.",
      image: "https://placehold.co/1200x800/F59E0B/FFFFFF?text=3.+Visualize",
    },
    {
      title: "Collaborate with Your Team",
      description:
        "Share dashboards, annotate key findings, and assign tasks directly within the platform. Real-time collaboration has never be easier.",
      image: "https://placehold.co/1200x800/EF4444/FFFFFF?text=4.+Collaborate",
    },
  ];
  
  export default function ChronoScrollDemo() {
    return (
      <div className="bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen">
        {/* Make the entire page scrollable with proper height */}
        <div className="min-h-screen">
          <div className="container mx-auto px-4">
            {/* A Title Section */}
            <div className="text-center py-24">
              <h1 className="text-4xl md:text-6xl font-bold">
                So, how does it work?
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                Follow along for a quick tour of our platform.
              </p>
            </div>
  
            <ChronoScroll>
              {/* Left Side: The "Sticky" Visuals */}
              <ChronoScrollViewport>
                {moments.map((moment, index) => (
                  <ChronoScrollContent key={index}>
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover"
                      priority={index === 0} // Load first image with priority
                    />
                  </ChronoScrollContent>
                ))}
              </ChronoScrollViewport>
  
              {/* Right Side: The Scrolling Text Events */}
              <ChronoScrollEvents>
                {moments.map((moment, index) => (
                  <ChronoScrollEvent key={index}>
                    <h2 className="text-3xl font-bold text-blue-500 mb-4">
                      {`0${index + 1}`}
                    </h2>
                    <h3 className="text-2xl font-semibold mb-4">{moment.title}</h3>
                    <p className="text-lg text-muted-foreground">
                      {moment.description}
                    </p>
                  </ChronoScrollEvent>
                ))}
              </ChronoScrollEvents>
            </ChronoScroll>
  
            {/* An Ending Section */}
            <div className="text-center py-24">
              <h1 className="text-4xl md:text-6xl font-bold">Ready to Dive In?</h1>
              <p className="text-lg text-muted-foreground mt-4">
                Start your journey with us today.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
