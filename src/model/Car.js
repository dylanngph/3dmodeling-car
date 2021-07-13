import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls , ContactShadows } from "@react-three/drei"
import { Box } from '@material-ui/core'
import Model from '../component/Scene'
import styled from '@emotion/styled'

const CarScene = styled(Box)`
    height: 400px;
    width:100%;
`

export const CarModel = () => {
    return (
    <CarScene>
        <Canvas camera={{position: [-5, 4, 4] , fov: 17 }}>
        <fog attach="fog" args={['#fff', 0 , 40]} />
            <Suspense fallback={null}>
            <Model/>
            <ContactShadows rotation-x={Math.PI / 2} position={[0.05, -0.3, 0]} opacity={1} width={20} height={20} blur={0.9} far={0.3} />
            <OrbitControls  enableZoom={false} />
            <Environment preset="city" />
            </Suspense>
        </Canvas>
    </CarScene>
    )
}
