// /src/components/pattern/cards.ts

export interface CardPattern {
    id: number;
    name: string;
    category: string;
    // The full HTML/Tailwind code for the card
    htmlCode: string; 
    isNew: boolean;
    type: "card";
  }
  
  export const cardPatterns: CardPattern[] = [
    {
      id: 101,
      name: "Product Card",
      category: "ecommerce",
      htmlCode: `
  <div class="font-sans rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl p-6 flex flex-col items-center text-center text-white border border-white/20 w-full max-w-sm">
    <div class="w-48 h-48 mb-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
      <img src="https://i.ibb.co/68gPfZx/headset.png" alt="Futuristic Headset" class="w-36 h-36 object-cover drop-shadow-2xl" />
    </div>
    <h3 class="text-2xl font-semibold mb-2">Aura Headset</h3>
    <p class="text-white/70 mb-6">Experience sound like never before with AI-enhanced 3D audio.</p>
    <div class="flex items-center justify-between w-full mb-6">
      <span class="text-3xl font-bold">$299</span>
      <div class="flex items-center gap-1">
        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.365-2.445a1 1 0 00-1.176 0L5.16 17.02c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L1.178 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.96z"></path></svg>
        <span class="font-medium">4.8</span>
      </div>
    </div>
    <button class="w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white text-lg font-medium px-8 h-14 shadow-[0_8px_16px_rgba(236,72,153,0.4)] transition-transform duration-300 hover:scale-105">
      Add to Cart
    </button>
  </div>
  `,
      isNew: true,
      type: "card",
    },
    {
      id: 102,
      name: "User Profile Card",
      category: "profile",
      htmlCode: `
  <div class="font-sans rounded-2xl bg-slate-900/50 backdrop-blur-md shadow-2xl p-8 flex flex-col items-center text-center text-white border border-slate-700 w-full max-w-sm">
      <div class="relative mb-6">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User Avatar" class="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg" />
        <span class="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-slate-900"></span>
      </div>
      <h3 class="text-2xl font-bold mb-1">Jane Doe</h3>
      <p class="text-cyan-400 mb-4">UX Designer</p>
      <div class="flex gap-4 mb-6">
          <div class="text-center">
              <div class="font-bold text-xl">1.2K</div>
              <div class="text-white/60 text-sm">Followers</div>
          </div>
          <div class="text-center">
              <div class="font-bold text-xl">458</div>
              <div class="text-white/60 text-sm">Following</div>
          </div>
          <div class="text-center">
              <div class="font-bold text-xl">92</div>
              <div class="text-white/60 text-sm">Projects</div>
          </div>
      </div>
      <div class="flex gap-4 w-full">
         <button class="flex-1 rounded-full bg-indigo-600 text-white font-medium px-6 py-3 transition-transform duration-300 hover:scale-105 hover:bg-indigo-500">Follow</button>
         <button class="flex-1 rounded-full bg-slate-700/80 text-white font-medium px-6 py-3 transition-transform duration-300 hover:scale-105 hover:bg-slate-600/80">Message</button>
      </div>
  </div>
  `,
      isNew: true,
      type: "card",
    },
    {
      id: 103,
      name: "Article Card",
      category: "blog",
      htmlCode: `
  <div class="font-sans rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden text-white border border-white/20 w-full max-w-sm">
      <img src="https://images.unsplash.com/photo-1593349122359-835a0d4c13a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Abstract Art" class="w-full h-48 object-cover" />
      <div class="p-6">
          <div class="flex items-center gap-2 text-sm text-white/70 mb-2">
              <span>Design</span>
              <span class="w-1 h-1 bg-white/70 rounded-full"></span>
              <span>12 Min Read</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">The Future of 3D Interfaces</h3>
          <p class="text-white/80 mb-6 line-clamp-2">Exploring how immersive 3D interfaces are reshaping our digital interactions, from augmented reality to virtual collaboration spaces.</p>
          <div class="flex items-center justify-between">
              <div class="flex items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author" class="w-10 h-10 rounded-full mr-3 border-2 border-white/30" />
                  <div>
                      <p class="font-semibold">John Smith</p>
                      <p class="text-xs text-white/60">Creative Technologist</p>
                  </div>
              </div>
               <a href="#" class="text-white hover:text-cyan-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </a>
          </div>
      </div>
  </div>
  `,
      isNew: true,
      type: "card",
    },
  ];
  
  export const cardCategories = [
    { id: "all", name: "All Cards" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "profile", name: "Profile" },
    { id: "blog", name: "Blog" },
  ];
