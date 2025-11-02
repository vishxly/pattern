import Footer from "@/lib/blocks/components/footer/footer2";
import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

export const footer2Registry: LandingComponentGroup = {
  title: "Sprint Footer",
  description: "Complete footer sections for your landing page.",
  category: "Footer",
  variants: {
    default: {
      title: "Sprint Footer",
      description: "Complete footer sections for your landing page.",
      component: Footer,
      image: "/images/blocks/footer/footer2.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Documentation */}
        <div>
          <h4 className="font-semibold mb-4">Documentation</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Getting Started</li>
            <li>Components</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Customers</li>
            <li>Enterprise</li>
            <li>Templates</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Careers</li>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
      </div>

      {/* Giant Text */}
      <div className="relative z-10 text-center pointer-events-none select-none">
        <div className="text-[8rem] md:text-[12rem] font-bold text-white/95 tracking-tight">
          Sprint
        </div>
      </div>

      {/* Elegant Blueish Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[400px] z-10 pointer-events-none">
        <div className="w-full h-full bg-blue-600 blur-[80px]"></div>
      </div>
    </div>
  );
};

export default Footer;`,
    },
  },
};
