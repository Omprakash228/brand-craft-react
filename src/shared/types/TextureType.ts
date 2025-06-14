import * as THREE from 'three';

export type Texture = {
  texture: THREE.Texture | null;
  textureScale: number;
  texturePosX: number;
  texturePosY: number;
  textureRoughness: number;
  textureMetalness: number;
  textureTransmission: number;
};

export type TextureActions = {
  setTexture: (texture: THREE.Texture) => void;
  setTextureScale: (scale: number) => void;
  setTexturePosX: (posX: number) => void;
  setTexturePosY: (posY: number) => void;
  setTextureRoughness: (roughness: number) => void;
  setTextureMetalness: (metalness: number) => void;
  setTextureTransmission: (transmission: number) => void;
  removeTexture: () => void;
  resetTexture: () => void;
};
