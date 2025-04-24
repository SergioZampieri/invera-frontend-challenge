import axiosInstance from '@/lib/axiosInstance';
import { User } from '@/types';

export type FetchUsersParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: keyof User;
  order?: 'asc' | 'desc';
  status?: 'Online' | 'Offline';
};

export const fetchUsers = async ({
  page = 1,
  limit = 10,
  search = '',
  sortBy,
  order,
  status
}: FetchUsersParams): Promise<User[]> => {
  const params: Record<string, string | number> = {
    _page: page,
    _limit: limit
  };

  if (search) params.q = search;
  if (sortBy) params._sort = sortBy;
  if (order) params._order = order;
  if (status) params._status = status;

  const response = await axiosInstance.get<User[]>('/users', { params });
  return response.data;
};

export const fetchUserById = async (id: number): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${id}`);
  return response.data;
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await axiosInstance.post<User>('/users', user);
  return response.data;
};

export const updateUser = async (id: number, user: Partial<User>): Promise<User> => {
  const response = await axiosInstance.put<User>(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`);
};
