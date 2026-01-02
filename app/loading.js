export default function Loading() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[60vh]"
      role="status"
      aria-label="Loading content"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-muted animate-pulse" />
        <div className="absolute inset-0 w-12 h-12 rounded-full border-t-2 border-foreground animate-spin" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
