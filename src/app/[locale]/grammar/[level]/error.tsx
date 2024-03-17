"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div>
        <h2 className="text-center">{error.message}</h2>
        <button className="" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}
