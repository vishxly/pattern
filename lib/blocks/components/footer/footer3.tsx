"use client";
import { FC, useState } from "react";

const AccordionItem: FC<{
  title: string;
  content: string;
}> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-white flex justify-between items-center"
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-sm text-gray-300">{content}</p>}
    </div>
  );
};

const Footer: FC = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden min-h-screen flex flex-col justify-end">
      {/* Gradient background at bottom */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-t from-[#050505] via-[#FF8C00] to-transparent opacity-90"></div>
        <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 text-[10rem] md:text-[12rem] font-bold text-white/10 select-none pointer-events-none leading-none">
          ScaleX
        </div>
      </div>

      {/* Accordion Section */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 pb-16">
        <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
        <AccordionItem
          title="What is ScaleX?"
          content="ScaleX is a modern growth platform designed to accelerate your team's productivity and scalability."
        />
        <AccordionItem
          title="Can I use ScaleX for free?"
          content="Yes! We offer a free plan with limited features so you can explore the platform before upgrading."
        />
        <AccordionItem
          title="How do I contact support?"
          content="You can reach us through the Contact Us page or by emailing support@scalex.com."
        />
      </div>

      {/* Footer content aligned to bottom */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-4">Legal Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Stay Connect */}
        <div>
          <h4 className="font-semibold mb-4">Stay Connect</h4>
          <ul className="flex space-x-4 text-gray-300">
            <li>𝕏</li>
            <li>📸</li>
            <li>🔗</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="mb-4 text-gray-300">
            You Read This Far, Might As Well Sign Up.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="sample@gmail.com"
              className="bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
