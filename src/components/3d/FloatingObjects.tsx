
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import AnimatedSphere from './AnimatedSphere';

interface FloatingObjectsProps {
  className?: string;
}

const FloatingObjects: React.FC<FloatingObjectsProps> = ({ className = "" }) => {
  return (
    <div className={`${className} h-full w-full absolute inset-0 z-10 opacity-90 pointer-events-none`}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        dpr={[0.5, 1]} // Lower resolution for better performance
        frameloop="demand" // Only render when needed
        performance={{ min: 0.2 }} // Lower performance threshold for better compatibility
        gl={{ powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />
          
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
            <AnimatedSphere position={[-4, 1, -2]} color="#ff6f00" distort={0.2} speed={0.05} />
          </Float>
          
          <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
            <AnimatedSphere position={[4, -1, -1]} color="#ff9d45" distort={0.3} speed={0.1} />
          </Float>
          
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingObjects;
