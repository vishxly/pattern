import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Navbar from "../../components/navbar/navabar1";

export const navbar1Registry: LandingComponentGroup = {
  title: "Navbar",
  description: "Complete navbar sections for your landing page.",
  category: "Navbar",
  variants: {
    default: {
      title: "Navbar",
      description: "Complete navbar sections for your landing page.",
      component: Navbar,
      image: "/images/blocks/navbar/navbar1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `const Navbar1 = () => {
  return (
    <nav className="px-5 w-full z-50  flex justify-center">
      <div className="w-full max-w-2xl p-2 flex rounded-xl border border-[#C8CBD0]/70 bg-white gap-x-6 justify-between items-center shadow-xl">
        <a aria-label="logo" href="#header">
          <div className="size-8">
            <svg
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="128" height="128" rx="32" fill="black" />
              <rect x="30" y="30" width="68" height="68" rx="34" fill="white" />
            </svg>
          </div>
        </a>
        <nav className="items-center hidden sm:flex">
          <ul className="flex items-center justify-center text-sm text-[#7E7E7E] font-medium gap-x-6">
            {["about", "features", "pricing", "faq"].map((item) => (
              <li key={item}>
                <a
                  href={\`#\${item}\`}
                  className="transition-colors duration-200 ease-in-out hover:text-[#5e5e5e]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="p-0.75 rounded-[10px] relative cursor-pointer transition-all duration-200 ease-in-out active:scale-95 shadow-[0_0_0.22px_0.22px_rgba(0,0,0,0.07),0_0_0.22px_0.67px_rgba(0,0,0,0.05),0_2.69px_2.92px_-1.35px_rgba(0,0,0,0.25),0_0.9px_3.59px_0.9px_rgba(0,0,0,0.12),inset_-4px_-5px_2px_rgba(39,39,39,0.8)] bg-[#545454]"
          href="/login"
        >
          <div className="py-1.5 px-3.5 rounded-lg font-medium text-sm hover:opacity-80 transition-opacity duration-200 ease-in-out bg-[#1e1e1e] text-white flex items-center gap-x-1.5">
            <span>zeroUI</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </a>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <div className="pt-24 pb-40 px-4">
      <Navbar1 />
    </div>
  );
};

export default Navbar;`,
    },
  },
};
