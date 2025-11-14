import { useCartStore } from "../../store/cartStore";
import { Button } from "../Shared/Button";

export const CartDrawer = () => {
  const {
    items,
    isOpen,
    toggleCart,
    getTotalItems,
    getTotalPrice,
    removeItem,
  } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        className="flex-1 bg-black/40"
        aria-label="Close cart"
        onClick={toggleCart}
      />
      <aside className="w-full max-w-md h-full bg-white shadow-xl flex flex-col">
        <header className="flex items-center justify-between px-4 py-3 border-b border-primary-200">
          <div>
            <h2 className="text-base font-semibold text-primary-900">
              Shopping Cart
            </h2>
            <p className="text-xs text-primary-500">{totalItems} item(s)</p>
          </div>
          <Button
            variant="ghost"
            onClick={toggleCart}
            className="p-1 rounded-md text-primary-500 hover:text-primary-900 hover:bg-primary-50"
            aria-label="Close cart drawer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </header>
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {items.length === 0 ? (
            <p className="text-sm text-primary-500">Your cart is empty.</p>
          ) : (
            items.map((item) => {
              const displayPrice = item.salePrice || item.price;
              return (
                <div
                  key={item.id}
                  className="flex gap-3 border border-primary-100 rounded-md p-2"
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-16 h-16 rounded-md object-cover bg-primary-50"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-primary-900 truncate">
                      {item.productName}
                    </p>
                    <p className="text-xs text-primary-500 truncate">
                      {Object.entries(item.selectedVariations)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(" • ")}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-xs">
                      <span className="text-primary-500">
                        Qty: {item.quantity}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-primary-900">
                          ${displayPrice.toFixed(2)}
                        </span>
                        <Button
                          variant="ghost"
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-[11px] text-red-500 hover:text-red-600"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <footer className="border-t border-primary-200 px-4 py-3 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-primary-500">Subtotal</span>
            <span className="text-base font-semibold text-primary-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <Button variant="primary" size="lg" fullWidth>
            Go To Checkout
          </Button>
        </footer>
      </aside>
    </div>
  );
};
