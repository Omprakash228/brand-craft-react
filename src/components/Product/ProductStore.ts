import { create } from "zustand";

type Product = {
  product: string
}

type Action = {
  setProduct: (product: Product['product']) => void
}

const useProductStore = create<Product & Action>((set) => ({
  product: 'Cup',
  setProduct: (product: string) => set(() => ({ product: product })),
}))

export default useProductStore;