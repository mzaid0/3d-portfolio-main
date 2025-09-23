"use client"

import { useScroll, useTransform, useSpring } from "framer-motion"
import type { RefObject } from "react"

export function useScrollProgress(containerRef: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  })

  const backgroundY = useTransform(springScrollProgress, [0, 1], ["0%", "30%"])
  const parallaxY = useTransform(springScrollProgress, [0, 1], ["0%", "20%"])

  return { scrollYProgress, backgroundY, parallaxY }
}
