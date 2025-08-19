import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

function IconMesh({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

export default function FloatingIcons() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
          
          <IconMesh position={[-3, 2, -2]} color="#8B5CF6" />
          <IconMesh position={[3, -1, -1]} color="#06B6D4" />
          <IconMesh position={[-2, -2, -3]} color="#EC4899" />
          <IconMesh position={[2, 2, -2]} color="#F59E0B" />
          <IconMesh position={[0, -3, -2]} color="#10B981" />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}