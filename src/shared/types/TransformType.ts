export type Transform = {
  scale: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  globalMaterial: boolean;
};

export type TransformActions = {
  setScale: (scale: number) => void;
  setRotationX: (rotationX: number) => void;
  setRotationY: (rotationY: number) => void;
  setRotationZ: (rotationZ: number) => void;
  setGlobalMaterial: (globalMaterial: boolean) => void;
  resetTransform: () => void;
};

