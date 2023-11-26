/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 lamp.glb 
Author: Black Snow (https://sketchfab.com/BlackSnow02)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/round-lamp-b824fc4371b345298e48a5c98bbcdacb
Title: Round Lamp
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Lamp(props) {
  const { nodes, materials } = useGLTF('./models/lamp.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.light_Material_0.geometry} material={materials.Material} />
          <mesh geometry={nodes.light_2002_0.geometry} material={materials['2.002']} />
          <mesh geometry={nodes.light_light_0.geometry} material={materials.light} />
          <mesh geometry={nodes.light_1_0.geometry} material={materials.material} />
          <mesh geometry={nodes.light_2001_0.geometry} material={materials['2.001']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/lamp.glb')
export default Lamp;