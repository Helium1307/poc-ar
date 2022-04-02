import React from "react";
import { AFrameRenderer, Marker } from "react-web-ar";
import mapaMundiImage from "./mapa_mundi.jpg";

function MapaMundi() {
  return (
    <AFrameRenderer
      arToolKit={{
        sourceType: "image",
        sourceUrl: "./hiro.png",
      }}
    >
      <Marker parameters={{ preset: "hiro" }}>
        <a-box
          color="pink"
          material="opacity: 1;"
          position="0 0.003 0"
          scale="0.4 0.4 0.4"
        >
          <a-animation
            attribute="rotation"
            to="360 0 0"
            dur="5000"
            easing="linear"
            repeat="indefinite"
          />
        </a-box>
      </Marker>
    </AFrameRenderer>
  );
}

export default MapaMundi;
