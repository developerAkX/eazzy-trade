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
      <mesh ref={ref} scale={[1, 1, 1]} onClick={handleClick}>
        <icosahedronBufferGeometry
          attach="geometry"
          args={[3, 2]}
          radius={200}
          detail={200}
        />
        <meshLambertMaterial
          attach="material"
          color="#0xffffff"
          //   color="#0070f3"
          wireframe
          wireframeLinewidth={1}
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}
