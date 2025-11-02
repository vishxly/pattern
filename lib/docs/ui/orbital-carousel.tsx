"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const defaultImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=80",
    alt: "Mountain Lake",
    title: "Serene Mountain Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop&q=80",
    alt: "Forest Path",
    title: "Mystical Forest Path",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop&q=80",
    alt: "Ocean Sunset",
    title: "Golden Ocean Sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop&q=80",
    alt: "Desert Dunes",
    title: "Endless Desert Dunes",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop&q=80",
    alt: "City Lights",
    title: "Urban Night Lights",
  },
];

interface CarouselProps {
  images?: { src: string; alt: string; title?: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
}

export const OrbitalCarousel: React.FC<CarouselProps> = ({
  images = defaultImages,
  autoplayDelay = 5000,
  showPagination = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const numItems = useMemo(() => images.length, [images]);

  // Track window size for responsive behavior
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      // Disable 3D effect on mobile for better performance
      if (isMobile) return;
      
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const xPct = (x / width - 0.5) * 2;
      const yPct = (y / height - 0.5) * 2;

      rotateX.set(yPct * -8);
      rotateY.set(xPct * 8);
    },
    [rotateX, rotateY, isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      rotateX.set(0);
      rotateY.set(0);
    }
  }, [rotateX, rotateY, isMobile]);

  // Enhanced Navigation Logic
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % numItems);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [numItems, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + numItems) % numItems);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [numItems, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex || isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [currentIndex, isTransitioning]
  );

  const toggleAutoplay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Enhanced Autoplay
  useEffect(() => {
    if (autoplayDelay && isPlaying && !isHovered && !isTransitioning) {
      const timer = setInterval(nextSlide, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplayDelay, isPlaying, isHovered, nextSlide, isTransitioning]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        toggleAutoplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, toggleAutoplay]);

  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe && distance > 0) {
      nextSlide();
    }
    if (isSwipe && distance < 0) {
      prevSlide();
    }
  };

  const containerHeight = isMobile ? "h-[400px] sm:h-[500px]" : isTablet ? "h-[550px]" : "h-[650px]";

  return (
    <div
      className={`relative w-full ${containerHeight} flex items-center justify-center overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {/* Background Layer - Blurred Image with Faded Edges */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0">
            <img
              src={images[currentIndex].src}
              alt="background"
              className="w-full h-full object-cover filter blur-2xl brightness-50"
            />
            {/* Top and Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-transparent to-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Aurora Effect */}
      <div className="absolute inset-0 z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
            `,
            animation: "aurora-flow 20s infinite ease-in-out alternate",
          }}
        />
      </div>

      {/* Interactive Carousel Stage */}
      <motion.div
        className="relative w-full h-full z-20"
        style={{
          perspective: isMobile ? "1200px" : "1800px",
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <CarouselItem
            key={`${image.src}-${index}`}
            image={image}
            index={index}
            currentIndex={currentIndex}
            numItems={numItems}
            goToSlide={goToSlide}
            isTransitioning={isTransitioning}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        ))}
      </motion.div>

      {/* Enhanced UI Layer */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Navigation Buttons */}
        <motion.button
          onClick={prevSlide}
          disabled={isTransitioning}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`pointer-events-auto absolute ${
            isMobile ? 'left-2 sm:left-4' : 'left-6'
          } top-1/2 -translate-y-1/2 ${
            isMobile ? 'p-2 sm:p-2.5' : 'p-3'
          } rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
        >
          <ChevronLeft size={isMobile ? 20 : 28} strokeWidth={2.5} />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          disabled={isTransitioning}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          className={`pointer-events-auto absolute ${
            isMobile ? 'right-2 sm:right-4' : 'right-6'
          } top-1/2 -translate-y-1/2 ${
            isMobile ? 'p-2 sm:p-2.5' : 'p-3'
          } rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
        >
          <ChevronRight size={isMobile ? 20 : 28} strokeWidth={2.5} />
        </motion.button>

        {/* Play/Pause Button */}
        <motion.button
          onClick={toggleAutoplay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`pointer-events-auto absolute ${
            isMobile ? 'top-2 sm:top-4 right-2 sm:right-4' : 'top-6 right-6'
          } ${
            isMobile ? 'p-2' : 'p-2.5'
          } rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 shadow-lg`}
        >
          {isPlaying ? (
            <Pause size={isMobile ? 16 : 20} />
          ) : (
            <Play size={isMobile ? 16 : 20} />
          )}
        </motion.button>

        {/* Enhanced Clean Pagination - Only show if enabled */}
        {showPagination && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={`absolute ${
                isMobile ? 'bottom-4 sm:bottom-6' : 'bottom-8'
              } left-0 right-0 flex flex-col items-center`}
            >
              <div className={`flex items-center justify-center ${
                isMobile ? 'gap-1' : 'gap-1.5'
              } ${
                isMobile ? 'px-2 py-1.5' : 'px-3 py-2'
              } rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl`}>
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`pointer-events-auto relative flex items-center justify-center ${
                      isMobile ? 'w-6 h-3' : 'w-8 h-4'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <motion.div
                      className={`rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? isMobile 
                            ? "w-6 h-1.5 bg-white shadow-sm"
                            : "w-8 h-2 bg-white shadow-sm"
                          : isMobile
                            ? "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
                            : "w-2 h-2 bg-white/40 hover:bg-white/60"
                      }`}
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    {currentIndex === index && (
                      <motion.div
                        layoutId="pagination-glow"
                        className="absolute inset-0 rounded-full bg-white/20 blur-sm -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Progress indicator */}
              <div className={`mt-1 ${
                isMobile ? 'w-12 h-0.5' : 'w-16 h-0.5'
              } bg-white/10 rounded-full overflow-hidden`}>
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: `${((currentIndex + 1) / images.length) * 100}%` 
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Image Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`absolute left-1/2 -translate-x-1/2 text-center px-4 ${
              showPagination 
                ? isMobile ? "bottom-16 sm:bottom-20" : "bottom-28"
                : isMobile ? "bottom-4 sm:bottom-6" : "bottom-8"
            }`}
          >
            <h3 className={`${
              isMobile ? 'text-lg sm:text-xl' : 'text-2xl'
            } font-light text-white/90 tracking-wide`}>
              {images[currentIndex].title || images[currentIndex].alt}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CSS for Aurora Animation */}
      <style jsx>{`
        @keyframes aurora-flow {
          0%,
          100% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1);
          }
          33% {
            transform: translateX(-40%) translateY(-60%) rotate(120deg)
              scale(1.1);
          }
          66% {
            transform: translateX(-60%) translateY(-40%) rotate(240deg)
              scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

interface CarouselItemProps {
  image: { src: string; alt: string; title?: string };
  index: number;
  currentIndex: number;
  numItems: number;
  goToSlide: (index: number) => void;
  isTransitioning: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  index,
  currentIndex,
  numItems,
  goToSlide,
  isTransitioning,
  isMobile,
  isTablet,
}) => {
  const offset = (index - currentIndex + numItems) % numItems;
  const isActive = offset === 0;
  const isAdjacent = offset === 1 || offset === numItems - 1;

  const getTransform = () => {
    if (isActive) {
      return `translateX(0) translateZ(${isMobile ? 50 : 100}px) rotateY(0deg) scale(1)`;
    }

    const isLeft = offset > numItems / 2;
    const side = isLeft ? -1 : 1;
    const distance = Math.min(offset, numItems - offset);
    
    // Responsive distances
    let baseDistance, depthOffset, rotationAngle;
    
    if (isMobile) {
      baseDistance = 120;
      depthOffset = 80;
      rotationAngle = 20;
    } else if (isTablet) {
      baseDistance = 200;
      depthOffset = 150;
      rotationAngle = 30;
    } else {
      baseDistance = 280;
      depthOffset = 200;
      rotationAngle = 35;
    }

    return `
      translateX(${side * (baseDistance + distance * (isMobile ? 40 : 80))}px) 
      translateZ(${-depthOffset - distance * (isMobile ? 80 : 150)}px) 
      rotateY(${side * -rotationAngle}deg)
      scale(${0.7 + (isAdjacent ? 0.2 : 0)})
    `;
  };

  const getOpacity = () => {
    if (isActive) return 1;
    if (isAdjacent) return 0.8;
    return Math.max(0.3, 1 - Math.min(offset, numItems - offset) * 0.4);
  };

  // Responsive image dimensions
  const getImageDimensions = () => {
    if (isMobile) {
      return "w-[240px] h-[320px] sm:w-[280px] sm:h-[380px]";
    } else if (isTablet) {
      return "w-[300px] h-[400px]";
    } else {
      return "w-[340px] h-[460px]";
    }
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
      initial={false}
      animate={{
        transform: getTransform(),
        opacity: getOpacity(),
        zIndex: isActive ? 20 : isAdjacent ? 15 : 10,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 1.2,
      }}
      onClick={() => !isActive && !isTransitioning && goToSlide(index)}
      whileHover={!isActive ? { scale: 1.05 } : {}}
    >
      <div className="relative group" style={{ transformStyle: "preserve-3d" }}>
        {/* Main Image Container */}
        <div className={`relative ${getImageDimensions()} ${
          isMobile ? 'rounded-xl' : 'rounded-2xl'
        } overflow-hidden shadow-2xl`}>
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isActive
                ? "brightness-100 contrast-105 saturate-110"
                : "brightness-80 contrast-95 saturate-90"
            }`}
          />

          {/* Overlay for non-active items */}
          {!isActive && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 transition-opacity duration-300 group-hover:opacity-50" />
          )}

          {/* Glass Border Effect */}
          <div className={`absolute inset-0 ${
            isMobile ? 'rounded-xl' : 'rounded-2xl'
          } border border-white/20 pointer-events-none`} />

          {/* Glow Effect for Active Item */}
          {isActive && (
            <div className={`absolute -inset-1 ${
              isMobile ? 'rounded-xl' : 'rounded-2xl'
            } bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10`} />
          )}
        </div>

        {/* Enhanced Reflection Effect - Only on larger screens for performance */}
        {isActive && !isMobile && (
          <div
            className="absolute top-full left-0 right-0 h-32 w-full origin-top pointer-events-none"
            style={{
              transform: "scaleY(-0.6) translateY(8px)",
              background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.3) 100%)`,
              WebkitMaskImage: `url(${image.src})`,
              maskImage: `url(${image.src})`,
              WebkitMaskSize: "cover",
              maskSize: "cover",
              opacity: 0.6,
              filter: "blur(1px)",
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default OrbitalCarousel;
