/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { animate, spring } from "motion"
import { mix } from '@motionone/utils'


export default function Model(props) {
  const modelRef = useRef()
  const { nodes, materials } = useGLTF("/santini/model.gltf")
  const [bake, normal, matcap] = useTexture(["/santini/textures/bake.jpg", "/santini/textures/normal.jpg", "/santini/textures/matcap.png", ])
  
  useEffect(() => {
    const initialPosition = modelRef.current.position.z
    const initialRotation = modelRef.current.rotation.z
    animate((progress) => {
      const position = mix(initialPosition, 0, progress)
      const rotation = mix(initialRotation, 0, progress)
      modelRef.current.position.z = position
      modelRef.current.rotation.z = rotation
    }, {
      // easing: spring({ stiffness: 300, damping: 15, restSpeed: 0.01, restDistance: 0.01 }),
      duration: 2,
      easing: [0.87, 0, 0.13, 1]
    })
  }, [modelRef])

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        <group position={[0, 0, 115]}>
          {/* <mesh geometry={nodes.zip.geometry} material={materials.lowMan} position={[0.05, 3.62, -140.67]} /> */}
          <group rotation={[0, 0, -4]} position={[0, 0, 100]} ref={modelRef}>
            <mesh name="lowMan" geometry={nodes.lowMan.geometry} morphTargetDictionary={nodes.lowMan.morphTargetDictionary} morphTargetInfluences={nodes.lowMan.morphTargetInfluences} position={[0, 0, -100]}>
              <meshStandardMaterial
                attach="material"
                map={bake}
                normalMap={normal}
                map-flipY={false}
                normalMap-flipY={false}
              />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
