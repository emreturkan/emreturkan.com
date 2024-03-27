import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import GameActivity from "./activity/gameActivity";
import MovieActivity from "./activity/movieActivity";
import { Suspense } from "react";
import Loading from "./activity/loading";

const activityLinks = [
  { id: 1, name: "Game", path: "/" },
  { id: 2, name: "Movie", path: "/" },
  // { id: 3, name: "Kitap", path: "/" },
  // { id: 4, name: "Stock", path: "/" },
];
const Activity = async () => {
  return (
    <Tabs defaultValue="Game" className="h-full w-full mt-6 ">
      <div className="flex justify-end">
        <TabsList className="flex w-max gap-4 p-4">
          {activityLinks.map((link) => (
            <TabsTrigger key={link.id} value={link.name}>
              {link.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent className="h-full w-full" value="Game">
        <Suspense fallback={<Loading />}>
          <GameActivity />
        </Suspense>
      </TabsContent>

      <TabsContent value="Movie">
        <Suspense fallback={<Loading />}>
          <MovieActivity />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default Activity;
