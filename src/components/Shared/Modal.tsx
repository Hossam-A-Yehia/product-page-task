import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-lg p-6 max-w-md w-full">
          <button 
            onClick={onClose}
            className="float-right text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
