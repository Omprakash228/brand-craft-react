import { Accordion, Span } from "@chakra-ui/react";
import { LuPuzzle, LuSettings2 } from "react-icons/lu";
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import useBottleStore from "./WaterBottleStore";
import Colorpicker from "../../components/ui/Colorpicker/Colorpicker";
import { MdRefresh } from "react-icons/md";

export default function WaterBottleSettings() {
    const bottleStore = useBottleStore();

    return (<>
        <Accordion.Root collapsible defaultValue={['Water bottle', 'Bottle body', 'Bottle cap']} multiple={true}>
            <Accordion.Item value='Water bottle'>
                <Accordion.ItemTrigger>
                    <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuSettings2 size={"16px"} />Water bottle</Span>
                    <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); bottleStore.resetSettings() }}><MdRefresh /></Span>
                    <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Accordion.ItemBody>
                        <div className="input-wrapper">
                            Scale
                            <InputSlider
                                size="sm"
                                indicatorPosition="bottom"
                                min={1}
                                max={5}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.scale}
                                onChange={((value) => { bottleStore.setScale(value) })} />
                        </div>
                        <div className="input-wrapper">
                            X rotation
                            <InputSlider
                                size="sm"
                                min={0}
                                max={Math.PI * 2}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.rotationX}
                                onChange={((value) => { bottleStore.setRotationX(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Y rotation
                            <InputSlider
                                size="sm"
                                min={0}
                                max={Math.PI * 2}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.rotationY}
                                onChange={((value) => { bottleStore.setRotationY(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Z rotation
                            <InputSlider
                                size="sm"
                                min={0}
                                max={Math.PI * 2}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.rotationZ}
                                onChange={((value) => { bottleStore.setRotationZ(value) })} />
                        </div>
                    </Accordion.ItemBody>
                </Accordion.ItemContent>
            </Accordion.Item>
            <Accordion.Item value='Bottle body'>
                <Accordion.ItemTrigger>
                    <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuPuzzle size={"16px"} />Bottle body</Span>
                    <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); bottleStore.resetBodySettings() }}><MdRefresh /></Span>
                    <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Accordion.ItemBody>
                        <div className="input-wrapper">
                            Color
                            <Colorpicker
                                size="2xs"
                                width="55%"
                                selectedValue={bottleStore.bodyColor}
                                onChange={((value) => { bottleStore.setBodyColor(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Roughness
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.bodyRoughness}
                                onChange={((value) => { bottleStore.setBodyRoughness(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Metallic
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.bodyMetallic}
                                onChange={((value) => { bottleStore.setBodyMetallic(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Transmission
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.bodyTransmission}
                                onChange={((value) => { bottleStore.setBodyTransmission(value) })} />
                        </div>
                    </Accordion.ItemBody>
                </Accordion.ItemContent>
            </Accordion.Item>
            <Accordion.Item value='Bottle cap'>
                <Accordion.ItemTrigger>
                    <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuPuzzle size={"16px"} />Bottle cap</Span>
                    <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); bottleStore.resetCapSettings() }}><MdRefresh /></Span>
                    <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Accordion.ItemBody>
                        <div className="input-wrapper">
                            Color
                            <Colorpicker
                                size="2xs"
                                width="55%"
                                selectedValue={bottleStore.capColor}
                                onChange={((value) => { bottleStore.setCapColor(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Roughness
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.capRoughness}
                                onChange={((value) => { bottleStore.setCapRoughness(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Metallic
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.capMetallic}
                                onChange={((value) => { bottleStore.setCapMetallic(value) })} />
                        </div>
                        <div className="input-wrapper">
                            Transmission
                            <InputSlider
                                size="sm"
                                min={0}
                                max={1}
                                step={0.1}
                                width="55%"
                                selectedValue={bottleStore.capTransmission}
                                onChange={((value) => { bottleStore.setCapTransmission(value) })} />
                        </div>
                    </Accordion.ItemBody>
                </Accordion.ItemContent>
            </Accordion.Item>
        </Accordion.Root>
    </>)
}