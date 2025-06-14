import type { JSX } from "react";
import CupSettings from "../models/Cup/CupSettings";
import WaterBottleSettings from "../models/WaterBottle/WaterBottleSettings";
import SodaCanSettings from "../models/SodaCan/SodaCanSettings";
import { Cup } from "../models/Cup/Cup";
import { WaterBottle } from "../models/WaterBottle/WaterBottle";
import { SodaCan } from "../models/SodaCan/SodaCan";

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
  "1:1": [2160, 2160],
  "9:16": [2160, 3840],
  "16:9": [3840, 2160],
  "4:5": [2000, 2500],
  "5:4": [2560, 2048],
  "3:4": [2400, 3200],
  "4:3": [3200, 2400],
  "2:3": [2400, 3600],
  "3:2": [2400, 1600],
  "5:7": [2000, 2800],
  "7:5": [2800, 2000],
  "1:2": [2000, 4000],
  "2:1": [4000, 2000],
};

export const productMap: Record<string, JSX.Element[]> = {
  'Cup': [<Cup />, <CupSettings />],
  'Water bottle': [<WaterBottle />, <WaterBottleSettings />],
  'Soda can': [<SodaCan />, <SodaCanSettings />]
}
