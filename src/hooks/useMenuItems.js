import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

/**
 * Fetch all menu items from the API using TanStack Query and axios.
 */
export const useMenuItems = () => {
  return useQuery({
    queryKey: ['menuItems'],
    queryFn: async () => {
      const response = await api.get('/api/menu-items');
      return response.data;
    },
  });
};
