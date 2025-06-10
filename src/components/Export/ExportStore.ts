import * as THREE from "three";
import { create } from "zustand";

type Export = {
  gl: THREE.WebGLRenderer | null,
  scene: THREE.Scene | null,
  camera: THREE.Camera | null,
  aspectRatio: string;
};

type Action = {
  setHandles: (gl: any, scene: any, camera: any) => void;
  setAspectRatio: (ratio: Export["aspectRatio"]) => void;
};

const useExportStore = create<Export & Action>((set) => ({
  aspectRatio: "Default",
  gl: null as THREE.WebGLRenderer | null,
  scene: null as THREE.Scene | null,
  camera: null as THREE.Camera | null,
  setHandles: (gl: any, scene: any, camera: any) => set({ gl, scene, camera }),
  setAspectRatio: (ratio: string) => set(() => ({ aspectRatio: ratio })),
}));

export default useExportStore;
