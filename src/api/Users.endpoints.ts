import { getStorageItem, setStorageItem } from "@/utils/Storage";
import api from "./axios";
import type { User } from "@/types/User";
import { useSessionAlert } from "@/stores/useSessionAlert";

const token = getStorageItem("user");

export const createUser = async (user: User) => {
  const { data } = await api.post(`/auth/register}`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processAuthResponse(data);
};

export const getUsers = async () => {
  const response = await api.get("/users", {
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

export const deleteUser = async () => {
  await api.delete("/users", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
    },
  });
};

export const getUserById = async (id: string) => {
  const { data } = await api.get(`/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
    },
  });
  return data;
};

export const updateUser = async (id: string, user: User) => {
  await api.put(`/user/${id}`, user, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
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
