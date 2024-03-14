import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/nextThemeProvider";
import SiteHeader from "@/components/layout/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-3xl py-4 grid items-center gap-8 pb-8 pt-6 md:py-8">
            <SiteHeader />
            <main> {children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
