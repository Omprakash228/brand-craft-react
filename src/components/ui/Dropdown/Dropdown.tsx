import { Select, Portal, type ListCollection } from "@chakra-ui/react";

export interface DropdownItem {
    value: string;
    label: string;
    [key: string]: any; // Optional: allow extra fields
}

export interface DropdownCollection<T extends DropdownItem> {
    items: T[];
}

interface DropdownProps<T extends DropdownItem> {
    collection: ListCollection<T>;
    selectedValue: string;
    size?: "sm" | "md" | "lg";
    multiple?: boolean;
    onChange?: (value: string[]) => void;
}

export default function Dropdown<T extends DropdownItem>({
    collection,
    selectedValue,
    size = "md",
    multiple = false,
    onChange,
}: DropdownProps<T>) {
    const handleChange = (value: { value: string[] }) => {
        onChange?.(value.value);
    };

    return (
        <Select.Root
            collection={collection}
            size={size}
            multiple={multiple}
            value={[selectedValue]}
            onValueChange={handleChange}
        >
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder={selectedValue} />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {collection.items.map((item) => (
                            <Select.Item item={item} key={item.value}>
                                {item.label}
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
}
