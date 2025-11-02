"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MagneticCard {
  id: string
  title: string
  description: string
  image?: string
  icon?: React.ReactNode
  badge?: string
  href?: string
}

interface MagneticCardsProps {
  cards: MagneticCard[]
  className?: string
  cardClassName?: string
  magneticStrength?: number
  maxDistance?: number
  onCardClick?: (card: MagneticCard) => void
}

export function MagneticCards({
  cards,
  className,
  cardClassName,
  magneticStrength = 0.3,
  maxDistance = 200,
  onCardClick,
}: MagneticCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [cardTransforms, setCardTransforms] = useState<
    Record<string, { x: number; y: number; rotate: number; scale: number }>
  >({})

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })

      // Calculate magnetic effects for each card
      const newTransforms: Record<string, { x: number; y: number; rotate: number; scale: number }> = {}

      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return

        const cardRect = cardRef.getBoundingClientRect()
        const containerRect = containerRef.current!.getBoundingClientRect()

        const cardCenterX = cardRect.left - containerRect.left + cardRect.width / 2
        const cardCenterY = cardRect.top - containerRect.top + cardRect.height / 2

        const deltaX = x - cardCenterX
        const deltaY = y - cardCenterY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const magneticX = deltaX * force * magneticStrength
          const magneticY = deltaY * force * magneticStrength
          const rotation = deltaX * force * 0.1
          const scale = 1 + force * 0.05

          newTransforms[cards[index].id] = {
            x: magneticX,
            y: magneticY,
            rotate: rotation,
            scale: scale,
          }
        } else {
          newTransforms[cards[index].id] = { x: 0, y: 0, rotate: 0, scale: 1 }
        }
      })

      setCardTransforms(newTransforms)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [cards, magneticStrength, maxDistance])

  const handleCardClick = (card: MagneticCard) => {
    if (card.href) {
      window.open(card.href, "_blank")
    }
    onCardClick?.(card)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8", className)}
    >
      {cards.map((card, index) => {
        const transform = cardTransforms[card.id] || { x: 0, y: 0, rotate: 0, scale: 1 }
        const isHovered = hoveredCard === card.id

        return (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={cn(
              "relative group cursor-pointer transition-all duration-300 ease-out",
              "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800",
              "shadow-lg hover:shadow-2xl",
              "overflow-hidden",
              cardClassName,
            )}
            style={{
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(${transform.rotate}deg) scale(${transform.scale})`,
              transformOrigin: "center center",
              zIndex: isHovered ? 10 : 1,
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(card)}
          >
            {/* Magnetic field visualization */}
            <div
              className={cn(
                "absolute inset-0 rounded-xl transition-opacity duration-300",
                "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10",
                isHovered ? "opacity-100" : "opacity-0",
              )}
            />

            {/* Card content */}
            <div className="relative p-6">
              {/* Badge */}
              {card.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {card.badge}
                  </span>
                </div>
              )}

              {/* Icon or Image */}
              <div className="mb-4">
                {card.image ? (
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ) : card.icon ? (
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl">
                    {card.icon}
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>

              {/* Hover indicator */}
              <div
                className={cn(
                  "absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300",
                  "bg-blue-500",
                  isHovered ? "scale-150 opacity-100" : "scale-100 opacity-0",
                )}
              />
            </div>

            {/* Magnetic attraction lines (visual effect) */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse"
                  style={{ transform: "translate(-50%, -50%)" }}
                />
                <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-purple-500 rounded-full animate-pulse delay-100" />
                <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-pink-500 rounded-full animate-pulse delay-200" />
              </div>
            )}
          </div>
        )
      })}

      {/* Mouse position indicator (optional visual effect) */}
      {hoveredCard && (
        <div
          className="absolute w-4 h-4 bg-blue-500/30 rounded-full pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: "scale(0.8)",
          }}
        />
      )}
    </div>
  )
}

// Export types for external use
export type { MagneticCard, MagneticCardsProps }
