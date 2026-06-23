import { useMutation } from '@tanstack/react-query';
import api from '../api/axios';

export const useNewsletter = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post('/api/newsletter/subscribe', data);
      return response.data;
    }
  });
};
