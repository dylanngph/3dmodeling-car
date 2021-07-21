import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , ContactShadows , Environment } from "@react-three/drei"
import { Box } from '@material-ui/core'
import Model from '../component/camp_scene/Scene'
import styled from '@emotion/styled'

const CampScene = styled(Box)`
    height: 250px;
    width:250px;
`

export const CampModel = () => {
    return (
    <CampScene> 
        <Canvas camera={{position: [3, 3, 8] , fov: 22 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[0, 5, -4]} intensity={3} color="white" />
       <Suspense fallback={null}>
           <Model/>
           <ContactShadows rotation-x={Math.PI / 2} position={[0.05, 0, 0]} opacity={1} width={20} height={20} blur={0.8} far={2} />
           <Environment preset="city" />
       </Suspense>
       <OrbitControls   enableZoom={false} />
       </Canvas>
    </CampScene>
    )
}
