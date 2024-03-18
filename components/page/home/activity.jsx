import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import GameActivity from "./activity/gameActivity";
import MovieActivity from "./activity/movieActivity";
import { Suspense } from "react";
import Loading from "./activity/loading";

const activityLinks = [
  { id: 1, name: "Oyun", path: "/" },
  { id: 2, name: "Film", path: "/" },
  // { id: 3, name: "Kitap", path: "/" },
  // { id: 4, name: "Stock", path: "/" },
];
const Activity = async () => {
  return (
    <Tabs defaultValue="Oyun" className="h-full w-full mt-12 ">
      <div className="flex justify-end">
        <TabsList className="flex w-max gap-4 p-4">
          {activityLinks.map((link) => (
            <TabsTrigger key={link.id} value={link.name}>
              {link.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent className="h-full w-full" value="Oyun">
        <Suspense fallback={<Loading />}>
          <GameActivity />
        </Suspense>
      </TabsContent>

      <TabsContent value="Film">
        <Suspense fallback={<Loading />}>
          <MovieActivity />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default Activity;
