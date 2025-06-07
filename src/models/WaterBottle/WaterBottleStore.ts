import { create } from "zustand";
import * as THREE from "three";

type Bottle = {
  scale: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;

  bodyColor: string;
  bodyRoughness: number;
  bodyMetallic: number;
  bodyTransmission: number;
  texture: THREE.Texture | null;
  textureScale: number;
  textureRepeat: boolean;
  texturePosX: number;
  texturePosY: number;
  textureRoughness: number;
  textureTransmission: number;

  capColor: string;
  capRoughness: number;
  capMetallic: number;
  capTransmission: number;
};

type Action = {
  setScale: (scale: Bottle["scale"]) => void;
  setBodyColor: (color: Bottle["bodyColor"]) => void;
  setBodyRoughness: (roughness: Bottle["bodyRoughness"]) => void;
  setBodyMetallic: (metallic: Bottle["bodyMetallic"]) => void;
  setBodyTransmission: (transmission: Bottle["bodyTransmission"]) => void;
  setCapColor: (color: Bottle["capColor"]) => void;
  setCapRoughness: (roughness: Bottle["capRoughness"]) => void;
  setCapMetallic: (metallic: Bottle["capMetallic"]) => void;
  setCapTransmission: (transmission: Bottle["capTransmission"]) => void;
  setRotationX: (rotationX: Bottle["rotationX"]) => void;
  setRotationY: (rotationY: Bottle["rotationY"]) => void;
  setRotationZ: (rotationZ: Bottle["rotationZ"]) => void;
  resetSettings: () => void;
  resetBodySettings: () => void;
  resetCapSettings: () => void;
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
  scale: 2,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
});

const createInitialBodyState = () => ({
  bodyColor: "#eaeaea",
  bodyRoughness: 0.1,
  bodyMetallic: 0.1,
  bodyTransmission: 0,
});

const createInitialTextureState = () => ({
  textureScale: 1,
  textureRepeat: false,
  texturePosX: 0,
  texturePosY: 0,
  textureRoughness: 0,
  textureTransmission: 0,
});

const createInitialCapState = () => ({
  capColor: "#eaeaea",
  capRoughness: 0.1,
  capMetallic: 0.1,
  capTransmission: 0,
});

const useBottleStore = create<Bottle & Action>((set) => ({
  ...createInitialState(),
  ...createInitialBodyState(),
  texture: null,
  ...createInitialTextureState(),
  ...createInitialCapState(),
  setScale: (scale: number) => set(() => ({ scale: scale })),
  setBodyColor: (color: string) => set(() => ({ bodyColor: color })),
  setBodyRoughness: (roughness: number) =>
    set(() => ({ bodyRoughness: roughness })),
  setBodyMetallic: (metallic: number) =>
    set(() => ({ bodyMetallic: metallic })),
  setBodyTransmission: (transmission: number) =>
    set(() => ({ bodyTransmission: transmission })),
  setCapColor: (color: string) => set(() => ({ capColor: color })),
  setCapRoughness: (roughness: number) =>
    set(() => ({ capRoughness: roughness })),
  setCapMetallic: (metallic: number) => set(() => ({ capMetallic: metallic })),
  setCapTransmission: (transmission: number) =>
    set(() => ({ capTransmission: transmission })),
  setRotationX: (rotationX: number) => set(() => ({ rotationX: rotationX })),
  setRotationY: (rotationY: number) => set(() => ({ rotationY: rotationY })),
  setRotationZ: (rotationZ: number) => set(() => ({ rotationZ: rotationZ })),
  resetSettings: () => set(createInitialState()),
  resetBodySettings: () => set(createInitialBodyState()),
  resetCapSettings: () => set(createInitialCapState()),
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

export default useBottleStore;
