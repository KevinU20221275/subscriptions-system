import { MovieMapped } from "@/app/lib/definitions";
import Image from "next/image";

export function MovieCard({movie} : {movie: MovieMapped}) {
    const posterSrc = movie.poster !== "N/A" && movie.poster ? movie.poster : '/placeholder-poster.jpg';

    return (
        <div className="bg-gray-900 rounded-lg h-full shadow-lg p-2">
            <Image 
                src={posterSrc}
                alt={`${movie.title} poster`}
                width={250}
                height={450}
            />
            <div className="p-4 text-center max-w-48 mx-auto">
                <h5 className="text-basic font-bold">{movie.title}</h5>
                <p>{movie.year}</p>
            </div>
        </div>
    )
}