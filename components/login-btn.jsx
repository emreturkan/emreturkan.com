"use client";
import { GithubIcon } from "@/assets/icons";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8"
        onClick={() => signIn("github")}
      >
        <GithubIcon className="w-4 h-4 mr-2" />
        <div className="ml-3">Sign in with GitHub</div>
      </button>
    </>
  );
}
