import React, { useRef, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Icosahedron from "./IcosahedronComp";
import SphereComp from "./SphereComp";

export default function CanvasScreen(props) {
  return (
    <Canvas {...props}>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={15} penumbra={4} />
      <pointLight position={[-10, -10, -10]} />
      <Icosahedron />
    </Canvas>
  );
}
