import {
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
  TwitterShareButton,
  XIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
import { Modal } from "../Shared/Modal";

interface ProductShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  imageUrl?: string;
}

export const ProductShareModal = ({
  isOpen,
  onClose,
  productName,
  imageUrl,
}: ProductShareModalProps) => {
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://example.com";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Product" size="sm">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {imageUrl && (
            <div className="w-16 h-16 rounded-md overflow-hidden bg-primary-50">
              <img
                src={imageUrl}
                alt={productName}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary-900 line-clamp-2">
              {productName}
            </p>
            <p className="text-xs text-primary-500 mt-1">Share this product</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-between">
          <TwitterShareButton url={shareUrl} title={productName}>
            <XIcon size={40} round />
          </TwitterShareButton>

          <TelegramShareButton url={shareUrl} title={productName}>
            <TelegramIcon size={40} round />
          </TelegramShareButton>

          <WhatsappShareButton url={shareUrl} title={productName}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <PinterestShareButton
            media={imageUrl || ""}
            url={shareUrl}
            description={`Check out this product: ${productName}`}
          >
            <PinterestIcon size={40} round />
          </PinterestShareButton>

          <EmailShareButton url={shareUrl} subject={productName}>
            <EmailIcon size={40} round />
          </EmailShareButton>
        </div>
      </div>
    </Modal>
  );
};
