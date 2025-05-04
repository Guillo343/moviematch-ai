"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <main className="min-h-screen p-6 sm:p-16 flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">🎬 MovieMatch AI</h1>
        <p className="text-lg sm:text-xl max-w-xl">
          Describe the kind of movies you like or your current mood, and our AI
          will recommend the perfect titles for you.
        </p>

        <SearchBar onResult={setResult} onError={setError} />

        {error && <p className="text-red-500">{error}</p>}
        {result && (
          <div className="bg-white text-black p-4 rounded-md shadow max-w-xl w-full text-left whitespace-pre-line">
            {result}
          </div>
        )}
      </main>
    </>
  );
}
