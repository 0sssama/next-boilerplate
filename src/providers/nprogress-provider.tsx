"use client";

import * as React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";

export default function NprogressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <>
      <ProgressBar
        height="2px"
        color={theme === "dark" ? "#fff" : "#000"}
        options={{ showSpinner: true }}
        shallowRouting
      />
      {children}
    </>
  );
}
