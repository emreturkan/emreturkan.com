import { ImageResponse } from "next/og";

// Apple touch icon (180x180) generated at build time — replaces the missing
// static /apple-touch-icon.png.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fafafa",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-4px",
        }}
      >
        ET
      </div>
    ),
    { ...size }
  );
}
