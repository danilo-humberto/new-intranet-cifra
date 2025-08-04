import { getStorageItem, setStorageItem } from "@/utils/Storage";
import api from "./axios";
import type { User } from "@/types/User";
import { useSessionAlert } from "@/stores/useSessionAlert";

export const createUser = async (user: User) => {
  const { data } = await api.post(`/auth/register}`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processAuthResponse(data);
};

export const getUsers = async () => {
  const token = getStorageItem("user")?.accessToken;
  const response = await api.get("/users", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 401) {
    useSessionAlert.getState().setOpen(true);
    return;
  }
  return response.data;
};

export const deleteUser = async () => {
  const token = getStorageItem("user")?.accessToken;
  await api.delete("/users", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserById = async (id: string) => {
  const token = getStorageItem("user")?.accessToken;
  const { data } = await api.get(`/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateUser = async (id: string, user: User) => {
  const token = getStorageItem("user")?.accessToken;
  await api.put(`/user/${id}`, user, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const processAuthResponse = (data: any) => {
  const userData = {
    accessToken: data.token,
    ...data.user,
  };
  setStorageItem("user", JSON.stringify(userData));
  return userData;
};
