"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [ready, setReady] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1>Hello world, we are{!ready && " NOT"} READY</h1>
      <div className="flex items-center justify-center gap-2">
        <Switch
          id="ready"
          checked={ready}
          onCheckedChange={(checked) => setReady(checked)}
        />
        <Label htmlFor="ready">Are you ready?</Label>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Switch
          id="dark-mode"
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        <Label htmlFor="dark-mode">Dark mode</Label>
      </div>
    </main>
  );
}
