import { MovieMapped } from "@/app/lib/definitions";
import { MovieCard } from "./movieCard";
import { fetchMovies } from "@/app/lib/data";
import { Suspense } from "react";
import { MovieCardSkeleton } from "@/app/skeletons";

export async function Movies({search} : {search : string}){
    const movies : Array<MovieMapped> | undefined = await fetchMovies(search);

    return (
        <>
            {movies ?       
                <ul className="grid p-2" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))', gap: '0.5rem'}}>
                    {movies.map((movie) => (
                        <li className="mx-auto" key={movie.imdbID}>
                            <Suspense key={movie.imdbID} fallback={<MovieCardSkeleton/>}>
                                <MovieCard movie={movie} />
                            </Suspense>
                        </li>
                    ))}
                </ul> 
            : <p className="text-center text-xl mt-10">Pelicula no encontrada</p>}
        </>
    )
}