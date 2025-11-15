import type { ProductVariation, ProductVariationOption } from "../../types";

interface ColorSelectorProps {
  colorVariation: ProductVariation;
  selectedVariations: Record<string, string>;
  onColorSelect: (variationType: string, value: string) => void;
}

function getSelectedOption(
  variation: ProductVariation,
  selected: Record<string, string>
): ProductVariationOption | undefined {
  const selectedValue = selected[variation.name];
  return (
    variation.props.find((p) => p.name === selectedValue) || variation.props[0]
  );
}

export const ColorSelector = ({
  colorVariation,
  selectedVariations,
  onColorSelect,
}: ColorSelectorProps) => {
  const selectedColorOption = getSelectedOption(
    colorVariation,
    selectedVariations
  );

  const getColorValue = (colorName: string) => {
    const colorMap: Record<string, string> = {
      brown: "#8B4513",
      "royal brown": "#8B4513",
      beige: "#F5F5DC",
      black: "#000000",
      blue: "#4682B4",
      gray: "#D3D3D3",
      grey: "#D3D3D3",
      white: "#FFFFFF",
    };
    return colorMap[colorName.toLowerCase()] || "#CCCCCC";
  };

  return (
    <div className="space-y-2">
      <div className="flex items-baseline gap-2">
        <span className="text-base font-semibold text-primary-500">Color:</span>
        {selectedColorOption && (
          <span className="text-base font-bold text-primary-500">
            {selectedColorOption.name}
          </span>
        )}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
        {colorVariation.props.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onColorSelect(colorVariation.name, option.name)}
            className={
              `w-full h-[40px] p-1 rounded-md flex items-center justify-center cursor-pointer transition-all duration-150 ` +
              (selectedColorOption?.name === option.name
                ? "border-black shadow-md border-2"
                : "hover:border-primary-500")
            }
            aria-label={option.ariaLabel || option.name}
            aria-pressed={selectedColorOption?.name === option.name}
          >
            <span
              className="w-full h-full rounded-md"
              style={{
                backgroundColor: getColorValue(option.name),
                border:
                  option.name.toLowerCase() === "white"
                    ? "1px solid #E5E7EB"
                    : "none",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
