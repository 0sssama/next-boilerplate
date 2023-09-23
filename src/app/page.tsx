"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // listen to any click event in document
    document.addEventListener("click", () => {
      router.push("/dash");
    });

    return () => {
      document.removeEventListener("click", () => {});
    };
  });
  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-4">
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-screen-xl gap-4">
        <h1 className="text-4xl text-center font-bold">Welcome to ECPP</h1>
        <p className="text-sm text-slate-500 font-semibold">
          Click anywhere to continue
        </p>
      </div>
    </main>
  );
}
