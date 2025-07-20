import type { Transform, TransformActions } from "../types/TransformType";
import InputSlider from "../../components/ui/InputSlider/InputSlider";
import { inputConstants } from "../Constants";

interface TransformProps {
  store: Transform & TransformActions;
}

export default function TransformControls({ store }: TransformProps) {
  return (
    <>
      <div className="input-wrapper">
        <span className="slider-label">Scale</span>
        <div className="slider-wrapper">
          <InputSlider
            size="sm"
            min={1}
            max={5}
            step={0.1}
            width={inputConstants.sliderWidth}
            indicatorPosition={"bottom"}
            selectedValue={store.scale}
            onChange={(value) => {
              store.setScale(value);
            }}
          />
          <span className="slider-value">{store.scale}</span>
        </div>
      </div>
      <div className="input-wrapper">
        <span className="slider-label">X rotation</span>        
        <div className="slider-wrapper">
          <InputSlider
            size="sm"
            min={0}
            max={2}
            step={0.01}
            width={inputConstants.sliderWidth}
            selectedValue={store.rotationX}
            onChange={(value) => {
              store.setRotationX(value);
            }}
          />
          <span className="slider-value">{store.rotationX}</span>
        </div>
      </div>
      <div className="input-wrapper">
        <span className="slider-label">Y rotation</span>        
        <div className="slider-wrapper">
          <InputSlider
            size="sm"
            min={0}
            max={2}
            step={0.01}
            width={inputConstants.sliderWidth}
            selectedValue={store.rotationY}
            onChange={(value) => {
              store.setRotationY(value);
            }}
          />
          <span className="slider-value">{store.rotationY}</span>
        </div>
      </div>
      <div className="input-wrapper">
        <span className="slider-label">Z rotation</span>
        <div className="slider-wrapper">
          <InputSlider
            size="sm"
            min={0}
            max={2}
            step={0.01}
            width={inputConstants.sliderWidth}
            selectedValue={store.rotationZ}
            onChange={(value) => {
              store.setRotationZ(value);
            }}
          />
          <span className="slider-value">{store.rotationZ}</span>
        </div>
      </div>
    </>
  );
}
