import React, {
    useEffect,
    useRef,
    useCallback,
    useMemo,
    useState,
  } from "react";
  import { useGesture } from "@use-gesture/react";
  import { a, useSpring, config } from "@react-spring/web";
  import styled, { createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";
  
  declare module "styled-components" {
    export interface DefaultTheme {
      background: string;
      itemBorder: string;
      itemBorderRadius: string;
      textColor: string;
    }
  }
  
  // --- Types and Default Data ---
  
  type ImageItem = string | { src: string; alt?: string };
  
  type LayoutType = "sphere" | "helix";
  
  type DomeGalleryProps = {
    images?: ImageItem[];
    layout?: LayoutType;
    radius?: number;
    itemCount?: number;
    rotationSpeed?: number;
    dragSensitivity?: number;
    theme?: any;
  };
  
  type ItemDef = {
    src: string;
    alt: string;
    transform: string;
  };
  
  const DEFAULT_IMAGES: ImageItem[] = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1483728642387-6c351bEC6ece?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1484589065579-248a0714b6af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1523712999610-f77d3ce699bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
  ];
  
  const defaultTheme = {
    background: "#1a1a1a",
    itemBorder: "2px solid white",
    itemBorderRadius: "8px",
    textColor: "white",
  };
  
  // --- Styled Components ---
  
  const GlobalStyle = createGlobalStyle`
    body {
      overscroll-behavior-y: contain;
    }
  `;
  
  const Root = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.background};
    overflow: hidden;
    cursor: grab;
    position: relative;
    &:active {
      cursor: grabbing;
    }
  `;
  
  const Scene = styled(a.div)`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    will-change: transform;
  `;
  
  const Item = styled(a.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px; /* Example size, can be made configurable */
    height: 200px; /* Example size, can be made configurable */
    margin-top: -100px;
    margin-left: -100px;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    will-change: transform, opacity;
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: ${(props) => props.theme.itemBorder};
      border-radius: ${(props) => props.theme.itemBorderRadius};
      pointer-events: none; /* Prevents image dragging */
    }
  `;
  
  // --- Utility Functions ---
  
  const generateSphericalLayout = (count: number, radius: number): ItemDef[] => {
    const items = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians
  
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
  
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
  
      const transform = `translateX(-50%) translateY(-50%) translate3d(${
        x * radius
      }px, ${y * radius}px, ${z * radius}px)`;
      items.push({ transform, src: "", alt: "" }); // Placeholder src/alt
    }
    return items;
  };
  
  const generateHelicalLayout = (count: number, radius: number): ItemDef[] => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = 0.5 * i;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = -i * 20; // Adjust vertical spacing
  
      const transform = `translateX(-50%) translateY(-50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${
        -angle
      }rad)`;
      items.push({ transform, src: "", alt: "" }); // Placeholder src/alt
    }
    return items;
  };
  
  // --- The Component ---
  
  export const DomeGallery: React.FC<DomeGalleryProps> = ({
    images = DEFAULT_IMAGES,
    layout = "sphere",
    radius = 500,
    itemCount,
    rotationSpeed = 0.001,
    dragSensitivity = 1,
    theme = defaultTheme,
  }) => {
    const actualItemCount = itemCount || images.length;
    const normalizedImages = useMemo(
      () =>
        Array.from({ length: actualItemCount }, (_, i) => {
          const img = images[i % images.length];
          return typeof img === "string" ? { src: img, alt: "" } : img;
        }),
      [images, actualItemCount]
    );
  
    const items = useMemo(() => {
      let generatedLayout;
      if (layout === "helix") {
        generatedLayout = generateHelicalLayout(actualItemCount, radius);
      } else {
        generatedLayout = generateSphericalLayout(actualItemCount, radius);
      }
  
      return generatedLayout.map((item, i) => ({
        ...item,
        src: normalizedImages[i].src,
        alt: normalizedImages[i].alt || `Gallery image ${i + 1}`,
      }));
    }, [layout, actualItemCount, radius, normalizedImages]);
  
    const [{ rotateX, rotateY }, api] = useSpring(() => ({
      rotateX: 0,
      rotateY: 0,
      config: config.molasses,
    }));
  
    const rotationRef = useRef({ x: 0, y: 0 });
  
    useEffect(() => {
      let animationFrameId: number;
  
      const animate = () => {
        rotationRef.current.y += rotationSpeed;
        api.set({
          rotateX: rotationRef.current.x,
          rotateY: rotationRef.current.y,
        });
        animationFrameId = requestAnimationFrame(animate);
      };
  
      animationFrameId = requestAnimationFrame(animate);
  
      return () => cancelAnimationFrame(animationFrameId);
    }, [rotationSpeed, api]);
  
    useGesture(
      {
        onDrag: ({ down, movement: [mx, my] }) => {
          if (down) {
            rotationRef.current = {
              x: -my * dragSensitivity,
              y: rotationRef.current.y + mx * dragSensitivity,
            };
            api.start({
              rotateX: -my * dragSensitivity,
              rotateY: rotationRef.current.y,
              immediate: true,
            });
          }
        },
      },
      { target: window }
    );
  
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root>
          <Scene
            style={{
              transform: rotateX.to((x, y) => `rotateX(${x}deg) rotateY(${y}deg)`),
            }}
          >
            {items.map((item, index) => (
              <Item
                key={index}
                style={{
                  transform: item.transform,
                }}
              >
                <img src={item.src} alt={item.alt} />
              </Item>
            ))}
          </Scene>
        </Root>
      </ThemeProvider>
    );
  };
