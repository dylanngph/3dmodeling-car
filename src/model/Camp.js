import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , ContactShadows , Environment } from "@react-three/drei"
import { Box  } from '@material-ui/core'
import Model from '../component/camp_scene/Scene'
import styled from '@emotion/styled'

const CampScene = styled(Box)`
    height: 250px;
    width:250px;
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

export const CampModel = (props) => {
    const {sectionID} = props;
    return (
    <CampScene> 
        <Canvas camera={{position: [3, 3, 8] , fov: 22 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[0, 5, -4]} intensity={3} color="white" />
       <Suspense fallback={null}>
           <Model sectionID = {sectionID} />
           <ContactShadows rotation-x={Math.PI / 2} position={[0.05, 0, 0]} opacity={1} width={20} height={20} blur={0.8} far={2} />
           <Environment preset="city" />
       </Suspense>
       <OrbitControls  enableRotate={false}  enableZoom={false} />
       </Canvas>
    </CampScene>
    )
}
