import { Tabs } from "@chakra-ui/react";
import { LuFileOutput, LuPackage } from "react-icons/lu";
import "./Properties.css";
import SceneSettings from "./Scene/SceneSettings";
import { MdTexture } from "react-icons/md";
import Export from "./Export/Export";
import ProductSettings from "./Product/ProductSettings";
import { useEffect } from "react";
import { useTabState } from "./PropertiesStore";

export default function Properties() {
  const tabStore = useTabState();
  
  useEffect(() => {
    tabStore.setCurrentTab('Product');

    return () => {
      tabStore.resetTab();
    }
  }, [])

  return (
    <Tabs.Root
      lazyMount
      unmountOnExit
      defaultValue="product"
      variant={"outline"}
      orientation="vertical"
    >
      <Tabs.List>
        <div className="tooltip logo-ctr">
          <div className="tooltiptext tooltiptext-right">Product</div>
          <Tabs.Trigger value="product" onClick={() => tabStore.setCurrentTab('Product')}>
            <LuPackage />
          </Tabs.Trigger>
        </div>
        <div className="tooltip logo-ctr">
          <div className="tooltiptext tooltiptext-right">Background</div>
          <Tabs.Trigger value="background" onClick={() => tabStore.setCurrentTab('Background')}>
            <MdTexture />
          </Tabs.Trigger>
        </div>
        <div className="tooltip logo-ctr">
          <div className="tooltiptext tooltiptext-right">Export</div>
          <Tabs.Trigger value="export" onClick={() => tabStore.setCurrentTab('Export')}>
            <LuFileOutput />
          </Tabs.Trigger>
        </div>
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
  );
}
