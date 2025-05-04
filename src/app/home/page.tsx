import { fetchTrendingMovies } from "../../lib/tmdb";
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default async function HomePage() {
  const data = await fetchTrendingMovies();
  const movies = data.results;

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">🎬 Películas en Tendencia</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie: any) => (
            <div key={movie.id} className="bg-white rounded-lg shadow">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded-t-lg"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
