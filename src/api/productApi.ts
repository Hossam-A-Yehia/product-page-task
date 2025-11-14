import { Product } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://api.easy-orders.net/api";

export const getProduct = async (slug: string): Promise<Product> => {
  const response = await fetch(
    `${API_BASE_URL}/v1/products/slug/clear-theme/${slug}?join=reviews`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data as Product;
};
