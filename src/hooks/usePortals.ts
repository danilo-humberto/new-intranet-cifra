import {
  createPortal,
  deletePortal,
  getPortals,
  getPortalsById,
  updatePortal,
} from "@/api/Portals.endpoints";
import type { Portals } from "@/types/Portals";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const usePortals = () => {
  useQuery({
    queryKey: ["portals"],
    queryFn: () => getPortals(),
  });
};

export const usePortalsById = (portalId: string) =>
  useQuery({
    queryKey: ["portals", portalId],
    queryFn: () => getPortalsById(portalId),
    enabled: !!portalId,
    retry: false,
  });

export const useCreatePortal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPortal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portals"] });
    },
  });
};

export const useEditPortal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, portal }: { id: string; portal: Portals }) =>
      updatePortal(id, portal),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["portals"] });
      queryClient.invalidateQueries({ queryKey: ["portals", variables.id] });
    },
  });
};

export const useDeletePortal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePortal,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["portals"] });
      queryClient.invalidateQueries({ queryKey: ["portals", id] });
    },
  });
};
