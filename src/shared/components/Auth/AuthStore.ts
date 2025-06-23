import type { Session } from "@supabase/supabase-js";
import { create } from "zustand";

type Auth = {
  session: Session | null;
};

export type AuthActions = {
  setSession: (session: Session | null) => void;
};

export const useAuthStore = create<Auth & AuthActions>((set) => ({
    session: null,
    setSession: (session: Session | null) => set(() => ({ session: session })),
}));
