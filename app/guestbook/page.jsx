import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { getGuestbook } from "@/lib/actions/supabase-guestbook";
import GuestbookAuth from "./guestbook-auth";
import { Separator } from "@/components/ui/separator";

const GuestBook = async () => {
  const guestbook = await getGuestbook();

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <h1 className="font-semibold text-center text-2xl">GuestBook</h1>
        <p className="text-center font-medium text-sm text-primary">
          Please leave a note when you stop by
        </p>
        <GuestbookAuth />
      </div>
      <div className="grid gap-2 justify-items-center ">
        {guestbook &&
          guestbook.map((guest) => (
            <div key={guest.id} className="w-full max-w-sm ">
              <Card className="shadow-md rounded ">
                <CardContent>
                  <div className="px-4 py-2 flex items-center gap-2">
                    <p className="text-muted-foreground text-xs font-light  ">
                      {guest.user}:
                    </p>
                    <CardDescription className="text-sm text-primary font-medium">
                      {guest.message}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GuestBook;
