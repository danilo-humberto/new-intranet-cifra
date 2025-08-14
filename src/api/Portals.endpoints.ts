import type { Portals } from "@/types/Portals";
import api from "./axios";

export const getPortals = async () => {
  const { data } = await api.get("/portals", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const getPortalsById = async (portalId: string) => {
  const { data } = await api.get(`/portals/${portalId}?_embed=inscriptions`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const deletePortal = async (portalId: string) => {
  await api.delete(`/portals/${portalId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createPortal = async (portal: Portals) => {
  await api.post("/portals/auth/register", portal, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePortal = async (portalId: string, portal: Portals) => {
  await api.put(`/portals/${portalId}`, portal, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
