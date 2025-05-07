"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Info, Play } from "lucide-react";

interface Movie {
  title: string;
  overview: string;
  backdrop_path: string;
}

interface HeroBannerProps {
  movies: Movie[];
}

export default function HeroBanner({ movies }: HeroBannerProps) {
  const [index, setIndex] = useState(0);
  const currentMovie = movies[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [movies.length]);

  const goTo = (i: number) => setIndex(i);
  const goNext = () => setIndex((prev) => (prev + 1) % movies.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden text-white">
      <img
        src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
        alt={currentMovie.title}
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      <button
        onClick={goPrev}
        className="absolute left-0 top-0 h-full w-16 z-20 bg-black/5 hover:bg-gray-600/30 flex items-center justify-center transition-colors duration-300 opacity-0 hover:opacity-100"
        aria-label="Previous movie"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={goNext}
        className="absolute right-0 top-0 h-full w-16 z-20 bg-black/5 hover:bg-gray-600/30 flex items-center justify-center transition-colors duration-300 opacity-0 hover:opacity-100"
        aria-label="Next movie"
      >
        <ChevronRight size={40} />
      </button>
      <div className="absolute bottom-32 left-16 z-20 max-w-2xl">
        <h2
          className="text-5xl md:text-6xl font-bold mb-4 tracking-wider"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {currentMovie.title}
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-8 line-clamp-3">
          {currentMovie.overview}
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-gray-500/50 backdrop-blur-sm text-white py-2 px-6 rounded flex items-center gap-2 font-medium hover:bg-gray-500/70 transition-colors">
            <Info size={20} />
            Más información
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 right-16 z-20 flex items-center gap-2">
        <div className="border border-white/40 py-1 px-3 text-sm">13+</div>
      </div>
    </div>
  );
}
