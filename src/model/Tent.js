import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , ContactShadows, useProgress , Html } from "@react-three/drei"
import { Box } from '@material-ui/core'
import Model from '../component/tent_scene/Scene'
import styled from '@emotion/styled'

const TentScene = styled(Box)`
    height: 500px;
    width:100%;
`
function Loader() {
    const { progress } = useProgress()
    return <Html center> {progress}% loaded</Html>
  }
export const TentModel = () => {

    return (
    <TentScene>
        <Canvas camera={{position: [3, 0.4, 0] , fov: 48 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[0, 5, -4]} intensity={3} color="white" />
        <fog attach="fog" args={['#fff', 0 , 40]} />
            <Suspense fallback={<Loader/>}>
            <Model/>
            <ContactShadows rotation-x={Math.PI / 2} position={[-0.1, -0.5, 0]} opacity={1} width={20} height={20} blur={1} far={2} />
            <OrbitControls enableRotate={false} enableZoom={false} />
            </Suspense>
        </Canvas>
    </TentScene>
    )
}
