import { Menu, Portal } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

interface menuProps {
    navigateTo: (value: 'home' | 'features' | 'examples', offset: number) => void;
}

export default function MobileMenu({navigateTo}: menuProps ) {
    const mobileTopBarHeight = 50;

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <MdMenu style={{cursor: 'pointer', color: 'black'}}/>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="home" onClick={() => navigateTo('home', mobileTopBarHeight)}>Home</Menu.Item>
                        <Menu.Item value="features" onClick={() => navigateTo('features', mobileTopBarHeight)}>Features</Menu.Item>
                        <Menu.Item value="examples" onClick={() => navigateTo('examples', mobileTopBarHeight)}>Examples</Menu.Item>
                        <Menu.Item value="contact">Contact</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}