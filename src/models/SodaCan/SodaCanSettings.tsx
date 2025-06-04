import { Accordion, Span } from "@chakra-ui/react";
import Colorpicker from "../../components/ui/Colorpicker/Colorpicker";
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import useCanStore from "./SodaCanStore";
import { LuSettings2 } from "react-icons/lu";
import { MdRefresh } from "react-icons/md";

export default function SodaCanSettings() {
    const canStore = useCanStore();
    
    return (
        <>
            <Accordion.Root collapsible defaultValue={['Cup']}>
                <Accordion.Item value='Cup'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuSettings2 size={"16px"} />Cup</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); canStore.resetSettings() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <div className="input-wrapper">
                                Color
                                <Colorpicker
                                    size="2xs"
                                    width="60%"
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
                                    width="60%"
                                    selectedValue={canStore.scale}
                                    onChange={((value) => { canStore.setScale(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Roughness
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="60%"
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
                                    width="60%"
                                    selectedValue={canStore.metallic}
                                    onChange={((value) => { canStore.setMetallic(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Transmission
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="60%"
                                    selectedValue={canStore.transmission}
                                    onChange={((value) => { canStore.setTransmission(value) })} />
                            </div>
                            <div className="input-wrapper">
                                X rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.1}
                                    width="60%"
                                    selectedValue={canStore.rotationX}
                                    onChange={((value) => { canStore.setRotationX(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Y rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.1}
                                    width="60%"
                                    selectedValue={canStore.rotationY}
                                    onChange={((value) => { canStore.setRotationY(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Z rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.1}
                                    width="60%"
                                    selectedValue={canStore.rotationZ}
                                    onChange={((value) => { canStore.setRotationZ(value) })} />
                            </div>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}