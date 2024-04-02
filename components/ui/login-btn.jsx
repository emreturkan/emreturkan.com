"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Button
        size="sm"
        variant="destructive"
        className="rounded shadow-sm "
        onClick={() => signOut()}
      >
        Sign out
      </Button>
    );
  }
  return (
    <>
      <Button
        size="sm"
        className="rounded  shadow-sm "
        onClick={() => signIn("github")}
      >
        <Github className="w-4 h-4" />
        <div className="ml-3">GitHub</div>
      </Button>
    </>
  );
}
