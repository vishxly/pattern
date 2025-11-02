"use client"

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
