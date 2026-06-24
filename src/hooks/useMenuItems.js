import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

/**
 * Fetch all menu items from the API using TanStack Query and axios.
 */
export const useMenuItems = (params = {}) => {
  return useQuery({
    queryKey: ['menuItems', params],
    queryFn: async () => {
      const response = await api.get('/api/menu-items', { params });
      return response.data;
    },
  });
};

export const useMenuItem = (slugOrId) => {
  return useQuery({
    queryKey: ['menuItem', slugOrId],
    queryFn: async () => {
      const response = await api.get(`/api/menu-items/${slugOrId}`);
      return response.data?.menuItem;
    },
    enabled: !!slugOrId,
  });
};

