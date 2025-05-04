interface MovieCardProps {
    title: string;
    posterPath: string;
    releaseDate: string;
  }
  
  export default function MovieCard({ title, posterPath, releaseDate }: MovieCardProps) {
    return (
      <div className="bg-gray-800 rounded-md overflow-hidden shadow hover:scale-105 transition-transform">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="w-full h-72 object-cover"
        />
        <div className="p-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{releaseDate}</p>
        </div>
      </div>
    );
  }
  