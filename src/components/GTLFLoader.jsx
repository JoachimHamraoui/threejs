import { useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GTLFLoadComp = (props) => {
    const loader = useLoader(GLTFLoader, props.modelPath);
    const group = useRef();

    return <primitive object={loader.scene} ref={group} {...props} />
}

export default GTLFLoadComp;