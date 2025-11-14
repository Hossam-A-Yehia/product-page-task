import { useEffect } from "react";
import { useFetchProduct } from "../../hooks/useProduct";
import { useProductStore } from "../../store/productStore";
import { SkeletonLoader } from "../Shared/SkeletonLoader";
import { ProductInfo } from "./ProductInfo";
import { ProductImageGallery } from "./ProductImageGallery";

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage = ({ slug }: ProductDetailPageProps) => {
  const { data, isLoading, error } = useFetchProduct(slug);
  const { product, setProduct, setLoading, setError } = useProductStore();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (data) {
      setProduct(data);
      setError(null);
    }
  }, [data, setProduct, setError]);

  useEffect(() => {
    if (error) {
      setError(error.message || "Failed to load product");
    }
  }, [error, setError]);

  if (isLoading && !data) {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-[100px]">
        <div className="lg:col-span-7 lg:h-full">
          <SkeletonLoader variant="image" className="rounded-md" />
          <div className="mt-4 flex gap-3">
            <SkeletonLoader variant="image" className="w-20 h-20" />
            <SkeletonLoader variant="image" className="w-20 h-20" />
            <SkeletonLoader variant="image" className="w-20 h-20" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <ProductInfo />
        </div>
      </section>
    );
  }

  if (error && !data) {
    return (
      <section className="py-16 text-center text-sm text-red-600">
        Failed to load product. Please try again later.
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-[100px]">
      <div className="lg:col-span-7 lg:h-full">
        {product ? (
          <ProductImageGallery 
            images={product.images || []}
            productName={product.name}
            thumbImage={product.thumb}
            variations={product.variations}
          />
        ) : (
          <div className="space-y-4">
            <SkeletonLoader variant="image" />
            <div className="flex gap-3">
              {[...Array(4)].map((_, i) => (
                <SkeletonLoader key={i} variant="image" className="w-20 h-20" />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="lg:col-span-5">
        <ProductInfo />
      </div>
    </section>
  );
};
