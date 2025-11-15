import { cn } from '../../utils/helpers';
import { Button } from '../Shared/Button';

interface CartIconProps {
  itemCount?: number;
  className?: string;
  onClick?: () => void;
}

export const CartIcon = ({ 
  itemCount = 0, 
  className,
  onClick 
}: CartIconProps) => {
  return (
    <Button
    variant="ghost"
      onClick={onClick}
      className={cn(
        'relative text-primary-500 hover:text-primary-700 transition-colors',
        className
      )}
      aria-label={`Shopping cart with ${itemCount} items`}
      style={{marginLeft:0, paddingLeft:"0"}}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4m-8 6h4" 
        />
      </svg>
      
      {itemCount > 0 && (
        <span className="absolute top-0 right-[7px] bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </Button>
  );
};
