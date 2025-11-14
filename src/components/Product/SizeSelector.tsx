import type { ProductVariation, ProductVariationOption } from "../../types";

interface SizeSelectorProps {
  sizeVariation: ProductVariation;
  selectedVariations: Record<string, string>;
  onSizeSelect: (variationType: string, value: string) => void;
}

function getSelectedOption(
  variation: ProductVariation,
  selected: Record<string, string>
): ProductVariationOption | undefined {
  const selectedValue = selected[variation.name];
  return variation.props.find((p) => p.name === selectedValue) || variation.props[0];
}

export const SizeSelector = ({
  sizeVariation,
  selectedVariations,
  onSizeSelect,
}: SizeSelectorProps) => {
  const selectedSizeOption = getSelectedOption(
    sizeVariation,
    selectedVariations
  );

  return (
    <div className="space-y-2">
      <div className="flex items-baseline gap-2">
        <span className="text-base font-semibold text-primary-500">Size:</span>
        {selectedSizeOption && (
          <span className="text-base font-bold text-primary-500">
            {selectedSizeOption.name}
          </span>
        )}
        <button
          type="button"
          className="ml-auto text-xs text-primary-500 underline"
        >
          View Size Chart
        </button>
      </div>
      <div className="grid grid-cols-6 gap-3 max-w-md">
        {sizeVariation.props.map((option) => {
          const isSelected = selectedSizeOption?.name === option.name;
          return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSizeSelect(sizeVariation.name, option.name)}
            className={
              ` font-bold h-9 w-16 flex items-center justify-center border rounded-lg text-sm transition-colors duration-150 ` +
              (isSelected
                ? "border-black border-2 bg-[#EBEBEB] "
                : "border-primary-200 text-primary-900 hover:border-primary-400")
            }
            aria-label={option.ariaLabel || option.name}
            aria-pressed={
              isSelected
            }
          >
            {option.name}
          </button>
        )})}
      </div>
    </div>
  );
};
