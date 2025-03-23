
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedLogoProps {
  text?: string;
  color?: string;
  hoverColor?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  text = "ZONE", 
  color = "#ff6f00", 
  hoverColor = "#ffffff" 
}) => {
  const textRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);
  
  useFrame((state) => {
    if (!textRef.current) return;
    // Very simple animation to avoid performance issues
    textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <group position={[0, 0, 0]}>
      <Text
        ref={textRef}
        fontSize={1.5}
        color={hovered ? hoverColor : color}
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {text}
      </Text>
    </group>
  );
};

export default AnimatedLogo;
