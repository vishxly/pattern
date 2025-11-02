import React from "react";
import { DomeGallery } from "../ui/gallery";
function GalleryDemo() {
  // Example 1: A custom set of images for the second gallery
  const customImages = [
    {
      src: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=800",
      alt: "Mountain Landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800",
      alt: "Forest Path",
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
      alt: "River Valley",
    },
    {
      src: "https://images.unsplash.com/photo-15051448065A9-ae09a952aeb8?w=800",
      alt: "Beach Sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
      alt: "Misty Field",
    },
    {
      src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800",
      alt: "Lakeside Dock",
    },
    {
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
      alt: "Waterfall",
    },
  ];

  // Example 2: A custom theme object
  const cyberpunkTheme = {
    background: "#0a0a2a",
    itemBorder: "2px solid #00f0ff",
    itemBorderRadius: "0px",
    // You can add more theme properties here if you extend the component
  };
  return (
    <section className="demo-section">
      <h2>Custom Themed Helical Gallery</h2>
      <p>Using the `helix` layout, custom images, and a cyberpunk theme.</p>
      <div className="gallery-wrapper">
        <DomeGallery
          images={customImages}
          layout="helix"
          theme={cyberpunkTheme}
        />
      </div>
    </section>
  );
}

export default GalleryDemo;
