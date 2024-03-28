"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import LoginBtn from "@/app/guestbook/login-btn";
import { addGuestbook } from "@/lib/actions/supabase-guestbook";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
const GuestbookAuth = () => {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    await addGuestbook(session?.user?.name, message);
    setMessage("");
    confetti({
      particleCount: 150,
      spread: 180,
    });
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      {session && (
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            size="sm"
            placeholder="Your Message"
            className="bg-card rounded-md"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button
            className="rounded-md"
            size="sm"
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      )}
      <LoginBtn />
    </div>
  );
};

export default GuestbookAuth;
