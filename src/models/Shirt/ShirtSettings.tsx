import { Accordion, Span } from "@chakra-ui/react";
import { MdColorLens, MdRefresh, MdTransform } from "react-icons/md";
import TransformControls from "../../shared/components/TransformControls";
import { useBackMaterial, useBackTexture, useCollarMaterial, useFrontMaterial, useFrontTexture, useLeftSleeveMaterial, useLeftSleeveTexture, useRightSleeveMaterial, useRightSleeveTexture, useShirtTransform } from "./ShirtStore";
import MaterialControls from "../../shared/components/MaterialControls";
import { LuImage } from "react-icons/lu";
import TextureControls from "../../shared/components/TextureControls";
import CheckBox from "../../components/ui/CheckBox/CheckBox";

export default function ShirtSettings() {
    const shirtTransform = useShirtTransform();
    const collarMaterial = useCollarMaterial();
    const frontMaterial = useFrontMaterial();
    const frontTexture = useFrontTexture();
    const backMaterial = useBackMaterial();
    const backTexture = useBackTexture();
    const rightSleeveMaterial = useRightSleeveMaterial();
    const rightSleeveTexture = useRightSleeveTexture();
    const leftSleeveMaterial = useLeftSleeveMaterial();
    const leftSleeveTexture = useLeftSleeveTexture();

    const [frontTargetWidth, frontTargetHeight] = [1060, 1420];
    const [sleeveTargetWidth, sleeveTargetHeight] = [800, 540];

    return (
        <>
            <Accordion.Root
                collapsible
                defaultValue={
                    [
                        'Transform',
                        'Collar Material',
                        'Front Material',
                        'Front Image',
                        'Back Material',
                        'Back Image',
                        'Right Sleeve Material',
                        'Right Sleeve Image',
                        'Left Sleeve Material',
                        'Left Sleeve Image'
                    ]}
                multiple={true}>
                <Accordion.Item value='Transform'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdTransform size={"16px"} />Adjust</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); shirtTransform.resetTransform() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TransformControls store={shirtTransform} />
                            <CheckBox
                                label="Use global material"
                                size="lg"
                                selectedValue={shirtTransform.globalMaterial}
                                onChange={((value) => { shirtTransform.setGlobalMaterial(!!value) })} />
                            {
                                shirtTransform.globalMaterial &&
                                <MaterialControls store={[frontMaterial,
                                    backMaterial,
                                    rightSleeveMaterial,
                                    leftSleeveMaterial,
                                    collarMaterial,]} />
                            }
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                {
                    !shirtTransform.globalMaterial &&
                    <Accordion.Item value='Collar Material'>
                        <Accordion.ItemTrigger>
                            <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Collar Appearance</Span>
                            <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); collarMaterial.resetMaterial() }}><MdRefresh /></Span>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <MaterialControls store={[collarMaterial]} />
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                }
                {
                    !shirtTransform.globalMaterial &&
                    <Accordion.Item value='Front Material'>
                        <Accordion.ItemTrigger>
                            <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Front Appearance</Span>
                            <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); frontMaterial.resetMaterial() }}><MdRefresh /></Span>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <MaterialControls store={[frontMaterial]} />
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                }
                <Accordion.Item value='Front Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Front Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); frontTexture.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TextureControls store={frontTexture} targetWidth={frontTargetWidth} targetHeight={frontTargetHeight} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                {
                    !shirtTransform.globalMaterial &&
                    <Accordion.Item value='Back Material'>
                        <Accordion.ItemTrigger>
                            <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Back Appearance</Span>
                            <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); backMaterial.resetMaterial() }}><MdRefresh /></Span>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <MaterialControls store={[backMaterial]} />
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                }
                <Accordion.Item value='Back Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Back Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); backTexture.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TextureControls store={backTexture} targetWidth={frontTargetWidth} targetHeight={frontTargetHeight} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                {
                    !shirtTransform.globalMaterial &&
                    <Accordion.Item value='Right Sleeve Material'>
                        <Accordion.ItemTrigger>
                            <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Right Sleeve Appearance</Span>
                            <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); rightSleeveMaterial.resetMaterial() }}><MdRefresh /></Span>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <MaterialControls store={[rightSleeveMaterial]} />
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                }
                <Accordion.Item value='Right Sleeve Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Right Sleeve Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); rightSleeveTexture.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TextureControls store={rightSleeveTexture} targetWidth={sleeveTargetWidth} targetHeight={sleeveTargetHeight} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                {
                    !shirtTransform.globalMaterial &&
                    <Accordion.Item value='Left Sleeve Material'>
                        <Accordion.ItemTrigger>
                            <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><MdColorLens size={"16px"} />Left Sleeve Appearance</Span>
                            <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); leftSleeveMaterial.resetMaterial() }}><MdRefresh /></Span>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <MaterialControls store={[leftSleeveMaterial]} />
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                }
                <Accordion.Item value='Left Sleeve Image'>
                    <Accordion.ItemTrigger>
                        <Span flex="10" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}><LuImage size={"16px"} />Left Sleeve Image</Span>
                        <Span flex="0" style={{ cursor: "pointer", opacity: "0.5" }} onClick={($event) => { $event.stopPropagation(); leftSleeveTexture.resetTexture() }}><MdRefresh /></Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <TextureControls store={leftSleeveTexture} targetWidth={sleeveTargetWidth} targetHeight={sleeveTargetHeight} />
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}