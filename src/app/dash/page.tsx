"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";

export default function Dashboard() {
  const router = useRouter();

  const { user } = useUser();

  const { data, error, isLoading } = api.greeting.getGreeting.useQuery({
    name: user?.firstName || "",
  });

  if (!user) return null;

  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-4">
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-screen-xl gap-4">
        <h1 className="text-4xl text-center font-semibold">
          {isLoading ? "Loading..." : error ? "Error" : data.greeting}
        </h1>
        <Button variant="destructive">
          <SignOutButton signOutCallback={() => router.push("/")} />
        </Button>
      </div>
    </main>
  );
}
