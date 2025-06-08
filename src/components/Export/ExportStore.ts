import { create } from "zustand";

type Export = {
  aspectRatio: string
}

type Action = {
  setAspectRatio: (ratio: Export['aspectRatio']) => void
}

const useExportStore = create<Export & Action>((set) => ({
  aspectRatio: 'Default',
  setAspectRatio: (ratio: string) => set(() => ({ aspectRatio: ratio })),
}))

export default useExportStore;