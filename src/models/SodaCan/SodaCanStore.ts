import { create } from "zustand";

type Can = {
  scale: number;
  color: string;
  roughness: number;
  metallic: number;
  transmission: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
};

type Action = {
  setScale: (scale: Can["scale"]) => void;
  setColor: (color: Can["color"]) => void;
  setRoughness: (roughness: Can["roughness"]) => void;
  setMetallic: (metallic: Can['metallic']) => void;
  setTransmission: (transmission: Can['transmission']) => void;
  setRotationX: (rotationX: Can['rotationX']) => void;
  setRotationY: (rotationY: Can['rotationY']) => void;
  setRotationZ: (rotationZ: Can['rotationZ']) => void;
  resetSettings: () => void;
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

const useCanStore = create<Can & Action>((set) => ({
  ...createInitialState(),
  setScale: (scale: number) => set(() => ({ scale: scale })),
  setColor: (color: string) => set(() => ({ color: color })),
  setRoughness: (roughness: number) => set(() => ({ roughness: roughness })),
  setMetallic: (metallic: number) => set(() => ({ metallic: metallic })),
  setTransmission: (transmission: number) => set(() => ({ transmission: transmission })),
  setRotationX: (rotationX: number) => set(() => ({ rotationX: rotationX })),
  setRotationY: (rotationY: number) => set(() => ({ rotationY: rotationY })),
  setRotationZ: (rotationZ: number) => set(() => ({ rotationZ: rotationZ })),
  resetSettings: () => set(createInitialState()),
}));

export default useCanStore;
