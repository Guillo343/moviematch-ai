"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroBannerProps {
  movies: {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
  }[];
}

export default function HeroBanner({ movies }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const totalSlides = movies.slice(0, 7);

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentIndex + 1) % movies.length;
      setCurrentIndex(next);
      setProgressKey((prev) => prev + 1); // 🔁 trigger progress reset
    }, 6000);

    const progressTimer = setInterval(() => {
      setProgressKey((prev) => (prev >= 100 ? 0 : prev + 1.25));
    }, 100); // 8s = 8000ms / 100ms * 1.25 = 100%

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [currentIndex, totalSlides.length]);

  const currentMovie = totalSlides[currentIndex];

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
        alt={currentMovie.title}
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-[0.4]"
      />

      {/* Overlay content */}
      <div className="absolute bottom-20 left-10 text-white max-w-xl space-y-4 z-10">
        <h2 className="text-4xl font-bold">{currentMovie.title}</h2>
        <p className="text-md text-gray-200">{currentMovie.overview}</p>
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          onClick={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + totalSlides.length) % totalSlides.length
            )
          }
        >
          <ChevronLeft
            size={40}
            className="text-white hover:scale-110 transition"
          />
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % totalSlides.length)
          }
        >
          <ChevronRight
            size={40}
            className="text-white hover:scale-110 transition"
          />
        </button>
      </div>

      {/* Progress bar */}
      <div
        key={progressKey}
        className="h-1 bg-white/30 relative overflow-hidden rounded"
      >
        <div
          className="absolute left-0 top-0 h-full bg-white transition-all duration-[6000ms]"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
