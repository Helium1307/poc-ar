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
        <a-entity geometry="primitive: box" material="color: red"></a-entity>
      </Marker>
    </AFrameRenderer>
  );
}

export default Hiro;
