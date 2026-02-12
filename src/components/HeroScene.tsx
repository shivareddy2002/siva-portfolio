import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import NeuralSphere from "./NeuralSphere";
import FloatingCubes from "./FloatingCubes";

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#38bdf8" />
          <pointLight position={[-5, -5, 3]} intensity={0.3} color="#818cf8" />
          <NeuralSphere />
          <FloatingCubes />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
