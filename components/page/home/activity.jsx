import GameActivity from "./activity/gameActivity";
import MovieActivity from "./activity/movieActivity";
import { Suspense } from "react";
import Loading from "./activity/loading";

const Activity = async () => {
  return (
    <div className="mt-8 grid gap-4">
      <Suspense fallback={<Loading />}>
        <GameActivity />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <MovieActivity />
      </Suspense>
    </div>
  );
};

export default Activity;
