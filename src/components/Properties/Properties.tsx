import { Tabs } from "@chakra-ui/react";
import { LuFileOutput, LuPackage } from "react-icons/lu";
import './Properties.css'
import SceneSettings from "./Scene/SceneSettings";
import { MdTexture } from "react-icons/md";
import Export from "./Export/Export";
import ProductSettings from "./Product/ProductSettings";

export default function Properties() {
    return (
        <Tabs.Root defaultValue="product" variant={'outline'} orientation="vertical">
            <Tabs.List>
                <Tabs.Trigger value="product">
                    <LuPackage />
                </Tabs.Trigger>
                <Tabs.Trigger value="background">
                    <MdTexture />
                </Tabs.Trigger>
                <Tabs.Trigger value="export">
                    <LuFileOutput />
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="product">
                <ProductSettings />
            </Tabs.Content>
            <Tabs.Content value="background">
                <SceneSettings />
            </Tabs.Content>
            <Tabs.Content value="export">
                <Export />
            </Tabs.Content>
        </Tabs.Root>
    )
}