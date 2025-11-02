// bg-patterns.ts
export interface Pattern {
  id: number;
  name: string;
  category: string;
  css: string;
  preview: string;
  htmlCode: string;
  isNew: boolean;
  type?: string; // Optional property to allow patterns without a type
}

export const patterns: Pattern[] = [
  {
    id: 1,
    name: "Aurora Diamonds",
    category: "geometric",
    css: `background-color: #0a0a1a;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.5) 0%, transparent 40%),
      radial-gradient(circle at 80% 30%, rgba(14, 165, 233, 0.5) 0%, transparent 40%),
      radial-gradient(circle at 20% 70%, rgba(34, 197, 94, 0.5) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.5) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.35) 0%, transparent 50%);`,
    preview:
      "linear-gradient(135deg, #0a0a1a 0%, #ec4899 20%, #0ea5e9 40%, #22c55e 60%, #8b5cf6 80%, #facc15 100%)",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#0a0a1a',
         backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.5) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(14, 165, 233, 0.5) 0%, transparent 40%), radial-gradient(circle at 20% 70%, rgba(34, 197, 94, 0.5) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.5) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.35) 0%, transparent 50%)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },

  {
    id: 2,
    name: "Hexagonal Glow",
    category: "geometric",
    css: `background-color: #0f0f23;
  background-image: 
    radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, #06b6d4 0%, transparent 50%),
    radial-gradient(circle at 25% 75%, #10b981 0%, transparent 50%);`,
    preview:
      "linear-gradient(135deg, #0f0f23 0%, #6366f1 25%, #8b5cf6 50%, #06b6d4 75%, #10b981 100%)",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#0f0f23',
         backgroundImage: 'radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 75% 25%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 25% 75%, #10b981 0%, transparent 50%)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 3,
    name: "Dotted Matrix",
    category: "grid",
    css: `background-color: #1a1a2e;
  background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
  background-size: 30px 30px;`,
    preview: "radial-gradient(circle, #ffffff 1px, transparent 1px), #1a1a2e",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#1a1a2e',
         backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
         backgroundSize: '30px 30px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 4,
    name: "Glassmorphism Blur",
    category: "effects",
    css: `background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);`,
    preview:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
         backdropFilter: 'blur(10px)',
         WebkitBackdropFilter: 'blur(10px)',
         border: '1px solid rgba(255, 255, 255, 0.18)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 5,
    name: "Mesh Gradient Flow",
    category: "effects",
    css: `background: radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
  radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
  radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
  radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);`,
    preview:
      "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%)",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         background: 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 6,
    name: "Circuit Board",
    category: "geometric",
    css: `background-color: #0a0a0a;
  background-image: 
    linear-gradient(90deg, #00ff88 0px, transparent 1px),
    linear-gradient(180deg, #00ff88 0px, transparent 1px);
  background-size: 60px 60px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #00ff88;
    border-radius: 50%;
    box-shadow: 60px 0 #00ff88, 120px 0 #00ff88, 0 60px #00ff88, 60px 60px #00ff88;
  }`,
    preview: "linear-gradient(0deg, #0a0a0a 0%, #0a0a0a 100%)",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#0a0a0a',
         backgroundImage: 'linear-gradient(90deg, #00ff88 0px, transparent 1px), linear-gradient(180deg, #00ff88 0px, transparent 1px)',
         backgroundSize: '60px 60px'
       }}>
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle at 0 0, #00ff88 2px, transparent 2px)',
      backgroundSize: '60px 60px'
    }}></div>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 7,
    name: "Neon Wave Lines",
    category: "decorative",
    css: `background-color: #000;
  background-image: 
    repeating-linear-gradient(45deg, 
      transparent, 
      transparent 10px, 
      rgba(255, 0, 150, 0.3) 10px, 
      rgba(255, 0, 150, 0.3) 11px),
    repeating-linear-gradient(-45deg, 
      transparent, 
      transparent 10px, 
      rgba(0, 255, 255, 0.3) 10px, 
      rgba(0, 255, 255, 0.3) 11px);`,
    preview:
      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 0, 150, 0.3) 10px, rgba(255, 0, 150, 0.3) 11px), #000",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#000',
         backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 0, 150, 0.3) 10px, rgba(255, 0, 150, 0.3) 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0, 255, 255, 0.3) 10px, rgba(0, 255, 255, 0.3) 11px)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 8,
    name: "Holographic Shine",
    category: "effects",
    css: `background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607);
  background-size: 300% 300%;
  animation: holographic 4s ease infinite;
  
  @keyframes holographic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }`,
    preview:
      "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607)",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607)',
         backgroundSize: '300% 300%',
         animation: 'holographic 4s ease infinite'
       }}>
    <style jsx>{\`
      @keyframes holographic {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    \`}</style>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 9,
    name: "Particle Field",
    category: "effects",
    css: `background-color: #0f0f0f;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
  background-size: 600px 600px, 400px 400px, 800px 800px;
  background-position: 0px 0px, 200px 200px, 100px 100px;`,
    preview:
      "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), #0f0f0f",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#0f0f0f',
         backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
         backgroundSize: '600px 600px, 400px 400px, 800px 800px',
         backgroundPosition: '0px 0px, 200px 200px, 100px 100px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 10,
    name: "Diamond Grid",
    category: "geometric",
    css: `background-color: #1a1a2e;
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent 60%);
  background-size: 40px 40px;`,
    preview:
      "linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent 60%), #1a1a2e",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#1a1a2e',
         backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent 60%), linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent 60%)',
         backgroundSize: '40px 40px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 11,
    name: "Glow Orbs",
    category: "decorative",
    css: `background: #000;
  background-image: 
    radial-gradient(circle at 25% 25%, #ff1744 0%, transparent 25%),
    radial-gradient(circle at 75% 25%, #2196f3 0%, transparent 25%),
    radial-gradient(circle at 25% 75%, #4caf50 0%, transparent 25%),
    radial-gradient(circle at 75% 75%, #ff9800 0%, transparent 25%);
  background-size: 200px 200px;
  filter: blur(2px);`,
    preview:
      "radial-gradient(circle at 25% 25%, #ff1744 0%, transparent 25%), radial-gradient(circle at 75% 25%, #2196f3 0%, transparent 25%), #000",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         background: '#000',
         backgroundImage: 'radial-gradient(circle at 25% 25%, #ff1744 0%, transparent 25%), radial-gradient(circle at 75% 25%, #2196f3 0%, transparent 25%), radial-gradient(circle at 25% 75%, #4caf50 0%, transparent 25%), radial-gradient(circle at 75% 75%, #ff9800 0%, transparent 25%)',
         backgroundSize: '200px 200px',
         filter: 'blur(2px)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 12,
    name: "Noise Texture",
    category: "effects",
    css: `background-color: #1a1a1a;
  background-image: 
    repeating-conic-gradient(from 0deg at 50% 50%, 
      transparent 0deg, 
      rgba(255,255,255,0.05) 1deg, 
      transparent 2deg);
  background-size: 20px 20px;`,
    preview:
      "repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.05) 1deg, transparent 2deg), #1a1a1a",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#1a1a1a',
         backgroundImage: 'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.05) 1deg, transparent 2deg)',
         backgroundSize: '20px 20px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 13,
    name: "Laser Grid",
    category: "grid",
    css: `background-color: #000;
  background-image: 
    linear-gradient(cyan 1px, transparent 1px),
    linear-gradient(90deg, cyan 1px, transparent 1px),
    linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;`,
    preview:
      "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px), #000",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#000',
         backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px), linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)',
         backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
         backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 14,
    name: "Morphing Blobs",
    category: "effects",
    css: `background: 
    radial-gradient(circle at 20% 50%, #ff6b6b 0%, transparent 50%),
    radial-gradient(circle at 70% 20%, #4ecdc4 0%, transparent 50%),
    radial-gradient(circle at 60% 70%, #45b7d1 0%, transparent 50%),
    radial-gradient(circle at 30% 80%, #96ceb4 0%, transparent 50%),
    radial-gradient(circle at 80% 60%, #ffeaa7 0%, transparent 50%);
  background-size: 400px 400px;
  filter: blur(80px);
  animation: morphing 8s ease-in-out infinite alternate;
  
  @keyframes morphing {
    0% { background-position: 0% 0%, 100% 0%, 50% 50%, 0% 100%, 100% 100%; }
    100% { background-position: 100% 100%, 0% 100%, 100% 0%, 50% 0%, 0% 50%; }
  }`,
    preview:
      "radial-gradient(circle at 20% 50%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 70% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 60% 70%, #45b7d1 0%, transparent 50%)",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         background: 'radial-gradient(circle at 20% 50%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 70% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 60% 70%, #45b7d1 0%, transparent 50%), radial-gradient(circle at 30% 80%, #96ceb4 0%, transparent 50%), radial-gradient(circle at 80% 60%, #ffeaa7 0%, transparent 50%)',
         backgroundSize: '400px 400px',
         filter: 'blur(80px)',
         animation: 'morphing 8s ease-in-out infinite alternate'
       }}>
    <style jsx>{\`
      @keyframes morphing {
        0% { background-position: 0% 0%, 100% 0%, 50% 50%, 0% 100%, 100% 100%; }
        100% { background-position: 100% 100%, 0% 100%, 100% 0%, 50% 0%, 0% 50%; }
      }
    \`}</style>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 15,
    name: "Isometric Cubes",
    category: "geometric",
    css: `background-color: #2c3e50;
  background-image: 
    linear-gradient(30deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e),
    linear-gradient(150deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e),
    linear-gradient(30deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e),
    linear-gradient(150deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e);
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px;`,
    preview:
      "linear-gradient(30deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e), #2c3e50",
    htmlCode: `<div className="min-h-screen w-full relative" 
       style={{
         backgroundColor: '#2c3e50',
         backgroundImage: 'linear-gradient(30deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e), linear-gradient(150deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e), linear-gradient(30deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e), linear-gradient(150deg, #34495e 12%, transparent 12.5%, transparent 87%, #34495e 87.5%, #34495e)',
         backgroundSize: '80px 140px',
         backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 16,
    name: "Pastel Gradient Waves",
    category: "effects",
    css: `background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);`,
    preview: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
        style={{
        background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
        }}>
        {/* Your content here */}
        </div>`,
    isNew: true,
  },
  {
    id: 17,
    name: "Dark Starfield",
    category: "decorative",
    css: `background-color: #000;
        background-image: radial-gradient(white 1px, transparent 1px);
        background-size: 3px 3px;`,
    preview: "radial-gradient(white 1px, transparent 1px), #000",
    htmlCode: `<div className="min-h-screen w-full relative"
        style={{
        backgroundColor: '#000',
        backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
        backgroundSize: '3px 3px'
        }}>
        {/* Your content here */}
        </div>`,
    isNew: true,
  },
  {
    id: 18,
    name: "Sunset Horizon",
    category: "effects",
    css: `background: linear-gradient(to top, #0b486b, #f56217);`,
    preview: "linear-gradient(to top, #0b486b, #f56217)",
    htmlCode: `<div className="min-h-screen w-full relative"
        style={{
        background: 'linear-gradient(to top, #0b486b, #f56217)'
        }}>
        {/* Your content here */}
        </div>`,
    isNew: true,
  },
  {
    id: 19,
    name: "Checkerboard",
    category: "grid",
    css: `background-color: #fff;
        background-image: linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
        background-size: 40px 40px;
        background-position: 0 0, 0 20px, 20px -20px, -20px 0px;`,
    preview: "linear-gradient(45deg, #eee 25%, transparent 25%), #fff",
    htmlCode: `<div className="min-h-screen w-full relative"
        style={{
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, transparent 75%, #eee 75%)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}>
        {/* Your content here */}
        </div>`,
    isNew: true,
  },
  {
    id: 20,
    name: "Aurora Borealis",
    category: "effects",
    css: `background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);`,
    preview: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
        style={{
        background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
        }}>
        {/* Your content here */}
        </div>`,
    isNew: true,
  },

  {
    id: 21,
    name: "Checkerboard",
    category: "grid",
    css: `background-color: #ffffff;
    background-image: 
      linear-gradient(45deg, #f3f4f6 25%, transparent 25%), 
      linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, #f3f4f6 75%), 
      linear-gradient(-45deg, transparent 75%, #f3f4f6 75%);
    background-size: 40px 40px;`,
    preview:
      "linear-gradient(45deg, #f3f4f6 25%, transparent 25%), linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), #ffffff",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#ffffff',
         backgroundImage: \`
           linear-gradient(45deg, #f3f4f6 25%, transparent 25%), 
           linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), 
           linear-gradient(45deg, transparent 75%, #f3f4f6 75%), 
           linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)
         \`,
         backgroundSize: '40px 40px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },

  // Add your complex white sphere grid pattern
  {
    id: 22,
    name: "White Sphere Grid",
    category: "grid",
    css: `background: white;
    background-image: 
      linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
      radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%);
    background-size: 32px 32px, 32px 32px, 100% 100%;`,
    preview: "white",
    htmlCode: `<div className="min-h-screen w-full bg-white relative">
  {/* White Sphere Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "white",
      backgroundImage: \`
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
      \`,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    isNew: true,
    type: "complex",
  },

  {
    id: 23,
    name: "Layered Aurora",
    category: "effects",
    css: `background: #000;`,
    preview: "#000",
    htmlCode: `<div className="min-h-screen w-full bg-black relative">
  {/* Base Aurora Layer */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(circle at 20% 30%, rgba(139,92,246,0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(59,130,246,0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(16,185,129,0.3) 0%, transparent 50%)
      \`,
      filter: 'blur(40px)'
    }}
  />
  {/* Overlay Grid */}
  <div
    className="absolute inset-0 z-1"
    style={{
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }}
  />
  {/* Your Content/Components */}
</div>`,
    isNew: true,
    type: "complex",
  },
  {
    id: 24,
    name: "Radial Purple Glow",
    category: "gradients",
    css: `background: radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%);`,
    preview: "linear-gradient(180deg, #fff, #7c3aed)",
    htmlCode: `<div className="min-h-screen w-full relative">
    {/* Radial Gradient Background from Top */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 25,
    name: "Sunset Glow",
    category: "gradients",
    css: `background: radial-gradient(120% 120% at 50% 0%, #fcd34d 20%, #ef4444 70%, #7c3aed 100%);`,
    preview: "linear-gradient(180deg, #fcd34d, #ef4444, #7c3aed)",
    htmlCode: `<div className="min-h-screen w-full relative">
    {/* Sunset Glow Radial Gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(120% 120% at 50% 0%, #fcd34d 20%, #ef4444 70%, #7c3aed 100%)",
      }}
    />
  </div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 26,
    name: "Ocean Breeze",
    category: "gradients",
    css: `background: radial-gradient(125% 125% at 50% 10%, #e0f2fe 30%, #3b82f6 70%, #1e3a8a 100%);`,
    preview: "linear-gradient(180deg, #e0f2fe, #3b82f6, #1e3a8a)",
    htmlCode: `<div className="min-h-screen w-full relative">
    {/* Ocean Breeze Gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #e0f2fe 30%, #3b82f6 70%, #1e3a8a 100%)",
      }}
    />
  </div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 27,
    name: "Aurora Mist",
    category: "gradients",
    css: `background: radial-gradient(130% 130% at 50% -10%, #fff 10%, #22d3ee 40%, #a78bfa 70%, #1e3a8a 100%);`,
    preview: "linear-gradient(180deg, #22d3ee, #a78bfa, #1e3a8a)",
    htmlCode: `<div className="min-h-screen w-full relative">
    {/* Aurora Mist Gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(130% 130% at 50% -10%, #fff 10%, #22d3ee 40%, #a78bfa 70%, #1e3a8a 100%)",
      }}
    />
  </div>`,
    isNew: true,
    type: "simple",
  },

  {
    id: 28,
    name: "Ethereal Waves",
    category: "waves",
    css: `background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
background-image: 
  radial-gradient(circle at 25% 25%, #ffffff0d 0%, transparent 50%),
  radial-gradient(circle at 75% 75%, #ffffff0d 0%, transparent 50%);`,
    preview: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Ethereal Waves */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
      backgroundImage: \`
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)
      \`,
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 29,
    name: "Cosmic Ripple",
    category: "cosmic",
    css: `background: radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
background-image: 
  radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);`,
    preview:
      "radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Cosmic Ripple */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      backgroundImage: \`
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%)
      \`,
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 30,
    name: "Velvet Dreams",
    category: "luxury",
    css: `background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
filter: blur(0.5px);`,
    preview: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Velvet Dreams */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      filter: "blur(0.5px)",
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 31,
    name: "Prismatic Flow",
    category: "abstract",
    css: `background: conic-gradient(from 0deg at 50% 50%, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e);
filter: blur(100px) saturate(1.5);`,
    preview:
      "conic-gradient(from 0deg at 50% 50%, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Prismatic Flow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "conic-gradient(from 0deg at 50% 50%, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)",
      filter: "blur(100px) saturate(1.5)",
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 32,
    name: "Golden Hour",
    category: "luxury",
    css: `background: linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
background-image: 
  radial-gradient(circle at 10% 20%, rgba(255, 206, 84, 0.4) 0%, transparent 50%),
  radial-gradient(circle at 90% 80%, rgba(255, 154, 158, 0.3) 0%, transparent 50%);`,
    preview: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Golden Hour */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
      backgroundImage: \`
        radial-gradient(circle at 10% 20%, rgba(255, 206, 84, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(255, 154, 158, 0.3) 0%, transparent 50%)
      \`,
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 33,
    name: "Silk Ribbon",
    category: "abstract",
    css: `background: linear-gradient(45deg, #fc466b 0%, #3f5efb 100%);
background-image: 
  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, transparent 50%);
background-size: 20px 20px;`,
    preview: "linear-gradient(45deg, #fc466b 0%, #3f5efb 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Silk Ribbon */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #fc466b 0%, #3f5efb 100%)",
      backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, transparent 50%)",
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 34,
    name: "Ocean Depth",
    category: "waves",
    css: `background: linear-gradient(to bottom, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
background-image: 
  radial-gradient(ellipse at 30% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 70%),
  radial-gradient(ellipse at 70% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 70%);`,
    preview:
      "linear-gradient(to bottom, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Ocean Depth */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(to bottom, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)",
      backgroundImage: \`
        radial-gradient(ellipse at 30% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 70% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)
      \`,
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 35,
    name: "Crystal Lattice",
    category: "geometric",
    css: `background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
background-image: 
  linear-gradient(30deg, rgba(255, 255, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.1) 87.5%, rgba(255, 255, 255, 0.1)),
  linear-gradient(150deg, rgba(255, 255, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.1) 87.5%, rgba(255, 255, 255, 0.1)),
  linear-gradient(90deg, rgba(255, 255, 255, 0.05) 50%, transparent 50%);
background-size: 80px 60px;`,
    preview: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
  {/* Crystal Lattice */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
      backgroundImage: \`
        linear-gradient(30deg, rgba(255, 255, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.1) 87.5%, rgba(255, 255, 255, 0.1)),
        linear-gradient(150deg, rgba(255, 255, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.1) 87.5%, rgba(255, 255, 255, 0.1)),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 50%, transparent 50%)
      \`,
      backgroundSize: "80px 60px",
    }}
  />
  {/* Your content here */}
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 36,
    name: "Amber Neural Network",
    category: "tech",
    css: `background: #ffffff;
  background-image: 
    radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%),
    radial-gradient(circle at 25% 25%, rgba(0, 201, 122, 0.8) 0%, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(0, 119, 255, 0.8) 0%, transparent 1px),
    linear-gradient(45deg, transparent 48%, rgba(0, 201, 122, 0.08) 50%, transparent 52%);
  background-size: 100% 100%, 80px 80px, 80px 80px, 40px 40px;`,
    preview: "linear-gradient(135deg, #ffffff 0%, #f59e0b 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
    {/* Amber Neural Network */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "#ffffff",
        backgroundImage: \`
          radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%),
          radial-gradient(circle at 25% 25%, rgba(0, 201, 122, 0.8) 0%, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(0, 119, 255, 0.8) 0%, transparent 1px),
          linear-gradient(45deg, transparent 48%, rgba(0, 201, 122, 0.08) 50%, transparent 52%)
        \`,
        backgroundSize: "100% 100%, 80px 80px, 80px 80px, 40px 40px",
      }}
    />
    {/* Your content here */}
  </div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 37,
    name: "Purple Center Glow",
    category: "tech",
    css: `background: #ffffff;
  background-image: 
    radial-gradient(circle at center, #8249fc, transparent);
  background-size: 100% 100%;`,
    preview: "linear-gradient(135deg, #ffffff 0%, #8249fc 100%)",
    htmlCode: `<div className="min-h-screen w-full relative overflow-hidden">
    {/* Purple Center Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: "#ffffff",
        backgroundImage: \`
          radial-gradient(circle at center, #8249fc, transparent)
        \`,
        backgroundSize: "100% 100%",
      }}
    />
    {/* Your Content Here */}
  </div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 38,
    name: "Neural Network",
    category: "tech",
    css: `background: #0a0a0a; 
    background-image: 
      radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 1px),
      radial-gradient(circle at 75% 75%, #0088ff 0%, transparent 1px),
      linear-gradient(45deg, transparent 48%, rgba(0, 255, 136, 0.1) 50%, transparent 52%);
    background-size: 80px 80px, 80px 80px, 40px 40px;`,
    preview:
      "linear-gradient(135deg, #0a0a0a 0%, #00ff88 20%, #0088ff 40%, #0a0a0a 100%)", // Better preview
    htmlCode: `<div className="min-h-screen w-full relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#0a0a0a",
      backgroundImage: \`
        radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 1px),
        radial-gradient(circle at 75% 75%, #0088ff 0%, transparent 1px),
        linear-gradient(45deg, transparent 48%, rgba(0, 255, 136, 0.1) 50%, transparent 52%)
      \`,
      backgroundSize: "80px 80px, 80px 80px, 40px 40px",
    }}
  />
</div>`,
    isNew: true,
    type: "simple",
  },
  {
    id: 39,
    name: "Prism Grid",
    category: "tech",
    css: `background: #0f172a; 
  background-image: 
    linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
    radial-gradient(circle at 20% 30%, rgba(255,0,150,0.2), transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(0,200,255,0.25), transparent 60%),
    radial-gradient(circle at 50% 50%, rgba(0,255,150,0.2), transparent 70%);
  background-size: 40px 40px, 40px 40px, 40px 40px, 40px 40px, 100% 100%, 100% 100%, 100% 100%;
  background-blend-mode: screen;`,
    preview:
      "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #3b82f6 80%, #0f172a 100%)",
    htmlCode: `<div className="min-h-screen w-full relative">
    {/* Prism Grid */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "#0f172a",
        backgroundImage: \`
          linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
          radial-gradient(circle at 20% 30%, rgba(255,0,150,0.2), transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(0,200,255,0.25), transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(0,255,150,0.2), transparent 70%)
        \`,
        backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px, 100% 100%, 100% 100%, 100% 100%",
        backgroundBlendMode: "screen",
      }}
    />
  </div>`,
    isNew: true,
    type: "complex",
  },
  {
    id: 40,
    name: "Celestial Orbs",
    category: "abstract",
    css: `background-color: #0d0d16;
    background-image: 
      radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.4) 0%, transparent 40%),
      radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.35) 0%, transparent 45%),
      radial-gradient(circle at 40% 70%, rgba(34, 211, 238, 0.35) 0%, transparent 40%),
      radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.35) 0%, transparent 40%);`,
    preview:
      "linear-gradient(135deg, #0d0d16 0%, #6366f1 25%, #ec4899 50%, #22d3ee 75%, #22c55e 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#0d0d16',
         backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.4) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.35) 0%, transparent 45%), radial-gradient(circle at 40% 70%, rgba(34, 211, 238, 0.35) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.35) 0%, transparent 40%)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 41,
    name: "Subtle  Mesh",
    category: "minimal",
    css: `background-color: #ffffff;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 24px 24px;`,
    preview: "linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #e5e7eb 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#ffffff',
         backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
         backgroundSize: '24px 24px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },

  {
    id: 42,
    name: "Mesh Gradient",
    category: "abstract",
    css: `background-color: #fafafa;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.4), transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.4), transparent 50%),
      radial-gradient(circle at 30% 80%, rgba(52, 211, 153, 0.4), transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(244, 114, 182, 0.4), transparent 40%);`,
    preview:
      "linear-gradient(135deg, #fafafa 0%, #60a5fa 25%, #fbbf24 50%, #34d399 75%, #f472b6 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#fafafa',
         backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.4), transparent 40%), radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.4), transparent 50%), radial-gradient(circle at 30% 80%, rgba(52, 211, 153, 0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(244, 114, 182, 0.4), transparent 40%)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 43,
    name: "Diagonal Stripes",
    category: "geometric",
    css: `background-color: #f3f4f6;
    background-image: repeating-linear-gradient(
      45deg,
      #e5e7eb,
      #e5e7eb 2px,
      transparent 2px,
      transparent 20px
    );`,
    preview: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#f3f4f6',
         backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, transparent 2px, transparent 20px)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 44,
    name: "Modern Grid Lines",
    category: "geometric",
    css: `background-color: #ffffff;
    background-image: 
      linear-gradient(to right, #e5e7eb 1px, transparent 1px),
      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
    background-size: 40px 40px;`,
    preview: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #e5e7eb 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#ffffff',
         backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
         backgroundSize: '40px 40px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 45,
    name: "Wavy Lines Flow",
    category: "abstract",
    css: `background-color: #ffffff;
    background-image: 
      repeating-linear-gradient(180deg, rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 2px, transparent 2px, transparent 80px),
      repeating-linear-gradient(90deg, rgba(139,92,246,0.08) 0px, rgba(139,92,246,0.08) 1px, transparent 1px, transparent 60px);`,
    preview:
      "linear-gradient(135deg, #ffffff 0%, #60a5fa 25%, #8b5cf6 50%, #3b82f6 75%, #a78bfa 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#ffffff',
         backgroundImage: 'repeating-linear-gradient(180deg, rgba(59,130,246,0.1) 0px, rgba(59,246,246,0.1) 2px, transparent 2px, transparent 80px), repeating-linear-gradient(90deg, rgba(139,92,246,0.08) 0px, rgba(139,92,246,0.08) 1px, transparent 1px, transparent 60px)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 46,
    name: "Circular Ripples",
    category: "geometric",
    css: `background-color: #f9fafb;
    background-image: repeating-radial-gradient(
      circle,
      #d1d5db 0px,
      #d1d5db 1px,
      transparent 1px,
      transparent 80px
    );`,
    preview:
      "linear-gradient(135deg, #f9fafb 0%, #d1d5db 25%, #9ca3af 50%, #6b7280 75%, #374151 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#f9fafb',
         backgroundImage: 'repeating-radial-gradient(circle, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 80px)'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 47,
    name: "Gradient Triangles",
    category: "geometric",
    css: `background-color: #0f172a;
    background-image: 
      linear-gradient(60deg, rgba(96,165,250,0.15) 25%, transparent 25%),
      linear-gradient(-60deg, rgba(244,114,182,0.15) 25%, transparent 25%),
      linear-gradient(60deg, transparent 75%, rgba(96,165,250,0.15) 75%),
      linear-gradient(-60deg, transparent 75%, rgba(244,114,182,0.15) 75%);
    background-size: 60px 60px;`,
    preview:
      "linear-gradient(135deg, #0f172a 0%, #60a5fa 25%, #f472b6 50%, #2563eb 75%, #a855f7 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#0f172a',
         backgroundImage: 'linear-gradient(60deg, rgba(96,165,250,0.15) 25%, transparent 25%), linear-gradient(-60deg, rgba(244,114,182,0.15) 25%, transparent 25%), linear-gradient(60deg, transparent 75%, rgba(96,165,250,0.15) 75%), linear-gradient(-60deg, transparent 75%, rgba(244,114,182,0.15) 75%)',
         backgroundSize: '60px 60px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },

  {
    id: 48,
    name: "Isometric Cubes",
    category: "geometric",
    css: `background-color: #0f172a;
    background-image: 
      linear-gradient(30deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%, #1e293b),
      linear-gradient(150deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%, #1e293b),
      linear-gradient(90deg, #334155 2%, transparent 2%, transparent 98%, #334155 98%, #334155);
    background-size: 60px 104px;
    background-position: 0 0, 0 0, 0 -2px;`,
    preview:
      "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#0f172a',
         backgroundImage: 'linear-gradient(30deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%, #1e293b), linear-gradient(150deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%, #1e293b), linear-gradient(90deg, #334155 2%, transparent 2%, transparent 98%, #334155 98%, #334155)',
         backgroundSize: '60px 104px',
         backgroundPosition: '0 0, 0 0, 0 -2px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 49,
    name: "Organic Blobs",
    category: "abstract",
    css: `background: #fafafa;
    background-image: 
      radial-gradient(circle at 15% 20%, rgba(251,191,36,0.4) 0%, transparent 40%),
      radial-gradient(circle at 85% 30%, rgba(147,51,234,0.4) 0%, transparent 45%),
      radial-gradient(circle at 30% 80%, rgba(59,130,246,0.4) 0%, transparent 50%),
      radial-gradient(circle at 70% 75%, rgba(16,185,129,0.4) 0%, transparent 40%);`,
    preview:
      "linear-gradient(135deg, #fafafa 0%, #fbbf24 25%, #9333ea 50%, #3b82f6 75%, #10b981 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         background: 'radial-gradient(circle at 15% 20%, rgba(251,191,36,0.4) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(147,51,234,0.4) 0%, transparent 45%), radial-gradient(circle at 30% 80%, rgba(59,130,246,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 75%, rgba(16,185,129,0.4) 0%, transparent 40%), #fafafa'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 50,
    name: "Tech Circuit Lines",
    category: "tech",
    css: `background-color: #0a0a0a;
    background-image: 
      linear-gradient(to right, rgba(96,165,250,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(96,165,250,0.08) 1px, transparent 1px);
    background-size: 60px 60px;`,
    preview:
      "linear-gradient(135deg, #0a0a0a 0%, #60a5fa 25%, #3b82f6 50%, #2563eb 75%, #1d4ed8 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#0a0a0a',
         backgroundImage: 'linear-gradient(to right, rgba(96,165,250,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.08) 1px, transparent 1px)',
         backgroundSize: '60px 60px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 51,
    name: "Neon Matrix Grid",
    category: "tech",
    css: `background-color: #020617;
    background-image:
      radial-gradient(circle at 1px 1px, rgba(34,211,238,0.12) 1px, transparent 0),
      radial-gradient(circle at 25px 25px, rgba(168,85,247,0.12) 1px, transparent 0);
    background-size: 50px 50px;`,
    preview:
      "linear-gradient(135deg, #020617 0%, #22d3ee 25%, #8b5cf6 50%, #6d28d9 75%, #312e81 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#020617',
         backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.12) 1px, transparent 0), radial-gradient(circle at 25px 25px, rgba(168,85,247,0.12) 1px, transparent 0)',
         backgroundSize: '50px 50px'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
  {
    id: 52,
    name: "Aurora Tech Flow",
    category: "tech",
    css: `background-color: #030712;
    background-image: 
      radial-gradient(at 20% 20%, rgba(99,102,241,0.15) 0px, transparent 50%),
      radial-gradient(at 80% 10%, rgba(56,189,248,0.12) 0px, transparent 50%),
      radial-gradient(at 50% 100%, rgba(16,185,129,0.12) 0px, transparent 50%);
    background-attachment: fixed;
    background-size: cover;`,
    preview:
      "linear-gradient(135deg, #030712 0%, #6366f1 25%, #38bdf8 50%, #10b981 75%, #14b8a6 100%)",
    htmlCode: `<div className="min-h-screen w-full relative"
       style={{
         backgroundColor: '#030712',
         backgroundImage: 'radial-gradient(at 20% 20%, rgba(99,102,241,0.15) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(56,189,248,0.12) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(16,185,129,0.12) 0px, transparent 50%)',
         backgroundAttachment: 'fixed',
         backgroundSize: 'cover'
       }}>
    {/* Your content here */}
  </div>`,
    isNew: true,
  },
];

export const categories = [
  { id: "all", name: "All Patterns" },
  { id: "gradients", name: "Gradients" },
  { id: "grid", name: "Grid" },
  { id: "dots", name: "Dots" },
  { id: "geometric", name: "Geometric" },
  { id: "tech", name: "Tech" },
  { id: "cosmic", name: "Cosmic" }, // New category
  { id: "waves", name: "Waves" }, // New category
  { id: "luxury", name: "Luxury" }, // New category
  { id: "abstract", name: "Abstract" }, // New category
];
