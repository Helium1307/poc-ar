import React from "react";
import { AFrameRenderer, Marker } from "react-web-ar";
import mapaMundiImage from "./mapa_mundi.jpg";

function MapaMundi() {
  return (
    <AFrameRenderer
      arToolKit={{
        sourceType: "webcam",
        sourceUrl: "./pattern-mapa_mundi.png",
      }}
    >
      <Marker parameters={{ preset: "hiro" }}>
        <a-assets-item img id="mundiMap" src={mapaMundiImage} />

        <a-sphere src="#mundiMap" radius="1" segments-height="53">
          <a-animation
            attribute="rotation"
            dur="1000"
            from="1 -90 90"
            to="360 -90 90"
            easing="linear"
            repeat="indefinite"
          />
        </a-sphere>
      </Marker>
    </AFrameRenderer>
  );
}

export default MapaMundi;
