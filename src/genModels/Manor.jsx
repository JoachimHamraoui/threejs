/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 manor.glb 
Author: JackWolf248 (https://sketchfab.com/JackWolf248)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/manor-morning-isometric-room-d9d06e1de00c4224b7c5b29e020302c4
Title: Manor Morning - Isometric Room
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Manor(props) {
  const { nodes, materials } = useGLTF('./models//manor.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[55.838, 2.623, -30.704]} scale={[0.578, 0.578, 4.798]}>
        <mesh geometry={nodes.Candel_Chair_0.geometry} material={materials.Chair} />
        <mesh geometry={nodes.Candel_Book_And_CandleHolder_0.geometry} material={materials.Book_And_CandleHolder} />
      </group>
      <group position={[23.552, 59.097, -42.487]} rotation={[-Math.PI / 2, 0, 0.525]} scale={0.783}>
        <mesh geometry={nodes.MAN_Room_0.geometry} material={materials.Room} />
        <mesh geometry={nodes.MAN_MAN_0.geometry} material={materials.material} />
      </group>
      <mesh geometry={nodes.Isometric_Room_Room_0.geometry} material={materials.Room} position={[0, 100.724, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Window_Lambriu_0.geometry} material={materials.Lambriu} position={[-2.644, 139.569, -97.795]} rotation={[-Math.PI / 2, 0, 0]} scale={[23.663, 2.723, 56.345]} />
      <mesh geometry={nodes.Table_Table_0.geometry} material={materials.Table} position={[20.687, 32.614, -24.172]} rotation={[-Math.PI / 2, 0, 0]} scale={[45.374, 20.413, 1.419]} />
      <mesh geometry={nodes.Bookshelf_BoockShelf_0.geometry} material={materials.BoockShelf} position={[-90.312, 32.036, -20.366]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.531, 50.626, 1.874]} />
      <mesh geometry={nodes.Chair_Chair_0.geometry} material={materials.Chair} position={[25.945, 7.683, -55.236]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[0.823, 4.546, 0.86]} />
      <mesh geometry={nodes.Book001_Book_And_CandleHolder_0.geometry} material={materials.Book_And_CandleHolder} position={[-12.442, 35.08, -25.856]} rotation={[0, -0.428, Math.PI / 2]} scale={[1.018, 2.214, 7.638]} />
      <mesh geometry={nodes.OpenBook_ReadedBook_0.geometry} material={materials.ReadedBook} position={[19.644, 37.652, -28.983]} scale={[2.214, 2.214, 7.638]} />
      <mesh geometry={nodes.CandleHolder_Book_And_CandleHolder_0.geometry} material={materials.Book_And_CandleHolder} position={[53.898, 34.954, -26.663]} rotation={[-Math.PI / 2, 0, -2.604]} scale={2.836} />
      <mesh geometry={nodes.Chest_Chest_0.geometry} material={materials.Chest} position={[55.543, 26.795, -89.468]} rotation={[-Math.PI / 2, 0, 0]} scale={0.972} />
      <mesh geometry={nodes.Crate_BoockShelf_0.geometry} material={materials.BoockShelf} position={[51.281, 3.999, -25.796]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.97, 11.772, 3.521]} />
      <mesh geometry={nodes.Pendulum_clock_Clock_0.geometry} material={materials.Clock} position={[-87.636, 19.76, 77.937]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[15.503, 11.994, 15.503]} />
      <mesh geometry={nodes.Glass_Glass_0.geometry} material={materials.Glass} position={[-87.636, 19.76, 77.937]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[15.503, 11.994, 15.503]} />
      <mesh geometry={nodes.Window001_Lambriu_0.geometry} material={materials.Lambriu} position={[-2.644, 139.569, -68.983]} rotation={[-Math.PI / 2, 0, 0]} scale={[23.663, 2.723, 56.345]} />
      <mesh geometry={nodes.Cube_Clok2_0.geometry} material={materials.Clok2} position={[-79.917, 83.475, 77.936]} rotation={[0.806, 0, 0]} scale={[4.464, 2.19, 4.464]} />
      <mesh geometry={nodes.SkyWindow_Lambriu_0.geometry} material={materials.Lambriu} position={[-2.644, 139.569, -97.795]} rotation={[-Math.PI / 2, 0, 0]} scale={[23.663, 2.723, 56.345]} />
      <mesh geometry={nodes.Table001_Table_0.geometry} material={materials.Table} position={[20.04, 0.724, -29.394]} rotation={[-Math.PI / 2, 0, 0]} scale={[45.374, 20.413, 1.419]} />
      <mesh geometry={nodes.Grill_Room_0.geometry} material={materials.Room} position={[-60.154, 73.69, -100.062]} rotation={[0, 0, -Math.PI / 2]} scale={[12.687, 7.22, 15.865]} />
      <mesh geometry={nodes.BOOKS2_Book_And_CandleHolder_0.geometry} material={materials.Book_And_CandleHolder} position={[-84.459, 12.49, -66.414]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.929, 2.214, 7.638]} />
      <mesh geometry={nodes.BOOKS1_Book_And_CandleHolder_0.geometry} material={materials.Book_And_CandleHolder} position={[-84.459, 12.49, -66.414]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.929, 2.214, 7.638]} />
      <mesh geometry={nodes.BOOKS3_Book_And_CandleHolder_0.geometry} material={materials.Book_And_CandleHolder} position={[-84.459, 12.49, -66.414]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.929, 2.214, 7.638]} />
    </group>
  )
}

useGLTF.preload('./models/manor.glb')
export default Manor;
