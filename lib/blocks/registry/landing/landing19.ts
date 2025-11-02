import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import TypePulseLandingPage from "@/lib/blocks/components/landing/landing19";

export const landing19Registry: LandingComponentGroup = {
  title: "Type Pulse AI: Write Smarter",
  description: "An AI-powered writing platform transforming ideas into impactful content, boosting writing flow.",
  category: "Landing",
  variants: {
    default: {
      title: "Type Pulse AI: Write Smarter",
      description: "An AI-powered writing platform transforming ideas into impactful content, boosting writing flow.",
      component: TypePulseLandingPage,
      image: "/images/blocks/landing/landing19.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Component",
      code: `import React from 'react';
import Image from 'next/image';

const TypePulseLandingPage: React.FC = () => {
  // Note: For full functionality, you would add state management (useState)
  // for interactive elements like the pricing toggle, FAQ accordions, and mobile menu.
  return (
    <>
      <header className="shadow-inner sticky top-5 z-40 mx-auto flex w-full items-center justify-between rounded-2xl border p-2 px-4 transition-all duration-300 sm:w-[95%] md:w-[70%] lg:w-[75%] lg:px-2 bg-[var(--bg-white-0)]/33 max-w-5xl border-neutral-alpha-24 backdrop-blur-lg lg:max-w-screen-md">
        <a className="flex items-center font-mono text-label-lg font-bold" href="/">
          <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 size-8">
            <rect width="512" height="512" rx="128" fill="url(#paint0_linear_4150_87)"></rect>
            <g filter="url(#filter0_d_4150_87)">
              <path d="M148.856 183.619L145.306 191.763C142.708 197.725 134.462 197.725 131.864 191.763L128.315 183.619C121.987 169.098 110.591 157.537 96.3707 151.213L85.435 146.349C79.522 143.719 79.522 135.114 85.435 132.484L95.7593 127.891C110.345 121.404 121.946 109.415 128.164 94.4011L131.809 85.6007C134.35 79.4672 142.82 79.4672 145.361 85.6007L149.006 94.4011C155.224 109.415 166.825 121.404 181.412 127.891L191.735 132.484C197.649 135.114 197.649 143.719 191.735 146.349L180.799 151.213C166.579 157.537 155.183 169.098 148.856 183.619Z" fill="white"></path>
              <path d="M133.657 86.3658C135.516 81.8789 141.654 81.8789 143.513 86.3658L147.158 95.1666C153.569 110.644 165.535 123.019 180.599 129.718L190.922 134.311C195.253 136.237 195.253 142.595 190.922 144.521L179.987 149.385C165.53 155.815 153.913 167.479 147.332 182.121L147.023 182.82L143.473 190.964C141.573 195.324 135.598 195.324 133.698 190.964L130.148 182.82C123.625 167.85 111.87 155.917 97.1838 149.385L86.2473 144.521C81.9179 142.595 81.9179 136.237 86.2473 134.311L96.5725 129.718C111.636 123.019 123.601 110.644 130.012 95.1666L133.657 86.3658Z" stroke="#FDFDFD" strokeWidth="4"></path>
            </g>
            <g filter="url(#filter1_d_4150_87)">
              <g filter="url(#filter2_d_4150_87)">
                <path fillRule="evenodd" clipRule="evenodd" d="M151.661 278.381C162.017 246.556 180.68 205.769 213.954 172.494C279.193 107.255 374.027 97.608 376.426 97.3665C377.698 97.2387 380.332 97.1108 383.433 98.1594C386.972 99.3564 390.055 101.761 392.079 104.897C395.534 110.089 414.956 142.752 388.91 182.217C387.617 184.177 386.06 186.088 384.332 187.934C384.542 189.929 384.391 191.995 383.829 194.047C380.698 205.481 376.65 217.474 371.41 229.47C362.264 250.413 349.386 271.587 331.217 289.755C297.221 323.751 252.589 339.366 217.726 346.649C200.131 350.326 184.583 351.971 173.402 352.699C172.191 352.779 171.03 352.847 169.922 352.906C169.402 357.012 164.792 398.137 164.792 405.25C164.792 414.409 157.367 421.833 148.208 421.833C139.05 421.833 131.625 414.407 131.625 405.25C131.625 395.778 133.554 377.564 135.296 362.793C138.685 334.078 142.682 305.974 151.661 278.381ZM361.228 163.948C369.966 150.709 369.836 139.405 368.102 132.122C342.789 136.683 281.562 151.791 237.407 195.946C209.158 224.195 192.642 259.628 183.2 288.643C179.365 300.43 176.75 310.992 175.004 319.332C184.604 318.572 197.078 317.08 210.944 314.184C242.785 307.533 280.237 293.832 307.763 266.303C321.851 252.217 332.358 235.496 340.165 218.116C323.973 226.742 306.695 234.47 294.412 238.564C285.722 241.461 276.331 236.765 273.436 228.077C270.539 219.388 275.235 209.997 283.923 207.1C295.108 203.372 313.086 195.267 329.598 186.113C337.796 181.569 345.288 176.954 351.178 172.717C357.536 168.144 360.468 165.1 361.228 163.948Z" fill="white"></path>
              </g>
            </g>
            <g filter="url(#filter3_d_4150_87)">
              <circle cx="370" cy="390" r="32" fill="white"></circle>
            </g>
            <defs>
              <filter id="filter0_d_4150_87" x="77.0002" y="77.0006" width="127.17" height="127.234" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="2" dy="2"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4150_87"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4150_87" result="shape"></feBlend>
              </filter>
              <filter id="filter1_d_4150_87" x="127.625" y="93.2822" width="282.656" height="336.551" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="2" dy="2"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4150_87"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4150_87" result="shape"></feBlend>
              </filter>
              <filter id="filter2_d_4150_87" x="127.625" y="93.2822" width="282.656" height="336.551" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="2" dy="2"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4150_87"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4150_87" result="shape"></feBlend>
              </filter>
              <filter id="filter3_d_4150_87" x="330" y="350" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4150_87"></feMorphology>
                <feOffset dx="2" dy="2"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4150_87"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4150_87" result="shape"></feBlend>
              </filter>
              <linearGradient id="paint0_linear_4150_87" x1="9.59833e-06" y1="51.5" x2="447" y2="494" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD9C0"></stop>
                <stop offset="0.33" stopColor="#FA7319"></stop>
                <stop offset="1" stopColor="#FB3748"></stop>
              </linearGradient>
            </defs>
          </svg>
          Type Pulse
        </a>
        <div className="flex items-center lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu cursor-pointer lg:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R8cv9ba:" data-state="closed">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </div>
        <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 max-w-max flex-1 items-center justify-center mx-auto hidden lg:block">
          <div style={{ position: 'relative' }}>
            <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
              <li>
                <button id="radix-:Rccv9ba:-trigger-radix-:Rbccv9ba:" data-state="closed" aria-expanded="false" aria-controls="radix-:Rccv9ba:-content-radix-:Rbccv9ba:" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group text-text-sub-600 hover:text-text-strong-950" data-radix-collection-item="">
                  Free Tools
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </li>
              <li className="flex items-center gap-2">
                <a className="text-base px-2 text-text-sub-600 hover:text-text-strong-950" data-radix-collection-item="" href="/features">Features</a>
                <a className="text-base px-2 text-text-sub-600 hover:text-text-strong-950" data-radix-collection-item="" href="/pricing">Pricing</a>
                <a className="text-base px-2 text-text-sub-600 hover:text-text-strong-950" data-radix-collection-item="" href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="absolute left-0 top-full flex justify-center"></div>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <button className="group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:text-text-disabled-300 disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden bg-bg-white-0 text-text-sub-600 shadow-fancy-buttons-stroke hover:bg-bg-weak-50 hover:text-text-strong-950 hover:shadow-none h-10 gap-3 rounded-10 px-3.5 group/arrow font-bold">Log in</button>
          <button className="group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:text-text-disabled-300 disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden bg-primary-base text-static-white shadow-fancy-buttons-primary h-10 gap-3 rounded-10 px-3.5 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-static-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-static-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24] group/arrow font-bold">Sign up</button>
        </div>
      </header>

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-screen overflow-hidden" style={{ opacity: 1 }}>
        <div className="absolute right-[-32rem] top-[-40rem] z-0 flex rotate-[-20deg] skew-x-[-40deg] skew-y-[-40deg] gap-40 blur-[4rem] lg:right-[-24rem]" style={{ opacity: 1 }}>
          <div className="h-80 w-40 bg-gradient-to-b from-white to-orange-500" style={{ opacity: 0.6, transform: 'none' }}></div>
          <div className="h-80 w-40 bg-gradient-to-b from-white to-orange-500" style={{ opacity: 0.6, transform: 'none' }}></div>
          <div className="h-80 w-40 bg-gradient-to-b from-white to-orange-500" style={{ opacity: 0.6, transform: 'none' }}></div>
        </div>
        <div className="absolute right-[-47rem] top-[-48rem] z-0 flex rotate-[-20deg] skew-x-[-40deg] skew-y-[-40deg] gap-40 blur-[4rem] lg:right-[-40rem]" style={{ opacity: 1 }}>
          <div className="h-80 w-40 bg-gradient-to-b from-white to-pink-300" style={{ opacity: 0.6, transform: 'none' }}></div>
          <div className="h-80 w-40 bg-gradient-to-b from-white to-pink-300" style={{ opacity: 0.6, transform: 'none' }}></div>
          <div className="h-80 w-40 bg-gradient-to-b from-white to-pink-300" style={{ opacity: 0.6, transform: 'none' }}></div>
        </div>
        <div className="absolute right-[-61rem] top-[-60rem] z-0 flex rotate-[-20deg] skew-x-[-40deg] skew-y-[-40deg] gap-40 blur-[4rem] lg:right-[-56rem]" style={{ opacity: 1 }}>
          <div className="h-[400px] w-40 bg-gradient-to-b from-white to-purple-500" style={{ opacity: 0.6, transform: 'none' }}></div>
          <div className="h-[400px] w-40 bg-gradient-to-b from-white to-purple-500" style={{ opacity: 0.6, transform: 'none' }}></div>
          <div className="h-[400px] w-40 bg-gradient-to-b from-white to-purple-500" style={{ opacity: 0.6, transform: 'none' }}></div>
        </div>
      </div>

      <section className="container relative mx-auto w-full">
        <div className="mx-auto grid max-w-lg place-items-center gap-8 px-4 py-20 sm:px-0 md:max-w-screen-sm md:py-32 lg:max-w-screen-md 2xl:max-w-screen-xl">
          <div className="z-10 space-y-8 text-center">
            <div className="block" style={{ filter: 'blur(0px)', opacity: 1, transform: 'none' }}>
              <div className="group relative mx-auto inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <span
                  className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#FA7319]/50 via-[#D0257A]/50 to-[#FA7319]/50 bg-[length:300%_100%] p-[1px]"
                  style={{
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'destination-out',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'subtract',
                    WebkitClipPath: 'padding-box'
                  } as React.CSSProperties}
                ></span>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <span
                  style={{ '--bg-size': '300%', '--color-from': '#D0257A', '--color-to': '#FA7319' } as React.CSSProperties}
                  className="animate-gradient inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-paragraph-sm font-medium"
                >
                  Introducing Type Pulse AI (Beta)
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
            <div className="mx-auto max-w-screen-lg text-center text-title-h2 md:text-title-h1">
              <h1 className="font-serif">
                <p className="blur-text justify-center flex flex-wrap">
                  <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Where&nbsp;</span>
                  <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Your&nbsp;</span>
                  <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Minds&nbsp;</span>
                  <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Pulse&nbsp;</span>
                  <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Into&nbsp;</span>
                  <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Words</span>
                </p>
              </h1>
            </div>
            <p className="blur-text text-2xl mx-auto max-w-screen-sm justify-center text-center text-text-strong-950 dark:text-white/90 flex flex-wrap">
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Type&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>Pulse,&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>an&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>AI-powered&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>writing&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>platform,&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>transforms&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>your&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>ideas&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>into&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>impactful&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>content,&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>supercharging&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>your&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>writing&nbsp;</span>
              <span style={{ display: 'inline-block', willChange: 'transform, filter, opacity', filter: 'blur(0px)', opacity: 1, transform: 'none' }}>flow.</span>
            </p>
            <div className="z-10 block" style={{ filter: 'blur(0px)', opacity: 1, transform: 'none' }}>
              <div className="flex w-full flex-col items-center justify-center gap-2 space-y-4 md:space-y-0">
                <div className="glass-border-button shadow-sm group relative h-12 cursor-pointer rounded-xl bg-white/10 shadow-black/5">
                  <div className="glass-border absolute -left-[3px] -top-[3px] z-0 h-[calc(100%+6px)] w-[calc(100%+6px)] overflow-hidden rounded-xl after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:border-[0.5px] after:border-white/20 after:content-['']">
                    <div className="absolute left-[-42px] top-[-90px] aspect-square h-auto w-[150%] animate-spin blur [animation-duration:5s]" style={{ background: "conic-gradient(from 90deg at 50% 50%, rgba(250, 115, 25, 0.12) 0, rgba(250, 115, 25, 0.12) 10%, #fa7319 20%, rgba(250, 115, 25, 0.12) 30%, rgba(250, 115, 25, 0.12) 60%, #fa7319 70%, rgba(250, 115, 25, 0.12) 80%, rgba(250, 115, 25, 0.12) 100%)" }}></div>
                  </div>
                  <div className="z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-1 font-medium bg-gradient-to-br from-neutral-950 to-neutral-950 backdrop-blur-2xl dark:from-white dark:via-white/80 dark:to-white group-hover:from-black/90 group-hover:to-black/70 dark:group-hover:from-white/90 dark:group-hover:to-white">
                    <div className="flex items-center justify-center gap-2 text-text-white-0 transition-transform duration-100 ease-in-out group-hover:scale-105">
                      <a className="flex w-full items-center justify-center" target="_blank" href="https://app.typepulse.ai/auth/sign-up" rel="noopener noreferrer">
                        Start writing
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover/arrow:translate-x-1">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-paragraph-xs text-text-sub-600">No credit card required</p>
              </div>
            </div>
          </div>
          <div className="mt-14 block" style={{ filter: 'blur(0px)', opacity: 1, transform: 'none' }}>
            <div className="group relative rounded-2xl border border-white/10 bg-[linear-gradient(116.91deg,#e9358f3d,#e3a5724f)] p-2 shadow-[inset_0_.450581px_#ffffff4d,0_0_36.0465px_#ffffff0f]">
              <div className="bg-primary/50 absolute left-1/2 top-2 mx-auto h-24 w-[90%] -translate-x-1/2 transform rounded-full blur-3xl lg:-top-8 lg:h-80"></div>
              <div className="relative mx-auto flex w-full items-center rounded-2xl leading-none">
                <div className="group relative cursor-pointer">
                  <Image src="/app-bg-dark.webp" alt="Hero Video Thumbnail" width={1920} height={1080} className="shadow-lg w-full rounded-2xl border border-[#ffffff1a] transition-all duration-200 ease-out group-hover:brightness-[0.8]" />
                  <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                    <div className="flex size-28 items-center justify-center rounded-full bg-orange-alpha-10 backdrop-blur-md">
                      <div className="shadow-md relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-primary-alpha-24 to-primary-base transition-all duration-200 ease-out group-hover:scale-[1.2]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105" style={{ filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))' }}>
                          <polygon points="6 3 20 12 6 21 6 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 z-[-1] h-full w-full">
                <div className="relative inset-0 h-full w-full rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-lg">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div
                      style={{ borderRadius: 'inherit', backgroundRepeat: 'repeat', backgroundPosition: 'left top', backgroundSize: '126px', backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22126%22 height=%22126%22%3e%3cpath id=%22a%22 d=%22M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z%22 fill=%22%23888%22 fill-rule=%22evenodd%22/%3e%3c/svg%3e")' }}
                      className="absolute inset-0 rounded-lg opacity-20"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-[-36%] z-[-1] w-full max-w-none -translate-x-1/2 transform overflow-hidden">
                <Image src="/hero-bg.avif" alt="" width={1920} height={1080} className="h-auto w-full min-w-[100vw] object-cover brightness-110 filter sm:min-w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto max-w-screen-md px-4 pt-24 sm:px-0 sm:pt-32 xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h2 className="mb-2 text-center text-label-lg tracking-wider text-primary-base">POWERFUL FEATURES</h2>
        <h2 className="text-white-to-orange-lighter mb-4 text-center font-serif text-title-h3 md:text-title-h2">Writing Like Never Before</h2>
        <h3 className="text-xl mx-auto mb-8 text-center text-text-sub-600 md:w-1/2">Features built to enhance your writing flow.</h3>
        <div className="mb-8 mt-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 2xl:col-span-7">
            <div className="group relative col-span-3 flex w-full flex-col justify-between overflow-hidden rounded-xl bg-bg-white-0 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <div className="z-10 flex transform-gpu flex-col gap-1 p-8 pb-0 transition-all duration-300">
                <div className="flex h-[300px] flex-col overflow-y-auto rounded-lg border border-stroke-soft-200 bg-bg-white-0 p-8">
                  <h1 className="mb-2 text-paragraph-md font-semibold">Rewrite as a Twitter Post</h1>
                  <div style={{ opacity: 1 }}>
                    <p id="initial-paragraph" className="py-2 text-paragraph-sm transition-all duration-300" style={{ transform: 'none' }}>
                      <span className="block sm:hidden">Steve Jobs famously said customers don&apos;t know what they want until you show it to them. The best products use customer requests to organize feedback and understand real needs.</span>
                      <span className="hidden sm:block">Steve Jobs famously said customers don&apos;t know what they want until you show it to them. The best products blend vision with customer feedback. Their Customer Requests feature organizes fragmented feedback, helping teams interpret real needs rather than just tallying feature requests. This approach ensures product decisions are informed by genuine customer problems, not just explicit asks, especially as companies scale.</span>
                    </p>
                  </div>
                  <div id="command-interface" className="mt-4 flex flex-col gap-1 rounded-xl border border-stroke-soft-200" style={{ opacity: 1, transform: 'none' }}>
                    <div className="relative">
                      <div className="group relative flex w-full overflow-hidden bg-bg-white-0 text-text-strong-950 transition duration-200 ease-out divide-x divide-stroke-soft-200 before:absolute before:inset-0 before:ring-1 before:ring-inset before:pointer-events-none before:rounded-[inherit] before:transition before:duration-200 before:ease-out hover:shadow-none has-[input:disabled]:shadow-none has-[input:disabled]:before:ring-transparent rounded-10 hover:[&:not(:has(input:focus)):has(>:only-child)]:before:ring-transparent shadow-none before:ring-transparent has-[input:focus]:shadow-none has-[input:focus]:before:ring-transparent">
                        <label className="group/input-wrapper flex w-full cursor-text items-center bg-bg-white-0 transition duration-200 ease-out hover:[&:not(&amp;:has(input:focus))]:bg-bg-weak-50 has-[input:disabled]:pointer-events-none has-[input:disabled]:bg-bg-weak-50 gap-2 px-3">
                          <input type="text" className="w-full bg-transparent bg-none text-paragraph-sm text-text-strong-950 outline-none transition duration-200 ease-out placeholder:select-none placeholder:text-text-soft-400 placeholder:transition placeholder:duration-200 placeholder:ease-out group-hover/input-wrapper:placeholder:text-text-sub-600 focus:outline-none group-has-[input:focus]:placeholder:text-text-sub-600 disabled:text-text-disabled-300 disabled:placeholder:text-text-disabled-300 h-10" placeholder="What do you want to write about? or select an AI Agent to get started." value="" />
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-lg border border-stroke-soft-200 bg-bg-white-0 px-3 py-1.5">
                          <div className="flex h-4 w-4 items-center justify-center rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles size-4">
                              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                              <path d="M20 3v4"></path>
                              <path d="M22 5h-4"></path>
                              <path d="M4 17v2"></path>
                              <path d="M5 18H3"></path>
                            </svg>
                          </div>
                          <select className="cursor-pointer border-none bg-transparent text-paragraph-xs outline-none" defaultValue="Pulser Agent">
                            <option value="Pulser Agent">Pulser Agent</option>
                          </select>
                        </div>
                        <div className="hidden items-center gap-2 sm:flex">
                          <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" className="group/switch block h-5 w-8 shrink-0 p-0.5 outline-none focus:outline-none">
                            <div className="h-4 w-7 rounded-full bg-bg-soft-200 p-0.5 outline-none transition duration-200 ease-out group-hover/switch:bg-bg-sub-300 group-focus-visible/switch:bg-bg-sub-300 group-active/switch:bg-bg-soft-200 group-data-[state=checked]/switch:bg-primary-base group-hover:data-[state=checked]/switch:bg-primary-darker group-active:data-[state=checked]/switch:bg-primary-base group-focus/switch:outline-none">
                              <span data-state="checked" className="pointer-events-none relative block size-3 transition-transform duration-200 ease-out data-[state=checked]:translate-x-3 before:absolute before:inset-y-0 before:left-1/2 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-static-white before:[mask:--mask] after:absolute after:inset-y-0 after:left-1/2 after:w-3 after:-translate-x-1/2 after:rounded-full after:shadow-switch-thumb group-active/switch:scale-[.833]" style={{ '--mask': 'radial-gradient(circle farthest-side at 50% 50%, #0000 1.95px, #000 2.05px 100%) 50% 50%/100% 100% no-repeat' } as React.CSSProperties}></span>
                            </div>
                          </button>
                          <span className="text-paragraph-xs text-text-strong-950">AI Agent</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="group relative items-center justify-center whitespace-nowrap outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:bg-bg-weak-50 disabled:text-text-disabled-300 disabled:ring-transparent ring-1 ring-inset h-8 gap-2.5 rounded-lg px-2.5 text-label-sm bg-transparent text-text-sub-600 ring-transparent hover:bg-bg-weak-50 hover:text-text-strong-950 focus-visible:bg-bg-white-0 focus-visible:text-text-strong-950 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 hidden sm:block">Close</button>
                        <div style={{ transform: 'none', backgroundColor: 'transparent' }}>
                          <button className="group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:text-text-disabled-300 disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden bg-primary-base text-static-white shadow-fancy-buttons-primary h-7 gap-2 rounded-lg px-2 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-static-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-static-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24]">
                            Rewrite
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-left !size-3">
                              <polyline points="9 10 4 15 9 20"></polyline>
                              <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-8 transition-all duration-300">
                <div className="relative h-8 md:h-10">
                  <h3 className="absolute inset-0 font-serif text-title-h5 font-semibold text-text-strong-950 md:text-title-h4" style={{ opacity: 1, filter: 'blur(0px)' }}>Writing Flow</h3>
                </div>
                <p className="max-w-lg text-text-sub-600">Effortlessly generate, organize, and elevate your content with our powerful prebuilt AI agents.</p>
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#fa7319]/[.024]"></div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 2xl:col-span-5">
            <div className="group relative col-span-3 flex w-full flex-col justify-between overflow-hidden rounded-xl bg-bg-white-0 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <div className="z-10 flex transform-gpu flex-col gap-1 p-8 pb-0 transition-all duration-300">
                <div className="flex h-[300px] flex-col gap-8 overflow-y-auto rounded-lg border border-stroke-soft-200 bg-bg-white-0 p-4">
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="flex gap-3 justify-end">
                      <div className="rounded-lg p-2 text-text-strong-950 bg-bg-weak-50 dark:bg-bg-soft-200 prose break-words whitespace-normal text-paragraph-xs">
                        <div className="text-sm">Search reddit for &quot;Grok 4&quot;, How people say it?</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2" style={{ opacity: 1, transform: 'none' }}>
                    <div className="relative -mt-0.5 h-6 w-6">
                      <div className="h-full w-full"><canvas width="48" height="48" style={{ width: '24px', height: '24px' }}></canvas></div>
                    </div>
                    <div>
                      <button className="cursor-pointer pointer-events-auto flex items-center gap-2 text-paragraph-sm text-primary-base">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkle size-4 text-primary-base">
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                        </svg>
                        Show reasoning
                        <div className="transform transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </div>
                      </button>
                      <div className="overflow-hidden transition-[max-height] duration-150 ease-out border-l-2 border-stroke-soft-200 px-2 !text-paragraph-xs" style={{ maxHeight: '0px' }}>
                        <div className="text-muted-foreground prose prose-sm !text-paragraph-xs dark:prose-invert">
                          <div className="text-sm">The user wants me to search Reddit for &quot;Grok 4&quot; to see what people are saying about it. I should use the reddit_scraper function to search for Grok 4 on Reddit and see what discussions and opinions people have about it.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="flex gap-3 items-start justify-start !gap-1">
                      <div className="relative mt-0.5 h-6 w-6">
                        <div className="h-full w-full"><canvas width="48" height="48" style={{ width: '24px', height: '24px' }}></canvas></div>
                      </div>
                      <div className="rounded-lg p-2 text-text-strong-950 bg-bg-weak-50 dark:bg-bg-soft-200 prose break-words whitespace-normal text-paragraph-xs">
                        <div className="text-sm">Reddit users praise Grok 4 for strong coding, math, and search skills, comparing it favorably to ChatGPT 4.1 and others. It&apos;s used in travel, education, and finance but faces access issues in Europe and payment problems. Opinions on cost versus benefits are mixed, with overall positive views on its technical abilities but concerns about price and accessibility.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#fa7319]/[.024]"></div>
              </div>
              <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-8 transition-all duration-300">
                <div className="relative h-8 md:h-10">
                  <h3 className="absolute inset-0 font-serif text-title-h5 font-semibold text-text-strong-950 md:text-title-h4" style={{ opacity: 1, filter: 'blur(0px)' }}>Vibe Writing with AI Agents</h3>
                </div>
                <p className="max-w-lg text-text-sub-600">AI Chats lets you vibe writing with AI agents, and the agents can access your documents and libraries.</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 2xl:col-span-5">
            <div className="group relative col-span-3 flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-bg-white-0 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <div className="z-10 flex transform-gpu flex-col gap-1 p-8 pb-0 transition-all duration-300">
                <div className="flex h-[300px] flex-col gap-8 overflow-y-auto rounded-lg border border-stroke-soft-200 p-4">
                  <div dir="ltr" data-orientation="horizontal" className="h-full">
                    <div role="tablist" aria-orientation="horizontal" className="relative isolate grid w-full auto-cols-fr grid-flow-col gap-1 rounded-10 bg-bg-weak-50 p-1" tabIndex={0} data-orientation="horizontal" style={{ outline: 'none' }}>
                      <button type="button" role="tab" aria-selected="true" aria-controls="radix-:Rbh4v9ba:-content-pdf" data-state="active" id="radix-:Rbh4v9ba:-trigger-pdf" className="peer relative z-10 h-7 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-4 w-4">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        PDF Upload
                      </button>
                      <button type="button" role="tab" aria-selected="false" aria-controls="radix-:Rbh4v9ba:-content-link" data-state="inactive" id="radix-:Rbh4v9ba:-trigger-link" className="peer relative z-10 h-7 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link h-4 w-4">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        Link Extract
                      </button>
                      <div className="absolute inset-y-1 left-0 -z-10 rounded-3xl shadow-toggle-switch transition-transform duration-300" style={{ transform: 'translate3d(4px, 0px, 0px)', width: '192px', transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)' }} aria-hidden="true">
                        <div className="absolute inset-[1px] rounded-3xl bg-bg-white-0"></div>
                      </div>
                    </div>
                    <div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:Rbh4v9ba:-trigger-pdf" id="radix-:Rbh4v9ba:-content-pdf" tabIndex={0} className="mt-4" style={{ animationDuration: '0s' }}>
                      <label className="flex w-full cursor-pointer flex-col items-center gap-5 rounded-xl border border-dashed border-stroke-sub-300 bg-bg-white-0 p-8 text-center transition duration-200 ease-out hover:bg-bg-weak-50 h-full hover:border-primary-base">
                        <div className="flex flex-col items-center justify-center gap-4" style={{ opacity: 1 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload size-6 text-text-sub-600">
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                            <path d="M12 12v9"></path>
                            <path d="m16 16-4-4-4 4"></path>
                          </svg>
                          <div className="space-y-1.5">
                            <div className="text-label-sm text-text-strong-950">Drag &amp; drop PDFs.</div>
                            <div className="text-paragraph-xs text-text-sub-600">PDF formats, up to 20 MB.</div>
                          </div>
                          <div className="inline-flex h-8 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-bg-white-0 px-2.5 text-label-sm text-text-sub-600 pointer-events-none ring-1 ring-inset ring-stroke-soft-200 mt-4">Browse File</div>
                        </div>
                      </label>
                    </div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:Rbh4v9ba:-trigger-link" hidden id="radix-:Rbh4v9ba:-content-link" tabIndex={0} className="mt-4"></div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-8 transition-all duration-300">
                <div className="relative h-8 md:h-10">
                  <h3 className="absolute inset-0 font-serif text-title-h5 font-semibold text-text-strong-950 md:text-title-h4" style={{ opacity: 1, filter: 'blur(0px)' }}>Context is everything</h3>
                </div>
                <p className="max-w-lg text-text-sub-600">Build your knowledge base from your PDF, Website URL. And AI agents can use it to write better.</p>
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#fa7319]/[.024]"></div>
            </div>
          </div>
          <div className="col-span-12 2xl:col-span-7">
            <div className="group relative col-span-3 flex w-full flex-col justify-between overflow-hidden rounded-xl bg-bg-white-0 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <div className="relative m-8 mb-0 h-[300px] w-[calc(100%-64px)] rounded-lg border border-stroke-soft-200 p-8">
                <h1 className="mb-4 border-b border-stroke-soft-200 pb-4 text-paragraph-lg font-semibold">What is MCP (Model Context Protocol)?</h1>
                <p className="hidden py-2 text-paragraph-sm sm:block">Model Context Protocol (MCP) is an open protocol that enables LLMs to access external tools and data sources.</p>
                <p className="text-paragraph-sm text-primary-base" style={{ opacity: 1 }}>
                  <span className="block sm:hidden">Model Context Protocol (MCP) is an open protocol that enables LLMs to access external tools and data sources.</span>
                  <span className="hidden sm:block">MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.</span>
                </p>
                <div className="shadow-lg absolute -bottom-4 right-4 !w-[200px] rounded-lg border border-stroke-soft-200 bg-bg-white-0 focus:outline-none focus-visible:outline-none sm:-bottom-20" style={{ opacity: 1 }}>
                  <div className="max-h-none p-0 focus:outline-none focus-visible:ring-0">
                    <button className="text-sm flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-2 py-1 !text-primary-base hover:bg-primary-alpha-16 focus:outline-none focus-visible:ring-0 data-[selected=true]:bg-primary-alpha-10" type="button" style={{ transform: 'none', backgroundColor: 'transparent' }}>
                      <div className="flex items-center gap-2"><span className="text-paragraph-xs">Accept</span></div>
                      <kbd className="border-none bg-transparent p-0 text-paragraph-xs">Tab</kbd>
                    </button>
                    <button className="text-sm flex w-full cursor-pointer items-center justify-between gap-2 rounded px-2 py-1 hover:bg-primary-alpha-16 focus:outline-none focus-visible:ring-0 data-[selected=true]:bg-primary-alpha-10" type="button">
                      <div className="flex items-center gap-2"><span className="text-paragraph-xs">Previous</span></div>
                      <kbd className="border-none bg-transparent p-0 text-paragraph-xs">←</kbd>
                    </button>
                    <button className="text-sm flex w-full cursor-pointer items-center justify-between gap-2 rounded px-2 py-1 hover:bg-primary-alpha-16 focus:outline-none focus-visible:ring-0 data-[selected=true]:bg-primary-alpha-10" type="button">
                      <div className="flex items-center gap-2"><span className="text-paragraph-xs">Another</span></div>
                      <kbd className="border-none bg-transparent p-0 text-paragraph-xs">→</kbd>
                    </button>
                    <button className="text-sm flex w-full cursor-pointer items-center justify-between gap-2 rounded px-2 py-1 hover:bg-primary-alpha-16 focus:outline-none focus-visible:ring-0 data-[selected=true]:bg-primary-alpha-10" type="button">
                      <div className="flex items-center gap-2"><span className="text-paragraph-xs">Discard</span></div>
                      <kbd className="border-none bg-transparent p-0 text-paragraph-xs">Esc</kbd>
                    </button>
                  </div>
                  <div className="my-1 h-px w-full bg-stroke-soft-200"></div>
                  <div className="px-2 pb-1 text-right text-subheading-2xs text-text-sub-600">1/5 suggestions</div>
                </div>
              </div>
              <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-8 transition-all duration-300">
                <div className="relative h-8 md:h-10">
                  <h3 className="absolute inset-0 font-serif text-title-h5 font-semibold text-text-strong-950 md:text-title-h4" style={{ opacity: 1, filter: 'blur(0px)' }}>Tab, Tab, Tab ... Article</h3>
                </div>
                <p className="max-w-lg text-text-sub-600">One Key, unlimited power. Type Pulse offers suggestions based on your document&apos;s context to prevent writer&apos;s block.</p>
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#fa7319]/[.024]"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="chats" className="container mx-auto max-w-screen-md px-4 py-24 sm:px-0 sm:py-32 xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h2 className="mb-2 text-center text-label-lg tracking-wider text-primary-base">MORE FEATURES</h2>
        <h2 className="text-white-to-orange-lighter mb-4 text-center font-serif text-title-h3 md:text-title-h2">Built for more productivity</h2>
        <h3 className="text-xl mx-auto mb-8 text-center text-text-sub-600 md:w-1/2">Type Pulse is built to help you write faster and more efficiently.</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-atom text-primary-base">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
                  <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">State-of-the-art AI Models</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Use the latest AI Reasoning/Generative Models like Claude Sonnet 4, GPT-5, and more.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain text-primary-base">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">Writing Agents Marketplace</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Enhance your AI Writing workflows by using our AI Writing Agents.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-library text-primary-base">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 7v10"></path>
                  <path d="M11 7v10"></path>
                  <path d="m15 7 2 10"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">Prompt Templates</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Use prebuilt prompt templates to generate content fast.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pocket-knife text-primary-base">
                  <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"></path>
                  <path d="M18 6h.01"></path>
                  <path d="M6 18h.01"></path>
                  <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"></path>
                  <path d="M18 11.66V22a4 4 0 0 0 4-4V6"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">MCP Tools</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Use MCP tools to enhance your writing.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command text-primary-base">
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">Command Palette(⌘K)</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Access commands with a keyboard shortcut.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon text-primary-base">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">Dark Mode</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Full dark mode support for late-night thinkers.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-keyboard text-primary-base">
                  <path d="M10 8h.01"></path>
                  <path d="M12 12h.01"></path>
                  <path d="M14 8h.01"></path>
                  <path d="M16 12h.01"></path>
                  <path d="M18 8h.01"></path>
                  <path d="M6 8h.01"></path>
                  <path d="M7 16h10"></path>
                  <path d="M8 12h.01"></path>
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">Keyboard Controls</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Typing without mouse becomes ease.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link text-primary-base">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">Extract Links</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Extract links from any website and use them as context.</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/50 dark:bg-card hover:bg-background group/number transition-all delay-75">
            <div className="flex-col space-y-1.5 p-6 flex items-start">
              <div className="mb-4 flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-primary-base">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <h3 className="text-title-h5 font-semibold leading-none">Markdown/PDF Export</h3>
            </div>
            <div className="p-6 pt-0 text-text-sub-600">Export your writing as markdown or PDF.</div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto max-w-screen-md px-4 py-24 sm:px-0 sm:py-32 xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h2 className="mb-2 text-center text-label-lg tracking-wider text-primary-base">WHO IS THIS FOR?</h2>
        <h2 className="text-white-to-orange-lighter mb-4 text-center font-serif text-title-h3 md:text-title-h2">For Those Who Want More Potential</h2>
        <h3 className="text-xl mx-auto mb-8 text-center text-text-sub-600 md:w-1/2">Most apps add so many features that make it difficult to just write. We don&apos;t alienate those who want a simple workflow. Type Pulse is built around one simple workflow, write, rewrite and thrive your content.</h3>
        <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/60 dark:bg-card relative h-full">
            <div className="p-6 pt-0 mt-8 flex items-center justify-center">
              <Image alt="Creators" loading="lazy" width="160" height="160" decoding="async" src="/creators.webp" />
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-title-h5 font-semibold leading-none">Creators</h3>
              <p className="text-sm text-text-sub-600">Write better newsletters, articles, scripts, essays, and posts.</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-full transition duration-200 ease-out h-4 gap-1.5 px-2 text-subheading-2xs uppercase has-[&gt;.dot]:gap-2 text-static-white bg-warning-base absolute -right-3 -top-2" data-pro="false">Coming Soon</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/60 dark:bg-card relative h-full">
            <div className="p-6 pt-0 mt-8 flex items-center justify-center">
              <Image alt="Writers" loading="lazy" width="160" height="160" decoding="async" src="/writers.webp" />
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-title-h5 font-semibold leading-none">Writers</h3>
              <p className="text-sm text-text-sub-600">Find the right ideas when you need them for books &amp; articles.</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-full transition duration-200 ease-out h-4 gap-1.5 px-2 text-subheading-2xs uppercase has-[&gt;.dot]:gap-2 text-static-white bg-warning-base absolute -right-3 -top-2" data-pro="false">Coming Soon</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/60 dark:bg-card relative h-full">
            <div className="p-6 pt-0 mt-8 flex items-center justify-center">
              <Image alt="Marketers" loading="lazy" width="160" height="160" decoding="async" src="/marketers.webp" />
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-title-h5 font-semibold leading-none">Marketers</h3>
              <p className="text-sm text-text-sub-600">Outline and draft emails, landing pages, and copywriting.</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-full transition duration-200 ease-out h-4 gap-1.5 px-2 text-subheading-2xs uppercase has-[&gt;.dot]:gap-2 text-static-white bg-warning-base absolute -right-3 -top-2" data-pro="false">Coming Soon</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/60 dark:bg-card relative h-full">
            <div className="p-6 pt-0 mt-8 flex items-center justify-center">
              <Image alt="Note-Takers" loading="lazy" width="160" height="160" decoding="async" src="/notetakers.webp" />
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-title-h5 font-semibold leading-none">Note-Takers</h3>
              <p className="text-sm text-text-sub-600">Take notes, organize your digital life and have one place to save your ideas.</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-full transition duration-200 ease-out h-4 gap-1.5 px-2 text-subheading-2xs uppercase has-[&gt;.dot]:gap-2 text-static-white bg-warning-base absolute -right-3 -top-2" data-pro="false">Coming Soon</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/60 dark:bg-card relative h-full">
            <div className="p-6 pt-0 mt-8 flex items-center justify-center">
              <Image alt="Students" loading="lazy" width="160" height="160" decoding="async" src="/students.webp" />
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-title-h5 font-semibold leading-none">Students</h3>
              <p className="text-sm text-text-sub-600">Reference course material, take effective notes, and write compelling papers..</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-full transition duration-200 ease-out h-4 gap-1.5 px-2 text-subheading-2xs uppercase has-[&gt;.dot]:gap-2 text-static-white bg-warning-base absolute -right-3 -top-2" data-pro="false">Coming Soon</div>
          </div>
          <div className="text-card-foreground shadow-sm rounded-lg border border-stroke-soft-200 bg-muted/60 dark:bg-card relative h-full">
            <div className="p-6 pt-0 mt-8 flex items-center justify-center">
              <Image alt="Teams" loading="lazy" width="160" height="160" decoding="async" src="/teams.webp" />
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-title-h5 font-semibold leading-none">Teams</h3>
              <p className="text-sm text-text-sub-600">Collaborate on interconnected creative documents for better content.</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-full transition duration-200 ease-out h-4 gap-1.5 px-2 text-subheading-2xs uppercase has-[&gt;.dot]:gap-2 text-static-white bg-warning-base absolute -right-3 -top-2" data-pro="true">Coming Soon</div>
          </div>
        </div>
      </section>

      <div className="relative px-4 py-8 xl:px-24 xl:py-32">
        <div className="absolute left-0 h-full top-1/2 bg-[radial-gradient(35%_96px_at_50%_0%,hsla(24_96%_54%_/_0.05),transparent)] dark:bg-[radial-gradient(35%_96px_at_50%_0%,hsla(24_96%_54%_/_0.05),transparent)]"></div>
        <div className="glowy-divider absolute inset-x-12 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-alpha-16 to-transparent dark:via-orange-alpha-16"></div>
      </div>

      <section id="features" className="container mx-auto max-w-screen-md px-4 py-24 sm:px-0 sm:py-32 xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h2 className="mb-2 text-center text-label-lg tracking-wider text-primary-base">USER CASES</h2>
        <h2 className="text-white-to-orange-lighter mb-4 text-center font-serif text-title-h3 md:text-title-h2">Cultivate Your Writing Habits</h2>
        <h3 className="text-xl mx-auto mb-8 text-center text-text-sub-600 md:w-1/2">Using Type Pulse&apos;s AI Agents to help you write</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-card-foreground rounded-lg border-stroke-soft-200 bg-background h-full border-0 shadow-none">
              <div className="flex-col space-y-1.5 p-6 flex items-start">
                <div className="mb-4 rounded-full bg-primary-alpha-16 p-2 ring-8 ring-primary-alpha-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check text-primary-base">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-title-h5 font-semibold leading-none">Essays</h3>
              </div>
              <div className="p-6 pt-0 text-left text-text-sub-600"><span>Save hours writing your essay with our AI Writing Agents.</span></div>
            </div>
          </div>
          <div>
            <div className="text-card-foreground rounded-lg border-stroke-soft-200 bg-background h-full border-0 shadow-none">
              <div className="flex-col space-y-1.5 p-6 flex items-start">
                <div className="mb-4 rounded-full bg-primary-alpha-16 p-2 ring-8 ring-primary-alpha-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper text-primary-base">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6h8v4h-8V6Z"></path>
                  </svg>
                </div>
                <h3 className="text-title-h5 font-semibold leading-none">Blog posts</h3>
              </div>
              <div className="p-6 pt-0 text-left text-text-sub-600">Write SEO-friendly blogs &amp; articles faster with the help of AI.</div>
            </div>
          </div>
          <div>
            <div className="text-card-foreground rounded-lg border-stroke-soft-200 bg-background h-full border-0 shadow-none">
              <div className="flex-col space-y-1.5 p-6 flex items-start">
                <div className="mb-4 rounded-full bg-primary-alpha-16 p-2 ring-8 ring-primary-alpha-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-primary-base">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3 className="text-title-h5 font-semibold leading-none">SEO Content</h3>
              </div>
              <div className="p-6 pt-0 text-left text-text-sub-600">Write compelling SEO content to grow your network and engage with your audience.</div>
            </div>
          </div>
          <div>
            <div className="text-card-foreground rounded-lg border-stroke-soft-200 bg-background h-full border-0 shadow-none">
              <div className="flex-col space-y-1.5 p-6 flex items-start">
                <div className="mb-4 rounded-full bg-primary-alpha-16 p-2 ring-8 ring-primary-alpha-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up text-primary-base">
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                </div>
                <h3 className="text-title-h5 font-semibold leading-none">Social Media Posts</h3>
              </div>
              <div className="p-6 pt-0 text-left text-text-sub-600">Write your next engaging social media post to grow your audience.</div>
            </div>
          </div>
          <div>
            <div className="text-card-foreground rounded-lg border-stroke-soft-200 bg-background h-full border-0 shadow-none">
              <div className="flex-col space-y-1.5 p-6 flex items-start">
                <div className="mb-4 rounded-full bg-primary-alpha-16 p-2 ring-8 ring-primary-alpha-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-primary-base">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-title-h5 font-semibold leading-none">LinkedIn Posts</h3>
              </div>
              <div className="p-6 pt-0 text-left text-text-sub-600">Write compelling LinkedIn posts to grow your network and engage with your audience.</div>
            </div>
          </div>
          <div>
            <div className="text-card-foreground rounded-lg border-stroke-soft-200 bg-background h-full border-0 shadow-none">
              <div className="flex-col space-y-1.5 p-6 flex items-start">
                <div className="mb-4 rounded-full bg-primary-alpha-16 p-2 ring-8 ring-primary-alpha-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube text-primary-base">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </div>
                <h3 className="text-title-h5 font-semibold leading-none">YouTube Scripts</h3>
              </div>
              <div className="p-6 pt-0 text-left text-text-sub-600">Write engaging YouTube scripts with AI.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative px-4 py-8 xl:px-24 xl:py-32">
        <div className="absolute left-0 h-full top-1/2 bg-[radial-gradient(35%_96px_at_50%_0%,hsla(24_96%_54%_/_0.05),transparent)] dark:bg-[radial-gradient(35%_96px_at_50%_0%,hsla(24_96%_54%_/_0.05),transparent)]"></div>
        <div className="glowy-divider absolute inset-x-12 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-alpha-16 to-transparent dark:via-orange-alpha-16"></div>
      </div>

      <section id="pricing" className="sm:py-38 container mx-auto max-w-screen-md px-4 py-24 xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h2 className="mb-2 text-center text-label-lg tracking-wider text-primary-base">PRICING</h2>
        <h2 className="text-white-to-orange-lighter mb-4 text-center font-serif text-title-h3 md:text-title-h2">Simple, transparent pricing</h2>
        <h3 className="text-xl mx-auto pb-14 text-center text-text-sub-600 md:w-1/2">No credit card required, cancel anytime</h3>
        <div className="mx-auto mb-12 w-fit">
          <div dir="ltr" data-orientation="horizontal">
            <div role="tablist" aria-orientation="horizontal" className="relative isolate grid w-full auto-cols-fr grid-flow-col bg-bg-weak-50 gap-2 rounded-3xl p-2" tabIndex={0} data-orientation="horizontal" style={{ outline: 'none' }}>
              <button type="button" role="tab" aria-selected="true" aria-controls="radix-:Rakv9ba:-content-Yearly" data-state="active" id="radix-:Rakv9ba:-trigger-Yearly" className="peer relative z-10 h-7 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 w-24" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Yearly</button>
              <button type="button" role="tab" aria-selected="false" aria-controls="radix-:Rakv9ba:-content-Monthly" data-state="inactive" id="radix-:Rakv9ba:-trigger-Monthly" className="peer relative z-10 h-7 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 w-24" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Monthly</button>
              <div className="absolute inset-y-1 left-0 -z-10 rounded-3xl shadow-toggle-switch transition-transform duration-300 segmented-control-highlight" style={{ transform: 'translate3d(8px, 0px, 0px)', width: '96px', transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)' }} aria-hidden="true">
                <div className="absolute inset-[1px] rounded-3xl bg-bg-white-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          <div className="bg-neutral-900/50 relative inline-flex flex-col items-start justify-start overflow-hidden rounded-2xl border border-stroke-soft-200 p-5">
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden"></div>
            <div className="relative z-10 flex h-full w-full flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-4">
                <h3 className="text-label-lg font-semibold text-text-strong-950">Free</h3>
                <p className="text-label-md text-text-sub-600">For personal note-taking, writing, and creative work with minimal AI features.</p>
              </div>
              <div className="my-5 inline-flex items-end justify-start gap-1 self-stretch">
                <div className="justify-center font-serif font-bold text-text-strong-950">
                  <span className="mr-0.5 text-title-h2">$</span>
                  <span className="text-title-h2">0</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 pb-3">
                  <div className="justify-center text-paragraph-sm font-medium leading-tight text-text-sub-600">/MONTH</div>
                </div>
              </div>
              <a target="_blank" rel="noopener noreferrer" className="w-full" href="https://app.typepulse.ai/auth/sign-in">
                <span className="group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:text-text-disabled-300 disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden bg-bg-strong-950 text-text-white-0 shadow-fancy-buttons-neutral h-10 gap-3 rounded-10 px-3.5 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-static-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-static-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24] w-full">Get started for free</span>
              </a>
              <div className="my-5 h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-white/10"></div>
              <div className="my-5 flex flex-col items-start justify-start gap-2.5 self-stretch">
                <div className="mb-2 flex flex-col items-start justify-start gap-2.5 self-stretch">Free plan includes:</div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">100 Basic AI models requests per month</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">100 AI Credits per month</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">1 month expiry - renews monthly</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">5MB file upload, 200 MB storage</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">2 Knowledge assets</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Basic AI Writing Tools</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Community support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/50 relative inline-flex flex-col items-start justify-start overflow-hidden rounded-2xl border border-stroke-soft-200 p-5">
            <div
              style={
                {
                  '--border-width': '1px',
                  '--duration': '14s',
                  backgroundImage: 'radial-gradient(transparent,transparent, #A07CFE,#FE8FB5,#FFBE7B,transparent,transparent)',
                  backgroundSize: '300% 300%',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: 'var(--border-width)'
                } as React.CSSProperties
              }
              className="motion-safe:animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]">
            </div>
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden"></div>
            <div className="relative z-10 flex h-full w-full flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-4">
                <h3 className="text-label-lg font-semibold text-primary-neon">Creator</h3>
                <p className="text-label-md text-text-sub-600">Perfect for growing teams that need more power and flexibility.</p>
              </div>
              <div className="my-5 inline-flex items-end justify-start gap-1 self-stretch">
                <div className="justify-center font-serif font-bold text-text-strong-950">
                  <span className="mr-0.5 text-title-h2">$</span>
                  <span className="text-title-h2">16</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 pb-3">
                  <div className="justify-center text-paragraph-sm font-medium leading-tight text-text-sub-600">/MONTH</div>
                  <div className="text-paragraph-sm font-medium leading-tight text-text-sub-600">(Save 25%)</div>
                </div>
              </div>
              <a target="_blank" rel="noopener noreferrer" className="w-full" href="https://app.typepulse.ai/auth/sign-in">
                <span className="group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:text-text-disabled-300 disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden bg-primary-base text-static-white shadow-fancy-buttons-primary h-10 gap-3 rounded-10 px-3.5 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-static-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-static-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24] w-full">Start free trial</span>
              </a>
              <div className="my-5 h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-white/10"></div>
              <div className="my-5 flex flex-col items-start justify-start gap-2.5 self-stretch">
                <div className="mb-2 flex flex-col items-start justify-start gap-2.5 self-stretch">Everything in Free, plus:</div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Unlimited Basic AI models requests</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">2000 AI Credits per month</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">1 month expiry - renews monthly</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">50MB file upload, 2 GB storage</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">10 Knowledge assets</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Unlock all AI Writing Agents</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Browser extension access (coming soon)</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Priority support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/50 relative inline-flex flex-col items-start justify-start overflow-hidden rounded-2xl border border-stroke-soft-200 p-5">
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden"></div>
            <div className="relative z-10 flex h-full w-full flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-4">
                <h3 className="text-label-lg font-semibold text-text-strong-950">Premium</h3>
                <p className="text-label-md text-text-sub-600">For those need much higher AI usage limits, priority support.</p>
              </div>
              <div className="my-5 inline-flex items-end justify-start gap-1 self-stretch">
                <div className="justify-center font-serif font-bold text-text-strong-950">
                  <span className="mr-0.5 text-title-h2">$</span>
                  <span className="text-title-h2">33</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 pb-3">
                  <div className="justify-center text-paragraph-sm font-medium leading-tight text-text-sub-600">/MONTH</div>
                  <div className="text-paragraph-sm font-medium leading-tight text-text-sub-600">(Save 25%)</div>
                </div>
              </div>
              <a target="_blank" rel="noopener noreferrer" className="w-full" href="https://app.typepulse.ai/auth/sign-in">
                <span className="group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:text-text-disabled-300 disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden bg-bg-strong-950 text-text-white-0 shadow-fancy-buttons-neutral h-10 gap-3 rounded-10 px-3.5 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-static-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-static-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24] w-full">Start free trial</span>
              </a>
              <div className="my-5 h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-white/10"></div>
              <div className="my-5 flex flex-col items-start justify-start gap-2.5 self-stretch">
                <div className="mb-2 flex flex-col items-start justify-start gap-2.5 self-stretch">Everything in Creator, plus:</div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Unlimited Premium AI Models</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">5000 AI Credits per month</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">1 month expiry - renews monthly</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Unlimited files upload, 10 GB storage</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Unlimited Knowledge assets</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Unlock all AI Writing Tools</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Browser extension access (coming soon)</div>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] p-[5px] bg-primary-alpha-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check relative size-3 font-semibold text-primary-base">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base justify-center font-normal leading-normal text-text-strong-950">Priority support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="group flex items-center gap-1 text-paragraph-xs text-text-sub-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info size-4 shrink-0 text-text-soft-400">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            Pricing in USD. Local currency available in app.
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto max-w-screen-md px-4 py-24 sm:px-0 sm:py-32">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-center text-label-lg tracking-wider text-primary-base">FAQS</h2>
          <h2 className="text-white-to-orange-lighter text-center font-serif text-title-h3 md:text-title-h2">Your Questions, answered</h2>
        </div>
        <div className="w-full">
          <div className="space-y-6" data-orientation="vertical">
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:R8qsv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:Rqsv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                How does Type Pulse work?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:R8qsv9ba:" hidden role="region" aria-labelledby="radix-:Rqsv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:R9asv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R1asv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Is Type Pulse provided free of charge?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:R9asv9ba:" hidden role="region" aria-labelledby="radix-:R1asv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:R9qsv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R1qsv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Which AI models does Type Pulse use?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:R9qsv9ba:" hidden role="region" aria-labelledby="radix-:R1qsv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:Raasv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R2asv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Is there mobile support?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:Raasv9ba:" hidden role="region" aria-labelledby="radix-:R2asv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:Raqsv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R2qsv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Is there support for multiple languages?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:Raqsv9ba:" hidden role="region" aria-labelledby="radix-:R2qsv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:Rbasv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R3asv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                How does Type Pulse protect my data?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:Rbasv9ba:" hidden role="region" aria-labelledby="radix-:R3asv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:Rbqsv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R3qsv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                What makes Type Pulse different from other writing tools?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:Rbqsv9ba:" hidden role="region" aria-labelledby="radix-:R3qsv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:Rcasv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R4asv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Can I collaborate with others on Type Pulse?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:Rcasv9ba:" hidden role="region" aria-labelledby="radix-:R4asv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="group/accordion rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent">
              <button type="button" aria-controls="radix-:Rcqsv9ba:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:R4qsv9ba:" className="w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950 grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5 -m-3.5 p-3.5 outline-none focus:outline-none" data-radix-collection-item="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help size-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                What kind of content can I create with Type Pulse?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5 text-text-soft-400 transition duration-200 ease-out group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:hidden">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus size-5 text-text-sub-600 hidden group-data-[state=open]/accordion:block">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div data-state="closed" id="radix-:Rcqsv9ba:" hidden role="region" aria-labelledby="radix-:R4qsv9ba:" data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen overflow-hidden bg-bg-white-0">
        <div className="relative mx-auto h-[360px] w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] md:w-4/5">
          <div id=":Rn4v9ba:" className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,#FA7319,transparent_85%)] dark:[mask-image:radial-gradient(50%_50%,white,transparent_85%)]">
            <canvas data-generated="true" style={{ width: '100% !important', height: '100% !important' }} aria-hidden="true" height="432" width="1285"></canvas>
          </div>
          <div className="absolute inset-0 mx-auto w-full bg-[radial-gradient(circle_at_bottom_center,#FFA4682e,transparent_85%)]"></div>
          <div className="absolute inset-x-0 -bottom-[180px] mx-auto h-full w-full max-w-screen-xl rounded-[100%] bg-gradient-to-b from-orange-200 to-orange-50 dark:from-orange-500 dark:to-orange-950"></div>
          <div className="bg-orangle-50 absolute inset-x-0 -bottom-[182px] mx-auto h-full w-full max-w-screen-xl rounded-[100%] shadow-[inset_0_2px_16px_#fff3eb,0_-10px_48px_1px_#fff3eb7d] dark:bg-orange-950"></div>
        </div>
        <div className="relative z-10 mx-auto -mt-52 w-screen max-w-2xl">
          <div className="mx-auto grid h-28 w-28 place-content-center rounded-full backdrop-blur-lg">
            <Image alt="Type Pulse" loading="lazy" width="100" height="100" decoding="async" className="rounded-full" style={{ color: 'transparent' }} src="/logo.png" />
          </div>
        </div>
        <article className="relative z-10 mx-auto block w-2/3 py-2 text-center text-text-strong-950">
          <h2 className="text-white-to-orange-lighter mb-4 text-center font-serif text-title-h3 md:text-title-h2">Your Vibe Writing Journey Begins Here</h2>
          <h3 className="text-xl mx-auto mb-8 text-center text-text-sub-600 md:w-1/2">Write with Type Pulse today and never look back</h3>
          <div className="flex items-center justify-center">
            <div className="glass-border-button shadow-sm group relative h-12 cursor-pointer rounded-xl bg-white/10 shadow-black/5">
              <div className="glass-border absolute -left-[3px] -top-[3px] z-0 h-[calc(100%+6px)] w-[calc(100%+6px)] overflow-hidden rounded-xl after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:border-[0.5px] after:border-white/20 after:content-['']">
                <div className="absolute left-[-42px] top-[-90px] aspect-square h-auto w-[150%] animate-spin blur [animation-duration:5s]" style={{ background: 'conic-gradient(from 90deg at 50% 50%, rgba(250, 115, 25, 0.12) 0, rgba(250, 115, 25, 0.12) 10%, #fa7319 20%, rgba(250, 115, 25, 0.12) 30%, rgba(250, 115, 25, 0.12) 60%, #fa7319 70%, rgba(250, 115, 25, 0.12) 80%, rgba(250, 115, 25, 0.12) 100%)' }}></div>
              </div>
              <div className="z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-1 font-medium bg-gradient-to-br from-neutral-950 to-neutral-950 backdrop-blur-2xl dark:from-white dark:via-white/80 dark:to-white group-hover:from-black/90 group-hover:to-black/70 dark:group-hover:from-white/90 dark:group-hover:to-white">
                <div className="flex items-center justify-center gap-2 text-text-white-0 transition-transform duration-100 ease-in-out group-hover:scale-105">
                  <a className="flex w-full items-center justify-center" target="_blank" href="https://app.typepulse.ai/auth/sign-up" rel="noopener noreferrer">
                    Start writing
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover/arrow:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <footer id="footer" className="relative mt-20 flex h-full w-full flex-col overflow-hidden">
        <div className="container z-10 mx-auto max-w-screen-md px-4 py-4 sm:px-0 sm:py-32 xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-orange-alpha-24 to-orange-alpha-10 p-6 md:p-10">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full rounded-2xl bg-[url('/noise.gif')] content-['']" style={{ opacity: 0.025 }}></div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3 xl:grid-cols-5">
              <div className="col-span-full flex flex-col gap-2 xl:col-span-2">
                <a className="flex items-start font-mono font-bold" href="#">
                  <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 size-8">
                    {/* Re-using the same SVG structure as the header for brevity, can be abstracted to a component */}
                    <rect width="512" height="512" rx="128" fill="url(#paint0_linear_4150_87)"></rect>
                    <g filter="url(#filter0_d_4150_87)"><path d="M148.856 183.619L145.306 191.763C142.708 197.725 134.462 197.725 131.864 191.763L128.315 183.619C121.987 169.098 110.591 157.537 96.3707 151.213L85.435 146.349C79.522 143.719 79.522 135.114 85.435 132.484L95.7593 127.891C110.345 121.404 121.946 109.415 128.164 94.4011L131.809 85.6007C134.35 79.4672 142.82 79.4672 145.361 85.6007L149.006 94.4011C155.224 109.415 166.825 121.404 181.412 127.891L191.735 132.484C197.649 135.114 197.649 143.719 191.735 146.349L180.799 151.213C166.579 157.537 155.183 169.098 148.856 183.619Z" fill="white"></path><path d="M133.657 86.3658C135.516 81.8789 141.654 81.8789 143.513 86.3658L147.158 95.1666C153.569 110.644 165.535 123.019 180.599 129.718L190.922 134.311C195.253 136.237 195.253 142.595 190.922 144.521L179.987 149.385C165.53 155.815 153.913 167.479 147.332 182.121L147.023 182.82L143.473 190.964C141.573 195.324 135.598 195.324 133.698 190.964L130.148 182.82C123.625 167.85 111.87 155.917 97.1838 149.385L86.2473 144.521C81.9179 142.595 81.9179 136.237 86.2473 134.311L96.5725 129.718C111.636 123.019 123.601 110.644 130.012 95.1666L133.657 86.3658Z" stroke="#FDFDFD" strokeWidth="4"></path></g>
                    <g filter="url(#filter1_d_4150_87)"><g filter="url(#filter2_d_4150_87)"><path fillRule="evenodd" clipRule="evenodd" d="M151.661 278.381C162.017 246.556 180.68 205.769 213.954 172.494C279.193 107.255 374.027 97.608 376.426 97.3665C377.698 97.2387 380.332 97.1108 383.433 98.1594C386.972 99.3564 390.055 101.761 392.079 104.897C395.534 110.089 414.956 142.752 388.91 182.217C387.617 184.177 386.06 186.088 384.332 187.934C384.542 189.929 384.391 191.995 383.829 194.047C380.698 205.481 376.65 217.474 371.41 229.47C362.264 250.413 349.386 271.587 331.217 289.755C297.221 323.751 252.589 339.366 217.726 346.649C200.131 350.326 184.583 351.971 173.402 352.699C172.191 352.779 171.03 352.847 169.922 352.906C169.402 357.012 164.792 398.137 164.792 405.25C164.792 414.409 157.367 421.833 148.208 421.833C139.05 421.833 131.625 414.407 131.625 405.25C131.625 395.778 133.554 377.564 135.296 362.793C138.685 334.078 142.682 305.974 151.661 278.381ZM361.228 163.948C369.966 150.709 369.836 139.405 368.102 132.122C342.789 136.683 281.562 151.791 237.407 195.946C209.158 224.195 192.642 259.628 183.2 288.643C179.365 300.43 176.75 310.992 175.004 319.332C184.604 318.572 197.078 317.08 210.944 314.184C242.785 307.533 280.237 293.832 307.763 266.303C321.851 252.217 332.358 235.496 340.165 218.116C323.973 226.742 306.695 234.47 294.412 238.564C285.722 241.461 276.331 236.765 273.436 228.077C270.539 219.388 275.235 209.997 283.923 207.1C295.108 203.372 313.086 195.267 329.598 186.113C337.796 181.569 345.288 176.954 351.178 172.717C357.536 168.144 360.468 165.1 361.228 163.948Z" fill="white"></path></g></g>
                    <g filter="url(#filter3_d_4150_87)"><circle cx="370" cy="390" r="32" fill="white"></circle></g>
                  </svg>
                  <h3 className="text-title-h6 font-semibold">Type Pulse</h3>
                </a>
                <p className="mt-4 text-text-strong-950">Meet your AI writing agents for content creation.</p>
                <div className="flex gap-3 lg:items-center">
                  <a href="https://twitter.com/typepulse_ai" target="_blank" rel="noopener noreferrer" className="text-text-sub-600 hover:text-text-strong-950">
                    <span className="sr-only">X / Twitter</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon h-6 w-6">
                      <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
                    </svg>
                  </a>
                  <a href="https://bsky.app/profile/typepulse.ai" target="_blank" rel="noopener noreferrer" className="text-text-sub-600 hover:text-text-strong-950">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon h-6 w-6">
                      <path d="M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-label-lg font-bold">Products</h3>
                <div><a className="opacity-60 hover:opacity-100" href="/features">AI Writer</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="/features">AI Rewriter</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="/features">AI Chats</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="/features">AI Agents</a></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-label-lg font-bold">Free Tools</h3>
                <div><a className="opacity-60 hover:opacity-100" href="/tools/seo-outline-generator">SEO Outline Generator</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="/tools/reddit-comment-agent">Reddit Comment Agent</a></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-label-lg font-bold">Resources</h3>
                <div><a className="opacity-60 hover:opacity-100" href="/blog">Blog</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="#faqs">FAQs</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="https://typepulse.featurebase.app/roadmap">Roadmap</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="https://typepulse.featurebase.app/help">Help Center</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="mailto:support@typepulse.ai">Contact</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="/privacy">Privacy Policy</a></div>
                <div><a className="opacity-60 hover:opacity-100" href="/terms">Terms of Service</a></div>
                <div dir="ltr" data-orientation="horizontal">
                  <div role="tablist" aria-orientation="horizontal" className="relative isolate grid auto-cols-fr grid-flow-col p-1 w-fit gap-2 rounded-full bg-transparent" tabIndex={0} data-orientation="horizontal" style={{ outline: 'none' }}>
                    <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R9h7cv9ba:-content-light" data-state="inactive" id="radix-:R9h7cv9ba:-trigger-light" className="peer relative z-10 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square h-6" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun size-4">
                        <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                      </svg>
                    </button>
                    <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R9h7cv9ba:-content-dark" data-state="inactive" id="radix-:R9h7cv9ba:-trigger-dark" className="peer relative z-10 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square h-6" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon size-4">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                      </svg>
                    </button>
                    <button type="button" role="tab" aria-selected="true" aria-controls="radix-:R9h7cv9ba:-content-system" data-state="active" id="radix-:R9h7cv9ba:-trigger-system" className="peer relative z-10 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square h-6" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor size-4">
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    </button>
                    <div className="absolute inset-y-1 left-0 -z-10 shadow-toggle-switch transition-transform duration-300 rounded-full p-2" style={{ transform: 'translate3d(68px, 0px, 0px)', width: '24px', transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)' }} aria-hidden="true">
                      <div className="absolute inset-[1px] rounded-3xl bg-bg-white-0 !bg-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-orientation="horizontal" role="none" className="bg-border shrink-0 h-[1px] w-full my-6"></div>
            <section className="flex w-full items-center justify-between">
              <h3>Copyright © 2025<div className="ml-1 inline-block text-primary-base">CursorDance, LLC</div> All Rights Reserved.</h3>
            </section>
          </div>
        </div>
        <div className="relative -z-10 mx-auto mt-4 hidden h-[116px] w-full max-w-screen-md overflow-clip md:block xl:mt-0 xl:h-[152px] xl:max-w-screen-lg 2xl:-mt-8 2xl:h-[184px] 2xl:max-w-screen-xl">
          <div className="absolute left-1/2 -z-10 hidden -translate-x-1/2 text-center text-[150px] font-bold leading-none md:block xl:text-[200px] 2xl:text-[250px] before:bg-gradient-to-b before:to-80% before:bg-clip-text before:text-transparent before:content-['TypePulse'] after:absolute after:inset-0 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['TypePulse'] before:from-gray-200 before:to-gray-100 after:bg-gray-300 after:[text-shadow:0_1px_0_white] dark:before:from-orange-900 dark:before:to-orange-alpha-24 dark:after:bg-orange-950"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
            <div className="h-32 w-32 rounded-full bg-orange-alpha-24 blur-[80px] will-change-[filter] xl:h-40 xl:w-40 2xl:h-56 2xl:w-56"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TypePulseLandingPage;
`,
    },
  },
};
