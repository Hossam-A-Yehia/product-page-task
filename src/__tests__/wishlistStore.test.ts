import { useWishlistStore } from '../store/wishlistStore';

const createWishlistItem = () => ({
  productId: 'product-1',
  productName: 'Test Product',
  productSlug: 'test-product',
  productImage: '/image.jpg',
});

beforeEach(() => {
  useWishlistStore.setState({ items: [] });
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.clear();
  }
});

test('toggleWishlist adds and removes items and getTotalItems reflects count', () => {
  const { toggleWishlist, isInWishlist, getTotalItems } = useWishlistStore.getState();
  const item = createWishlistItem();

  toggleWishlist(item);
  expect(isInWishlist('product-1')).toBe(true);
  expect(getTotalItems()).toBe(1);

  toggleWishlist(item);
  expect(isInWishlist('product-1')).toBe(false);
  expect(getTotalItems()).toBe(0);
});
