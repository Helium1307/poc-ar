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
        src="https://cdn.glitch.com/d035a109-3c17-4c09-a808-395f69b2e93b%2Fmodelo3d.gltf?v=1587326228301"
      ></a-assets-item>
      <Marker parameters={{ preset: "hiro" }}>
        <a-entity
          id="modelo3D"
          position="0 0 0"
          scale="0.05 0.05 0.05"
          gltf-model="#modelo"
        ></a-entity>
        <a-entity geometry="primitive: box" material="color: red"></a-entity>
      </Marker>
    </AFrameRenderer>
  );
}

export default Hiro;
