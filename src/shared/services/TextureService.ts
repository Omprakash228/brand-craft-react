import * as THREE from "three";
import type { Texture, TextureActions } from "../types/TextureType";

// Creates texture and adds to the store
export const CreateTexture = (
  image: File,
  targetWidth: number,
  targetHeight: number,
  store: any
) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = reader.result as string;

    img.onload = () => {
      // Create canvas with transparent border
      const canvas = document.createElement("canvas");
      const [wPad, hPad] = calcImagePadding(img, targetWidth, targetHeight);
      const width = img.width + wPad;
      const height = img.height + hPad;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, width, height);
      ctx?.drawImage(img, Math.floor(wPad / 2), Math.floor(hPad / 2));

      // Create THREE texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = false;
      texture.flipY = false;
      texture.wrapS = texture.wrapT = store?.textureRepeat
        ? THREE.RepeatWrapping
        : THREE.ClampToEdgeWrapping;
      texture.center.set(0.5, 0.5);

      store?.setTexture(texture);
    };

    img.onerror = (err) => {
      console.error("Image load error", err);
    };
  };
  reader.readAsDataURL(image);
};

// calculates the transparent padding to preserve the aspect ratio
const calcImagePadding = (
  img: HTMLImageElement,
  targetWidth: number,
  targetHeight: number
): [number, number] => {
  const wq = Math.floor(img.width / targetWidth);
  const wr = img.width % targetWidth;
  const wFactor = wr === 0 ? wq : wq + 1;

  const hq = Math.floor(img.height / targetHeight);
  const hr = img.height % targetHeight;
  const hFactor = hr === 0 ? hq : hq + 1;
  const factor = Math.max(wFactor, hFactor);

  const wPad = targetWidth * factor - img.width + 2;
  const hPad = targetHeight * factor - img.height + 2;

  return [wPad, hPad];
};

// Updates the textures as the user changes the controls
export const updateTexture = (texture: THREE.Texture | null, state: Texture & TextureActions) => {
  // set Scale
  if (texture && texture.repeat.x !== state.textureScale) {
    // Avoid divide-by-zero
    // Three.js doesn't have scale, instead we're using repeat to scale image. Repeat of value 2 means, the scale is 0.5
    const safeScale = 1 / Math.max(state.textureScale, 0.01);
    texture.repeat.set(safeScale, safeScale);
  }

  // set Position
  if (
    texture &&
    (texture.offset.x !== state.texturePosX ||
      texture.offset.y !== state.texturePosY)
  ) {
    // As the image is scaled down, the UV space shrinks. So, multiply by the Three.js repeat value.
    const safeScale = 1 / Math.max(state.textureScale, 0.01);
    texture.offset.set(
      state.texturePosX * safeScale,
      state.texturePosY * safeScale
    );
  }
  
  // // set Repeat
  // if (texture && (state.textureRepeat !== prevState.textureRepeat)) {
  //   texture.wrapS = texture.wrapT = state.textureRepeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  //   texture.needsUpdate = true;
  // }
};
