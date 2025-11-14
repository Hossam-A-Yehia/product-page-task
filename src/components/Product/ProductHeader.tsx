interface ProductHeaderProps {
  brand?: string;
  title: string;
}

export const ProductHeader = ({ 
  brand = "John Lewis ANYDAY", 
  title 
}: ProductHeaderProps) => {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-wide text-primary-500">
        {brand}
      </p>
      <h1 className="product-title text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-primary-900">
        {title}
      </h1>
    </div>
  );
};
