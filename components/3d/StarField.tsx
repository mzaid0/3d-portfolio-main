import { Stars, Environment } from "@react-three/drei"

export function StarField() {
  return (
    <group>
      <Stars radius={300} depth={60} count={15000} factor={6} saturation={0} fade speed={0.5} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Environment preset="night" />
    </group>
  )
}
