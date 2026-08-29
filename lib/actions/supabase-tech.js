import { unstable_cache as cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";

export const getTechs = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) return [];

  return await cache(
    async () => {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data, error } = await supabase.from("technologies").select();

      if (error) return [];
      return data || [];
    },
    ["technologies"],
    {
      revalidate: 3600,
    }
  )().catch(() => []);
};
