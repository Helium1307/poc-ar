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
        src="../../assets/modelo3d.gltf"
      ></a-assets-item>
      <Marker parameters={{ preset: "hiro" }}>
        <a-entity
          id="modelo3D"
          position="0 0 0"
          scale="0.05 0.05 0.05"
          gltf-model="#modelo"
        ></a-entity>
      </Marker>
    </AFrameRenderer>
  );
}

export default Hiro;
