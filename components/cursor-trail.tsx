"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TrailPoint {
  id: number
  x: number
  y: number
  timestamp: number
}

interface CursorTrailProps {
  isDark?: boolean
}

export default function CursorTrail({ isDark = true }: CursorTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [clickRipples, setClickRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const trailIdRef = useRef(0)
  const rippleIdRef = useRef(0)

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newPosition = { x: e.clientX, y: e.clientY }
    setMousePosition(newPosition)
    setIsVisible(true)

    // Add new trail point
    const newPoint: TrailPoint = {
      id: trailIdRef.current++,
      x: newPosition.x,
      y: newPosition.y,
      timestamp: Date.now(),
    }

    setTrailPoints((prev) => [...prev.slice(-15), newPoint])

    // Check if hovering over interactive elements
    const target = e.target as HTMLElement
    const isInteractive =
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a") ||
      target.closest("[role='button']") ||
      target.classList.contains("cursor-pointer")

    setIsHovering(isInteractive)
  }, [])

  // Handle mouse click
  const handleMouseClick = useCallback((e: MouseEvent) => {
    const newRipple = {
      id: rippleIdRef.current++,
      x: e.clientX,
      y: e.clientY,
    }

    setClickRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setClickRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 1000)
  }, [])

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
    setIsHovering(false)
  }, [])

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setTrailPoints((prev) => prev.filter((point) => now - point.timestamp < 1000))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Add event listeners
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleMouseClick)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseClick, handleMouseLeave])

  // Hide default cursor on desktop
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      * {
        cursor: none !important;
      }
      
      @media (max-width: 768px) {
        * {
          cursor: auto !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Don't render on mobile devices
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main Cursor */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Outer Ring */}
            <motion.div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                isDark ? "border-cyan-400/60" : "border-cyan-600/60"
              }`}
              animate={{
                width: isHovering ? 40 : 32,
                height: isHovering ? 40 : 32,
                borderColor: isHovering ? (isDark ? "#00d4ff" : "#0891b2") : isDark ? "#00d4ff99" : "#0891b299",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                boxShadow: `0 0 20px ${isDark ? "#00d4ff40" : "#0891b240"}`,
              }}
            />

            {/* Inner Dot */}
            <motion.div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${
                isDark ? "bg-cyan-400" : "bg-cyan-600"
              }`}
              animate={{
                width: isHovering ? 8 : 6,
                height: isHovering ? 8 : 6,
                backgroundColor: isHovering ? (isDark ? "#00d4ff" : "#0891b2") : isDark ? "#00d4ff" : "#0891b2",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                boxShadow: `0 0 15px ${isDark ? "#00d4ff80" : "#0891b280"}`,
              }}
            />

            {/* Hover Effect Ring */}
            {isHovering && (
              <motion.div
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                  isDark ? "border-cyan-400/30" : "border-cyan-600/30"
                }`}
                initial={{ width: 40, height: 40, opacity: 0 }}
                animate={{
                  width: 60,
                  height: 60,
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trail Points */}
      <AnimatePresence>
        {trailPoints.map((point, index) => {
          const age = Date.now() - point.timestamp
          const opacity = Math.max(0, 1 - age / 1000)
          const scale = Math.max(0.1, 1 - age / 1000)

          return (
            <motion.div
              key={point.id}
              className="absolute"
              style={{
                left: point.x,
                top: point.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: opacity * 0.6, scale }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.1 }}
            >
              {/* Trail Particle */}
              <div
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  isDark ? "bg-cyan-400" : "bg-cyan-600"
                }`}
                style={{
                  width: 4 * scale,
                  height: 4 * scale,
                  boxShadow: `0 0 ${8 * scale}px ${isDark ? "#00d4ff60" : "#0891b260"}`,
                }}
              />

              {/* Trail Glow */}
              <div
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  isDark ? "bg-cyan-400/20" : "bg-cyan-600/20"
                } blur-sm`}
                style={{
                  width: 12 * scale,
                  height: 12 * scale,
                }}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Click Ripples */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Ripple Ring 1 */}
            <motion.div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                isDark ? "border-cyan-400" : "border-cyan-600"
              }`}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{
                width: 80,
                height: 80,
                opacity: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Ripple Ring 2 */}
            <motion.div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                isDark ? "border-cyan-400/60" : "border-cyan-600/60"
              }`}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{
                width: 120,
                height: 120,
                opacity: 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            />

            {/* Ripple Ring 3 */}
            <motion.div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                isDark ? "border-cyan-400/30" : "border-cyan-600/30"
              }`}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{
                width: 160,
                height: 160,
                opacity: 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />

            {/* Central Flash */}
            <motion.div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${
                isDark ? "bg-cyan-400" : "bg-cyan-600"
              }`}
              initial={{ width: 8, height: 8, opacity: 1 }}
              animate={{
                width: 0,
                height: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                boxShadow: `0 0 20px ${isDark ? "#00d4ff" : "#0891b2"}`,
              }}
            />

            {/* Particle Burst */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180
              const distance = 40

              return (
                <motion.div
                  key={i}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                    isDark ? "bg-cyan-400" : "bg-cyan-600"
                  }`}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  style={{
                    boxShadow: `0 0 8px ${isDark ? "#00d4ff80" : "#0891b280"}`,
                  }}
                />
              )
            })}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Magnetic Field Effect */}
      {isHovering && isVisible && (
        <motion.div
          className="absolute"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Magnetic Field Lines */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180
            const length = 30

            return (
              <motion.div
                key={i}
                className={`absolute w-0.5 ${isDark ? "bg-cyan-400/40" : "bg-cyan-600/40"} origin-bottom`}
                style={{
                  height: length,
                  left: -1,
                  top: -length,
                  transform: `rotate(${i * 60}deg)`,
                }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            )
          })}
        </motion.div>
      )}

      {/* Ambient Glow */}
      {isVisible && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${
              isDark ? "bg-cyan-400/10" : "bg-cyan-600/10"
            } blur-2xl`}
            style={{
              width: isHovering ? 120 : 80,
              height: isHovering ? 120 : 80,
              transition: "all 0.3s ease-out",
            }}
          />
        </motion.div>
      )}
    </div>
  )
}
