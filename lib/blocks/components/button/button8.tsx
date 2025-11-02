function Button() {
    return (
      <div className="w-full h-full flex items-center justify-center my-16">
        <button className="relative px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-br from-[#0072F5] to-[#00D4FF] shadow-[0_0_35px_5px_rgba(0,115,255,0.6)] hover:shadow-[0_0_45px_10px_rgba(0,212,255,0.75)] transition-all duration-300 ease-in-out ring-[2px] ring-white/30 dark:ring-white/10 backdrop-blur-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-xl z-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
          <div className="relative z-10 flex items-center justify-center gap-2">
            <span>Launch Framer</span>
          </div>
        </button>
      </div>
    );
  }
  
  export default Button;
  