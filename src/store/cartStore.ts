import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { CartItem, CartSummary } from '../types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;

  addItem: (item: Omit<CartItem, 'id' | 'addedAt' | 'updatedAt'>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCartSummary: () => CartSummary;
}

export const useCartStore = create<CartStore>()(
  persist(
    immer((set, get) => ({
      items: [],
      isOpen: false,

      addItem: (newItem) =>
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            item => item.productId === newItem.productId && 
                   item.variantId === newItem.variantId
          );

          if (existingItemIndex >= 0) {
            state.items[existingItemIndex].quantity += newItem.quantity;
            state.items[existingItemIndex].updatedAt = new Date().toISOString();
          } else {
            const cartItem: CartItem = {
              ...newItem,
              id: `${newItem.productId}-${newItem.variantId}-${Date.now()}`,
              addedAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            };
            state.items.push(cartItem);
          }
        }),

      removeItem: (itemId) =>
        set((state) => {
          state.items = state.items.filter(item => item.id !== itemId);
        }),

      updateQuantity: (itemId, quantity) =>
        set((state) => {
          const item = state.items.find(item => item.id === itemId);
          if (item) {
            if (quantity <= 0) {
              state.items = state.items.filter(item => item.id !== itemId);
            } else {
              item.quantity = Math.min(quantity, item.maxQuantity);
              item.updatedAt = new Date().toISOString();
            }
          }
        }),

      clearCart: () =>
        set((state) => {
          state.items = [];
        }),

      toggleCart: () =>
        set((state) => {
          state.isOpen = !state.isOpen;
        }),

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          const price = item.salePrice || item.price;
          return total + (price * item.quantity);
        }, 0);
      },

      getCartSummary: () => {
        const { items } = get();
        const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
        const saleTotal = items.reduce((total, item) => {
          const price = item.salePrice || item.price;
          return total + (price * item.quantity);
        }, 0);
        
        return {
          subtotal,
          tax: 0,
          shipping: 0,
          discount: subtotal - saleTotal,
          total: saleTotal,
          itemCount: items.reduce((total, item) => total + item.quantity, 0),
          totalSavings: subtotal - saleTotal,
        };
      },
    })),
    {
      name: 'cart-storage',
      version: 1,
    }
  )
);
