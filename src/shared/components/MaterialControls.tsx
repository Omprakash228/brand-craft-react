import Colorpicker from "../../components/ui/Colorpicker/Colorpicker"
import InputSlider from "../../components/ui/InputSlider/InputSlider"
import type { Material, MaterialActions } from "../types/MaterialType"

interface MaterialProps {
    store: Material & MaterialActions
}

export default function MaterialControls({
    store
}: MaterialProps) {
    return (
        <>
            <div className="input-wrapper">
                Color
                <Colorpicker
                    size="2xs"
                    width="55%"
                    selectedValue={store.color}
                    onChange={((value) => { store.setColor(value) })} />
            </div>
            <div className="input-wrapper">
                Roughness
                <InputSlider
                    size="sm"
                    min={0}
                    max={1}
                    step={0.1}
                    width="55%"
                    selectedValue={store.roughness}
                    onChange={((value) => { store.setRoughness(value) })} />
            </div>
            <div className="input-wrapper">
                Metallic
                <InputSlider
                    size="sm"
                    min={0}
                    max={1}
                    step={0.1}
                    width="55%"
                    selectedValue={store.metallic}
                    onChange={((value) => { store.setMetallic(value) })} />
            </div>
            <div className="input-wrapper">
                Glass
                <InputSlider
                    size="sm"
                    min={0}
                    max={1}
                    step={0.1}
                    width="55%"
                    selectedValue={store.transmission}
                    onChange={((value) => { store.setTransmission(value) })} />
            </div>
        </>
    )
}