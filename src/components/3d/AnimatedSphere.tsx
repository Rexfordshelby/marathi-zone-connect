
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
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
    
    // Simplified animation to prevent performance issues
    meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.4} 
        metalness={0.5}
      />
    </mesh>
  );
};

export default AnimatedSphere;
