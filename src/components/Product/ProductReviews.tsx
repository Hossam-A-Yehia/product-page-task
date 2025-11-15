import { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../Shared/Button";

type SectionKey = "rating" | "topics";
type FilterCategory = SectionKey;
type FilterValue = number | string;

interface Review {
  id: number;
  rating: number;
  text: string;
  date: string;
  author: string;
  avatar: string;
  likes: number;
}

interface ExpandedSectionsState {
  rating: boolean;
  topics: boolean;
}

interface SelectedFiltersState {
  rating: FilterValue[];
  topics: FilterValue[];
}

export const ProductReviews = () => {
  const [expandedSections, setExpandedSections] =
    useState<ExpandedSectionsState>({
      rating: true,
      topics: true,
    });

  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>({
    rating: [],
    topics: [],
  });

  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      text: "This is amazing product I have.",
      date: "July 2, 2020 03:29 PM",
      author: "Darrell Steward",
      avatar:
        "https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 128,
    },
    {
      id: 2,
      rating: 5,
      text: "This is amazing product I have.",
      date: "July 2, 2020 1:04 PM",
      author: "Darlene Robertson",
      avatar:
        "https://images.pexels.com/photos/6311678/pexels-photo-6311678.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 82,
    },
    {
      id: 3,
      rating: 5,
      text: "This is amazing product I have.",
      date: "June 26, 2020 10:03 PM",
      author: "Kathryn Murphy",
      avatar:
        "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 9,
    },
    {
      id: 4,
      rating: 5,
      text: "This is amazing product I have.",
      date: "July 7, 2020 10:14 AM",
      author: "Ronald Richards",
      avatar:
        "https://images.pexels.com/photos/6311681/pexels-photo-6311681.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 124,
    },
  ];

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleFilter = (category: FilterCategory, value: FilterValue) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  return (
    <section className="mt-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Product Reviews</h2>
      <div className="border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[80px] lg:gap-[120px]">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative w-24 h-24 flex flex-col items-center">
              <svg className="transform-rotate-90 w-24 h-24">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#f59e0b"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(4.5 / 5) * 251.2} 251.2`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">4.5</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 sm:h-4 fill-[#FFA439]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">from 1.25k reviews</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            {[{ stars: 5, count: 250 }, { stars: 4, count: 160 }, { stars: 3, count: 40 }, { stars: 2, count: 20 }, { stars: 1, count: 10 }].map((item) => (
              <div key={item.stars} className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <div className="flex items-center gap-0.5 sm:gap-1 w-10 sm:w-12">
                  <span className="text-sm font-medium">{item.stars}.0</span>
                  <svg className="w-4 h-4 fill-[#FFA439]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gray-800 h-full rounded-full"
                    style={{ width: `${(item.count / 250) * 100}%` }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 w-10 sm:w-12 text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="hidden md:block w-full lg:w-72 xl:w-80 flex-shrink-0 border-2 border-dashed border-gray-300 rounded-lg p-3 sm:p-4 h-min">
          <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base border-b-2 border-dashed border-gray-300 pb-1.5 sm:pb-2">
            Reviews Filter
          </h3>
          <div className="border-b-2 border-dashed border-gray-300 pb-4 mb-4">
            <button
              onClick={() => toggleSection("rating")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              Rating
              {expandedSections.rating ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {expandedSections.rating && (
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.rating.includes(rating)}
                      onChange={() => toggleFilter("rating", rating)}
                      className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800"
                    />
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-semibold">{rating}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSection("topics")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              Review Topics
              {expandedSections.topics ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {expandedSections.topics && (
              <div className="space-y-2">
                {[
                  "Product Quality",
                  "Seller Services",
                  "Product Price",
                  "Shipment",
                  "Match with Description",
                ].map((topic) => (
                  <label key={topic} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.topics.includes(topic)}
                      onChange={() => toggleFilter("topics", topic)}
                      className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800"
                    />
                    <span className="text-sm text-gray-700 font-semibold">{topic}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="font-bold mb-3">Review Lists</h3>
<div className="flex flex-wrap gap-2 pb-2">
  <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium bg-[#EBEBEB] hover:bg-gray-50">
    All Reviews
  </button>

  <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium bg-white hover:bg-gray-50">
    With Photo & Video
  </button>

  <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium bg-white hover:bg-gray-50">
    With Description
  </button>
</div>
          </div>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-yellow-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-bold mb-1">{review.text}</p>
                <p className="text-sm text-gray-500 mb-3">{review.date}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <img src={review.avatar} alt={review.author} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium truncate max-w-[120px] sm:max-w-[200px]">{review.author}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button className="flex items-center gap-1 px-2 sm:px-3 py-1 hover:bg-gray-50 rounded active:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span className="text-xs sm:text-sm">{review.likes}</span>
                    </button>
                    <button
                      className="p-1.5 sm:p-1 hover:bg-gray-50 rounded active:bg-gray-100 transition-colors"
                      aria-label="Share this review"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <Button variant="ghost" className="min-w-8 h-8 sm:min-w-10 sm:h-10 flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 border border-black rounded-md bg-gray-100 font-medium text-sm sm:text-base">
                1
              </Button>
              <Button variant="ghost" className="min-w-8 h-8 sm:min-w-10 sm:h-10 flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base">
                2
              </Button>
              <span className="px-1 sm:px-2 text-sm">...</span>
              <Button variant="ghost" className="min-w-8 h-8 sm:min-w-10 sm:h-10 flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base">
                19
              </Button>
              <Button
                variant="ghost"
                aria-label="Next page of reviews"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center p-1 sm:p-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
