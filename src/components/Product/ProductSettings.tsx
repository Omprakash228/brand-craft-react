import { createListCollection, Portal, Select } from "@chakra-ui/react";
import useProductStore from "./ProductStore"
import { LuPackage } from "react-icons/lu";
import Dropdown from "../ui/Dropdown/Dropdown";
import { Suspense, type JSX } from "react";
import CupSettings from "../../models/Cup/CupSettings";
import WaterBottleSettings from "../../models/WaterBottle/WaterBottleSettings";
import SodaCanSettings from "../../models/SodaCan/SodaCanSettings";

export default function ProductSettings() {
    const productStore = useProductStore();

    const products = createListCollection({
        items: [
            { label: "Cup", value: "Cup" },
            { label: "Water bottle", value: "Water bottle" },
            { label: "Soda can", value: "Soda can" },
        ],
    })

    const productSettingsMap: Record<string, JSX.Element> = {
        'Cup': <CupSettings />,
        'Water bottle': <WaterBottleSettings />,
        'Soda can': <SodaCanSettings />
    }

    return (
        <>
            <div className="property-title"><LuPackage />Product</div>
            <Dropdown collection={products} selectedValue={productStore.product} size="sm" multiple={false} onChange={((value) => { productStore.setProduct(value[0]) })} />
            <Suspense>{productSettingsMap[productStore.product]}</Suspense>
        </>
    )
}