import GameActivity from "./activity/game-activity";
import MovieActivity from "./activity/movie-activity";
import { Suspense } from "react";
import Loading from "./activity/loading";
import { MotionSection } from "@/components/ui/motion-wrapper";

const Activity = async () => {
  return (
    <MotionSection className="mt-16">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Currently
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Suspense fallback={<Loading />}>
          <GameActivity />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <MovieActivity />
        </Suspense>
      </div>
    </MotionSection>
  );
};

export default Activity;
