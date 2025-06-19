import { createListCollection, } from '@chakra-ui/react'
import useEnvironmentStore from './SceneStore';
import { MdTexture } from 'react-icons/md';
import SolidColorSettings from './SolidColorSettings';
import HdriSettings from './HdriSettings';
import Dropdown from '../../../ui/Dropdown/Dropdown';

export default function SceneSettings() {
    const envStore = useEnvironmentStore();

    const envOptions = createListCollection({
        items: [
            { label: "Solid color", value: "Solid color" },
            { label: "HDRI", value: "HDRI" },
        ],
    })

    return (
        <>
            <div className="property-title"><MdTexture />Background</div>
            <div className="input-wrapper">
                Choose background
                <Dropdown 
                    collection={envOptions} 
                    selectedValue={envStore.environment} 
                    size="sm" 
                    width="60%"
                    multiple={false} 
                    onChange={((value) => { envStore.setEnvironment(value[0]) })} />
            </div>
            {
                envStore.environment === 'Solid color' &&
                <SolidColorSettings />
            }
            {
                envStore.environment === 'HDRI' &&
                <HdriSettings />
            }
        </>
    )
}