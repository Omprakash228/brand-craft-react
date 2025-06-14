import { Accordion, Span } from "@chakra-ui/react";
import { LuImage } from "react-icons/lu";
import { MdColorLens, MdRefresh, MdTransform } from "react-icons/md";
import { useCanMaterial, useCanTexture, useCanTransform } from "./SodaCanStore";
import MaterialControls from "../../shared/components/MaterialControls";
import TextureControls from "../../shared/components/TextureControls";
import TransformControls from "../../shared/components/TransformControls";

export default function SodaCanSettings() {
    const canTransform = useCanTransform();
    const canMaterial = useCanMaterial();
    const canTexture = useCanTexture();
    const [targetWidth, targetHeight] = [1760, 1000]

    return (
        <>
            <Accordion.Root collapsible defaultValue={['Transform', 'Material', 'Image']} multiple={true}>
                <Accordion.Item value='Transform'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdTransform size={"16px"} />Adjust</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); canTransform.resetTransform() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TransformControls store={canTransform} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item value='Material'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Appearance</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); canMaterial.resetMaterial() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <MaterialControls store={canMaterial} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item value='Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); canTexture.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TextureControls store={canTexture} targetWidth={targetWidth} targetHeight={targetHeight} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}