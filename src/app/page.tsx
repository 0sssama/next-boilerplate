import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-24 gap-4">
      <Link className="absolute inset-0 z-[3]" href="/dash" />
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-screen-xl gap-4">
        <h1 className="text-4xl text-center font-bold">Welcome to ECPP</h1>
        <p className="text-sm text-slate-500 font-semibold">
          Click anywhere to continue
        </p>
      </div>
    </main>
  );
}
