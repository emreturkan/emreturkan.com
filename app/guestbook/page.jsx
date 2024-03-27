"use client";
import LoginBtn from "@/components/login-btn";
import { useSession } from "next-auth/react";
import React from "react";

const GuestBook = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <div>GuestBook</div>
      <LoginBtn />
    </div>
  );
};

export default GuestBook;
