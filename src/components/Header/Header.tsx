import { useState } from 'react';
import { TopPromoBar } from '../Shared/TopPromoBar';
import { Button } from '../Shared/Button';
import { SearchBar } from './SearchBar';
import { CartIcon } from './CartIcon';
import { HeartIcon } from './HeartIcon';
import { UserMenu } from './UserMenu';
import { CategoriesDropdown } from './CategoriesDropdown';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import LOGO from '../../assets/images/logo.svg';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCartStore();
  const itemCount = getTotalItems();
  const wishlistCount = useWishlistStore((state) => state.items.length);

  return (
    <header className="w-full">
      <TopPromoBar 
        message="New season coming! Discount 10% for all product! Checkout Now!"
      />
      <div className="bg-white">
        <div className="max-w-7xl border-b-2 border-dashed border-primary-200 mx-auto ">
          <div className="flex items-center justify-between h-14 md:h-16 px-3 md:px-0">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img
                  src={LOGO}
                  alt="logo"
                  className="h-7 w-auto md:h-8"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-4">
                <CategoriesDropdown />
                <UserMenu />
                <HeartIcon itemCount={wishlistCount} />
              </div>
              <CartIcon itemCount={itemCount} onClick={toggleCart} />
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
                style={{marginLeft:"0"}}
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
