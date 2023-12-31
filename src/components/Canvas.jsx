import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import GTLFLoadComp from './GTLFLoader';

const CanvasComponent = ({selectedModel,
  loadingError,
  setSelectedModel,
  setLoadingError,}) => {
    return (

        <div className="w-full h-screen fixed">
        <Canvas className="top-0 left-0">
          {/* Render the model */}
          {/* {confirmedModel && <primitive object={confirmedModel} />} */}
          {/* Add sky */}

          {loadingError ? (
          <div className="error-message">{loadingError}</div>
        ) : (
          selectedModel &&
          (typeof selectedModel === "string" ? (
            <GTLFLoadComp
              modelPath={selectedModel}
              onError={(error) => setLoadingError(error.message)}
            />
          ) : (
            selectedModel
          ))
        )}
          <ambientLight intensity={0.8} />
        <directionalLight color="white" intensity={2.5} position={[20, 10, 20]} />
        <hemisphereLight args={[0x606060, 0x404040]} />
        <Sky
          distance={420000}
          inclination={180}
          azimuth={-80}
          rayleigh={50}
          turbidity={200}
          mieCoefficient={0.01}
        />
         <Stars
          radius={2}
          depth={500}
          count={30000}
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