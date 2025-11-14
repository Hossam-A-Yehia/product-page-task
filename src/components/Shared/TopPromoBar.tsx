import { cn } from '../../utils/helpers';

interface TopPromoBarProps {
  message?: string;
  className?: string;
}

export const TopPromoBar = ({ 
  message = "Free shipping on orders over $50 | 30-day returns",
  className,
}: TopPromoBarProps) => {
  return (
    <div className={cn(
      'bg-cta-primary text-white text-center py-2 text-xs md:text-sm relative',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-medium text-xs md:text-sm" >{message}</p>
      </div>
    </div>
  );
};
