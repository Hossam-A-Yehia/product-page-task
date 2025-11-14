import { formatPrice } from "../../utils/helpers";

interface ProductPricingProps {
  currentPrice: number;
  salePrice?: number;
  isOnSale: boolean;
  soldCount?: number;
  rating?: number;
}

export const ProductPricing = ({
  currentPrice,
  salePrice,
  isOnSale,
  soldCount = 1238,
  rating = 4.5,
}: ProductPricingProps) => {
  return (
    <div
      className="flex flex-wrap items-center gap-4 border-b-2 border-dashed border-primary-200 pb-4 justify-between"
      aria-label="Product price"
    >
      <div className="flex items-baseline gap-2">
        {isOnSale && (
          <span className="text-[18px] line-through text-primary-500">
            {formatPrice(currentPrice, "$")}
          </span>
        )}
        <span className="text-2xl font-bold text-primary-900">
          {formatPrice(salePrice || currentPrice, "$")}
        </span>
      </div>

      <div className="flex items-center gap-3 text-sm text-primary-500">
        <span>{soldCount.toLocaleString()} Sold</span>
        <span className="inline-flex items-center gap-1">
          <span className="text-primary-300">|</span>
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-bold text-primary-900 text-lg">
              {rating.toFixed(1)}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};
