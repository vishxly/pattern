"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Types
export interface GlobeMarker {
  lat: number;
  lng: number;
  size?: number;
  color?: string;
  label?: string;
}

export interface GlobeArc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color?: string;
  altitude?: number;
  strokeWidth?: number;
  dashSize?: number;
  animationSpeed?: number;
}

export interface GlobeRing {
  lat: number;
  lng: number;
  color?: string;
  maxRadius?: number;
  propagationSpeed?: number;
}

export interface ZeroGlobeConfig {
  globeColor?: string;
  emissiveColor?: string;
  emissiveIntensity?: number;
  shininess?: number;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  showCountries?: boolean;
  countryColor?: string;
  countryOpacity?: number;
  countryBorderWidth?: number;
  enableRotation?: boolean;
  rotationSpeed?: number;
  enableZoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
  enablePan?: boolean;
  ambientIntensity?: number;
  directionalIntensity?: number;
  pointLightIntensity?: number;
  arcAnimationTime?: number;
  ringRepeatPeriod?: number;
  pointResolution?: number;
  polygonResolution?: number;
  theme?: 'light' | 'dark' | 'auto';
}

export interface ZeroGlobeProps {
  className?: string;
  width?: number;
  height?: number;
  markers?: GlobeMarker[];
  arcs?: GlobeArc[];
  rings?: GlobeRing[];
  config?: ZeroGlobeConfig;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onGlobeClick?: (lat: number, lng: number) => void;
}

// Default configuration
const DEFAULT_CONFIG: Required<ZeroGlobeConfig> = {
  globeColor: "#1a1a2e",
  emissiveColor: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  showAtmosphere: true,
  atmosphereColor: "#87ceeb",
  atmosphereAltitude: 0.15,
  showCountries: true,
  countryColor: "#ffffff",
  countryOpacity: 0.8,
  countryBorderWidth: 0.7,
  enableRotation: true,
  rotationSpeed: 0.5,
  enableZoom: true,
  minZoom: 100,
  maxZoom: 500,
  enablePan: false,
  ambientIntensity: 0.6,
  directionalIntensity: 0.8,
  pointLightIntensity: 0.8,
  arcAnimationTime: 2000,
  ringRepeatPeriod: 2000,
  pointResolution: 4,
  polygonResolution: 3,
  theme: 'dark',
};

// Light mode configuration
const LIGHT_MODE_CONFIG: Partial<ZeroGlobeConfig> = {
  globeColor: "#e8f4fd",
  emissiveColor: "#f0f8ff",
  emissiveIntensity: 0.05,
  atmosphereColor: "#4a90e2",
  countryColor: "#2c3e50",
  countryOpacity: 0.4,
  ambientIntensity: 0.8,
  directionalIntensity: 0.6,
  pointLightIntensity: 0.5,
};

// Dark mode configuration  
const DARK_MODE_CONFIG: Partial<ZeroGlobeConfig> = {
  globeColor: "#1a1a2e",
  emissiveColor: "#000000",
  emissiveIntensity: 0.1,
  atmosphereColor: "#87ceeb",
  countryColor: "#ffffff",
  countryOpacity: 0.8,
  ambientIntensity: 0.6,
  directionalIntensity: 0.8,
  pointLightIntensity: 0.8,
};

// Utility to detect system theme
function useTheme(configTheme?: 'light' | 'dark' | 'auto'): 'light' | 'dark' {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    if (configTheme === 'light') {
      setTheme('light');
    } else if (configTheme === 'dark') {
      setTheme('dark');
    } else if (configTheme === 'auto' || !configTheme) {
      // Check system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(mediaQuery.matches ? 'dark' : 'light');
      
      const handler = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [configTheme]);
  
  return theme;
}

// Get theme-aware configuration
function getThemedConfig(userConfig?: ZeroGlobeConfig): Required<ZeroGlobeConfig> {
  const theme = typeof window !== 'undefined' && userConfig?.theme 
    ? (userConfig.theme === 'auto' 
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : userConfig.theme)
    : 'dark';
    
  const themeConfig = theme === 'light' ? LIGHT_MODE_CONFIG : DARK_MODE_CONFIG;
  
  return {
    ...DEFAULT_CONFIG,
    ...themeConfig,
    ...userConfig,
    theme
  };
}
function latLngToVector3(lat: number, lng: number, radius: number = 100): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

// Globe geometry with countries outline
function GlobeGeometry({ config }: { config: Required<ZeroGlobeConfig> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <group>
      {/* Main globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[100, 64, 32]} />
        <meshPhongMaterial
          color={config.globeColor}
          emissive={config.emissiveColor}
          emissiveIntensity={config.emissiveIntensity}
          shininess={config.shininess * 100}
          transparent={true}
          opacity={0.9}
        />
      </mesh>
      
      {/* Atmosphere */}
      {config.showAtmosphere && (
        <mesh>
          <sphereGeometry args={[100 * (1 + config.atmosphereAltitude), 64, 32]} />
          <meshBasicMaterial
            color={config.atmosphereColor}
            transparent={true}
            opacity={0.1}
            side={THREE.BackSide}
          />
        </mesh>
      )}
      
      {/* Simple country borders */}
      {config.showCountries && (
        <mesh>
          <sphereGeometry args={[100.1, 32, 16]} />
          <meshBasicMaterial
            color={config.countryColor}
            transparent={true}
            opacity={config.countryOpacity * 0.3}
            wireframe={true}
          />
        </mesh>
      )}
    </group>
  );
}

// Markers component
function Markers({ markers, config }: { markers: GlobeMarker[]; config: Required<ZeroGlobeConfig> }) {
  return (
    <group>
      {markers.map((marker, index) => {
        const position = latLngToVector3(marker.lat, marker.lng, 101);
        return (
          <mesh key={index} position={position}>
            <sphereGeometry args={[marker.size || 1, 8, 8]} />
            <meshBasicMaterial
              color={marker.color || "#ff6b35"}
              transparent={true}
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Arcs component
function Arcs({ arcs, config }: { arcs: GlobeArc[]; config: Required<ZeroGlobeConfig> }) {
  const groupRef = useRef<THREE.Group>(null);
  const [time, setTime] = useState(0);
  
  useFrame((state) => {
    setTime(state.clock.elapsedTime);
  });
  
  return (
    <group ref={groupRef}>
      {arcs.map((arc, index) => {
        const startPos = latLngToVector3(arc.startLat, arc.startLng, 100);
        const endPos = latLngToVector3(arc.endLat, arc.endLng, 100);
        
        // Create arc curve
        const midPoint = startPos.clone().add(endPos).multiplyScalar(0.5);
        const altitude = arc.altitude || 0.3;
        midPoint.normalize().multiplyScalar(100 * (1 + altitude));
        
        const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        // Animate the arc
        const animationProgress = (time * 1000) % (config.arcAnimationTime * 2);
        const dashProgress = animationProgress / config.arcAnimationTime;
        
        return (
          <primitive 
            key={index} 
            object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
              color: arc.color || "#00d4ff",
              transparent: true,
              opacity: 0.8,
              linewidth: arc.strokeWidth || 2
            }))}
          />
        );
      })}
    </group>
  );
}

// Rings component
function Rings({ rings, config }: { rings: GlobeRing[]; config: Required<ZeroGlobeConfig> }) {
  const [time, setTime] = useState(0);
  
  useFrame((state) => {
    setTime(state.clock.elapsedTime * 1000);
  });
  
  return (
    <group>
      {rings.map((ring, index) => {
        const position = latLngToVector3(ring.lat, ring.lng, 101);
        const ringTime = time % config.ringRepeatPeriod;
        const scale = (ringTime / config.ringRepeatPeriod) * (ring.maxRadius || 5);
        const opacity = 1 - (ringTime / config.ringRepeatPeriod);
        
        // Create ring normal (pointing away from globe center)
        const normal = position.clone().normalize();
        
        return (
          <mesh key={index} position={position} scale={[scale, scale, scale]}>
            <ringGeometry args={[0.8, 1, 16]} />
            <meshBasicMaterial
              color={ring.color || "#00d4ff"}
              transparent={true}
              opacity={opacity * 0.6}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Auto-rotation component
function AutoRotate({ enabled, speed }: { enabled: boolean; speed: number }) {
  const { scene } = useThree();
  
  useFrame(() => {
    if (enabled) {
      scene.rotation.y += speed * 0.01;
    }
  });
  
  return null;
}

// Globe Core Component
function GlobeCore({ 
  markers = [], 
  arcs = [], 
  rings = [], 
  config, 
  onMarkerClick,
  onGlobeClick 
}: Omit<ZeroGlobeProps, 'className' | 'width' | 'height'>) {
  const finalConfig = getThemedConfig(config);
  
  return (
    <group>
      <GlobeGeometry config={finalConfig} />
      <Markers markers={markers} config={finalConfig} />
      <Arcs arcs={arcs} config={finalConfig} />
      <Rings rings={rings} config={finalConfig} />
      <AutoRotate enabled={finalConfig.enableRotation} speed={finalConfig.rotationSpeed} />
    </group>
  );
}

// Scene Wrapper
function GlobeScene(props: Omit<ZeroGlobeProps, 'className' | 'width' | 'height'>) {
  const { config } = props;
  const finalConfig = getThemedConfig(config);
  
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight 
        color="#ffffff" 
        intensity={finalConfig.ambientIntensity} 
      />
      <directionalLight
        color="#ffffff"
        position={[-400, 100, 400]}
        intensity={finalConfig.directionalIntensity}
      />
      <directionalLight
        color="#ffffff"
        position={[-200, 500, 200]}
        intensity={finalConfig.directionalIntensity * 0.6}
      />
      <pointLight
        color="#ffffff"
        position={[-200, 500, 200]}
        intensity={finalConfig.pointLightIntensity}
      />
      
      {/* Globe */}
      <GlobeCore {...props} />
      
      {/* Controls */}
      <OrbitControls
        enablePan={finalConfig.enablePan}
        enableZoom={finalConfig.enableZoom}
        minDistance={finalConfig.minZoom}
        maxDistance={finalConfig.maxZoom}
        enableDamping={true}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </>
  );
}

// Main Globe Component
export function ZeroGlobe({
  className = "",
  width = 600,
  height = 600,
  markers = [],
  arcs = [],
  rings = [],
  config,
  onMarkerClick,
  onGlobeClick,
}: ZeroGlobeProps) {
  const [mounted, setMounted] = useState(false);
  
  // Handle client-side mounting to avoid SSR issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <div 
        className={`relative overflow-hidden rounded-lg  ${className} flex items-center justify-center`}
        style={{ width, height }}
      >
        <div className="text-gray-500 dark:text-white/60 text-sm">Loading Globe...</div>
      </div>
    );
  }
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg k ${className}`}
      style={{ width, height }}
    >
      <Canvas
        camera={{ position: [0, 0, 300], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        className="w-full h-full"
      >
        <GlobeScene
          markers={markers}
          arcs={arcs}
          rings={rings}
          config={config}
          onMarkerClick={onMarkerClick}
          onGlobeClick={onGlobeClick}
        />
      </Canvas>
    </div>
  );
}

