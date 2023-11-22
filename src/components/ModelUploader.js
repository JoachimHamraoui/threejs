import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CubeTextureLoader } from 'three';
import { OrbitControls, Sky, Stars } from "@react-three/drei";

const ModelViewer = () => {
    const [model, setModel] = useState(null);
    const [confirmedModel, setConfirmedModel] = useState(null);
    const [nightSkyTexture, setNightSkyTexture] = useState(null);
  
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

    const cubeTextureLoader = new CubeTextureLoader();
  cubeTextureLoader.load([
    'nightsky.jpg',
    'nightsky.jpg',
    'nightsky.jpg',
    'nightsky.jpg',
    'nightsky.jpg',
    'nightsky.jpg',
  ], (texture) => {
    setNightSkyTexture(texture);
  });

  return (
<div className="w-screen h-screen bg-gray-900">
      <input className='' type="file" accept=".glb, .gltf" onChange={handleFileChange} />
      <button onClick={handleConfirm}>Load Model</button>
      <div className="w-full h-full relative">
        <Canvas className="absolute top-0 left-0" style={{ width: '100%', height: '100%' }}>
          {/* Render the model */}
          {confirmedModel && <primitive object={confirmedModel} />}
          {/* Add sky */}
          <ambientLight intensity={0.8} />
        <directionalLight color="green" intensity={2} position={[20, 10, 20]} />
        <hemisphereLight args={[0x606060, 0x404040]} />
        {nightSkyTexture && <Sky
          distance={450000}
          inclination={180}
          azimuth={-80}
          rayleigh={20}
          turbidity={200}
          mieCoefficient={0.01}
        />}
         <Stars
          radius={50}
          depth={50}
          count={200}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
          {/* Add controls */}
          <OrbitControls />
        </Canvas>
      </div>
    </div>  );
};

export default ModelViewer;
