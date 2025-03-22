
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

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
    
    // Rotate the sphere
    meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5;
    
    // Subtle position change for floating effect
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <Sphere args={[1, 64, 64]} position={position} ref={meshRef}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={0.5} 
        roughness={0.2} 
        metalness={0.8}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
