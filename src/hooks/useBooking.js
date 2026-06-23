import { useNavigate } from 'react-router-dom';
import { BOOKING_PATH } from '../utils/constants';

export const useBooking = () => {
  const navigate = useNavigate();
  return () => {
    navigate(BOOKING_PATH);
  };
};
