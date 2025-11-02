"use client"

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
            left: `${iconPosition.x - previewWidth / 2}px`,
            bottom: `${(containerRef.current?.clientHeight ?? 0) - iconPosition.y + 20}px`, // Position above icon with gap
            width: `${previewWidth}px`,
            height: `${previewHeight}px`,
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
