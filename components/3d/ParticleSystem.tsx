"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export function ParticleSystem() {
  const particlesRef = useRef<any>()

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current
      const positions = new Float32Array(800 * 3)

      for (let i = 0; i < 800; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 80
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80
      }

      particles.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    }
  }, [])

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial size={0.08} color="#00d4ff" transparent opacity={0.4} />
    </points>
  )
}
