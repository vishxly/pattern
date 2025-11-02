function Button11() {
  return (
    <div className="w-full h-screen flex items-center justify-center  ">
      <button
        className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold
    text-black rounded-full transition-all duration-300
    bg-gradient-to-r from-[#9F8CFF] via-[#8EE7FF] to-[#CFA5FF]
    shadow-[0_0_20px_rgba(159,140,255,0.6)] backdrop-blur-lg
    hover:scale-105 hover:shadow-[0_0_30px_rgba(159,140,255,0.8)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400
    before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px]
    before:bg-gradient-to-r before:from-[#9F8CFF] before:to-[#CFA5FF] before:-z-10
    after:content-[''] after:absolute after:inset-[-4px] after:rounded-full after:bg-gradient-to-r
    after:from-[#8EE7FF] after:to-[#CFA5FF] after:-z-20"
      >
        Try for free
      </button>
    </div>
  );
}

export default Button11;
