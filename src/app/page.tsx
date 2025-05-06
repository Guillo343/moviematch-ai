import { fetchTrendingMovies } from "@/lib/tmdb";
import HeroBanner from "@/components/HeroBanner";
import SearchBar from "@/components/SearchBar";

export default async function HomePage() {
  const trendingData = await fetchTrendingMovies();
  const trendingMovies = trendingData.results.slice(0, 7); // Solo los 7 primeros

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <HeroBanner movies={trendingMovies} />

      <main className="p-6 sm:p-16 flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">🎬 MovieMatch AI</h1>
        <p className="text-lg sm:text-xl max-w-xl text-gray-300">
          Describe the kind of movies you like or your current mood, and our AI will recommend the perfect titles for you.
        </p>

        {/* <SearchBar /> */}
      </main>
    </div>
  );
}
