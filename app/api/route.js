import { NextResponse } from "next/server";

export async function POST() {
  try {
    const responses = await fetch("https://raindrop.io/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_RAINDROP_CLIENT_ID,
        refresh_token: process.env.NEXT_PUBLIC_RAINDROP_REFRESH_TOKEN,
        client_secret: process.env.NEXT_PUBLIC_RAINDROP_CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    if (!responses.ok) {
      throw new Error("Failed to refresh token");
    }

    const tokenData = await responses.json();

    return NextResponse.json(tokenData);
  } catch (error) {
    console.error("Error refreshing token:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
