import axiosInstance from '@/lib/axiosInstance';
import { UserType } from '@/types';

export const fetchUserTypes = async (): Promise<UserType> => {
  const response = await axiosInstance.get<UserType>('/userType');
  return response.data;
};
