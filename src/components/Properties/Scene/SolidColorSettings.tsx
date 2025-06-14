import { Accordion, Span } from "@chakra-ui/react"
import CheckBox from "../../ui/CheckBox/CheckBox"
import Colorpicker from "../../ui/Colorpicker/Colorpicker"
import InputSlider from "../../ui/InputSlider/InputSlider"
import useEnvironmentStore from "./SceneStore";
import { MdColorLens } from "react-icons/md";

export default function SolidColorSettings() {
    const envStore = useEnvironmentStore();

    return (
        <>
            <Accordion.Root collapsible defaultValue={['Solid color']}>
                <Accordion.Item value='Solid color'>
                    <Accordion.ItemTrigger>
                        <Span flex="1" style={{display: "flex", alignItems:"center", gap:"0.2rem"}}><MdColorLens size={"16px"} />Solid color</Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <CheckBox
                                label="Transparent"
                                size="lg"
                                selectedValue={envStore.colorTransparent}
                                onChange={((value) => { envStore.setColorTransparent(!!value) })} />
                            <div className="input-wrapper">
                                Color
                                <Colorpicker
                                    size="2xs"
                                    width="55%"
                                    selectedValue={envStore.color}
                                    onChange={((value) => { envStore.setColor(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Intensity
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="55%"
                                    selectedValue={envStore.colorIntensity}
                                    onChange={((value) => { envStore.setColorIntensity(value) })} />
                            </div>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}