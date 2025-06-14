import { LuFileOutput } from "react-icons/lu"
import Dropdown from "../../ui/Dropdown/Dropdown"
import { Button, createListCollection } from "@chakra-ui/react"
import useExportStore from "./ExportStore"
import useProductStore from "../Product/ProductStore"
import * as THREE from 'three'
import { aspectResolutions } from "../../../shared/Constants"

export default function Export() {
    const exportStore = useExportStore();
    const product = useProductStore((s) => s.product)    

    const aspectRatios = ["Default", "1:1", "9:16", "16:9", "4:5", "5:4", "3:4", "4:3", "2:3", "3:2", "5:7", "7:5", "1:2", "2:1"]
    const aspectOptions = createListCollection({
        items: aspectRatios.map((v) => { return { label: v, value: v } }),
    });

    const exportImage = (type: 'png' | 'jpg') => {
        const filename = `${product}.${type}`

        if (exportStore.gl !== null && exportStore.camera !== null && exportStore.scene !== null) {
            const [width, height] = aspectResolutions[exportStore.aspectRatio] ?? calculateDim();
            const prevSize = exportStore.gl.getSize(new THREE.Vector2());
            exportStore.gl.setSize(width, height, false);
            exportStore.gl.render(exportStore.scene, exportStore.camera);

            const dataUrl = exportStore.gl.domElement.toDataURL(`image/${type}`);
            exportStore.gl.setSize(prevSize.x, prevSize.y, false);

            const link = document.createElement('a');
            link.download = filename;
            link.href = dataUrl;
            link.click();
        }
    }

    const calculateDim = (): [number, number] => {
        const sceneContainer = document.querySelector('#scene-container') as HTMLDivElement

        if (sceneContainer.offsetHeight >= 1080 || sceneContainer.offsetWidth >= 1080)
            return [sceneContainer.offsetWidth, sceneContainer.offsetHeight]

        if (sceneContainer.offsetWidth === sceneContainer.offsetHeight)
            return [1080, 1080]

        if (sceneContainer.offsetWidth > sceneContainer.offsetHeight) {
            const height = (1080 / sceneContainer.offsetWidth) * sceneContainer.offsetHeight;
            return [1080, height];
        }

        if (sceneContainer.offsetHeight > sceneContainer.offsetWidth) {
            const width = (1080 / sceneContainer.offsetHeight) * sceneContainer.offsetWidth;
            return [width, 1080];
        }

        return [0, 0]
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