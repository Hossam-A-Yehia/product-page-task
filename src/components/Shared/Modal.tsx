import { Dialog, DialogPanel, DialogBackdrop, DialogTitle } from '@headlessui/react';
import { cn } from '../../utils/helpers';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  className?: string;
}

export const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title,
  size = 'md',
  showCloseButton = true,
  className 
}: ModalProps) => {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" 
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel 
          className={cn(
            'bg-white rounded-lg shadow-xl transform transition-all duration-300',
            'w-full',
            sizeClasses[size],
            className
          )}
        >
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 pb-4">
              {title && (
                <DialogTitle className="text-lg font-semibold text-primary-900">
                  {title}
                </DialogTitle>
              )}
              {showCloseButton && (
                <button 
                  onClick={onClose}
                  className="text-primary-500 hover:text-primary-700 transition-colors p-1 rounded-md hover:bg-primary-50"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}
          <div className={cn('p-6', (title || showCloseButton) && 'pt-0')}>
            {children}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
