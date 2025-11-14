import { useState } from "react";
import { cn } from "../../utils/helpers";
import { Button } from "../Shared/Button";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export const SearchBar = ({
  className,
  placeholder = "Search for products...",
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative flex-1 max-w-lg", className)}
    >
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-4 pr-12 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Button
          variant="ghost"
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-primary-500 hover:text-primary-700 transition-colors"
          aria-label="Search"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
};
