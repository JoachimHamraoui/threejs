import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
  const [model, setModel] = useState(null);

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

  return (
    <div>
      <input type="file" accept=".glb, .gltf" onChange={handleFileChange} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {model && <primitive object={model} />}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
