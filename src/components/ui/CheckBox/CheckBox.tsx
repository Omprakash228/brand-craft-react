import { Checkbox } from "@chakra-ui/react";

interface CheckBoxProps {
    label: string;
    selectedValue: boolean;
    size?: "sm" | "md" | "lg";
    onChange?: (value: string | boolean) => void;
}

export default function CheckBox({
    label,
    selectedValue,
    size,
    onChange,
}: CheckBoxProps) {
    return (
        <Checkbox.Root 
            size={size} checked={selectedValue} 
            onCheckedChange={(value) => { onChange?.(value.checked); }}>
            <Checkbox.HiddenInput />
            <Checkbox.Label>{label}</Checkbox.Label>
            <Checkbox.Control />
        </Checkbox.Root>
    )
}