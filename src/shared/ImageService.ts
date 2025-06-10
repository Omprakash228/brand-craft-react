import * as THREE from "three";

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
      texture.center.set(0.5, 0.5);
      texture.wrapS = texture.wrapT = store?.textureRepeat
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

const calcImagePadding = (img: HTMLImageElement, targetWidth: number, targetHeight: number): [number, number] => {
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
