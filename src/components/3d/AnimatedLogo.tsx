
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

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
    textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
  });

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="/fonts/Roboto_Regular.json"
        size={1.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {text}
        <meshStandardMaterial 
          color={hovered ? hoverColor : color} 
          emissive={hovered ? color : undefined}
          emissiveIntensity={hovered ? 0.5 : 0}
          metalness={0.8} 
          roughness={0.1} 
        />
      </Text3D>
    </Center>
  );
};

export default AnimatedLogo;
