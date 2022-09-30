import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber"

export default function Light() {
  const pointLight = useRef()

  useFrame((state) => {
    pointLight.current.position.copy(state.camera.position)
  })

  return (
    <>
      <ambientLight args={[0x404040, 3.4]} />
      <pointLight ref={pointLight} args={[0x9a8728, 0.4, 150]} />
      <pointLight args={[0xffffff, 0.1, 150]} position={[0, 8, -1]} />
    </>
  )
}