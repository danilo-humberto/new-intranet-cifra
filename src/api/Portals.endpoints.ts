import type { Portals } from "@/types/Portals";
import { getStorageItem } from "@/utils/Storage";
import api from "./axios";
import { useSessionAlert } from "@/stores/useSessionAlert";

const token = getStorageItem("user");

export const getPortals = async () => {
  const response = await api.get("/portals", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
    },
  });
  if (response.status === 401) {
    useSessionAlert.getState().setOpen(true);
    return;
  }
  return response.data;
};

export const getPortalsById = async (portalId: string) => {
  const response = await api.get(`/portal/${portalId}?_embed=inscriptions`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
    },
  });
  if (response.status === 401) {
    useSessionAlert.getState().setOpen(true);
    return;
  }
  return response.data;
};

export const deletePortal = async (portalid: string) => {
  await api.delete(`/portals/${portalid}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
    },
  });
};

export const createPortal = async (portal: Portals) => {
  await api.post("/portals/auth/register", portal, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
    },
  });
};

export const updatePortal = async (portalId: string, portal: Portals) => {
  await api.put(`/portals/${portalId}`, portal, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
    },
  });
};
