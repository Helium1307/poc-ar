import React from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

function Hiro() {
  return (
    <AFrameRenderer
      inherent={true}
      arToolKit={{
        sourceType: "webcam",
      }}
    >
      <a-assets-item
        id="modelo"
        src="../../assets/modelo3dOBJ.obj"
      ></a-assets-item>
      <Marker parameters={{ preset: "hiro" }}>
        <a-entity
          id="modelo3D"
          position="0 0 0"
          scale="0.7 0.7 0.7"
          gltf-model="#modelo"
        ></a-entity>
        <a-entity geometry="primitive: box" material="color: red"></a-entity>
        <a-entity
          geometry="primitive: circle"
          material="color: blue"
        ></a-entity>
      </Marker>
    </AFrameRenderer>
  );
}

export default Hiro;
