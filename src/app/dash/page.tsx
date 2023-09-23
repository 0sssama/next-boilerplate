"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { trpc } from "@/trpc/client";

export default function Dashboard() {
  const router = useRouter();

  const { user } = useUser();

  const { data, error, isLoading } = trpc.getHello.useQuery();

  if (!user) return null;

  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-4">
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-screen-xl gap-4">
        <h1 className="text-4xl text-center font-semibold">
          {isLoading
            ? "Loading..."
            : error
            ? "Error"
            : `${data.text}, ${user.firstName}!`}
        </h1>
        <Button variant="destructive">
          <SignOutButton signOutCallback={() => router.push("/")} />
        </Button>
      </div>
    </main>
  );
}
