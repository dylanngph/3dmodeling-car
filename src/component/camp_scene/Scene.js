/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: aurelkillers1 (https://sketchfab.com/aurelkillers1)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/folding-table-878d6eca6ff14f84bccca081cc5f95a7
title: Folding Table
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame , useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model(props) {
  const {sectionID} = props;
  const group = useRef()

  const camera = useThree((state) => state.camera);

  useFrame(()=>{
    sectionID === 4 ? camera.position.lerp(new THREE.Vector3(3, 5, 8),0.025):camera.position.lerp(new THREE.Vector3(3, 3, 8),0.025);
  });

  const { nodes, materials } = useGLTF('../../camp/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Table} />
      </group>
    </group>
  )
}

useGLTF.preload('../../camp/scene.gltf')
