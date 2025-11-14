import { cn } from '../../utils/helpers';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <nav className={cn('mt-4', className)} aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 text-primary-400 mx-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              
              {item.current ? (
                <span className="text-primary-900 font-medium">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-primary-600 hover:text-primary-900 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
