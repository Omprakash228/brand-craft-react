import { create } from "zustand";
import * as THREE from "three";
import type {
  Transform,
  TransformActions,
} from "../../shared/types/TransformType";
import type {
  Material,
  MaterialActions,
} from "../../shared/types/MaterialType";
import type { Texture, TextureActions } from "../../shared/types/TextureType";

// Transform state
const createTransformState = () => ({
  scale: 1.5,
  rotationX: 0,
  rotationY: 0.25,
  rotationZ: 0,
});

export const useCupTransform = create<Transform & TransformActions>((set) => ({
  ...createTransformState(),
  setScale: (scale: number) => set(() => ({ scale: scale })),
  setRotationX: (rotationX: number) => set(() => ({ rotationX: rotationX })),
  setRotationY: (rotationY: number) => set(() => ({ rotationY: rotationY })),
  setRotationZ: (rotationZ: number) => set(() => ({ rotationZ: rotationZ })),
  resetTransform: () => set(createTransformState()),
}));

// Material state
const createMaterialState = () => ({
  color: "#eaeaea",
  roughness: 0.1,
  metallic: 0.1,
  transmission: 0,
});
export const useCupMaterial = create<Material & MaterialActions>((set) => ({
  ...createMaterialState(),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) => set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) =>
    set(() => ({ transmission: transmission })),
  resetMaterial: () => set(createMaterialState()),
}));

// Texture state
const createTextureState = () => ({
  textureScale: 1,
  texturePosX: 0,
  texturePosY: 0,
  textureRoughness: 0,
  textureMetalness: 0,
  textureTransmission: 0,
});

export const useCupTexture = create<Texture & TextureActions>((set) => ({
  ...createTextureState(),
  texture: null,
  setTexture: (texture: THREE.Texture) => set(() => ({ texture: texture })),
  setTextureScale: (scale: number) => set(() => ({ textureScale: scale })),
  setTexturePosX: (posX: number) => set(() => ({ texturePosX: posX })),
  setTexturePosY: (posY: number) => set(() => ({ texturePosY: posY })),
  setTextureRoughness: (roughness: number) =>
    set(() => ({ textureRoughness: roughness })),
  setTextureMetalness: (metalness: number) =>
    set(() => ({ textureMetalness: metalness })),
  setTextureTransmission: (transmission: number) =>
    set(() => ({ textureTransmission: transmission })),
  resetTexture: () => set(createTextureState()),
  removeTexture: () => set(() => ({ texture: null, ...createTextureState() })),
}));
