import { create } from "zustand";

//supabase
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const useSupabaseStore = create((set) => ({
  tech: [],
  fetch: async () => {
    let { data: technologies, error } = await supabase
      .from("technologies")
      .select("*");

    set({ tech: technologies });
  },
}));
