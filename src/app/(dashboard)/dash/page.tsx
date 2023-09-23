import React from "react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-4">
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-screen-xl gap-4">
        <h1 className="text-4xl text-center font-semibold">
          Welcome to ECPP Dashboard
        </h1>
        <Button variant="destructive">Log out</Button>
      </div>
    </main>
  );
}
