import { Button as HeadlessButton } from '@headlessui/react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({ children, onClick, disabled, className = '' }: ButtonProps) => {
  return (
    <HeadlessButton
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 ${className}`}
    >
      {children}
    </HeadlessButton>
  );
};
