import Colorpicker from "../../components/ui/Colorpicker/Colorpicker"
import InputSlider from "../../components/ui/InputSlider/InputSlider"
import { inputConstants } from "../Constants"
import type { Material, MaterialActions } from "../types/MaterialType"

interface MaterialProps {
    store: Array<Material & MaterialActions>
}

export default function MaterialControls({
    store,
}: MaterialProps) {
    return (
        <>
            <div className="input-wrapper">
                Color  
                <Colorpicker
                    size="2xs"
                    width="55%"
                    selectedValue={store[0].color}
                    onChange={((value) => { store.forEach(s => s.setColor(value) )})} />
            </div>
            <div className="input-wrapper">
                <span className="slider-label">Roughness</span>
                <div className="slider-wrapper">  
                    <InputSlider
                        size="sm"
                        min={0}
                        max={1}
                        step={0.1}
                        width={inputConstants.sliderWidth}
                        selectedValue={store[0].roughness}
                        onChange={((value) => { store.forEach(s => s.setRoughness(value) )})} />
                    <span className="slider-value">{store[0].roughness}</span>
                </div>
            </div>
            <div className="input-wrapper">
                <span className="slider-label">Metallic</span>
                <div className="slider-wrapper">  
                    <InputSlider
                        size="sm"
                        min={0}
                        max={1}
                        step={0.1}
                        width={inputConstants.sliderWidth}
                        selectedValue={store[0].metallic}
                        onChange={((value) => { store.forEach(s => s.setMetallic(value) )})} />
                    <span className="slider-value">{store[0].metallic}</span>
                </div>
            </div>
            <div className="input-wrapper">
                <span className="slider-label">Glass</span>
                <div className="slider-wrapper">  
                    <InputSlider
                        size="sm"
                        min={0}
                        max={1}
                        step={0.1}
                        width={inputConstants.sliderWidth}
                        selectedValue={store[0].transmission}
                        onChange={((value) => { store.forEach(s => s.setTransmission(value) )})} />
                    <span className="slider-value">{store[0].transmission}</span>
                </div>
            </div>
        </>
    )
}