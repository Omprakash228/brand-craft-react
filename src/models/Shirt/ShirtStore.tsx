import { create } from "zustand";
import type { Transform, TransformActions } from "../../shared/types/TransformType";
import type { Material, MaterialActions } from "../../shared/types/MaterialType";
import type { Texture, TextureActions } from "../../shared/types/TextureType";
import * as THREE from 'three';

// Transform state
const createTransformState = () => ({
  scale: 1.5,
  rotationX: 0,
  rotationY: 0.1,
  rotationZ: 0,
  globalMaterial: false,
});

export const useShirtTransform = create<Transform & TransformActions>((set) => ({
  ...createTransformState(),
  setScale: (scale: number) => set(() => ({ scale: scale })),
  setRotationX: (rotationX: number) => set(() => ({ rotationX: rotationX })),
  setRotationY: (rotationY: number) => set(() => ({ rotationY: rotationY })),
  setRotationZ: (rotationZ: number) => set(() => ({ rotationZ: rotationZ })),
  setGlobalMaterial: (globalMaterial: boolean) => set(() => ({ globalMaterial: globalMaterial })),
  resetTransform: () => set(createTransformState()),
}));

// Collar state
const createCollarMaterial = () => ({
  color: "#eaeaea",
  roughness: 1,
  metallic: 0,
  transmission: 0,
});

export const useCollarMaterial = create<Material & MaterialActions>((set) => ({
  ...createCollarMaterial(),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) =>
    set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) =>
    set(() => ({ transmission: transmission })),
  resetMaterial: () => set(createCollarMaterial())
}))

// Front state
const createFrontMaterial = () => ({
  color: "#eaeaea",
  roughness: 1,
  metallic: 0,
  transmission: 0,
});

export const useFrontMaterial = create<Material & MaterialActions>((set) => ({
  ...createFrontMaterial(),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) =>
    set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) =>
    set(() => ({ transmission: transmission })),
  resetMaterial: () => set(createFrontMaterial())
}))

// Front Texture state
const createFrontTextureState = () => ({
  textureScale: 1,
  texturePosX: 0,
  texturePosY: 0,
  textureRoughness: 1,
  textureMetalness: 0,
  textureTransmission: 0,
});

export const useFrontTexture = create<Texture & TextureActions>((set) => ({
  ...createFrontTextureState(),
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
  resetTexture: () => set(createFrontTextureState()),
  removeTexture: () => set(() => ({ texture: null, ...createFrontTextureState() })),
}));

// Back state
const createBackMaterial = () => ({
  color: "#eaeaea",
  roughness: 1,
  metallic: 0,
  transmission: 0,
});

export const useBackMaterial = create<Material & MaterialActions>((set) => ({
  ...createBackMaterial(),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) =>
    set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) =>
    set(() => ({ transmission: transmission })),
  resetMaterial: () => set(createBackMaterial())
}))

// Back Texture state
const createBackTextureState = () => ({
  textureScale: 1,
  texturePosX: 0,
  texturePosY: 0,
  textureRoughness: 1,
  textureMetalness: 0,
  textureTransmission: 0,
});

export const useBackTexture = create<Texture & TextureActions>((set) => ({
  ...createBackTextureState(),
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
  resetTexture: () => set(createBackTextureState()),
  removeTexture: () => set(() => ({ texture: null, ...createBackTextureState() })),
}));

// Right sleeve state
const createRightSleeveMaterial = () => ({
  color: "#eaeaea",
  roughness: 1,
  metallic: 0,
  transmission: 0,
});

export const useRightSleeveMaterial = create<Material & MaterialActions>((set) => ({
  ...createRightSleeveMaterial(),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) =>
    set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) =>
    set(() => ({ transmission: transmission })),
  resetMaterial: () => set(createRightSleeveMaterial())
}))

// Right sleeve Texture state
const createRightSleeveTextureState = () => ({
  textureScale: 1,
  texturePosX: 0,
  texturePosY: 0,
  textureRoughness: 1,
  textureMetalness: 0,
  textureTransmission: 0,
});

export const useRightSleeveTexture = create<Texture & TextureActions>((set) => ({
  ...createRightSleeveTextureState(),
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
  resetTexture: () => set(createRightSleeveTextureState()),
  removeTexture: () => set(() => ({ texture: null, ...createRightSleeveTextureState() })),
}));

// Left sleeve state
const createLeftSleeveMaterial = () => ({
  color: "#eaeaea",
  roughness: 1,
  metallic: 0,
  transmission: 0,
});

export const useLeftSleeveMaterial = create<Material & MaterialActions>((set) => ({
  ...createLeftSleeveMaterial(),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) =>
    set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) =>
    set(() => ({ transmission: transmission })),
  resetMaterial: () => set(createLeftSleeveMaterial())
}))

// Left Sleeve Texture state
const createLeftSleeveTextureState = () => ({
  textureScale: 1,
  texturePosX: 0,
  texturePosY: 0,
  textureRoughness: 1,
  textureMetalness: 0,
  textureTransmission: 0,
});

export const useLeftSleeveTexture = create<Texture & TextureActions>((set) => ({
  ...createLeftSleeveTextureState(),
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
  resetTexture: () => set(createLeftSleeveTextureState()),
  removeTexture: () => set(() => ({ texture: null, ...createLeftSleeveTextureState() })),
}));