import type { Portals } from "@/types/Portals";
import api from "./axios";
import { useSessionAlert } from "@/stores/useSessionAlert";
import { getStorageItem } from "@/utils/Storage";

export const getPortals = async () => {
  const token = getStorageItem("user")?.accessToken;
  try {
    const { data } = await api.get("/portals", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      useSessionAlert.getState().setOpen(true);
    }
    throw error;
  }
};

export const getPortalsById = async (portalId: string) => {
  const token = getStorageItem("user")?.accessToken;

  try {
    const { data } = await api.get(`/portals/${portalId}?_embed=inscriptions`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      useSessionAlert.getState().setOpen(true);
    }
    throw error;
  }
};

export const deletePortal = async (portalId: string) => {
  const token = getStorageItem("user")?.accessToken;
  await api.delete(`/portals/${portalId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createPortal = async (portal: Portals) => {
  const token = getStorageItem("user")?.accessToken;
  await api.post("/portals/auth/register", portal, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updatePortal = async (portalId: string, portal: Portals) => {
  const token = getStorageItem("user")?.accessToken;
  await api.put(`/portals/${portalId}`, portal, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
