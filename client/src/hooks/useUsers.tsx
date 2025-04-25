import { createUser, deleteUser, fetchUsers, updateUser } from '@/services';
import { User } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetUser = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: Omit<User, 'id'>) => createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<User> }) =>
      updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};