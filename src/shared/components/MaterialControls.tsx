import Colorpicker from "../../components/ui/Colorpicker/Colorpicker"
import InputSlider from "../../components/ui/InputSlider/InputSlider"
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
                Roughness
                <InputSlider
                    size="sm"
                    min={0}
                    max={1}
                    step={0.1}
                    width="55%"
                    selectedValue={store[0].roughness}
                    onChange={((value) => { store.forEach(s => s.setRoughness(value) )})} />
            </div>
            <div className="input-wrapper">
                Metallic
                <InputSlider
                    size="sm"
                    min={0}
                    max={1}
                    step={0.1}
                    width="55%"
                    selectedValue={store[0].metallic}
                    onChange={((value) => { store.forEach(s => s.setMetallic(value) )})} />
            </div>
            <div className="input-wrapper">
                Glass
                <InputSlider
                    size="sm"
                    min={0}
                    max={1}
                    step={0.1}
                    width="55%"
                    selectedValue={store[0].transmission}
                    onChange={((value) => { store.forEach(s => s.setTransmission(value) )})} />
            </div>
        </>
    )
}