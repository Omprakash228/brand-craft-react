import Fileupload from "../../components/ui/Fileupload/Fileupload"
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import { CreateTexture } from "../ImageService";
import type { Texture, TextureActions } from "../types/TextureType";

interface TextureProps {
    store: Texture & TextureActions
    targetWidth: number
    targetHeight: number
}

export default function TextureControls({
    store,
    targetWidth,
    targetHeight
}: TextureProps) {
    const addImageTexture = (files: File[]) => {
        if (!files[0]) return;
        CreateTexture(files[0], targetWidth, targetHeight, store);
    }
    
    return (
        <>
            <Fileupload
                size="xs"
                width="100%"
                info={`${targetWidth}x${targetHeight}`}
                maxFiles={1}
                onChange={(files: File[]) => addImageTexture(files)}
                onClear={() => store.removeTexture()} />
            {
                store.texture &&
                <>
                    <div className="input-wrapper">
                        Scale
                        <InputSlider
                            size="sm"
                            min={0}
                            max={2}
                            step={0.01}
                            width="55%"
                            selectedValue={store.textureScale}
                            onChange={((value) => { store.setTextureScale(value) })} />
                    </div>
                    <div className="input-wrapper">
                        Horizontal Position
                        <InputSlider
                            size="sm"
                            min={-1}
                            max={1}
                            step={0.01}
                            width="55%"
                            selectedValue={store.texturePosX}
                            onChange={((value) => { store.setTexturePosX(value) })} />
                    </div>
                    <div className="input-wrapper">
                        Vertical Position
                        <InputSlider
                            size="sm"
                            min={-1}
                            max={1}
                            step={0.01}
                            width="55%"
                            selectedValue={store.texturePosY}
                            onChange={((value) => { store.setTexturePosY(value) })} />
                    </div>
                    <div className="input-wrapper">
                        Roughness
                        <InputSlider
                            size="sm"
                            min={0}
                            max={1}
                            step={0.1}
                            width="55%"
                            selectedValue={store.textureRoughness}
                            onChange={((value) => { store.setTextureRoughness(value) })} />
                    </div>
                    <div className="input-wrapper">
                        Metal
                        <InputSlider
                            size="sm"
                            min={0}
                            max={1}
                            step={0.1}
                            width="55%"
                            selectedValue={store.textureMetalness}
                            onChange={((value) => { store.setTextureMetalness(value) })} />
                    </div>
                    <div className="input-wrapper">
                        Glass
                        <InputSlider
                            size="sm"
                            min={0}
                            max={1}
                            step={0.1}
                            width="55%"
                            selectedValue={store.textureTransmission}
                            onChange={((value) => { store.setTextureTransmission(value) })} />
                    </div>
                </>
            }
        </>
    )
}