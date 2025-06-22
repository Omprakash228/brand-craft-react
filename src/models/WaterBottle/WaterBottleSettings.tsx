import { Accordion, Span } from "@chakra-ui/react";
import { LuImage } from "react-icons/lu";
import { useBodyMaterial, useBodyTexture, useBottleTransform, useCapMaterial } from "./WaterBottleStore";
import { MdColorLens, MdRefresh, MdTransform } from "react-icons/md";
import TransformControls from "../../shared/components/TransformControls";
import MaterialControls from "../../shared/components/MaterialControls";
import TextureControls from "../../shared/components/TextureControls";
import CheckBox from "../../components/ui/CheckBox/CheckBox";

export default function WaterBottleSettings() {
    const bottleTransform = useBottleTransform();
    const capMaterial = useCapMaterial();
    const bodyMaterial = useBodyMaterial();
    const bodyTexture = useBodyTexture();

    const [targetWidth, targetHeight] = [1000, 993]

    return (<>
        <Accordion.Root collapsible defaultValue={['Transform', 'Cap Material', 'Body Material', 'Image']} multiple={true}>
            <Accordion.Item value='Transform'>
                <Accordion.ItemTrigger>
                    <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdTransform size={"16px"} />Adjust</Span>
                    <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); bottleTransform.resetTransform() }}><MdRefresh /></Span>
                    <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Accordion.ItemBody>
                        <TransformControls store={bottleTransform} />
                        <CheckBox
                            label="Single material mode"
                            size="lg"
                            selectedValue={bottleTransform.globalMaterial}
                            onChange={((value) => { bottleTransform.setGlobalMaterial(!!value) })} />
                        {
                            bottleTransform.globalMaterial &&
                            <MaterialControls store={[bodyMaterial, capMaterial]} />
                        }
                    </Accordion.ItemBody>
                </Accordion.ItemContent>
            </Accordion.Item>
            {
                !bottleTransform.globalMaterial &&
                <Accordion.Item value='Cap Material'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Cap Appearance</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); capMaterial.resetMaterial() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <MaterialControls store={[capMaterial]} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            }
            {
                !bottleTransform.globalMaterial &&
                <Accordion.Item value='Body Material'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Body Appearance</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); bodyMaterial.resetMaterial() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <MaterialControls store={[bodyMaterial]} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            }
            <Accordion.Item value='Image'>
                <Accordion.ItemTrigger>
                    <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Body Image</Span>
                    <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); bodyTexture.resetTexture() }}><MdRefresh /></Span>
                    <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Accordion.ItemBody>
                        <TextureControls store={bodyTexture} targetWidth={targetWidth} targetHeight={targetHeight} />
                    </Accordion.ItemBody>
                </Accordion.ItemContent>
            </Accordion.Item>
        </Accordion.Root>
    </>)
}