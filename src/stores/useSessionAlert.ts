import { create } from "zustand";

type SessionAlertStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useSessionAlert = create<SessionAlertStore>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
