import { login } from "@/api/Auth.endpoints";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () =>
  useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
  });
