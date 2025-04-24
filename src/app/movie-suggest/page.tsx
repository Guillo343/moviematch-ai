"use client";

import { useState } from "react";

export default function MovieSuggestPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error desconocido");
      } else {
        setResponse(data.result);
      }
    } catch (err) {
      setError("Ocurrió un error al conectarse con la IA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 MovieMatch AI</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe el tipo de películas que te gustan..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Buscando..." : "Buscar recomendaciones"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4 font-semibold">⚠️ {error}</p>}

      {response && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
          {response}
        </div>
      )}
    </main>
  );
}
