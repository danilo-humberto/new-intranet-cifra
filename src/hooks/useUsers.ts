import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "@/api/Users.endpoints";
import type { User } from "@/types/User";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

export const useUserById = (id: string) =>
  useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
    retry: false,
  });

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, user }: { id: string; user: User }) =>
      updateUser(id, user),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["users", variables.id] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
