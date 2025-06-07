import type { StoreApi, UseBoundStore } from "zustand";
import * as THREE from 'three'

export const CreateTexture = (
  image: File,
  store: any
) => {

  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = reader.result as string;

    img.onload = () => {
      const bordersize = 1;
      // Create canvas with transparent border
      const canvas = document.createElement("canvas");
      const width = img.width + bordersize * 2;
      const height = img.height + bordersize * 2;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, width, height);
      ctx?.drawImage(img, bordersize, bordersize);

      // Create THREE texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = false;
      texture.flipY = false;
      texture.center.set(0.5, 0.5);
      texture.wrapS = texture.wrapT = store?.repeat
        ? THREE.RepeatWrapping
        : THREE.ClampToEdgeWrapping;

      store?.setTexture(texture);
    };

    img.onerror = (err) => {
      console.error("Image load error", err);
    };
  };
  reader.readAsDataURL(image);
};
