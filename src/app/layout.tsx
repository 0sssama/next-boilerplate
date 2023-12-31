import * as React from "react";
import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { Plus_Jakarta_Sans } from "next/font/google";

import {
  ThemeProvider,
  RecoilProvider,
  NprogressProvider,
  ToastProvider,
  TRPCProvider,
} from "@/providers";

import "../styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NEXT BOILERPLATE",
  description: "NEXTJS INSANE BOILERPLATE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakarta.className}>
        <TRPCProvider>
          <RecoilProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <ClerkProvider>
                <NprogressProvider>
                  <ToastProvider>{children}</ToastProvider>
                </NprogressProvider>
              </ClerkProvider>
            </ThemeProvider>
          </RecoilProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
