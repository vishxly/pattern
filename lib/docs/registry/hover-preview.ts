import { ComponentGroup } from "@/lib/docs/types";

import HoverPreviewDemo from "../components/hover-preview";

export const hoverPreviewRegistry: ComponentGroup = {
  name: "hoverPreviewRegistry",
  title: "Hover Preview",
  description:
    "A beautiful macOS-inspired component that shows elegant previews when hovering over icons.",

  category: "components",
  components: ["HoverPreviewDemo"],
  // Installation configuration
  installation: {
    cliCommand: "npx shadcn@latest add \"https://zeroui.vercel.app/r/hover-preview\"",
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    componentPath: "components/zeroui/hover-preview.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "items",
      type: "HoverPreviewItem[]",
      description:
        "An array of items to be displayed as icons with hover previews.",
      required: true,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the main container.",
      required: false,
    },
    {
      name: "spacing",
      type: "'sm' | 'md' | 'lg'",
      description: "Determines the spacing between the icons.",
      required: false,
    },
    {
      name: "previewWidth",
      type: "number",
      description: "The width of the preview popup that appears on hover.",
      required: false,
    },
    {
      name: "previewHeight",
      type: "number",
      description: "The height of the preview popup that appears on hover.",
      required: false,
    },
  ],

  variants: {
    basic: {
      title: "Hover Preview",
      description:
        "A beautiful macOS-inspired component that shows elegant previews when hovering over icons.",
      component: HoverPreviewDemo,
      image: "/images/components/timeline-basic.png",
      fallbackImage: "/placeholder.svg?height=400&width=400&text=Timeline",
      code: `"use client"

import { HoverPreview, HoverPreviewCompact } from "@/lib/docs/ui/hover-preview"
import { ImageIcon, Music, Video, Code, Palette, Camera, Mail, Calendar, Settings } from "lucide-react"

export default function HoverPreviewDemo() {
  const appItems = [
    {
      id: "droppable",
      icon: (
        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">D</div>
      ),
      title: "Droppable",
      subtitle: "Native macOS app for sharing large files",
      previewImage: "/placeholder.svg?height=120&width=240",
      description: "Easily share large files with drag and drop functionality",
      action: () => console.log("Opening Droppable"),
    },
    {
      id: "photos",
      icon: <ImageIcon className="w-6 h-6 text-blue-600" />,
      title: "Photos",
      subtitle: "Photo management and editing",
      previewImage: "/placeholder.svg?height=120&width=240",
      description: "Organize and edit your photo collection",
      action: () => console.log("Opening Photos"),
    },
    {
      id: "music",
      icon: <Music className="w-6 h-6 text-red-500" />,
      title: "Music",
      subtitle: "Your music library",
      previewImage: "/placeholder.svg?height=120&width=240",
      description: "Stream and organize your favorite music",
      action: () => console.log("Opening Music"),
    },
    {
      id: "video",
      icon: <Video className="w-6 h-6 text-purple-600" />,
      title: "Video Player",
      subtitle: "Watch videos in high quality",
      previewImage: "/placeholder.svg?height=120&width=240",
      description: "Professional video playback experience",
      action: () => console.log("Opening Video Player"),
    },
    {
      id: "code",
      icon: <Code className="w-6 h-6 text-green-600" />,
      title: "VS Code",
      subtitle: "Code editor",
      previewImage: "/placeholder.svg?height=120&width=240",
      description: "Professional code editing environment",
      action: () => console.log("Opening VS Code"),
    },
  ]


  return (
    <div className="  p-8">
      <div className="max-w-6xl mx-auto space-y-16">
     

        {/* Main Demo - Apps */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">App Launcher</h2>
            <p className="text-gray-600">Hover over any app icon to see its preview</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/50">
            <HoverPreview items={appItems} spacing="lg" />
          </div>
        </div>

       
      </div>
    </div>
  )
}
`,
      manualCode: `"use client"

import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface HoverPreviewItem {
  id: string
  icon: React.ReactNode
  title: string
  subtitle?: string
  previewImage: string
  description?: string
  action?: () => void
}

interface HoverPreviewProps {
  items: HoverPreviewItem[]
  className?: string
  spacing?: "sm" | "md" | "lg"
  previewWidth?: number
  previewHeight?: number
}

export function HoverPreview({
  items,
  className,
  spacing = "md",
  previewWidth = 280,
  previewHeight = 200,
}: HoverPreviewProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const spacingClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  }

  const handleMouseEnter = (itemId: string, event: React.MouseEvent) => {
    if (!containerRef.current) return

    const iconElement = event.currentTarget as HTMLElement
    const iconRect = iconElement.getBoundingClientRect()
    const containerRect = containerRef.current.getBoundingClientRect()

    // Get the center X position of the icon
    const iconCenterX = iconRect.left - containerRect.left + iconRect.width / 2
    // Get the top position of the icon container (not just the icon circle)
    const iconContainerTop = iconRect.top - containerRect.top

    setIconPosition({
      x: iconCenterX,
      y: iconContainerTop,
    })
    setHoveredItem(itemId)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Preview Popup */}
      {hoveredItem && (
        <div
          className="absolute z-50 pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: \`\${iconPosition.x - previewWidth / 2}px\`,
            bottom: \`\${(containerRef.current?.clientHeight ?? 0) - iconPosition.y + 20}px\`, // Position above icon with gap
            width: \`\${previewWidth}px\`,
            height: \`\${previewHeight}px\`,
          }}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-4 transform animate-in fade-in-0 zoom-in-95 duration-200">
            {(() => {
              const item = items.find((i) => i.id === hoveredItem)
              if (!item) return null

              return (
                <div className="flex flex-col h-full">
                  <div className="flex-1 mb-3">
                    <img
                      src={item.previewImage || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    {item.subtitle && <p className="text-xs text-gray-600">{item.subtitle}</p>}
                    {item.description && <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>}
                  </div>
                </div>
              )
            })()}
          </div>
          {/* Arrow pointing down to the icon */}
          <div 
            className="absolute transform -translate-x-1/2" 
            style={{ 
              left: '50%',
              bottom: '-8px', // Position arrow at bottom of preview
            }}
          >
            <div className="w-4 h-4 bg-white/95 border-r border-b border-gray-200/50 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Icon Row */}
      <div className={cn("flex items-center justify-center", spacingClasses[spacing], className)}>
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer transition-all duration-200 ease-out hover:scale-110"
            onMouseEnter={(e) => handleMouseEnter(item.id, e)}
            onMouseLeave={handleMouseLeave}
            onClick={item.action}
          >
            <div className="flex flex-col items-center space-y-2">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 border border-gray-200/50">
                <div className="text-2xl">{item.icon}</div>
              </div>

              {/* Title */}
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Alternative compact version for smaller spaces
export function HoverPreviewCompact({
  items,
  className,
  spacing = "sm",
}: Omit<HoverPreviewProps, "previewWidth" | "previewHeight">) {
  return <HoverPreview items={items} className={className} spacing={spacing} previewWidth={240} previewHeight={160} />
}
`,
    },
  },
};
