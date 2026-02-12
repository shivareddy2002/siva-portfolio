import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingCube = ({ position, speed, size }: { position: [number, number, number]; speed: number; size: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.rotation.x = t * speed * 0.5;
      meshRef.current.rotation.y = t * speed * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.7) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial
        color="#06b6d4"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
};

const FloatingCubes = () => {
  const cubes = [
    { position: [3.5, 1.5, -1] as [number, number, number], speed: 0.4, size: 0.35 },
    { position: [-3.2, -1, 0.5] as [number, number, number], speed: 0.5, size: 0.25 },
    { position: [2, -2, -2] as [number, number, number], speed: 0.35, size: 0.3 },
    { position: [-2.5, 2, -1.5] as [number, number, number], speed: 0.45, size: 0.28 },
    { position: [4, 0, -0.5] as [number, number, number], speed: 0.38, size: 0.22 },
    { position: [-4, -0.5, 1] as [number, number, number], speed: 0.42, size: 0.2 },
  ];

  return (
    <>
      {cubes.map((cube, i) => (
        <FloatingCube key={i} {...cube} />
      ))}
    </>
  );
};

export default FloatingCubes;
