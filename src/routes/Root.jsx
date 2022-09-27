import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
import { Link } from 'react-router-dom'

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

function Root() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* <div className="App__canvas">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div> */}

      <h1> OAKLEY RED CARPET </h1>
      <div className="App__content">
        <Link to="/control"> Control </Link>
        <Link to="/front"> Front </Link>
        <Link to="/side/right"> Side / Right</Link>
        <Link to="/side/left"> Side / Left </Link>
        <br />
        WebGL performance stress
        <Link to="/portal"> Portal </Link>
        <Link to="/stacy"> Stacy </Link>
        <Link to="/postfx"> PostFx </Link>
        <Link to="/postfx-front"> PostFx with Front </Link>
        <br />
        Downscales
        <Link to="/front/2k"> Front 2K </Link>
        <Link to="/side/right/2k"> Side / Right 2K</Link>
        <Link to="/side/left/2k"> Side / Left 2K</Link>
        <Link to="/postfx-front/2k"> PostFx with Front 2K </Link>
      </div>
    </div>
  )
}

export default Root
