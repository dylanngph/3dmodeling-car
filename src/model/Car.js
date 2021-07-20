import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls , ContactShadows } from "@react-three/drei"
import { Box } from '@material-ui/core'
import Model from '../component/car_scene/Scene'
import styled from '@emotion/styled'

const CarScene = styled(Box)`
    height: 400px;
    width:100%;
`

export const CarModel = (props) => {
    const {sectionID} = props;
    return (
    <CarScene>
        <Canvas camera={{position: [-5, 0.5, 8] , fov: 10 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[0, 5, -4]} intensity={2} color="white" />
        <fog attach="fog" args={['#fff', 0 , 40]} />
        <Suspense fallback={null}>
            <Model sectionID={sectionID}/>
            <ContactShadows rotation-x={Math.PI / 2} position={[0.05, -0.3, 0]} opacity={1} width={50} height={50} blur={0.8} far={2} />
            <Environment preset="city" />
        </Suspense>
        <OrbitControls enableRotate={false}  enableZoom={false} />
        </Canvas>
    </CarScene>
    )
}
