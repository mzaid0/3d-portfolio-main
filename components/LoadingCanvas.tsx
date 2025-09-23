"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

function LoadingParticles() {
  const pointsRef = useRef<any>();
  const [positions] = useState(() => {
    const count = window.innerWidth < 768 ? 500 : 2000; // Fewer particles on mobile
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15;

      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] =
          Math.sin(state.clock.elapsedTime + positions[i] * 0.1) * 2;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingLogo() {
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[2, 1, 0.2]} />
        <meshStandardMaterial
          color="#cccccc"
          metalness={0.8}
          roughness={0.2}
          emissive="#000000"
        />
      </mesh>
    </Float>
  );
}

export default function LoadingCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Suspense fallback={null}>
        <LoadingParticles />
        <FloatingLogo />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Suspense>
    </Canvas>
  );
}
