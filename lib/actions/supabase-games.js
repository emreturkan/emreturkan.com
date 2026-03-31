import { unstable_cache as cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getGames = async () => {
  return await cache(
    async () => {
      const { data } = await supabase
        .from("games")
        .select()
        .order("my_rating", { ascending: false });
      return data;
    },
    {
      revalidate: 3600,
    }
  )().catch((err) => console.error(err));
};
