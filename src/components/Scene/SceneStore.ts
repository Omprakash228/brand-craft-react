import { create } from "zustand";

type Scene = {
  environment: string;
  color: string;
  colorTransparent: boolean;
  colorIntensity: number;
  hdri: string;
  hdriTransparent: boolean;
  hdriIntensity: number;
  hdriBlurness: number;
  hdriRotation: number;
};

type Action = {
  setEnvironment: (environment: Scene["environment"]) => void;
  setColor: (color: Scene["color"]) => void;
  setColorTransparent: (transparency: Scene["colorTransparent"]) => void;
  setColorIntensity: (intensity: Scene["colorIntensity"]) => void;
  setHdri: (hdri: Scene["hdri"]) => void;
  setHdriTransparent: (transparency: Scene["hdriTransparent"]) => void;
  setHdriIntensity: (intensity: Scene["hdriIntensity"]) => void;
  setHdriBlurness: (blurness: Scene["hdriBlurness"]) => void;
  setHdriRotation: (rotation: Scene["hdriRotation"]) => void;
};

const useEnvironmentStore = create<Scene & Action>((set) => ({
  environment: "Solid color",
  color: "#2d2f34",
  colorTransparent: false,
  colorIntensity: 1,
  hdri: "Apartment",
  hdriTransparent: false,
  hdriIntensity: 1,
  hdriBlurness: 0,
  hdriRotation: 0,
  setEnvironment: (environment: string) => set(() => ({ environment: environment })),
  setColor: (color: string) => set(() => ({ color: color })),
  setColorTransparent: (transparency: boolean) => set(() => ({ colorTransparent: transparency})),
  setColorIntensity: (intensity: number) => set(() => ({ colorIntensity: intensity})),
  setHdri: (hdri: string) => set(() => ({ hdri: hdri })),
  setHdriTransparent: (transparency: boolean ) => set(() => ({ hdriTransparent: transparency })),
  setHdriIntensity: (intensity: number) => set(() => ({ hdriIntensity: intensity })),
  setHdriBlurness: (blurness: number) => set(() => ({ hdriBlurness: blurness })),
  setHdriRotation: (rotation: number) => set(() => ({ hdriRotation: rotation }))
}));

export default useEnvironmentStore;
