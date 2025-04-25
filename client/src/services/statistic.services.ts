import axiosInstance from '@/lib/axiosInstance';
import { Statistics } from '@/types';

export const fetchStatistics = async (): Promise<Statistics> => {
  const response = await axiosInstance.get<Statistics>('/statics');
  return response.data;
};
