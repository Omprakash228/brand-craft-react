import { ColorPicker, HStack, parseColor, Portal } from "@chakra-ui/react";

interface ColorpickerProps {
    selectedValue: string;
    size?: "2xs" | "xs" | "sm" | "md" | "lg";
    width: string;
    onChange?: (value: string) => void;
}

export default function Colorpicker({
    selectedValue,
    size,
    width,
    onChange
}: ColorpickerProps) {
    return (
        <>
            <ColorPicker.Root
                size={size}
                defaultValue={parseColor(selectedValue)}
                width={width}
                onValueChange={(value) => { onChange?.(value.value.toString('hex')) }}>
                <ColorPicker.HiddenInput />                
                <ColorPicker.Control>
                    <ColorPicker.Input />
                    <ColorPicker.Trigger />
                </ColorPicker.Control>
                <Portal>
                    <ColorPicker.Positioner>
                        <ColorPicker.Content>
                            <ColorPicker.Area />
                            <HStack>
                                <ColorPicker.Sliders />
                            </HStack>
                        </ColorPicker.Content>
                    </ColorPicker.Positioner>
                </Portal>
            </ColorPicker.Root>
        </>
    )
}