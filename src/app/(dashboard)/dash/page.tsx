"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-4">
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-screen-xl gap-4">
        <h1 className="text-4xl text-center font-semibold">Dashboard here</h1>
        <Button variant="destructive">
          <SignOutButton signOutCallback={() => router.push("/")} />
        </Button>
      </div>
    </main>
  );
}
