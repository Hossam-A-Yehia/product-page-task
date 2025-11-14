import { useState } from 'react';
import { truncateText } from '../../utils/helpers';

interface ProductDescriptionProps {
  description: string;
  maxPreviewLength?: number;
}

export const ProductDescription = ({ 
  description, 
  maxPreviewLength = 220 
}: ProductDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const descriptionText = description
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const descriptionPreview = truncateText(descriptionText, maxPreviewLength);

  return (
    <div className="space-y-2 border-b border-primary-200 pb-4">
      <h2 className="text-lg font-bold text-primary-900">Description:</h2>
      <p className="text-sm text-primary-500 leading-relaxed">
        {isExpanded ? descriptionText : descriptionPreview}
        {descriptionText.length > maxPreviewLength && (
          <button
            type="button"
            className="ml-1 text-sm font-bold text-primary-900"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? 'See Less' : 'See More...'}
          </button>
        )}
      </p>
    </div>
  );
};
