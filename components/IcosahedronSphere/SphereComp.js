import React, { useRef, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";

export default function SphereComp() {
  const [clicked, click] = useState(false);
  const ref = useRef();
  const [active, set] = useState(false);
  useFrame((state, delta) => {
    // if (autoRotate == true) {
    ref.current.rotation.y += 0.0008; //speed of auto rotation Y
    ref.current.rotation.x -= 0.001; //speed of auto rotation X
    // } else {
    //   //rotate Y
    //   var yDistance = ref.current.rotation.y - wireframeY;
    //   yFullDistance = Math.sqrt(yDistance * yDistance);
    //   if (yFullDistance > 0) {
    //     ref.current.rotation.y -= yDistance * easing;
    //   }
    //   //rotate X
    //   var xDistance = ref.current.rotation.x - wireframeX;
    //   xFullDistance = Math.sqrt(xDistance * xDistance);
    //   if (xFullDistance > 0) {
    //     ref.current.rotation.x -= xDistance * easing;
    //   }
    // }
    // ref.current.rotation.y += 0.0008;
    // ref.current.rotation.x -= 0.001;
  });
  const handleClick = useCallback((e) => set((state) => !state), []);
  return (
    <>
      <directionalLight
        color="#0x4c00ff"
        intensity={0.75}
        position={[1.5, 2, 2]}
      />
      <directionalLight
        color="#0x5cc5f2"
        intensity={0.8}
        position={[-1.5, -2, 2]}
      />
      <directionalLight
        color="#0xbf79fc"
        intensity={0.4}
        position={[-2, 2, -2.5]}
      />
      <directionalLight
        color="#0xf6c7ff"
        intensity={0.8}
        position={[1, 1, -1.5]}
      />
      <mesh ref={ref} scale={[1, 1, 1]} onClick={handleClick}>
        <sphereBufferGeometry
          attach="geometry"
          args={[1, 7, 1]}
          radius={180}
          widthSegments={70}
          heightSegments={1000}
        />
        <meshLambertMaterial
          attach="material"
          color="#0xeeeeee"
          //   color="#0070f3"
          transparent
          opacity={0.155}
        />
      </mesh>
    </>
  );
}
