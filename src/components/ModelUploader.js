import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Sky } from "@react-three/drei";

const ModelViewer = () => {
    const [model, setModel] = useState(null);
    const [confirmedModel, setConfirmedModel] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          const data = reader.result;
          const loader = new GLTFLoader();
          loader.load(data, (gltf) => {
            setModel(gltf.scene);
          });
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleConfirm = () => {
      // Set the confirmed model
      setConfirmedModel(model);
    };

  return (
<div className="w-screen h-screen bg-gray-900">
      <input type="file" accept=".glb, .gltf" onChange={handleFileChange} />
      <button onClick={handleConfirm}>Load Model</button>
      <div className="w-full h-full relative">
        <Canvas className="absolute top-0 left-0" style={{ width: '100%', height: '100%' }}>
          {/* Render the model */}
          {confirmedModel && <primitive object={confirmedModel} />}
          {/* Add sky */}
          <ambientLight intensity={0.8} />
        <directionalLight color="white" intensity={0.5} position={[0, 10, 0]} />
          <Sky sunPosition={[0, 1, 0]} turbidity={10} rayleigh={3} />
          {/* Add controls */}
          <OrbitControls />
        </Canvas>
      </div>
    </div>  );
};

export default ModelViewer;
