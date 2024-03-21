import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="columns-1  gap-3 mt-4 sm:columns-2 lg:columns-2 rounded">
      {Array.from({ length: 20 }).map((_, i) => (
        <Skeleton
          className="rounded mb-4 w-[500px] h-[500px] max-w-sm"
          key={i}
        />
      ))}
    </div>
  );
};

export default Loading;
