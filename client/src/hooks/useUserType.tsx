import { fetchUserTypes } from '@/services';
import { UserType } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useUserType = () => {
  return useQuery<UserType, Error>({
    queryKey: ['userType'],
    queryFn: fetchUserTypes
  });
};
