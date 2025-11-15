import { Button } from "../Shared/Button";

interface RelatedProductItem {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  sold: number;
}

const DUMMY_RELATED_PRODUCTS: RelatedProductItem[] = [
  {
    id: "1",
    brand: "Whistle",
    name: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    image:
      "https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    sold: 1238,
  },
  {
    id: "2",
    brand: "John Lewis ANYDAY",
    name: "Long Sleeve Utility Shirt, Navy, 6",
    price: 26,
    image:
      "https://images.pexels.com/photos/6311678/pexels-photo-6311678.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    sold: 1238,
  },
  {
    id: "3",
    brand: "John Lewis ANYDAY",
    name: "Stripe Curved-Hem Shirt, Blue",
    price: 32,
    image:
      "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    sold: 620,
  },
  {
    id: "4",
    brand: "John Lewis ANYDAY",
    name: "Denim Overshirt, Mid Wash",
    price: 40,
    image:
      "https://images.pexels.com/photos/6311681/pexels-photo-6311681.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    sold: 238,
  },
  {
    id: "5",
    brand: "John Lewis",
    name: "Linen Blazer, Navy",
    price: 79,
    image:
      "https://images.pexels.com/photos/6311578/pexels-photo-6311578.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    sold: 1238,
  },
];

export const RelatedProducts = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Related Product
        </h1>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-primary-500 hover:text-primary-900 px-0"
        >
          View All
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {DUMMY_RELATED_PRODUCTS.map((item) => (
          <article
            key={item.id}
            className=" rounded-lg  cursor-pointer hover:shadow-sm transition-shadow duration-200"
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-md bg-gray-100 mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold  truncate">{item.brand}</p>
              <p className="text-sm font-bold text-primary-900">
                ${item.price}
              </p>
              <p className="text-xs text-primary-500 line-clamp-2">
                {item.name}
              </p>
              <div className="flex items-center gap-1 text-xs text-primary-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-6 text-yellow-400"
                >
                  <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <span className="font-medium text-primary-900">
                  {item.rating}
                </span>
                <span className="mx-1 text-primary-300">•</span>
                <span>{item.sold.toLocaleString()} Sold</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
