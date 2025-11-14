import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useProductStore } from '../../store/productStore';
import { useWishlistStore } from '../../store/wishlistStore';
import { toast } from 'sonner';
import { ProductShareModal } from './ProductShareModal';
import type { ProductVariation } from '../../types';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  thumbImage?: string;
  variations?: ProductVariation[];
}

export const ProductImageGallery = ({ 
  images, 
  productName, 
  thumbImage,
  variations,
}: ProductImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { product } = useProductStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  const isWishlisted = product ? isInWishlist(product.id) : false;

  const variationImages =
    variations
      ?.find((v) => v.name.toLowerCase() === 'color')
      ?.props
      .map((p) => p.value)
      .filter((url): url is string => Boolean(url)) ?? [];

  const allImages = Array.from(
    new Set([
      ...(thumbImage ? [thumbImage] : []),
      ...images,
      ...variationImages,
    ])
  );

  const currentImage = allImages[selectedImageIndex] || thumbImage || '';

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleOpenShare = () => {
    setIsShareOpen(true);
  };

  const handleCloseShare = () => {
    setIsShareOpen(false);
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    toggleWishlist({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      productImage: product.thumb,
    });

    toast.success(
      isWishlisted ? 'Removed from wishlist' : 'Added to wishlist'
    );
  };

  if (!currentImage) {
    return (
      <div className="w-full aspect-[4/5] bg-primary-50 rounded-md flex items-center justify-center text-primary-300 border border-primary-200">
        <span className="text-lg">No Image Available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4 lg:h-full">
      <div className="flex items-stretch">
        <div className="relative group flex-1">
          <div 
            className={`
              relative w-full bg-primary-50 rounded-md overflow-hidden
              ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}
              h-[420px] sm:h-[520px] lg:h-full
            `}
            onClick={handleImageClick}
          >
            <img
              src={currentImage}
              alt={`${productName} - Image ${selectedImageIndex + 1}`}
              className={`
                w-full h-full object-fill md:object-cover transition-transform duration-300
                ${isZoomed ? 'scale-150' : 'scale-100 lg:hover:scale-105'}
              `}
              loading="lazy"
            />
            {allImages.length > 1 && (
              <div className="lg:hidden absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded-md text-xs">
                {selectedImageIndex + 1} / {allImages.length}
              </div>
            )}
          </div>
        </div>

        <aside className=" flex flex-col justify-between items-center ml-4 py-2">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={handleOpenShare}
              className="w-11 h-11 bg-[#F2F2F2] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition"
              aria-label="Share product"
            >
              <svg className="w-5 h-5 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
            <button
              onClick={handleToggleWishlist}
              className="w-11 h-11 bg-[#F2F2F2] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition"
              aria-label="Toggle wishlist"
            >
              <svg
                className={`w-5 h-5 ${isWishlisted ? 'text-red-500' : 'text-primary-900'}`}
                fill={isWishlisted ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          {allImages.length > 1 && (
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handlePrevious}
                className="w-11 h-11 bg-[#F2F2F2] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-5 h-5 text-primary-900" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 bg-[#F2F2F2] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-5 h-5 text-primary-900" />
              </button>
            </div>
          )}
        </aside>
      </div>

      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`
                flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-200
                ${selectedImageIndex === index 
                  ? 'border-black shadow-md' 
                  : 'border-primary-200 hover:border-primary-400'
                }
              `}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {allImages.length > 1 && (
        <div className="flex justify-center gap-2 md:hidden">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`
                w-2 h-2 rounded-full transition-colors duration-200
                ${selectedImageIndex === index ? 'bg-primary-900' : 'bg-primary-300'}
              `}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <ProductShareModal
        isOpen={isShareOpen}
        onClose={handleCloseShare}
        productName={productName}
        imageUrl={currentImage}
      />
    </div>
  );
};
