import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { cn } from '../../utils/helpers';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface CategoriesDropdownProps {
  className?: string;
  categories?: Category[];
}

// Mock categories based on API_RESPONSE data
const defaultCategories: Category[] = [
  { id: '1', name: 'Sneakers', slug: 'sneakers' },
  { id: '2', name: 'Mules', slug: 'mules' },
  { id: '3', name: 'Women Heels', slug: 'heels' },
  { id: '4', name: 'Moc Toe Boots', slug: 'moc-toe-boots' },
];

export const CategoriesDropdown = ({ 
  className,
  categories = defaultCategories 
}: CategoriesDropdownProps) => {
  return (
    <Menu as="div" className={cn('relative', className)}>
      <MenuButton className="flex items-center space-x-1 text-sm text-primary-700 font-semibold hover:text-primary-900 transition-colors">
        <span>Categories</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </MenuButton>

      <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="py-1">
          {categories.map((category) => (
            <MenuItem key={category.id}>
              {({ focus }) => (
                <a
                  href={`/category/${category.slug}`}
                  className={cn(
                    'block px-4 py-2 text-sm text-primary-700',
                    focus ? 'bg-primary-50' : ''
                  )}
                >
                  {category.name}
                </a>
              )}
            </MenuItem>
          ))}
          
          <MenuItem>
            {({ focus }) => (
              <a
                href="/categories"
                className={cn(
                  'block px-4 py-2 text-sm font-medium text-primary-900 border-t border-primary-200 mt-1',
                  focus ? 'bg-primary-50' : ''
                )}
              >
                View All Categories
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
