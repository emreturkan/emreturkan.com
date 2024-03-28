import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getGuestbook = async () => {
  try {
    const { data } = await supabase.from("guestbook").select("*");
    return data;
  } catch (error) {
    console.error("Error fetching guestbook data:", error);
    return null;
  }
};

export const addGuestbook = async (name, message) => {
  const { data, error } = await supabase
    .from("guestbook")
    .insert({ user: name, message: message })
    .select();
  return data;
};
