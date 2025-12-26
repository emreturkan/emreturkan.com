import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="mt-8 columns-1 gap-4 sm:columns-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton
          key={i}
          className="mb-4 w-full rounded-lg animate-pulse"
          style={{ height: i % 2 === 0 ? "300px" : "400px" }}
        />
      ))}
    </div>
  );
};

export default Loading;
