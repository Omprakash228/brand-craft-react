import { Slider } from "@chakra-ui/react";

interface SliderProps {
    min: number;
    max: number;
    indicatorPosition?: "top" | "bottom";
    selectedValue: number;
    size?: "sm" | "md" | "lg";
    step: number,
    width: string,
    onChange?: (value: number) => void;
}

export default function InputSlider({
    min,
    max,
    indicatorPosition ='top',
    selectedValue,
    size,
    step,
    width,
    onChange
}: SliderProps) {
    const marks = [
        { value: min, label: min.toString() },
        { value: max, label: Number(max) === max && max % 1 !== 0 ? max.toFixed(1) : max.toString() },
    ]

    return (
        <Slider.Root
            size={size}
            min={min}
            max={max}
            defaultValue={[selectedValue]}
            step={step}
            width={width}
            value={[selectedValue]}
            onValueChange={(value) => { onChange?.(value.value[0]) }}
        >
            <Slider.Control>
                <Slider.Track>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Thumb index={0}>
                    <Slider.DraggingIndicator
                        layerStyle="fill.solid"
                        top={indicatorPosition === 'top' ? '-6': '5' }
                        rounded="sm"
                        px="1"
                    >
                        <Slider.ValueText />
                    </Slider.DraggingIndicator>
                </Slider.Thumb>
                <Slider.Marks marks={marks} />
            </Slider.Control>
        </Slider.Root>
    )
}