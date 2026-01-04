import { createClient, type Session, type SupabaseClient } from "@supabase/supabase-js";
import { create } from "zustand";

type Auth = {
  session: Session | null;
  supabase: SupabaseClient<any, "public", any> | null;
};

export type AuthActions = {
  setSession: (session: Session | null) => void;
};

export const useAuthStore = create<Auth & AuthActions>((set) => ({
    session: null,
    supabase: null,
    setSession: (session: Session | null) => set(() => ({ session: session })),
}));
