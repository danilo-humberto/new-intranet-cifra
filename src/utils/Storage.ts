const prefixKey = "@cifraIntranet/";

type User = {
  accessToken: string;
  email: string;
  name: string;
  roles: [
    {
      code: string;
    }
  ];
  _id: string;
};

export const setStorageItem = (key: string, value: any) => {
  localStorage.setItem(prefixKey + key, JSON.stringify(value));
};

export const getStorageItem = (key: string): User | null => {
  const data = localStorage.getItem(prefixKey + key);
  return data ? JSON.parse(data) : null;
};

export const removeStorageItem = (key: string) =>
  localStorage.removeItem(prefixKey + key);
