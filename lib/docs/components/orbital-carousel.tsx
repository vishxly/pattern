import React from "react";
import { OrbitalCarousel } from "../ui/orbital-carousel";

function CarouselDemo() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-black dark:text-white font-medium  mb-4">
            Experience the Future
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Navigate through dimensions with our revolutionary orbital carousel.
            Each image tells a story in 3D space.
          </p>
        </div>

        <OrbitalCarousel
          images={[
            {
              src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop",
              alt: "Mountain landscape with lake reflection",
            },
            {
              src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=400&fit=crop",
              alt: "Forest path in autumn",
            },
            {
              src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop",
              alt: "Ocean waves at sunset",
            },
            {
              src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
              alt: "Snowy mountain peaks",
            },
            {
              src: "https://media.istockphoto.com/id/1454842745/photo/tourism.jpg?s=612x612&w=0&k=20&c=rK4TXVsitJExG01zRasbyJMvW9GMovCzoPTv4MsYv0M=",
              alt: "Beach dunes at golden hour",
            },
          ]}
          autoplayDelay={2000}
          showPagination={false}
        />
      </div>
    </div>
  );
}

export default CarouselDemo;
