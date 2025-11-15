import { cn } from "../../utils/helpers";

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
    <nav className={cn("mt-4", className)} aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        <ol className="flex flex-wrap items-center gap-2 py-3 text-xs sm:text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.current ? (
                <span className="text-primary-900 font-medium text-[10px] md:text-[13px]">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-primary-600 hover:text-primary-900 transition-colors text-[10px] md:text-[13px]"
                >
                  {item.label}
                </a>
              )}

              {index < items.length - 1 && (
                <span className="flex items-center flex-nowrap ml-2">
                  <svg
                    className="w-4 h-4 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
