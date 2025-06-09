import { Accordion, Span } from "@chakra-ui/react";
import Colorpicker from "../../components/ui/Colorpicker/Colorpicker";
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import useCanStore from "./SodaCanStore";
import { LuImage, LuSettings2 } from "react-icons/lu";
import { MdRefresh } from "react-icons/md";
import Fileupload from "../../components/ui/Fileupload/Fileupload";
import CheckBox from "../../components/ui/CheckBox/CheckBox";
import { CreateTexture } from "../../shared/ImageService";

export default function SodaCanSettings() {
    const canStore = useCanStore();
    const [targetWidth, targetHeight] = [1760, 1000]

    const addImageTexture = (files: File[]) => {
        if (!files[0]) return;
        CreateTexture(files[0], targetWidth, targetHeight, canStore);
    }

    return (
        <>
            <Accordion.Root collapsible defaultValue={['Soda can', 'Image']} multiple={true}>
                <Accordion.Item value='Soda can'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuSettings2 size={"16px"} />Soda can</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); canStore.resetSettings() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <div className="input-wrapper">
                                Color
                                <Colorpicker
                                    size="2xs"
                                    width="55%"
                                    selectedValue={canStore.color}
                                    onChange={((value) => { canStore.setColor(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Scale
                                <InputSlider
                                    size="sm"
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={canStore.scale}
                                    onChange={((value) => { canStore.setScale(value) })} />
                            </div>
                            <div className="input-wrapper">
                                X rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.01}
                                    width="55%"
                                    selectedValue={canStore.rotationX}
                                    onChange={((value) => { canStore.setRotationX(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Y rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.01}
                                    width="55%"
                                    selectedValue={canStore.rotationY}
                                    onChange={((value) => { canStore.setRotationY(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Z rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.01}
                                    width="55%"
                                    selectedValue={canStore.rotationZ}
                                    onChange={((value) => { canStore.setRotationZ(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Roughness
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={canStore.roughness}
                                    onChange={((value) => { canStore.setRoughness(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Metallic
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={canStore.metallic}
                                    onChange={((value) => { canStore.setMetallic(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Glass
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={canStore.transmission}
                                    onChange={((value) => { canStore.setTransmission(value) })} />
                            </div>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item value='Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); canStore.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <Fileupload
                                size="xs"
                                width="100%"
                                info={`${targetWidth}x${targetHeight}`}
                                maxFiles={1}
                                onChange={(files: File[]) => addImageTexture(files)}
                                onClear={() => canStore.removeTexture()} />
                            {
                                canStore.texture &&
                                <>
                                    <CheckBox
                                        label="Repeat"
                                        size="lg"
                                        selectedValue={canStore.textureRepeat}
                                        onChange={((value) => { canStore.setTextureRepeat(!!value) })} />
                                    <div className="input-wrapper">
                                        Scale
                                        <InputSlider
                                            size="sm"
                                            min={0}
                                            max={2}
                                            step={0.01}
                                            width="55%"
                                            selectedValue={canStore.textureScale}
                                            onChange={((value) => { canStore.setTextureScale(value) })} />
                                    </div>
                                    <div className="input-wrapper">
                                        Horizontal Position
                                        <InputSlider
                                            size="sm"
                                            min={-1}
                                            max={1}
                                            step={0.01}
                                            width="55%"
                                            selectedValue={canStore.texturePosX}
                                            onChange={((value) => { canStore.setTexturePosX(value) })} />
                                    </div>
                                    <div className="input-wrapper">
                                        Vertical Position
                                        <InputSlider
                                            size="sm"
                                            min={-1}
                                            max={1}
                                            step={0.01}
                                            width="55%"
                                            selectedValue={canStore.texturePosY}
                                            onChange={((value) => { canStore.setTexturePosY(value) })} />
                                    </div>
                                    <div className="input-wrapper">
                                        Roughness
                                        <InputSlider
                                            size="sm"
                                            min={0}
                                            max={1}
                                            step={0.1}
                                            width="55%"
                                            selectedValue={canStore.textureRoughness}
                                            onChange={((value) => { canStore.setTextureRoughness(value) })} />
                                    </div>
                                    <div className="input-wrapper">
                                        Glass
                                        <InputSlider
                                            size="sm"
                                            min={0}
                                            max={1}
                                            step={0.1}
                                            width="55%"
                                            selectedValue={canStore.textureTransmission}
                                            onChange={((value) => { canStore.setTextureTransmission(value) })} />
                                    </div>
                                </>
                            }
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}