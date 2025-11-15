import { useCartStore } from '../store/cartStore';

const createBaseItem = () => ({
  productId: 'product-1',
  variantId: 'variant-1',
  productName: 'Test Product',
  productSlug: 'test-product',
  productImage: '/image.jpg',
  price: 100,
  salePrice: 80,
  quantity: 1,
  maxQuantity: 5,
  selectedVariations: { color: 'black', size: '40' },
  itemTotal: 80,
  itemSavings: 20,
});

beforeEach(() => {
  useCartStore.setState({ items: [], isOpen: false });
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.clear();
  }
});

test('addItem merges quantities for same product and variant', () => {
  const { addItem, getTotalItems } = useCartStore.getState();
  const item = createBaseItem();

  addItem(item);
  addItem({ ...item, quantity: 2 });

  const state = useCartStore.getState();
  expect(state.items).toHaveLength(1);
  expect(state.items[0].quantity).toBe(3);
  expect(getTotalItems()).toBe(3);
});

test('getTotalPrice uses salePrice when available', () => {
  const { addItem, getTotalPrice } = useCartStore.getState();
  const item = createBaseItem();

  addItem({ ...item, quantity: 2 });

  expect(getTotalPrice()).toBe(2 * 80);
});

test('updateQuantity can remove items when quantity is zero', () => {
  const { addItem, updateQuantity } = useCartStore.getState();
  const item = createBaseItem();

  addItem(item);
  const id = useCartStore.getState().items[0].id;

  updateQuantity(id, 0);

  expect(useCartStore.getState().items).toHaveLength(0);
});
