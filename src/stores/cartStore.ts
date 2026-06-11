import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type ShopifyProduct } from "@/lib/shopify";

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: Array<{ name: string; value: string }>;
}

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  addItem: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,

      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find((i) => i.variantId === item.variantId);
        
        if (existingItem) {
          const newQuantity = existingItem.quantity + item.quantity;
          set({
            items: items.map((i) => 
              i.variantId === item.variantId ? { ...i, quantity: newQuantity } : i
            )
          });
        } else {
          set({ items: [...items, item] });
        }
      },

      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) return get().removeItem(variantId);
        const { items } = get();
        set({
          items: items.map((i) => 
            i.variantId === variantId ? { ...i, quantity } : i
          )
        });
      },

      removeItem: (variantId) => {
        const { items } = get();
        set({
          items: items.filter((i) => i.variantId !== variantId)
        });
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "joysmart-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
