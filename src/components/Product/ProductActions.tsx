import { Button } from "../Shared/Button";

interface ProductActionsProps {
  onAddToCart: () => void;
  onCheckout?: () => void;
}

export const ProductActions = ({
  onAddToCart,
  onCheckout,
}: ProductActionsProps) => {
  return (
    <>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={onAddToCart}
        >
          Add To Cart
        </Button>
        <Button variant="outline" size="xl" fullWidth onClick={onCheckout}>
          Checkout Now
        </Button>
      </div>

      <div className="mt-2">
        <button type="button" className="text-xs text-primary-500 underline">
          Delivery T&C
        </button>
      </div>
    </>
  );
};
