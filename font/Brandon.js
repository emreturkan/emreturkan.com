import localFont from "next/font/local";
export const brandon = localFont({
  src: [
    {
      path: "../assets/fonts/Brandon_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Brandon_light.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Brandon_reg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Brandon_med.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Brandon_bld.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Brandon_blk.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
