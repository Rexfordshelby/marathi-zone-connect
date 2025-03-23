
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedSphereProps {
  position?: [number, number, number];
  color?: string;
  speed?: number;
  distort?: number;
}

const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ 
  position = [0, 0, 0], 
  color = "#ff6f00", 
  speed = 0.2, 
  distort = 0.5 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Reduced animation complexity
    meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3;
  });

  return (
    <Sphere args={[1, 32, 32]} position={position} ref={meshRef}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={0.3} 
        roughness={0.4} 
        metalness={0.5}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
