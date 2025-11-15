import { cn } from "../../utils/helpers";
import { Button } from "../Shared/Button";
import CART_ICON from "../../assets/images/cart.svg";
interface CartIconProps {
  itemCount?: number;
  className?: string;
  onClick?: () => void;
}

export const CartIcon = ({
  itemCount = 0,
  className,
  onClick,
}: CartIconProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "relative text-primary-500 hover:text-primary-700 transition-colors",
        className
      )}
      aria-label={`Shopping cart with ${itemCount} items`}
      style={{ marginLeft: 0, paddingLeft: "0" }}
    >
      <img src={CART_ICON} alt="cart" className="h-6 w-6" />

      {itemCount > 0 && (
        <span className="absolute top-0 right-[7px] bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </Button>
  );
};
