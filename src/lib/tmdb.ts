// lib/tmdb.ts
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  if (!res.ok) throw new Error("Error fetching trending movies");
  return res.json();
}

export async function fetchMoviesByGenre(genreId: number) {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${genreId}`
  );
  if (!res.ok) throw new Error("Error fetching movies by genre");
  return res.json();
}
export async function searchMovies(query: string) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`
  );
  if (!res.ok) throw new Error("Error searching movies");
  return res.json();
}

