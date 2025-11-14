import { cn } from '../../utils/helpers';

interface TopPromoBarProps {
  message?: string;
  className?: string;
  dismissible?: boolean;
}

export const TopPromoBar = ({ 
  message = "Free shipping on orders over $50 | 30-day returns",
  className,
  dismissible = false 
}: TopPromoBarProps) => {
  return (
    <div className={cn(
      'bg-cta-primary text-white text-center py-2 text-sm relative',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-medium">{message}</p>
        {dismissible && (
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Dismiss promo bar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
