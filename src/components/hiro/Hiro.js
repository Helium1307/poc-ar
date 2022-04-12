import React from "react";
import { AFrameRenderer, Marker } from "react-web-ar";
import Modelo from "../../assets/modelo.gltf";
import CouchObj from "../../assets/couch.obj";
import CouchMtl from "../../assets/couch.mtl";

//"url(https://raw.githack.com/Helium1307/poc-ar/master/src/assets/modelo.gltf)"
// https://cdn.glitch.com/d035a109-3c17-4c09-a808-395f69b2e93b%2Fmodelo3d.gltf?v=1587326228301
/*obj-model="obj: url(https://rishavjayswal.github.io/augmented-reality/resources/couch.obj); 
mtl: url(https://rishavjayswal.github.io/augmented-reality/resources/couch.mtl)" */
function Hiro() {
  return (
    <AFrameRenderer
      inherent={true}
      arToolKit={{
        sourceType: "webcam",
      }}
    >
      {/* <a-assets>
        <a-asset-item
          id="modelo"
          
        ></a-asset-item>
      </a-assets> */}
      <Marker parameters={{ preset: "hiro" }}>
        <a-entity
          id="modelo3D"
          position="0 0 0"
          rotation="-90 0 0"
          scale="0.05 0.05 0.05"
          gltf-model={Modelo}
        ></a-entity>
        {/* <a-entity geometry="primitive: box" material="color: red"></a-entity>
        <a-entity
          geometry="primitive: circle"
          material="color: blue"
        ></a-entity> */}
      </Marker>
    </AFrameRenderer>
  );
}

export default Hiro;
