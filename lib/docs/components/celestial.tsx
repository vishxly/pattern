import { Button } from "@/components/ui/button";
import {
  Celestial,
  CelestialBody,
  CelestialOrbit,
  CelestialPlanet,
  CelestialStar,
  CelestialTrigger,
} from "@/lib/docs/ui/celestial";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Rocket, Palette, CheckCircle } from "lucide-react";

// 3. The main demo component.
export default function CelestialDemoPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center ">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Celestial Component Demo</h1>
        <p className="text-muted-foreground mt-2">
          Click the button to launch the interactive experience.
        </p>
      </div>

      <Celestial>
        <CelestialTrigger asChild>
          <Button>✨ Launch Interactive Tour</Button>
        </CelestialTrigger>

        <CelestialBody>
          {/* The Central "Star" where content from the active planet appears */}
          <CelestialStar />

          {/* The orbital path for the navigation planets */}
          <CelestialOrbit radius={250}>
            {/* Planet 1: Welcome */}
            <CelestialPlanet
              label={
                <div className="flex flex-col items-center gap-1">
                  <User size={24} />
                  <span>Welcome</span>
                </div>
              }
            >
              <div className="flex h-full flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold">Welcome to Our App!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  This is an interactive tour. Click the orbiting planets to
                  explore different features.
                </p>
              </div>
            </CelestialPlanet>

            {/* Planet 2: Mission Setup (with inputs) */}
            <CelestialPlanet
              label={
                <div className="flex flex-col items-center gap-1">
                  <Rocket size={24} />
                  <span>Mission</span>
                </div>
              }
            >
              <div className="flex h-full flex-col items-center justify-center space-y-4 p-2">
                <h2 className="text-xl font-semibold">Define Your Mission</h2>
                <div className="w-full max-w-sm space-y-3 text-left">
                  <div>
                    <Label htmlFor="missionName">Mission Name</Label>
                    <Input
                      id="missionName"
                      placeholder="e.g., Project Phoenix"
                    />
                  </div>
                  <div>
                    <Label htmlFor="target">Target</Label>
                    <Input
                      id="target"
                      placeholder="e.g., Increase user engagement"
                    />
                  </div>
                </div>
              </div>
            </CelestialPlanet>

            {/* Planet 3: Customization */}
            <CelestialPlanet
              label={
                <div className="flex flex-col items-center gap-1">
                  <Palette size={24} />
                  <span>Theme</span>
                </div>
              }
            >
              <div className="flex h-full flex-col items-center justify-center space-y-4">
                <h2 className="text-xl font-semibold">Choose Your Theme</h2>
                <p className="text-sm text-muted-foreground text-center">
                  Select a color scheme for your dashboard.
                </p>
                <div className="flex gap-4 mt-2">
                  <button className="h-12 w-12 rounded-full bg-blue-500 border-2 border-transparent focus:border-white"></button>
                  <button className="h-12 w-12 rounded-full bg-green-500 border-2 border-transparent focus:border-white"></button>
                  <button className="h-12 w-12 rounded-full bg-purple-500 border-2 border-transparent focus:border-white"></button>
                </div>
              </div>
            </CelestialPlanet>

            {/* Planet 4: Finish */}
            <CelestialPlanet
              label={
                <div className="flex flex-col items-center gap-1">
                  <CheckCircle size={24} />
                  <span>Finish</span>
                </div>
              }
            >
              <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-2xl font-bold">You're All Set!</h2>
                <p className="text-sm text-muted-foreground">
                  Your mission is ready for takeoff.
                </p>
                <Button size="sm" className="mt-4">
                  Complete Setup
                </Button>
              </div>
            </CelestialPlanet>
          </CelestialOrbit>
        </CelestialBody>
      </Celestial>
    </div>
  );
}
