import { create } from "zustand";

type Cup = {
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
  setScale: (scale: Cup["scale"]) => void;
  setColor: (color: Cup["color"]) => void;
  setRoughness: (roughness: Cup["roughness"]) => void;
  setMetallic: (metallic: Cup['metallic']) => void;
  setTransmission: (transmission: Cup['transmission']) => void;
  setRotationX: (rotationX: Cup['rotationX']) => void;
  setRotationY: (rotationY: Cup['rotationY']) => void;
  setRotationZ: (rotationZ: Cup['rotationZ']) => void;
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

const useCupStore = create<Cup & Action>((set) => ({
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

export default useCupStore;
