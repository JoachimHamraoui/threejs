/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 kingdomkey.glb 
Author: Maxine (https://sketchfab.com/girlulquiorra)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/kingdom-key-fe954b9181f04482b14575a0ed046cfe
Title: Kingdom Key
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/kingdomkey.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.036, 0.036]} rotation={[-Math.PI, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.kingdom_key_silver_0.geometry} material={materials.silver} />
          <mesh geometry={nodes.kingdom_key_yellow_0.geometry} material={materials.yellow} />
          <mesh geometry={nodes.kingdom_key_blue_0.geometry} material={materials.blue} />
          <mesh geometry={nodes.kingdom_key_black_0.geometry} material={materials.black} />
          <mesh geometry={nodes.kingdom_key_lambert1_0.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.kingdom_key_blinn3_0.geometry} material={materials.blinn3} />
          <mesh geometry={nodes.kingdom_key_blinn5_0.geometry} material={materials.blinn5} />
          <mesh geometry={nodes.kingdom_key_blinn6_0.geometry} material={materials.blinn6} />
          <mesh geometry={nodes.kingdom_key_blinn8_0.geometry} material={materials.blinn8} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/kingdomkey.glb')
