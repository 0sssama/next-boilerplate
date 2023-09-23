"use client";

import * as React from "react";
import { RecoilRoot } from "recoil";

export default function RecoilProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
