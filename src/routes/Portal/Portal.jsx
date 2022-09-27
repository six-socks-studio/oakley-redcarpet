import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, shaderMaterial, useGLTF, useTexture } from '@react-three/drei'

import './Portal.css'

export default ({ scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4) }) => (
  <div className="Portal">
    <Suspense>
      <Canvas camera={{ fov: 45, position: [-4, 2, -4] }}>
        <Sparkles count={scale.length} size={scale} position={[0, 0.9, 0]} scale={[4, 1.5, 4]} speed={0.3} />
        <Model />
        <OrbitControls />
      </Canvas>
    </Suspense>
    <Front />
  </div>
)

function Model(props) {
  // const portalMaterial = useRef()
  const bakedTexture = useTexture('/portal/baked-02.jpeg')
  const { nodes } = useGLTF('/portal/portal-2.glb')
  // useFrame((state, delta) => (portalMaterial.current.uTime += delta))
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.portalCircle.geometry} position={[0, 0.78, 1.6]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* <portalMaterial ref={portalMaterial} blending={AdditiveBlending} uColorStart="pink" uColorEnd="white" /> */}
      </mesh>
      <mesh geometry={nodes.lampLightL.geometry} material-color="#f0bf94" position={[0.89, 1.07, -0.14]} scale={[0.07, 0.11, 0.07]} />
      <mesh geometry={nodes.lampLightR.geometry} material-color="#f0bf94" position={[-0.98, 1.07, -0.14]} scale={[-0.07, 0.11, 0.07]} />
      <mesh geometry={nodes.baked.geometry} position={[0.9, 0.34, -1.47]} rotation={[0, 0.14, 0]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  )
}