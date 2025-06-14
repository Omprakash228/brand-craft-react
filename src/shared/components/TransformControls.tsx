import type { Transform, TransformActions } from "../types/TransformType"
import InputSlider from "../../components/ui/InputSlider/InputSlider"

interface TransformProps {
    store: Transform & TransformActions
}

export default function TransformControls({
    store
}: TransformProps) {
    return (<>
        <div className="input-wrapper">
            Scale
            <InputSlider
                size="sm"
                min={1}
                max={5}
                step={0.1}
                width="55%"
                indicatorPosition={"bottom"}           
                selectedValue={store.scale}
                onChange={((value) => { store.setScale(value) })} />
        </div>
        <div className="input-wrapper">
            X rotation
            <InputSlider
                size="sm"
                min={0}
                max={2}
                step={0.01}
                width="55%"
                selectedValue={store.rotationX}
                onChange={((value) => { store.setRotationX(value) })} />
        </div>
        <div className="input-wrapper">
            Y rotation
            <InputSlider
                size="sm"
                min={0}
                max={2}
                step={0.01}
                width="55%"
                selectedValue={store.rotationY}
                onChange={((value) => { store.setRotationY(value) })} />
        </div>
        <div className="input-wrapper">
            Z rotation
            <InputSlider
                size="sm"
                min={0}
                max={2}
                step={0.01}
                width="55%"
                selectedValue={store.rotationZ}
                onChange={((value) => { store.setRotationZ(value) })} />
        </div>
    </>)
}