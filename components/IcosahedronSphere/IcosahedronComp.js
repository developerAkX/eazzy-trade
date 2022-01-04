import React, { useRef, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";

export default function IcosahedronComp() {
  const [clicked, click] = useState(false);
  const ref = useRef();
  const [active, set] = useState(false);
  useFrame((state, delta) => {
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x -= 0.001;
  });
  const handleClick = useCallback((e) => set((state) => !state), []);
  return (
    <>
      <directionalLight
        color="#4032a8"
        intensity={0.75}
        position={[1.5, 2, 2]}
      />
      <directionalLight
        color="#32a838"
        intensity={0.8}
        position={[-1.5, -2, 2]}
      />
      <directionalLight
        color="#0xbf79fc"
        intensity={0.4}
        position={[-2, 2, -2.5]}
      />
      <directionalLight
        color="#a8327d"
        intensity={0.8}
        position={[1, 1, -1.5]}
      />
      <mesh ref={ref} scale={[1, 1, 1]} onClick={handleClick}>
        <icosahedronBufferGeometry
          attach="geometry"
          args={[3, 2]}
          radius={2000000000}
          detail={2000000}
        />
        <meshLambertMaterial
          attach="material"
          // color="#fff"
          color="#0070f3"
          wireframe
          wireframeLinewidth={2}
          transparent
          opacity={1.5}
        />
      </mesh>
    </>
  );
}
