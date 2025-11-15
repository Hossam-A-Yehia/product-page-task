import { useProductStore } from '../store/productStore';
import type { Product } from '../types';

const createTestProduct = (): Product => {
  const variations = [
    {
      id: 'variation-color',
      name: 'color',
      product_id: 'product-1',
      type: 'image' as const,
      props: [
        { id: 'color-brown', name: 'brown', variation_id: 'variation-color' },
        { id: 'color-black', name: 'black', variation_id: 'variation-color' },
      ],
    },
    {
      id: 'variation-size',
      name: 'size',
      product_id: 'product-1',
      type: 'button' as const,
      props: [
        { id: 'size-38', name: '38', variation_id: 'variation-size' },
        { id: 'size-40', name: '40', variation_id: 'variation-size' },
      ],
    },
  ];

  const variants = [
    {
      id: 'variant-1',
      product_id: 'product-1',
      price: 100,
      sale_price: 80,
      quantity: 10,
      variation_props: [
        {
          id: 'vp-1',
          variation: 'color',
          variation_prop: 'brown',
          product_variant_id: 'variant-1',
        },
        {
          id: 'vp-2',
          variation: 'size',
          variation_prop: '38',
          product_variant_id: 'variant-1',
        },
      ],
      isAvailable: true,
    },
    {
      id: 'variant-2',
      product_id: 'product-1',
      price: 120,
      sale_price: 90,
      quantity: 5,
      variation_props: [
        {
          id: 'vp-3',
          variation: 'color',
          variation_prop: 'black',
          product_variant_id: 'variant-2',
        },
        {
          id: 'vp-4',
          variation: 'size',
          variation_prop: '40',
          product_variant_id: 'variant-2',
        },
      ],
      isAvailable: true,
    },
  ];

  return {
    id: 'product-1',
    name: 'Test Product',
    slug: 'test-product',
    description: 'Test description',
    price: 100,
    sale_price: 80,
    thumb: '/image.jpg',
    images: [],
    variations,
    variants,
    categories: [],
    store_id: 'store-1',
    position: 0,
    hidden: false,
    quantity: 0,
    track_stock: false,
    disable_orders_for_no_stock: false,
    buy_now_text: 'Buy now',
    is_fixed_bottom_buy: false,
    is_one_page_checkout: false,
    is_quantity_hidden: false,
    is_header_hidden: false,
    is_free_shipping: false,
    custom_currency: '',
    show_landing_in_same_page: false,
    is_checkout_before_description: false,
    hide_related_products: false,
    fake_visitors_min: 0,
    fake_visitors_max: 0,
    fake_timer_hours: 0,
    is_taager_submit_active: false,
    is_ecombo_submit_active: false,
    is_mosaweq_submit_active: false,
    is_alturky_submit_active: false,
    is_jamaica_submit_active: false,
    is_engzny_submit_active: false,
    is_digital: false,
    is_cloaking_active: false,
    created_at: '',
    updated_at: '',
  };
};

beforeEach(() => {
  useProductStore.setState({
    product: null,
    loading: false,
    error: null,
    selectedVariations: {},
    selectedVariant: null,
  });
});

test('setProduct initializes selected variations and selectedVariant', () => {
  const product = createTestProduct();
  const { setProduct } = useProductStore.getState();

  setProduct(product);

  const state = useProductStore.getState();

  expect(state.product?.id).toBe('product-1');
  expect(state.selectedVariations).toEqual({ color: 'brown', size: '38' });
  expect(state.selectedVariant?.id).toBe('variant-1');
});

test('setSelectedVariation updates selectedVariant and pricing helpers', () => {
  const product = createTestProduct();
  const { setProduct, setSelectedVariation, getCurrentPrice, getCurrentSalePrice } =
    useProductStore.getState();

  setProduct(product);

  setSelectedVariation('color', 'black');
  setSelectedVariation('size', '40');

  const state = useProductStore.getState();

  expect(state.selectedVariant?.id).toBe('variant-2');
  expect(getCurrentPrice()).toBe(120);
  expect(getCurrentSalePrice()).toBe(90);
});
