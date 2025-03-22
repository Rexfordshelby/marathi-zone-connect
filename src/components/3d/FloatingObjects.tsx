
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import AnimatedSphere from './AnimatedSphere';

interface FloatingObjectsProps {
  className?: string;
}

const FloatingObjects: React.FC<FloatingObjectsProps> = ({ className = "" }) => {
  return (
    <div className={`${className} h-full w-full absolute inset-0 z-10 opacity-90 pointer-events-none`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <AnimatedSphere position={[-4, 1, -2]} color="#ff6f00" distort={0.3} speed={0.1} />
        </Float>
        
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
          <AnimatedSphere position={[4, -1, -1]} color="#ff9d45" distort={0.5} speed={0.2} />
        </Float>
        
        <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
          <AnimatedSphere position={[0, 2, -5]} color="#ffb873" distort={0.7} speed={0.15} />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default FloatingObjects;
