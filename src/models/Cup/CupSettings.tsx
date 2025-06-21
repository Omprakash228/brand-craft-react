import { Accordion, Span } from "@chakra-ui/react"
import { LuImage } from "react-icons/lu"
import { MdColorLens, MdRefresh, MdTransform } from "react-icons/md";
import TransformControls from "../../shared/components/TransformControls";
import { useCupMaterial, useCupTexture, useCupTransform } from "./CupStore";
import MaterialControls from "../../shared/components/MaterialControls";
import TextureControls from "../../shared/components/TextureControls";

export default function CupSettings() {
    const cupTransform = useCupTransform();
    const cupMaterial = useCupMaterial();
    const cupTexture = useCupTexture();
    const [targetWidth, targetHeight] = [3000, 1000];

    return (
        <>
            <Accordion.Root collapsible defaultValue={['Transform', 'Material', 'Image']} multiple={true}>
                <Accordion.Item value='Transform'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdTransform  size={"16px"} />Adjust</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); cupTransform.resetTransform() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TransformControls store={cupTransform} />                            
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item value='Material'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens  size={"16px"} />Appearance</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); cupMaterial.resetMaterial() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <MaterialControls store={[cupMaterial]} />                            
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item value='Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); cupTexture.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TextureControls store={cupTexture} targetWidth={targetWidth} targetHeight={targetHeight} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}
