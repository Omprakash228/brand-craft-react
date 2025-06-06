import { create } from "zustand";
import * as THREE from "three";

type TextureData = {
  texture: THREE.Texture | null;
  scale: number;
  rotation: number;
  offsetX: number;
  offsetY: number;
  repeat: boolean;
};

type TextureAction = {
  setImageScale: (scale: number) => void;
  setRepeat: (repeat: boolean) => void;
  setOffsetX: (offsetX: number) => void;
  setOffsetY: (offsetY: number) => void;
  setTexture: (texture: THREE.Texture) => void;
  resetTexture: () => void;
};

const createInitialState = () => ({
  texture: null,
  scale: 1,
  repeat: true,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
});

export const useTextureStore = create<TextureData & TextureAction>((set) => ({
  ...createInitialState(),
  setImageScale: (scale: number) => set(() => ({ scale: scale })),
  setRepeat: (repeat: boolean) => set(() => ({ repeat: repeat })),
  setOffsetX: (offsetX: number) => set(() => ({ offsetX: offsetX })),
  setOffsetY: (offsetY: number) => set(() => ({ offsetY: offsetY })),
  setTexture: (texture: THREE.Texture) =>
    set(() => ({ texture: texture })),
  resetTexture: () => set(createInitialState()),
}));
