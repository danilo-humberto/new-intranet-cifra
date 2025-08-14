import { useSessionAlert } from "@/stores/useSessionAlert";
import { getStorageItem, removeStorageItem } from "@/utils/Storage";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getStorageItem("user")?.accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeStorageItem("user");
      useSessionAlert.getState().setOpen(true);
    }
    return Promise.reject(error);
  }
);

export default api;
