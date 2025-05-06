import { fetchTrendingMovies } from "@/lib/tmdb";
import HeroBanner from "@/components/HeroBanner";
import HomeClient from "@/components/HomeClient"; // este tendrá los hooks

export default async function Home() {
  const trendingData = await fetchTrendingMovies();
  const trending = trendingData.results[0];

  return (
    <>
      <HeroBanner
        title={trending.title}
        overview={trending.overview}
        backgroundPath={trending.backdrop_path}
      />
      <HomeClient />
    </>
  );
}
