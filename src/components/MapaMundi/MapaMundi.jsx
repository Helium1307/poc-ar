import React from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

function MapaMundi() {
  return (
    <AFrameRenderer
      arToolKit={{
        sourceType: "image",
        sourceUrl: "./hiro.png",
      }}
    >
      <Marker parameters={{ preset: "hiro" }}></Marker>
    </AFrameRenderer>
  );
}

export default MapaMundi;
