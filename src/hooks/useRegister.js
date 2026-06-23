import { useMutation } from '@tanstack/react-query';
import api from '../api/axios';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post('/api/auth/register', data);
      return response.data;
    }
  });
};

