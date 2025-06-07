import { create } from "zustand";
import * as THREE from "three";

type Can = {
  scale: number;
  color: string;
  roughness: number;
  metallic: number;
  transmission: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;

  texture: THREE.Texture | null;
  textureScale: number;
  textureRepeat: boolean;
  texturePosX: number;
  texturePosY: number;
  textureRoughness: number;
  textureTransmission: number;
};

type Action = {
  setScale: (scale: Can["scale"]) => void;
  setColor: (color: Can["color"]) => void;
  setRoughness: (roughness: Can["roughness"]) => void;
  setMetallic: (metallic: Can["metallic"]) => void;
  setTransmission: (transmission: Can["transmission"]) => void;
  setRotationX: (rotationX: Can["rotationX"]) => void;
  setRotationY: (rotationY: Can["rotationY"]) => void;
  setRotationZ: (rotationZ: Can["rotationZ"]) => void;
  resetSettings: () => void;
  setTexture: (texture: THREE.Texture) => void;
  setTextureScale: (scale: number) => void;
  setTextureRepeat: (repeat: boolean) => void;
  setTexturePosX: (posX: number) => void;
  setTexturePosY: (posY: number) => void;
  setTextureRoughness: (roughness: number) => void;
  setTextureTransmission: (transmission: number) => void;
  removeTexture: () => void;
  resetTexture: () => void;
};

const createInitialState = () => ({
  color: "#eaeaea",
  scale: 1.5,
  roughness: 0.1,
  metallic: 0.1,
  transmission: 0,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
});

const createInitialTextureState = () => ({
  textureScale: 1,
  textureRepeat: false,
  texturePosX: 0,
  texturePosY: 0,
  textureRoughness: 0,
  textureTransmission: 0,
});

const useCanStore = create<Can & Action>((set) => ({
  ...createInitialState(),
  texture: null,
  ...createInitialTextureState(),
  setScale: (scale: number) => set(() => ({ scale: scale })),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) => set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) =>
    set(() => ({ transmission: transmission })),
  setRotationX: (rotationX: number) => set(() => ({ rotationX: rotationX })),
  setRotationY: (rotationY: number) => set(() => ({ rotationY: rotationY })),
  setRotationZ: (rotationZ: number) => set(() => ({ rotationZ: rotationZ })),
  resetSettings: () => set(createInitialState()),
  setTexture: (texture: THREE.Texture) => set(() => ({ texture: texture })),
  setTextureScale: (scale: number) => set(() => ({ textureScale: scale })),
  setTextureRepeat: (repeat: boolean) => set(() => ({ textureRepeat: repeat })),
  setTexturePosX: (posX: number) => set(() => ({ texturePosX: posX })),
  setTexturePosY: (posY: number) => set(() => ({ texturePosY: posY })),
  setTextureRoughness: (roughness: number) =>
    set(() => ({ textureRoughness: roughness })),
  setTextureTransmission: (transmission: number) =>
    set(() => ({ textureTransmission: transmission })),
  resetTexture: () => set(createInitialTextureState()),
  removeTexture: () =>
    set(() => ({ texture: null, ...createInitialTextureState() })),
}));

export default useCanStore;
