// button-patterns.ts
export interface ButtonPattern {
  id: number;
  name: string;
  category: string;
  getStartedCode: string;
  exploreCode: string;
  preview: {
    getStarted: string;
    explore: string;
  };
  isNew: boolean;
}

export const buttonPatterns: ButtonPattern[] = [
  {
    id: 1,
    name: "Neon Glow",
    category: "neon",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-black text-[#00ff88] text-lg font-medium px-8 h-14 border-2 border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:shadow-[0_0_30px_rgba(0,255,136,0.8)] transition-all duration-300 hover:bg-[#00ff88] hover:text-black"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-black text-[#ff0080] border-2 border-[#ff0080] shadow-[0_0_20px_rgba(255,0,128,0.5)] hover:shadow-[0_0_30px_rgba(255,0,128,0.8)] transition-all duration-300 hover:bg-[#ff0080] hover:text-black"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-black border-2 border-[#00ff88] text-[#00ff88]",
      explore: "bg-black border-2 border-[#ff0080] text-[#ff0080]",
    },
    isNew: true,
  },
  {
    id: 2,
    name: "Glassmorphism",
    category: "glass",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-white/10 backdrop-blur-md text-white text-lg font-medium px-8 h-14 border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:bg-white/20 transition-all duration-300"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-white/5 backdrop-blur-md text-white border border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:bg-white/15 transition-all duration-300"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-white/10 backdrop-blur-md border-white/20",
      explore: "bg-white/5 backdrop-blur-md border-white/10",
    },
    isNew: true,
  },
  {
    id: 3,
    name: "Gradient Shine",
    category: "gradient",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium px-8 h-14 shadow-[0_8px_16px_rgba(124,58,237,0.4)] hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-[0_8px_16px_rgba(236,72,153,0.4)] hover:from-pink-700 hover:to-orange-700 transition-all duration-300 hover:scale-105"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-gradient-to-r from-purple-600 to-blue-600",
      explore: "bg-gradient-to-r from-pink-600 to-orange-600",
    },
    isNew: true,
  },
  {
    id: 4,
    name: "Cyberpunk",
    category: "futuristic",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-black text-cyan-400 text-lg font-medium px-8 h-14 border border-cyan-400 shadow-[inset_0_1px_0_rgba(0,255,255,0.3),0_0_20px_rgba(0,255,255,0.3)] hover:bg-cyan-400 hover:text-black transition-all duration-300"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-black text-yellow-400 border border-yellow-400 shadow-[inset_0_1px_0_rgba(255,255,0,0.3),0_0_20px_rgba(255,255,0,0.3)] hover:bg-yellow-400 hover:text-black transition-all duration-300"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-black border-cyan-400 text-cyan-400",
      explore: "bg-black border-yellow-400 text-yellow-400",
    },
    isNew: true,
  },
  {
    id: 5,
    name: "Neumorphism",
    category: "modern",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-gray-200 text-gray-700 text-lg font-medium px-8 h-14 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all duration-300"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-gray-200 text-gray-600 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-gray-200 text-gray-700",
      explore: "bg-gray-200 text-gray-600",
    },
    isNew: true,
  },
  {
    id: 6,
    name: "Holographic",
    category: "effects",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-lg font-medium px-8 h-14 shadow-[0_8px_32px_rgba(168,85,247,0.4)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.6)] transition-all duration-300 bg-[length:200%] hover:bg-[position:100%] animate-pulse"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white shadow-[0_8px_32px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.6)] transition-all duration-300 bg-[length:200%] hover:bg-[position:100%]"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500",
      explore: "bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500",
    },
    isNew: true,
  },
  {
    id: 7,
    name: "Minimal Outline",
    category: "minimal",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-transparent text-white text-lg font-medium px-8 h-14 border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-transparent text-white/70 border border-white/30 hover:bg-white/10 hover:text-white hover:border-white/60 transition-all duration-300"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-transparent border-2 border-white text-white",
      explore: "bg-transparent border border-white/30 text-white/70",
    },
    isNew: true,
  },
  {
    id: 8,
    name: "Retro Glow",
    category: "retro",
    getStartedCode: `<Button
    asChild
    size="lg"
    className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white text-lg font-medium px-8 h-14 shadow-[0_0_20px_rgba(236,72,153,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-300 hover:scale-105"
  >
    <Link href="/docs">Get Started</Link>
  </Button>`,
    exploreCode: `<Button
    asChild
    size="lg"
    className="rounded-full px-8 h-14 text-lg font-medium bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] transition-all duration-300 hover:scale-105"
  >
    <Link href="/blocks" className="flex items-center gap-2">
      Explore
    </Link>
  </Button>`,
    preview: {
      getStarted: "bg-gradient-to-r from-pink-500 to-violet-600",
      explore: "bg-gradient-to-r from-orange-500 to-red-600",
    },
    isNew: false,
  },
  {
    id: 9,
    name: "Aurora Flow",
    category: "luxury",
    getStartedCode: `<Button
      asChild
      size="lg"
      className="rounded-full relative overflow-hidden px-8 h-14 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 animate-gradient-x [background-size:200%] hover:[background-position:right] shadow-[0_8px_24px_rgba(79,70,229,0.4)] transition-all duration-500"
    >
      <Link href="/docs">Get Started</Link>
    </Button>`,
    exploreCode: `<Button
      asChild
      size="lg"
      className="rounded-full relative overflow-hidden px-8 h-14 text-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 animate-gradient-x [background-size:200%] hover:[background-position:right] shadow-[0_8px_24px_rgba(236,72,153,0.4)] transition-all duration-500"
    >
      <Link href="/blocks" className="flex items-center gap-2">
        Explore
      </Link>
    </Button>`,
    preview: {
      getStarted:
        "bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500",
      explore: "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500",
    },
    isNew: true,
  },
  {
    id: 10,
    name: "Elegant Outline",
    category: "premium",
    getStartedCode: `<Button
      asChild
      size="lg"
      className="rounded-full px-8 h-14 text-lg font-medium border border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-100 hover:border-neutral-400 shadow-sm transition-all duration-300"
    >
      <Link href="/docs">Get Started</Link>
    </Button>`,
    exploreCode: `<Button
      asChild
      size="lg"
      className="rounded-full px-8 h-14 text-lg font-medium border border-neutral-700 text-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-white transition-all duration-300"
    >
      <Link href="/blocks" className="flex items-center gap-2">
        Explore
      </Link>
    </Button>`,
    preview: {
      getStarted: "border border-neutral-300 bg-white text-neutral-700",
      explore: "border border-neutral-700 bg-transparent text-neutral-900",
    },
    isNew: true,
  },
  {
    id: 11,
    name: "Liquid Shine",
    category: "effects",
    getStartedCode: `<Button
      asChild
      size="lg"
      className="rounded-full px-8 h-14 text-lg font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_16px_rgba(59,130,246,0.4)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
    >
      <Link href="/docs">Get Started</Link>
    </Button>`,
    exploreCode: `<Button
      asChild
      size="lg"
      className="rounded-full px-8 h-14 text-lg font-medium text-white bg-gradient-to-r from-rose-500 to-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_16px_rgba(239,68,68,0.4)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
    >
      <Link href="/blocks" className="flex items-center gap-2">
        Explore
      </Link>
    </Button>`,
    preview: {
      getStarted: "bg-gradient-to-r from-sky-500 to-blue-600",
      explore: "bg-gradient-to-r from-rose-500 to-red-600",
    },
    isNew: true,
  },
  {
    id: 12,
    name: "Pixel Retro",
    category: "creative",
    getStartedCode: `<Button
      asChild
      size="lg"
      className="relative px-8 h-14 text-lg font-bold text-black bg-yellow-400 border-4 border-black tracking-wider uppercase shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all duration-200 rounded-none"
    >
      <Link href="/docs">Start</Link>
    </Button>`,
    exploreCode: `<Button
      asChild
      size="lg"
      className="relative px-8 h-14 text-lg font-bold text-white bg-fuchsia-600 border-4 border-black tracking-wider uppercase shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all duration-200 rounded-none"
    >
      <Link href="/blocks">Explore</Link>
    </Button>`,
    preview: {
      getStarted: "bg-yellow-400 border-black text-black",
      explore: "bg-fuchsia-600 border-black text-white",
    },
    isNew: true,
  },
  {
    id: 13,
    name: "Aurora Border",
    category: "luxury",
    getStartedCode: `<Button
      asChild
      size="lg"
      className="relative px-8 h-14 text-lg font-medium text-white bg-black overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-cyan-500 before:animate-gradient-x before:[background-size:300%] hover:before:[background-position:right] before:-z-10"
    >
      <Link href="/docs">Get Started</Link>
    </Button>`,
    exploreCode: `<Button
      asChild
      size="lg"
      className="relative px-8 h-14 text-lg font-medium text-black bg-white overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-emerald-400 before:via-blue-500 before:to-purple-500 before:animate-gradient-x before:[background-size:300%] hover:before:[background-position:right] before:-z-10"
    >
      <Link href="/blocks">Explore</Link>
    </Button>`,
    preview: {
      getStarted: "bg-black text-white with gradient border",
      explore: "bg-white text-black with gradient border",
    },
    isNew: true,
  },
  {
    id: 14,
    name: "Morphing Blob",
    category: "animated",
    getStartedCode: `<Button
      asChild
      size="lg"
      className="relative px-8 h-14 text-lg font-semibold text-white bg-indigo-600 rounded-full overflow-hidden group"
    >
      <Link href="/docs" className="relative z-10">Get Started</Link>
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 animate-blob opacity-70 group-hover:opacity-100"></span>
    </Button>`,
    exploreCode: `<Button
      asChild
      size="lg"
      className="relative px-8 h-14 text-lg font-semibold text-white bg-cyan-600 rounded-full overflow-hidden group"
    >
      <Link href="/blocks" className="relative z-10">Explore</Link>
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 animate-blob opacity-70 group-hover:opacity-100"></span>
    </Button>`,
    preview: {
      getStarted: "bg-indigo-600 animated blob overlay",
      explore: "bg-cyan-600 animated blob overlay",
    },
    isNew: true,
  },
  {
    id: 15,
    name: "Shiny Dotted",
    category: "patterned",
    getStartedCode: `<Button
      asChild
      size="lg"
      className="px-8 h-14 text-lg font-medium text-white rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_1px,_transparent_1px)] [background-size:12px_12px] bg-indigo-600 hover:bg-indigo-700 shadow-[0_8px_16px_rgba(79,70,229,0.4)] transition-all duration-300"
    >
      <Link href="/docs">Get Started</Link>
    </Button>`,
    exploreCode: `<Button
      asChild
      size="lg"
      className="px-8 h-14 text-lg font-medium text-white rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_1px,_transparent_1px)] [background-size:12px_12px] bg-rose-600 hover:bg-rose-700 shadow-[0_8px_16px_rgba(244,63,94,0.4)] transition-all duration-300"
    >
      <Link href="/blocks">Explore</Link>
    </Button>`,
    preview: {
      getStarted: "bg-indigo-600 with dotted texture",
      explore: "bg-rose-600 with dotted texture",
    },
    isNew: true,
  },
];

export const buttonCategories = [
  { id: "all", name: "All Buttons" },
  { id: "neon", name: "Neon" },
  { id: "glass", name: "Glass" },
  { id: "gradient", name: "Gradient" },
  { id: "futuristic", name: "Futuristic" },
  { id: "modern", name: "Modern" },
  { id: "effects", name: "Effects" },
  { id: "minimal", name: "Minimal" },
  { id: "retro", name: "Retro" },
];
