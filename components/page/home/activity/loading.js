import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5">
      <Skeleton className="h-[54px] w-9 rounded" />
      <div className="flex-1 space-y-1.5">
        <Skeleton className="h-2 w-12" />
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="h-2.5 w-20" />
      </div>
    </div>
  );
};

export default Loading;
