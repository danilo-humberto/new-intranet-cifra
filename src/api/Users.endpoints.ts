import { setStorageItem } from "@/utils/Storage";
import api from "./axios";
import type { UserPayload } from "@/types/User";

export const createUser = async (user: UserPayload) => {
  const { data } = await api.post(`/auth/register`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processAuthResponse(data);
};

export const getUsers = async () => {
  const { data } = await api.get("/users", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const deleteUser = async (id: string) => {
  await api.delete(`/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserById = async (id: string) => {
  const { data } = await api.get(`/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const updateUser = async (id: string, user: UserPayload) => {
  await api.put(`/user/${id}`, user, {
    headers: {
      "Content-Type": "application/json",
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
