import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  productId: string;
  productName: string;
  productSlug: string;
  productImage?: string;
}

interface WishlistStore {
  items: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (productId: string) => boolean;
  getTotalItems: () => number;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      toggleWishlist: (item) =>
        set((state) => {
          const exists = state.items.some(
            (wishlistItem) => wishlistItem.productId === item.productId
          );

          if (exists) {
            return {
              items: state.items.filter(
                (wishlistItem) => wishlistItem.productId !== item.productId
              ),
            };
          }

          return {
            items: [...state.items, item],
          };
        }),

      isInWishlist: (productId) => {
        const { items } = get();
        return items.some((wishlistItem) => wishlistItem.productId === productId);
      },

      getTotalItems: () => {
        const { items } = get();
        return items.length;
      },
    }),
    {
      name: 'wishlist-storage',
      version: 1,
    }
  )
);
