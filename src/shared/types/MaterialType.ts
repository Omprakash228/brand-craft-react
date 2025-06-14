export type Material = {
  color: string;
  roughness: number;
  metallic: number;
  transmission: number;
};

export type MaterialActions = {
  setColor: (color: string) => void;
  setRoughness: (roughness: number) => void;
  setMetallic: (metallic: number) => void;
  setTransmission: (transmission: number) => void;
  resetMaterial: () => void;
};
