import { Suspense } from "react";
import Loading from "./activity/loading";
import WatchlistTop from "./watchlist/watchlist-top";
import WatchlistActivity from "./watchlist/watchlist-activity";
import { MotionSection } from "@/components/ui/motion-wrapper";

const Watchlist = async () => {
  return (
    <MotionSection className="mt-16">
      <WatchlistTop />
      <Suspense fallback={<Loading />}>
        <WatchlistActivity />
      </Suspense>
    </MotionSection>
  );
};

export default Watchlist;
