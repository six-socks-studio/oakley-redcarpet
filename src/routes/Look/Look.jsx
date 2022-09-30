import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import { MathUtils } from 'three'

import Bg from "./Bg"
import Model from "./Model"
import Man from "./Man"
import Light from "./Light"

import "./Look.css"

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = MathUtils.lerp(state.camera.position.x, state.mouse.x / 4, 0.075)
    state.camera.position.y = MathUtils.lerp(state.camera.position.y, state.mouse.y / 4, 0.075)

    state.camera.lookAt(0, 0, 0)
  })
}

export default function Look() {
  return (
    <div className="Look__canvas">
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 4] }}
        gl={{
          powerPreference: "high-performance",
        }}
      >
        <Bg />
        <Light />
        <OrbitControls />
        <Suspense fallback={null}>
          <Man rotation={[0, -1.5, 0]} position={[0, -1, 2]} scale={1} />
        </Suspense>
        {/* <Rig /> */}
      </Canvas>
    </div>
  )
}