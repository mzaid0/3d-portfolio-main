// components/3d/UltraModernCanvas.tsx
"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Suspense } from "react"

export function UltraModernCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Suspense fallback={null}>
        <group>
          <Stars radius={300} depth={60} count={2000} factor={3} saturation={0} fade speed={0.2} />
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#f0f0f0" />
        </group>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Suspense>
    </Canvas>
  )
}
