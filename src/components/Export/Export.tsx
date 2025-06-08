import { LuFileOutput } from "react-icons/lu"
import Dropdown from "../ui/Dropdown/Dropdown"
import { Button, createListCollection } from "@chakra-ui/react"
import useExportStore from "./ExportStore"
import useProductStore from "../Product/ProductStore"

export default function Export() {
    const exportStore = useExportStore();
    const product = useProductStore((s) => s.product)

    const aspectRatios = ["Default", "1:1", "9:16", "16:9", "4:5", "5:4", "3:4", "4:3", "2:3", "3:2", "5:7", "7:5", "1:2", "2:1"]
    const aspectOptions = createListCollection({
        items: aspectRatios.map((v) => { return { label: v, value: v } }),
    });

    const mimeTypes = {
        'png': 'image/png',
        'jpg': 'image/jpeg'
    };

    const exportImage = (type: 'png' | 'jpg') => {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement
        const link = document.createElement('a')
        const filename = `${product}.${type}`
        link.setAttribute('download', filename)
        link.setAttribute('href', canvas.toDataURL(mimeTypes[type]).replace(mimeTypes[type], 'image/octet-stream'))
        link.click()
    }

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
            <div className="button-wrapper">
                <Button size="xs" variant={'subtle'} style={{ width: '48%' }} onClick={() => exportImage('png')}>Export PNG</Button>
                <Button size="xs" variant={'subtle'} style={{ width: '48%' }} onClick={() => exportImage('jpg')}>Export JPG</Button>
            </div>
        </>
    )
}