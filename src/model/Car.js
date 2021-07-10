import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls , ContactShadows } from "@react-three/drei"
import {Box} from '@material-ui/core'
import styled from '@emotion/styled'

const CarScene = styled(Box)`
    height: 400px;
    width:100%;
`

function Model() {
    const gltf = useLoader(GLTFLoader, './scene.gltf')
    return (
      <>
        <primitive object={gltf.scene} scale={1.5}/>
      </>
    )
  }
export const CarModel = () => {
    return (
    <CarScene>
        <Canvas camera={{position: [-5, 2, 5] , fov: 18 }}>
            <Suspense fallback={null}>
            <Model/>
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={1} width={20} height={20} blur={2} far={4.5} />
            <OrbitControls  enableZoom={false} />
            <Environment preset="city" />
            </Suspense>
        </Canvas>
    </CarScene>
    )
}
