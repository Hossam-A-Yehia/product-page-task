
export interface ProductImage {
  id: string;
  url: string;
  alt: string; 
  width?: number;
  height?: number;
  isPrimary: boolean;
  loading?: 'lazy' | 'eager'; 
  sizes?: string; 
  srcSet?: string;
}

export interface ProductVariationOption {
  id: string;
  name: string;
  variation_id: string;
  value?: string;
  displayValue?: string;
  colorCode?: string;
  isAvailable?: boolean;
  priceModifier?: number;
  ariaLabel?: string;
  ariaSelected?: boolean;
}

export interface ProductVariation {
  id: string;
  name: string; 
  product_id: string;
  type: 'image' | 'button' | 'dropdown';
  props: ProductVariationOption[];
  ariaLabel?: string;
  required?: boolean;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  price: number;
  sale_price: number;
  quantity: number;
  taager_code?: string;
  variation_props: Array<{
    id: string;
    variation: string;
    variation_prop: string;
    product_variant_id: string;
  }>;
  isAvailable: boolean;
  sku?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  thumb?: string;
  show_in_header: boolean;
  position: number;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
  verified: boolean;
  reviewBody?: string;
  datePublished?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sale_price: number;
  thumb: string;
  images: string[];
  variations: ProductVariation[];
  variants: ProductVariant[];
  categories: ProductCategory[];
  store_id: string;
  position: number;
  hidden: boolean;
  quantity: number;
  track_stock: boolean;
  disable_orders_for_no_stock: boolean;
  buy_now_text: string;
  is_fixed_bottom_buy: boolean;
  is_one_page_checkout: boolean;
  is_quantity_hidden: boolean;
  is_header_hidden: boolean;
  is_free_shipping: boolean;
  custom_currency: string;
  show_landing_in_same_page: boolean;
  is_checkout_before_description: boolean;
  hide_related_products: boolean;
  fake_visitors_min: number;
  fake_visitors_max: number;
  fake_timer_hours: number;
  is_taager_submit_active: boolean;
  is_ecombo_submit_active: boolean;
  is_mosaweq_submit_active: boolean;
  is_alturky_submit_active: boolean;
  is_jamaica_submit_active: boolean;
  is_engzny_submit_active: boolean;
  is_digital: boolean;
  is_cloaking_active: boolean;
  created_at: string;
  updated_at: string;
seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  averageRating?: number;
  totalReviews?: number;
  isInStock?: boolean;
  minQuantity?: number;
  maxQuantity?: number;
  ariaLabel?: string;
  longDescription?: string;
}

export interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  price: number;
  sale_price: number;
  thumb: string;
  averageRating?: number;
  totalReviews?: number;
  isInStock: boolean;
}

export interface OptimizedImage {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
  loading: 'lazy' | 'eager';
  decoding: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export interface ProductStructuredData {
  '@context': 'https://schema.org/';
  '@type': 'Product';
  name: string;
  description: string;
  image: string[];
  brand: {
    '@type': 'Brand';
    name: string;
  };
  offers: {
    '@type': 'Offer';
    price: number;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
  };
}
