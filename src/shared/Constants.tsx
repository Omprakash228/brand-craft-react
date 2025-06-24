import { lazy, type JSX } from "react";
import { useAuthStore } from "./components/Auth/AuthStore";

const Cup = lazy(() => import('../models/Cup/Cup'));
const CupSettings = lazy(() => import('../models/Cup/CupSettings'));

const Shirt = lazy(() => import('../models/Shirt/Shirt'));
const ShirtSettings = lazy(() => import('../models/Shirt/ShirtSettings'));

const SodaCan = lazy(() => import('../models/SodaCan/SodaCan'));
const SodaCanSettings = lazy(() => import('../models/SodaCan/SodaCanSettings'));

const WaterBottle = lazy(() => import('../models/WaterBottle/WaterBottle'));
const WaterBottleSettings = lazy(() => import('../models/WaterBottle/WaterBottleSettings'));

export const useHdrMap = () : Record<string, string> => {
  const { supabase } = useAuthStore();
  return {
    Apartment: supabase.storage.from('assets').getPublicUrl('hdris/lebombo_1k.hdr').data.publicUrl,
    City: supabase.storage.from('assets').getPublicUrl('hdris/docklands_02_1k.hdr').data.publicUrl,
    Dawn: supabase.storage.from('assets').getPublicUrl('hdris/kiara_1_dawn_1k.hdr').data.publicUrl,
    Forest: supabase.storage.from('assets').getPublicUrl('hdris/forest_slope_1k.hdr').data.publicUrl,
    Lounge: supabase.storage.from('assets').getPublicUrl('hdris/wooden_lounge_1k.hdr').data.publicUrl,
    Night: supabase.storage.from('assets').getPublicUrl('hdris/rogland_clear_night_1k.hdr').data.publicUrl,
    Park: supabase.storage.from('assets').getPublicUrl('hdris/rooitou_park_1k.hdr').data.publicUrl,
    Studio: supabase.storage.from('assets').getPublicUrl('hdris/cyclorama_hard_light_1k.hdr').data.publicUrl,
    Sunset: supabase.storage.from('assets').getPublicUrl('hdris/venice_sunset_1k.hdr').data.publicUrl,
    Warehouse: supabase.storage.from('assets').getPublicUrl('hdris/empty_warehouse_01_1k.hdr').data.publicUrl,
  };
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
  'T-shirt': [<Shirt />, <ShirtSettings />]
}
