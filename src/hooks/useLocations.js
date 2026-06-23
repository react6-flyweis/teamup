import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

/**
 * Fetch all locations from the API using TanStack Query and axios.
 */
export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const response = await api.get('/api/locations');
      return response.data;
    },
  });
};
