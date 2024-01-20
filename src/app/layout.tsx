import { Navbar } from "@/components/shared/Navbar";
import StoreProvider from "./providers/StoreProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TOHFA",
  description: "TOHFA ENTERPRISES",
};

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <StoreProvider>
            <ThemeProvider>
              <Navbar />
              {children}
            </ThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
