import { Accordion, createListCollection, Span } from "@chakra-ui/react";
import { MdImage } from "react-icons/md";
import useEnvironmentStore from "./SceneStore";
import Dropdown from "../../../ui/Dropdown/Dropdown";
import { inputConstants, useHdrMap } from "../../../../shared/Constants";
import CheckBox from "../../../ui/CheckBox/CheckBox";
import InputSlider from "../../../ui/InputSlider/InputSlider";

export default function HdriSettings() {
  const envStore = useEnvironmentStore();
  const hdrMap = useHdrMap();

  const hdriOptions = createListCollection({
    items: Object.keys(hdrMap).map((key) => {
      return { label: key, value: key };
    }),
  });

  return (
    <>
      <Accordion.Root collapsible defaultValue={["HDRI"]}>
        <Accordion.Item value="HDRI">
          <Accordion.ItemTrigger>
            <Span
              flex="1"
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
            >
              <MdImage size={"16px"} />
              Image
            </Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Dropdown
                collection={hdriOptions}
                selectedValue={envStore.hdri}
                size="sm"
                multiple={false}
                onChange={(value) => {
                  envStore.setHdri(value[0]);
                }}
              />
              <CheckBox
                label="Transparent"
                size="lg"
                selectedValue={envStore.hdriTransparent}
                onChange={(value) => {
                  envStore.setHdriTransparent(!!value);
                }}
              />
              <div className="input-wrapper">
                <span className="slider-label">Intensity</span>
                <div className="slider-wrapper">
                  <InputSlider
                    size="sm"
                    min={0.1}
                    max={1}
                    step={0.1}
                    width={inputConstants.sliderWidth}
                    selectedValue={envStore.hdriIntensity}
                    onChange={(value) => {
                      envStore.setHdriIntensity(value);
                    }}
                  />
                  <span className="slider-value">{envStore.hdriIntensity}</span>
                </div>
              </div>
              <div className="input-wrapper">
                <span className="slider-label">Blur</span>
                <div className="slider-wrapper">
                  <InputSlider
                    size="sm"
                    min={0}
                    max={1}
                    step={0.1}
                    width={inputConstants.sliderWidth}
                    selectedValue={envStore.hdriBlurness}
                    onChange={(value) => {
                      envStore.setHdriBlurness(value);
                    }}
                  />
                  <span className="slider-value">{envStore.hdriBlurness}</span>
                </div>
              </div>
              <div className="input-wrapper">
                <span className="slider-label">Rotation</span>
                <div className="slider-wrapper">
                  <InputSlider
                    size="sm"
                    min={0}
                    max={Math.PI * 2}
                    step={0.01}
                    width={inputConstants.sliderWidth}
                    selectedValue={envStore.hdriRotation}
                    onChange={(value) => {
                      envStore.setHdriRotation(value);
                    }}
                  />
                  <span className="slider-value">{envStore.hdriRotation}</span>
                </div>
              </div>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
}
