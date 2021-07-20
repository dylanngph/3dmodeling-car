import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , ContactShadows  } from "@react-three/drei"
import { Box } from '@material-ui/core'
import Model from '../component/camp_scene/Scene'
import styled from '@emotion/styled'

const CampScene = styled(Box)`
    height: 300px;
    width:300px;
`

export const CampModel = () => {

    return (
    <CampScene>
        <Canvas camera={{position: [50, 50, 100] , fov: 100 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[0, 5, -4]} intensity={3} color="white" />
            <Suspense fallback={null}>
                <Model/>
                <ContactShadows position={[1, 1, 1]} opacity={1} width={1} height={1} blur={1} far={1} />
                <OrbitControls   />
            </Suspense>
        </Canvas>
    </CampScene>
    )
}
