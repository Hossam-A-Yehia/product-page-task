export interface CartItem {
  id: string; 
  productId: string;
  variantId: string;
  productName: string;
  productSlug: string; 
  productImage: string;
  price: number;
  salePrice?: number;
  quantity: number;
  maxQuantity: number;
  
  selectedVariations: Record<string, string>; 
  itemTotal: number;
  itemSavings?: number;
    ariaLabel?: string;
  addedAt: string;
  updatedAt: string;
}

export interface CartSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  itemCount: number;
  totalSavings: number;
    isEligibleForFreeShipping?: boolean;
  shippingThreshold?: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean; 
  summary: CartSummary;
  lastUpdated: string;
  version: number;
  recentlyAdded?: string[];
  announceMessage?: string;
}

export interface CartPersistConfig {
  name: string;
  version: number;
  partialize: (state: CartState) => Partial<CartState>;
  migrate: (persistedState: any, version: number) => CartState;
}

export interface CartAnalytics {
  cartId: string;
  sessionId: string;
  events: CartEvent[];
}

export interface CartEvent {
  type: 'add_item' | 'remove_item' | 'update_quantity' | 'clear_cart' | 'checkout_start';
  timestamp: string;
  productId?: string;
  variantId?: string;
  quantity?: number;
  value?: number;
}

export interface CartItemAPI {
  product_id: string;
  variant_id: string;
  quantity: number;
  selected_variations: Record<string, string>;
}

export interface CartValidation {
  isValid: boolean;
  errors: CartValidationError[];
  warnings: CartValidationWarning[];
}

export interface CartValidationError {
  itemId: string;
  type: 'out_of_stock' | 'max_quantity_exceeded' | 'product_unavailable';
  message: string;
  ariaLive?: 'polite' | 'assertive';
}

export interface CartValidationWarning {
  itemId: string;
  type: 'low_stock' | 'price_changed' | 'shipping_delay';
  message: string;
  ariaLive?: 'polite' | 'assertive';
}

export interface CheckoutData {
  items: CartItemAPI[];
  summary: CartSummary;
    isValid: boolean;
  validationErrors: CartValidationError[];
  conversionValue: number;
  currency: string;
}

export interface CartNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number; 
    ariaLive: 'polite' | 'assertive';
  ariaAtomic?: boolean;
  role?: 'alert' | 'status';
    actions?: Array<{
    label: string;
    onClick: () => void;
    ariaLabel?: string;
  }>;
}

export interface CartItemUpdate {
  id: string;
  quantity?: number;
  selectedVariations?: Record<string, string>;
  optimistic?: boolean;
}
export interface CartDrawerState {
  isOpen: boolean;
  isAnimating: boolean;
    visibleItems: CartItem[];
  totalItems: number;
    focusedItemId?: string;
  announceChanges: boolean;
}
