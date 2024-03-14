import { unstable_cache as cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getTechs = async () => {
  return await cache(
    async () => {
      const { data } = await supabase.from("technologies").select();
      return data;
    },
    {
      revalidate: 3600,
    }
  )();
};
