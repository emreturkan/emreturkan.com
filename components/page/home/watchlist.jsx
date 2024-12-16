import { Suspense } from "react";
import Loading from "./activity/loading";
import WatchlistTop from "./watchlist/watchlist-top";
import WatchlistActivity from "./watchlist/watchlist-activity";

const Watchlist = async () => {
  return (
    <div className="mt-8 grid gap-2">
      <WatchlistTop/>
    <div className=" grid md:grid-cols-1 gap-4">
      <Suspense fallback={<Loading />}>
        <WatchlistActivity />
      </Suspense>
    </div>
    </div>
  );
};

export default Watchlist;
