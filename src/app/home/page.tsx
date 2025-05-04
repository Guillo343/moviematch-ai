"use client";

import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results.slice(0, 12));
      } catch (err) {
        console.error("Error loading movies", err);
      }
    }

    loadMovies();
  }, []);

  return (
    <main className="p-6 sm:p-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Trending Movies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
