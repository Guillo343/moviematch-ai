import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  overview: string;
  backgroundPath: string;
}

export default function HeroBanner({ title, overview, backgroundPath }: HeroBannerProps) {
  return (
    <div className="relative h-[85vh] w-full">
      <Image
        src={`https://image.tmdb.org/t/p/original${backgroundPath}`}
        alt={title}
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute bottom-24 left-12 text-white max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-md md:text-lg text-gray-200 mb-6 line-clamp-3">{overview}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300">Play</button>
          <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded hover:bg-opacity-90">More Info</button>
        </div>
      </div>
    </div>
  );
}
