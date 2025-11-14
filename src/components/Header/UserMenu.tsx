import { cn } from '../../utils/helpers';

interface UserMenuProps {
  className?: string;
}

export const UserMenu = ({ 
  className,
}: UserMenuProps) => {
    return (
      <button
        className={cn(
          'flex items-center space-x-1 text-sm text-primary-700 hover:text-primary-900 transition-colors',
          className
        )}
        aria-label="Sign in"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="hidden sm:inline font-semibold">Sign In</span>
      </button>
    );
  }
