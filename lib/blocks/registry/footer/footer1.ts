import Footer from "@/lib/blocks/components/footer/footer1";
import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

export const footer1Registry: LandingComponentGroup = {
  title: "Emblem Footer",
  description: "Complete footer sections for your landing page.",
  category: "Footer",
  variants: {
    default: {
      title: "Emblem Footer",
      description: "Complete footer sections for your landing page.",
      component: Footer,
      image: "/images/blocks/footer/footer1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-end">
      {/* Footer Section */}
      <footer className="w-full px-6 lg:px-12 pt-20 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto bg-white/5 rounded-3xl border border-white/20 px-8 py-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-white/10 p-2 rounded-full">
                  <span className="text-white text-lg font-bold">🌐</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <p className="mt-4 text-xs text-gray-600">
                © 2024 Emblem. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#">How it works</Link>
                </li>
                <li>
                  <Link href="#">Who we serve</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#">Terms of Services</Link>
                </li>
                <li>
                  <Link href="#">Cookies Policy</Link>
                </li>
                <li>
                  <Link href="#">Affiliate Policy</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4">Social Media</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Large Background Text Below Footer */}
        <div className="w-full text-[8rem] font-bold text-white/10 text-center pointer-events-none select-none pb-12 z-0">
          Emblem
        </div>
      </footer>
    </div>
  );
};

export default Footer;`,
    },
  },
};
