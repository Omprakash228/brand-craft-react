import { createListCollection } from "@chakra-ui/react";
import useProductStore from "./ProductStore"
import { LuPackage } from "react-icons/lu";
import { Suspense } from "react";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { productMap } from "../../../shared/Constants";

export default function ProductSettings() {
    const productStore = useProductStore();

    const products = createListCollection({
        items: Object.keys(productMap).map((v) => { return {label: v, value: v }}),
    })

    return (
        <>
            <div className="property-title"><LuPackage />Product</div>
            <div className="input-wrapper">
                Choose product
                <Dropdown
                    collection={products}
                    selectedValue={productStore.product}
                    size="sm"
                    width="60%"
                    multiple={false}
                    onChange={((value) => { productStore.setProduct(value[0]) })} />
            </div>
            <Suspense>{productMap[productStore.product][1]}</Suspense>
        </>
    )
}