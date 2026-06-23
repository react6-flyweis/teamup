import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

/**
 * Fetch all games from the API using TanStack Query and axios.
 */
export const useGames = () => {
  return useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const response = await api.get('/api/games');
      return response.data;
    },
  });
};
