import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../api/productApi';

export function useFetchProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug),
  });
}
