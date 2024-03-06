import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#8A2BE2",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
