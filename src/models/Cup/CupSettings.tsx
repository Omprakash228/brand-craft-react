import { Accordion, Span } from "@chakra-ui/react"
import { LuImage, LuSettings2 } from "react-icons/lu"
import useCupStore from "./CupStore"
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import Colorpicker from "../../components/ui/Colorpicker/Colorpicker";
import { MdRefresh } from "react-icons/md";
import Fileupload from "../../components/ui/Fileupload/Fileupload";
import CheckBox from "../../components/ui/CheckBox/CheckBox";
import { CreateTexture } from "../../shared/ImageService";

export default function CupSettings() {
    const cupStore = useCupStore();

    const addImageTexture = (files: File[]) => {
        if (!files[0]) return;
        CreateTexture(files[0], cupStore);
    }

    return (
        <>
            <Accordion.Root collapsible defaultValue={['Cup', 'Image']} multiple={true}>
                <Accordion.Item value='Cup'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuSettings2 size={"16px"} />Cup</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); cupStore.resetSettings() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <div className="input-wrapper">
                                Color
                                <Colorpicker
                                    size="2xs"
                                    width="55%"
                                    selectedValue={cupStore.color}
                                    onChange={((value) => { cupStore.setColor(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Scale
                                <InputSlider
                                    size="sm"
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={cupStore.scale}
                                    onChange={((value) => { cupStore.setScale(value) })} />
                            </div>
                            <div className="input-wrapper">
                                X rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={cupStore.rotationX}
                                    onChange={((value) => { cupStore.setRotationX(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Y rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={cupStore.rotationY}
                                    onChange={((value) => { cupStore.setRotationY(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Z rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={cupStore.rotationZ}
                                    onChange={((value) => { cupStore.setRotationZ(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Roughness
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={cupStore.roughness}
                                    onChange={((value) => { cupStore.setRoughness(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Metallic
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={cupStore.metallic}
                                    onChange={((value) => { cupStore.setMetallic(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Glass
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={cupStore.transmission}
                                    onChange={((value) => { cupStore.setTransmission(value) })} />
                            </div>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item value='Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); cupStore.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <Fileupload
                                size="xs"
                                width="100%"
                                info='3000x1000'
                                maxFiles={1}
                                onChange={(files: File[]) => addImageTexture(files)}
                                onClear={() => cupStore.removeTexture()} />
                            {
                                cupStore.texture &&
                                <>
                                    <CheckBox
                                        label="Repeat"
                                        size="lg"
                                        selectedValue={cupStore.textureRepeat}
                                        onChange={((value) => { cupStore.setTextureRepeat(!!value) })} />
                                    <CheckBox
                                        label="Lock aspect ratio"
                                        size="lg"
                                        selectedValue={cupStore.aspectLock}
                                        onChange={((value) => { cupStore.setAspectLock(!!value) })} />
                                    <div className="input-wrapper">
                                        {cupStore.aspectLock ? 'Scale' : 'Horizontal Scale'}
                                        <InputSlider
                                            size="sm"
                                            min={0}
                                            max={2}
                                            step={0.01}
                                            width="55%"
                                            selectedValue={cupStore.textureScaleX}
                                            onChange={((value) => { cupStore.setTextureScaleX(value) })} />
                                    </div>
                                    {!cupStore.aspectLock &&
                                        <div className="input-wrapper">
                                            Vertical Scale
                                            <InputSlider
                                                size="sm"
                                                min={0}
                                                max={2}
                                                step={0.01}
                                                width="55%"
                                                selectedValue={cupStore.textureScaleY}
                                                onChange={((value) => { cupStore.setTextureScaleY(value) })} />
                                        </div>
                                    }
                                    <div className="input-wrapper">
                                        Horizontal Position
                                        <InputSlider
                                            size="sm"
                                            min={-1}
                                            max={1}
                                            step={0.01}
                                            width="55%"
                                            selectedValue={cupStore.texturePosX}
                                            onChange={((value) => { cupStore.setTexturePosX(value) })} />
                                    </div>
                                    <div className="input-wrapper">
                                        Vertical Position
                                        <InputSlider
                                            size="sm"
                                            min={-1}
                                            max={1}
                                            step={0.01}
                                            width="55%"
                                            selectedValue={cupStore.texturePosY}
                                            onChange={((value) => { cupStore.setTexturePosY(value) })} />
                                    </div>
                                    <div className="input-wrapper">
                                        Roughness
                                        <InputSlider
                                            size="sm"
                                            min={0}
                                            max={1}
                                            step={0.1}
                                            width="55%"
                                            selectedValue={cupStore.textureRoughness}
                                            onChange={((value) => { cupStore.setTextureRoughness(value) })} />
                                    </div>
                                    <div className="input-wrapper">
                                        Glass
                                        <InputSlider
                                            size="sm"
                                            min={0}
                                            max={1}
                                            step={0.1}
                                            width="55%"
                                            selectedValue={cupStore.textureTransmission}
                                            onChange={((value) => { cupStore.setTextureTransmission(value) })} />
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
