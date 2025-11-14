import { Button } from '../Shared/Button';
import { cn } from '../../utils/helpers';

interface HeartIconProps {
  itemCount?: number;
  className?: string;
  onClick?: () => void;
  isFilled?: boolean;
}

export const HeartIcon = ({ 
  itemCount = 0, 
  className,
  onClick,
  isFilled = false
}: HeartIconProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn('relative', className)}
      aria-label={`Wishlist with ${itemCount} items`}
    >
      <svg className="w-6 h-6" fill={isFilled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
      
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </Button>
  );
};
