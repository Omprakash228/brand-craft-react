import type { JSX } from "react";
import CupSettings from "../models/Cup/CupSettings";
import WaterBottleSettings from "../models/WaterBottle/WaterBottleSettings";
import SodaCanSettings from "../models/SodaCan/SodaCanSettings";
import { Cup } from "../models/Cup/Cup";
import { WaterBottle } from "../models/WaterBottle/WaterBottle";
import { SodaCan } from "../models/SodaCan/SodaCan";
import ShirtSettings from "../models/Shirt/ShirtSettings";
import { Shirt } from "../models/Shirt/Shirt";

export const hdrMap: Record<string, string> = {
  Apartment: "hdr/lebombo_1k.hdr",
  City: "hdr/docklands_02_1k.hdr",
  Dawn: "hdr/kiara_1_dawn_1k.hdr",
  Forest: "hdr/forest_slope_1k.hdr",
  Lounge: "hdr/wooden_lounge_1k.hdr",
  Night: "hdr/rogland_clear_night_1k.hdr",
  Studio: "hdr/cyclorama_hard_light_1k.hdr",
};

export const aspectResolutions: Record<string, [number, number]> = {
  "1:1": [1080, 1080],
  "9:16": [1080, 1920],
  "16:9": [1920, 1080],
  "4:5": [1000, 1250],
  "5:4": [1250, 1000],
  "3:4": [1200, 1600],
  "4:3": [1600, 1200],
  "2:3": [1200, 1800],
  "3:2": [1800, 1200],
  "5:7": [1000, 1400],
  "7:5": [1400, 1000],
  "1:2": [1000, 2000],
  "2:1": [2000, 1000],
};

export const productMap: Record<string, JSX.Element[]> = {
  'Cup': [<Cup />, <CupSettings />],
  'Water bottle': [<WaterBottle />, <WaterBottleSettings />],
  'Soda can': [<SodaCan />, <SodaCanSettings />],
  'T-shirt': [<Shirt/>, <ShirtSettings />]
}
