import React from "react";
import * as THREE from "three";
import { ForceGraph3D } from "react-force-graph";

const imgs = ["/github.svg", "/supa.png", "/react.svg"];

// Random connected graph
const gData = {
  nodes: imgs.map((img, id) => ({ id, img })),
  links: [...Array(imgs.length).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1)),
    })),
};

const MyGraphComponent = () => {
  return (
    <div style={{ height: "500px" }}>
      <ForceGraph3D
        graphData={gData}
        nodeThreeObject={({ img }) => {
          const imgTexture = new THREE.TextureLoader().load(img);
          imgTexture.encoding = THREE.sRGBEncoding; // Set the texture encoding
          const material = new THREE.SpriteMaterial({ map: imgTexture });
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(12, 12, 1);
          return sprite;
        }}
      />
    </div>
  );
};

export default MyGraphComponent;
