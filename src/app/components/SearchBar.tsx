"use client";

import { useState } from "react";

interface SearchBarProps {
  onResult: (result: string) => void;
  onError?: (error: string) => void;
}

export default function SearchBar({ onResult, onError }: SearchBarProps) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onError?.("");

    try {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error inesperado");

      onResult(data.result);
    } catch (err: any) {
      onError?.(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Ej: thrillers psicológicos como Fight Club"
        className="flex-1 p-3 border border-gray-300 rounded-md text-black"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
      >
        {loading ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
}
