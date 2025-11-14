import { useState } from 'react';
import { TopPromoBar } from '../Shared/TopPromoBar';
import { Button } from '../Shared/Button';
import { SearchBar } from './SearchBar';
import { CartIcon } from './CartIcon';
import { HeartIcon } from './HeartIcon';
import { UserMenu } from './UserMenu';
import { CategoriesDropdown } from './CategoriesDropdown';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full">
      <TopPromoBar 
        message="New season coming! Discount 10% for all product! Checkout Now!"
        dismissible={true}
      />
      <div className="bg-white">
        <div className="max-w-7xl border-b-2 border-dashed border-primary-200 mx-auto ">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img src="/logo.svg" alt="logo" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-4">
              <CategoriesDropdown />
              <UserMenu />
              <HeartIcon />
              <CartIcon />
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </div>
          </div>
          {isSearchOpen && (
            <div className="md:hidden py-4 border-t border-primary-200">
              <SearchBar />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
