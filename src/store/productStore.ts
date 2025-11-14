import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Product, ProductVariant } from '../types';

interface ProductStore {
  product: Product | null;
  loading: boolean;
  error: string | null;
  selectedVariations: Record<string, string>;
  selectedVariant: ProductVariant | null;

  setProduct: (product: Product) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSelectedVariation: (variationType: string, value: string) => void;
  clearSelectedVariations: () => void;
  getCurrentPrice: () => number;
  getCurrentSalePrice: () => number | undefined;
}

export const useProductStore = create<ProductStore>()(
  immer((set, get) => ({
    product: null,
    loading: false,
    error: null,
    selectedVariations: {},
    selectedVariant: null,

    setProduct: (product) =>
      set((state) => {
        state.product = product;

        const selected: Record<string, string> = {};

        if (product.variations && product.variations.length > 0) {
          product.variations.forEach((variation) => {
            const firstOption = variation.props[0];
            if (firstOption) {
              selected[variation.name] = firstOption.name;
            }
          });
        }
        state.selectedVariations = selected;
        if (product.variants && product.variants.length > 0) {
          state.selectedVariant =
            product.variants.find((variant) =>
              variant.variation_props.every(
                (prop) => selected[prop.variation] === prop.variation_prop
              )
            ) || null;
        } else {
          state.selectedVariant = null;
        }
      }),

    setLoading: (loading) =>
      set((state) => {
        state.loading = loading;
      }),

    setError: (error) =>
      set((state) => {
        state.error = error;
      }),

    setSelectedVariation: (variationType, value) =>
      set((state) => {
        state.selectedVariations[variationType] = value;
        
        if (state.product) {
          state.selectedVariant = state.product.variants.find(variant =>
            variant.variation_props.every(prop =>
              state.selectedVariations[prop.variation] === prop.variation_prop
            )
          ) || null;
        }
      }),

    clearSelectedVariations: () =>
      set((state) => {
        state.selectedVariations = {};
        state.selectedVariant = null;
      }),

    getCurrentPrice: () => {
      const { product, selectedVariant } = get();
      if (selectedVariant && selectedVariant.price > 0) {
        return selectedVariant.price;
      }
      return product?.price || 0;
    },

    getCurrentSalePrice: () => {
      const { product, selectedVariant } = get();
      if (selectedVariant && selectedVariant.sale_price > 0) {
        return selectedVariant.sale_price;
      }
      return product?.sale_price || undefined;
    },
  }))
);
