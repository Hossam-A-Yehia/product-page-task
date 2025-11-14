import { useProductStore } from '../../store/productStore';
import { useCartStore } from '../../store/cartStore';
import { SkeletonLoader } from '../Shared/SkeletonLoader';
import { ProductHeader } from './ProductHeader';
import { ProductPricing } from './ProductPricing';
import { ProductDescription } from './ProductDescription';
import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import { ProductActions } from './ProductActions';
import type { Product, ProductVariation } from '../../types';

function getVariation(product: Product | null, name: string): ProductVariation | undefined {
  if (!product) return undefined;
  return product.variations.find((v) => v.name.toLowerCase() === name.toLowerCase());
}

export const ProductInfo = () => {
  const {
    product,
    selectedVariations,
    selectedVariant,
    setSelectedVariation,
    getCurrentPrice,
    getCurrentSalePrice,
  } = useProductStore();

  const { addItem, isOpen, toggleCart } = useCartStore();

  if (!product) {
    return (
      <div className="space-y-4">
        <SkeletonLoader variant="text" lines={2} />
        <SkeletonLoader variant="text" lines={3} />
        <SkeletonLoader variant="text" lines={4} />
      </div>
    );
  }

  const colorVariation = getVariation(product, 'color');
  const sizeVariation = getVariation(product, 'size');

  const currentPrice = getCurrentPrice();
  const currentSalePrice = getCurrentSalePrice();
  const isOnSale = !!currentSalePrice && currentSalePrice < currentPrice;

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;    
    const price = currentSalePrice || currentPrice;

    let cartImage = product.thumb;
    const colorNameKey = colorVariation?.name;
    if (colorVariation && colorNameKey) {
      const selectedColorName = selectedVariations[colorNameKey];
      const colorOption =
        colorVariation.props.find((p) => p.name === selectedColorName) ||
        colorVariation.props[0];
      if (colorOption?.value) {
        cartImage = colorOption.value;
      }
    }

    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      productName: product.name,
      productSlug: product.slug,
      productImage: cartImage,
      price: currentPrice,
      salePrice: currentSalePrice,
      quantity: 1,
      maxQuantity: selectedVariant.quantity || 99,
      selectedVariations,
      itemTotal: price,
      itemSavings: isOnSale ? currentPrice - price : 0,
    });

    if (!isOpen) {
      toggleCart();
    }
  };

  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <ProductHeader title={product.name} />
      
      <ProductPricing 
        currentPrice={currentPrice}
        salePrice={currentSalePrice}
        isOnSale={isOnSale}
        rating={product.averageRating}
      />

      <ProductDescription description={product.description || ''} />

      {colorVariation && (
        <ColorSelector 
          colorVariation={colorVariation}
          selectedVariations={selectedVariations}
          onColorSelect={setSelectedVariation}
        />
      )}

      {sizeVariation && (
        <SizeSelector 
          sizeVariation={sizeVariation}
          selectedVariations={selectedVariations}
          onSizeSelect={setSelectedVariation}
        />
      )}

      <ProductActions 
        onAddToCart={handleAddToCart}
      />
    </section>
  );
};
