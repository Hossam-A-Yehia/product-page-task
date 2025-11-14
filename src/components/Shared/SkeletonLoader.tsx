import { cn } from '../../utils/helpers';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'default' | 'text' | 'circle' | 'image';
  lines?: number;
}

export const SkeletonLoader = ({ 
  className, 
  variant = 'default',
  lines = 1 
}: SkeletonLoaderProps) => {
  const baseClasses = 'animate-pulse bg-primary-200 rounded';
  
  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              baseClasses,
              'h-4',
              index === lines - 1 ? 'w-3/4' : 'w-full',
              className
            )}
          />
        ))}
      </div>
    );
  }

  const variantClasses = {
    default: 'h-4 w-full',
    text: 'h-4 w-full',
    circle: 'h-12 w-12 rounded-full',
    image: 'aspect-[4/5] w-full',
  };

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    />
  );
};
