import { Accordion, Span } from "@chakra-ui/react"
import { LuSettings2 } from "react-icons/lu"
import useCupStore from "./CupStore"
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import Colorpicker from "../../components/ui/Colorpicker/Colorpicker";
import { MdRefresh } from "react-icons/md";

export default function CupSettings() {
    const cupStore = useCupStore();

    return (
        <>
            <Accordion.Root collapsible defaultValue={['Cup']}>
                <Accordion.Item value='Cup'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuSettings2 size={"16px"} />Cup</Span>
                        <Span flex="0" style={{cursor: "pointer", opacity: "0.5"}} onClick={($event) => {$event.stopPropagation(); cupStore.resetSettings()}}><MdRefresh/></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <div className="input-wrapper">
                                Color
                                <Colorpicker
                                    size="2xs"
                                    width="60%"
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
                                    width="60%"
                                    selectedValue={cupStore.scale}
                                    onChange={((value) => { cupStore.setScale(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Roughness
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="60%"
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
                                    width="60%"
                                    selectedValue={cupStore.metallic}
                                    onChange={((value) => { cupStore.setMetallic(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Transmission
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="60%"
                                    selectedValue={cupStore.transmission}
                                    onChange={((value) => { cupStore.setTransmission(value) })} />
                            </div>
                            <div className="input-wrapper">
                                X rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.1}
                                    width="60%"
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
                                    width="60%"
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
                                    width="60%"
                                    selectedValue={cupStore.rotationZ}
                                    onChange={((value) => { cupStore.setRotationZ(value) })} />
                            </div>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}
