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
    <Card>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 ">
            <Skeleton className=" w-[200px] h-[100px]" />

            <Skeleton className=" w-[450px] h-[100px]" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Skeleton className="h-4 w-[130px]" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="h-4 w-[130px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Loading;
