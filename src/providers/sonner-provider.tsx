"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { Toaster } from "sonner";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <>
      <Toaster
        closeButton
        richColors
        expand={false}
        theme={theme === "dark" ? "dark" : "light"}
        position="bottom-right"
      />
      {children}
    </>
  );
}
