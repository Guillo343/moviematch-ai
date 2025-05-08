'use client';

import { useState, useEffect } from 'react';
import { searchMovies } from '@/lib/tmdb';
import Image from 'next/image';

export default function NavSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length > 0) {
        searchMovies(query).then(data => {
          setResults(data.results.slice(0, 5));
          setIsOpen(true);
        });
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 400); 

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="relative text-white">
      <input
        type="text"
        placeholder="Search movies..."
        className="bg-white/10 backdrop-blur-sm text-sm px-4 py-2 rounded-md outline-none w-56"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 bg-zinc-900 border border-zinc-700 w-64 max-h-80 overflow-y-auto rounded-lg shadow-lg z-50">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 cursor-pointer"
            >
              {movie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  width={40}
                  height={60}
                  className="rounded"
                />
              )}
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
