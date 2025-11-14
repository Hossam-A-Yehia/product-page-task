interface SkeletonLoaderProps {
  className?: string;
}

export const SkeletonLoader = ({ className = '' }: SkeletonLoaderProps) => {
  return (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
  );
};
