import { GlobeArc, GlobeMarker, GlobeRing, ZeroGlobe } from "../ui/globe";

// Demo Component
export default function GlobeDemo() {
  const markers: GlobeMarker[] = [
    {
      lat: 40.7128,
      lng: -74.006,
      size: 1.5,
      color: "#ff6b35",
      label: "New York",
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      size: 1.2,
      color: "#4ecdc4",
      label: "London",
    },
    {
      lat: 35.6762,
      lng: 139.6503,
      size: 1.3,
      color: "#45b7d1",
      label: "Tokyo",
    },
    {
      lat: -33.8688,
      lng: 151.2093,
      size: 1.1,
      color: "#96ceb4",
      label: "Sydney",
    },
    { lat: 19.076, lng: 72.8777, size: 1.4, color: "#feca57", label: "Mumbai" },
  ];

  const arcs: GlobeArc[] = [
    {
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 51.5074,
      endLng: -0.1278,
      color: "#ff6b35",
      altitude: 0.3,
    },
    {
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 35.6762,
      endLng: 139.6503,
      color: "#4ecdc4",
      altitude: 0.4,
    },
    {
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: -33.8688,
      endLng: 151.2093,
      color: "#45b7d1",
      altitude: 0.2,
    },
  ];

  const rings: GlobeRing[] = [
    { lat: 40.7128, lng: -74.006, color: "#ff6b35" },
    { lat: 19.076, lng: 72.8777, color: "#feca57" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <ZeroGlobe
        width={600}
        height={600}
        markers={markers}
        arcs={arcs}
        rings={rings}
        config={{
          globeColor: "#1a1a2e",
          atmosphereColor: "#87ceeb",
          enableRotation: true,
          rotationSpeed: 0.5,
          showAtmosphere: false,
          countryOpacity: 0.6,
        }}
        className="shadow-2xl "
      />
    </div>
  );
}
