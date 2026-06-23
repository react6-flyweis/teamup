import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

/**
 * Fetch all drinks from the API using TanStack Query and axios.
 */
export const useDrinks = () => {
  return useQuery({
    queryKey: ['drinks'],
    queryFn: async () => {
      const response = await api.get('/api/drinks');
      return response.data;
    },
  });
};
