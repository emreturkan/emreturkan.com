import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
      aria-labelledby="not-found-heading"
    >
      <h1
        id="not-found-heading"
        className="text-6xl font-bold text-foreground mb-4"
      >
        404
      </h1>
      <h2 className="text-xl font-medium text-muted-foreground mb-6">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Go Home
        </Link>
        <Link
          href="/photos"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          View Photos
        </Link>
      </div>
    </section>
  );
}
