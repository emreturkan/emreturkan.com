import { ImageResponse } from "next/og";

// Branded 1200x630 social-share image served at /og. Replaces the missing
// static /og-image.png that every share preview previously 404'd on.
export const runtime = "nodejs";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: "90px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 76, fontWeight: 700, color: "#fafafa" }}>
            Emre Turkan
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              marginLeft: 18,
              borderRadius: 999,
              background: "#0099ff",
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div
          style={{ display: "flex", fontSize: 40, color: "#0099ff", marginTop: 16 }}
        >
          Full Stack Developer
        </div>

        <div
          style={{ display: "flex", fontSize: 28, color: "#8a8a8a", marginTop: 28 }}
        >
          React · Next.js · Node.js — Istanbul, Turkey
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#5a5a5a",
            marginTop: "auto",
            fontFamily: "monospace",
          }}
        >
          emreturkan.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
