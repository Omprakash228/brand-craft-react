import { Accordion, createListCollection, Span } from "@chakra-ui/react"
import { MdImage } from "react-icons/md"
import Dropdown from "../ui/Dropdown/Dropdown"
import useEnvironmentStore from "./SceneStore"
import InputSlider from "../ui/InputSlider/InputSlider"
import CheckBox from "../ui/CheckBox/CheckBox"

export default function HdriSettings() {
    const envStore = useEnvironmentStore()

    const hdrMap: Record<string, string> = {
        'Apartment': 'hdr/lebombo_1k.hdr',
        'City': 'hdr/potsdamer_platz_1k.hdr',
        'Dawn': 'hdr/kiara_1_dawn_1k.hdr',
        'Forest': 'hdr/forest_slope_1k.hdr',
        'Lobby': 'hdr/st_fagans_interior_1k.hdr',
        'Night': 'hdr/dikhololo_night_1k.hdr',
        'Studio': 'hdr/studio_small_03_1k.hdr'
    }
    const hdriOptions = createListCollection({
        items: Object.keys(hdrMap).map((key) => { return { label: key, value: key } })
    })

    return (
        <>
            <Accordion.Root collapsible defaultValue={['HDRI']}>
                <Accordion.Item value='HDRI'>
                    <Accordion.ItemTrigger>
                        <Span flex="1" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdImage size={"16px"} />HDRI</Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <Dropdown
                                collection={hdriOptions}
                                selectedValue={envStore.hdri}
                                size="sm" multiple={false}
                                onChange={((value) => { envStore.setHdri(value[0]) })} />
                            <CheckBox
                                label="Transparent"
                                size="lg"
                                selectedValue={envStore.hdriTransparent}
                                onChange={((value) => { envStore.setHdriTransparent(!!value) })} />
                            <div className="input-wrapper">
                                Intensity
                                <InputSlider
                                    size="sm"
                                    min={0.1}
                                    max={1}
                                    step={0.1}
                                    width="60%"
                                    selectedValue={envStore.hdriIntensity}
                                    onChange={((value) => { envStore.setHdriIntensity(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Blur
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    width="60%"
                                    selectedValue={envStore.hdriBlurness}
                                    onChange={((value) => { envStore.setHdriBlurness(value) })} />
                            </div>
                            <div className="input-wrapper">
                                Rotation
                                <InputSlider
                                    size="sm"
                                    min={0}
                                    max={Math.PI * 2}
                                    step={0.05}
                                    width="60%"
                                    selectedValue={envStore.hdriRotation}
                                    onChange={((value) => { envStore.setHdriRotation(value) })} />
                            </div>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}