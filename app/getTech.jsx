import { createClient } from "@supabase/supabase-js";
import React from "react";

const GetTech = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const getData = async () => {
    const { data } = await supabase.from("technologies").select();
    return data;
  };

  const response = await getData();

  console.log("====================================");
  console.log("response", response);
  console.log("====================================");

  return (
    <div>
      {response?.map((tech) => (
        <div key={tech.id}>{tech.name}</div>
      ))}
    </div>
  );
};

export default GetTech;
