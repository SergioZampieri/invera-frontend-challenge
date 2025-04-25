import { fetchStatistics } from '@/services';
import { Statistics } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useStatistics = () => {
  return useQuery<Statistics, Error>({
    queryKey: ['statistics'],
    queryFn: fetchStatistics
  });
};
