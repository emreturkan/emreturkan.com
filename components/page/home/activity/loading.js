import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  <div className="flex flex-col space-y-3">
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>;

  return (
    <Card className="border flex items-center justify-between rounded shadow-sm">
      <CardContent className="flex items-center  justify-start  ">
        <Skeleton className="h-16 w-12 rounded-lg" />

        <div className="grid gap-2 px-4 py-2">
          <Skeleton className="h-4 w-48" />

          <Skeleton className="h-4 w-96" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Loading;
