
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
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
        gl={{ powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        
        <Suspense fallback={null}>
          <group position={[-4, 1, -2]}>
            <AnimatedSphere color="#ff6f00" speed={0.05} />
          </group>
          
          <group position={[4, -1, -1]}>
            <AnimatedSphere color="#ff9d45" speed={0.1} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingObjects;
