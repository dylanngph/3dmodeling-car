import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls , ContactShadows } from "@react-three/drei"
import { Box  } from '@material-ui/core'
import Model from '../component/car_scene/Scene'
import styled from '@emotion/styled'

const CarScene = styled(Box)`
    height: 400px;
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
//         <CircularProgress className={classes.colorWhite} variant="determinate" {...props}  />
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

export const CarModel = (props) => {
    const {sectionID} = props;

    return (
    <CarScene>
        <Canvas camera={{position: [-5, 0.5, 8] , fov: 10 }}>
       
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
