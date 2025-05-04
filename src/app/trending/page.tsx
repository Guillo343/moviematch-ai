import { fetchTrendingMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function TrendingPage() {
  const data = await fetchTrendingMovies();
  const movies = data.results;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🔥 Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
