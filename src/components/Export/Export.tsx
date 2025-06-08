import { LuFileOutput } from "react-icons/lu"
import Dropdown from "../ui/Dropdown/Dropdown"
import { createListCollection } from "@chakra-ui/react"
import useExportStore from "./ExportStore"

export default function Export() {
    const aspectRatios = ["Default", "1:1", "9:16", "16:9", "4:5", "5:4", "3:4", "4:3", "2:3", "3:2", "5:7", "7:5", "1:2", "2:1"]
    const aspectOptions = createListCollection({
        items: aspectRatios.map((v) => { return { label: v, value: v } }),
    })
    const exportStore = useExportStore();

    return (
        <>
            <div className="property-title"><LuFileOutput />Export</div>
            <div className="input-wrapper">
                Choose aspect ratio
                <Dropdown
                    collection={aspectOptions}
                    selectedValue={exportStore.aspectRatio}
                    size="sm"
                    width='60%'
                    multiple={false}
                    onChange={((value) => { exportStore.setAspectRatio(value[0]) })} />
            </div>
        </>
    )
}