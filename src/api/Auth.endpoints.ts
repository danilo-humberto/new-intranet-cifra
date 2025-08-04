import type { Login } from "@/types/Login";
import api from "./axios";
import { removeStorageItem, setStorageItem } from "@/utils/Storage";

export const login = async (user: Login) => {
  const { data } = await api.post(`/auth/login`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processAuthResponse(data);
};

export const logout = () => {
  removeStorageItem("user");
};

const processAuthResponse = (data: any) => {
  const userData = {
    accessToken: data.token,
    ...data.user,
  };
  setStorageItem("user", JSON.stringify(userData));
  return userData;
};
