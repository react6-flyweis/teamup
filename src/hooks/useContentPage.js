import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

/**
 * Fetch a content page by its slug using TanStack Query and axios.
 * 
 * @param {string} slug - The page slug (e.g. 'about-us')
 */
export const useContentPage = (slug) => {
  return useQuery({
    queryKey: ['contentPage', slug],
    queryFn: async () => {
      const response = await api.get(`/api/content-pages/${slug}`);
      return response.data;
    },
    enabled: !!slug,
  });
};
