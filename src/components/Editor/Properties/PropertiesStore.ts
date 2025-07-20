import { create } from "zustand";

export type Tab = {
    currentTab: string;
}

export type TabActions =  {
    setCurrentTab: (tab: string) => void;
    resetTab: () => void;
}

export const useTabState = create<Tab & TabActions>((set) => ({
    currentTab: '',
    setCurrentTab: (tab:string) => set(() => ({currentTab: tab})),
    resetTab: () => set(() => ({currentTab: ''}))
}))