import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars } from "@react-three/drei";

const CanvasComponent = () => {
    return (

        <div className="w-full h-screen fixed">
        <Canvas className="top-0 left-0">
          {/* Render the model */}
          {/* {confirmedModel && <primitive object={confirmedModel} />} */}
          {/* Add sky */}
          <ambientLight intensity={0.8} />
        <directionalLight color="green" intensity={2} position={[20, 10, 20]} />
        <hemisphereLight args={[0x606060, 0x404040]} />
        <Sky
          distance={220000}
          inclination={180}
          azimuth={-80}
          rayleigh={50}
          turbidity={200}
          mieCoefficient={0.01}
        />
         <Stars
          radius={20}
          depth={50}
          count={400}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
          {/* Add controls */}
          <OrbitControls />
        </Canvas>
      </div>

    );
}

export default CanvasComponent;