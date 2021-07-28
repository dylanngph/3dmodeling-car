import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , ContactShadows } from "@react-three/drei"
import { Box } from '@material-ui/core'
import Model from '../component/tent_scene/Scene'
import styled from '@emotion/styled'

const TentScene = styled(Box)`
    height: 500px;
    width:100%;
`
// const useStyles = makeStyles((theme) => ({
//   colorWhite: {
//     color: "#fff",
//   }
// }));

// function CircularProgressWithLabel(props) {
//   const classes = useStyles();

//     return (
//       <Box position="relative" display="inline-flex">
//         <CircularProgress className={classes.colorWhite} variant="determinate" {...props} />
//         <Box
//           top={0}
//           left={0}
//           bottom={0}
//           right={0}
//           position="absolute"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Typography variant="caption" component="div" className={classes.colorWhite}>{`${Math.round(
//             props.value,
//           )}%`}</Typography>
//         </Box>
//       </Box>
//     );
//   }
// function Loader() {
//     const { progress } = useProgress()
//     return <Html center> <CircularProgressWithLabel value={progress}/> </Html>
//   }

export const TentModel = (props) => {
    const {sectionID} = props;
    return (
    <TentScene>
        <Canvas camera={{position: [3, 0.4, 0] , fov: 48 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[0, 5, -4]} intensity={3} color="white" />
        <fog attach="fog" args={['#fff', 0 , 40]} />
            <Suspense fallback={null}>
            <Model sectionID={sectionID}/>
            <ContactShadows rotation-x={Math.PI / 2} position={[-0.1, -0.5, 0]} opacity={1} width={20} height={20} blur={1} far={2} />
            <OrbitControls enableRotate={false} enableZoom={false} />
            </Suspense>
        </Canvas>
    </TentScene>
    )
}
