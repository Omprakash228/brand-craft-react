import Fileupload from "../../components/ui/Fileupload/Fileupload"
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import { inputConstants } from "../Constants";
import { CreateTexture } from "../services/TextureService";
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
                        <span className="slider-label">Scale</span>
                        <div className="slider-wrapper">
                            <InputSlider
                                size="sm"
                                min={0}
                                max={2}
                                step={0.01}
                                width={inputConstants.sliderWidth}
                                selectedValue={store.textureScale}
                                onChange={((value) => { store.setTextureScale(value) })} />
                            <span className="slider-value">{store.textureScale}</span>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <span className="slider-label">Horizontal Position</span>      
                        <div className="slider-wrapper">                 
                            <InputSlider
                                size="sm"
                                min={-1}
                                max={1}
                                step={0.01}
                                width={inputConstants.sliderWidth}
                                selectedValue={store.texturePosX}
                                onChange={((value) => { store.setTexturePosX(value) })} />
                            <span className="slider-value">{store.texturePosX}</span>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <span className="slider-label">Vertical Position</span>
                        <div className="slider-wrapper">                       
                            <InputSlider
                                size="sm"
                                min={-1}
                                max={1}
                                step={0.01}
                                width={inputConstants.sliderWidth}
                                selectedValue={store.texturePosY}
                                onChange={((value) => { store.setTexturePosY(value) })} />
                            <span className="slider-value">{store.texturePosY}</span>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <span className="slider-label">Roughness</span>
                        <div className="slider-wrapper">                    
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width={inputConstants.sliderWidth}
                                selectedValue={store.textureRoughness}
                                onChange={((value) => { store.setTextureRoughness(value) })} />
                            <span className="slider-value">{store.textureRoughness}</span>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <span className="slider-label">Metal</span>
                        <div className="slider-wrapper">                     
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width={inputConstants.sliderWidth}
                                selectedValue={store.textureMetalness}
                                onChange={((value) => { store.setTextureMetalness(value) })} />
                            <span className="slider-value">{store.textureMetalness}</span>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <span className="slider-label">Glass</span>
                        <div className="slider-wrapper">                   
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width={inputConstants.sliderWidth}
                                selectedValue={store.textureTransmission}
                                onChange={((value) => { store.setTextureTransmission(value) })} />
                            <span className="slider-value">{store.textureTransmission}</span>
                        </div>
                    </div>
                </>
            }
        </>
    )
}