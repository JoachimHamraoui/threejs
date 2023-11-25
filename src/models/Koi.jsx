/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 koi.glb 
Author: 7PLUS (https://sketchfab.com/7plus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/koi-fish-236859b809984f52b70c94fd040b9c59
Title: Koi Fish
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Koi(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/koi.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="koifish_0" position={[-0.268, 0, 0]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="mesh_0" geometry={nodes.mesh_0.geometry} material={materials.SimplygonCastMaterial} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/koi.glb');
export default Koi;
