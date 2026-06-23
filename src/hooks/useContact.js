import { useMutation } from '@tanstack/react-query';
import api from '../api/axios';

export const useContact = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post('/api/contact', data);
      return response.data;
    }
  });
};
