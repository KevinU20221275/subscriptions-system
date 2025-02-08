import { Suspense } from "react";
import { Movies } from "../ui/movies/movies";
import { SearchMovie } from "../ui/movies/searchMovie";
import { MoviesSkeleton } from "../skeletons";


export default async function MoviPage(props: {searchParams? : Promise<{
    search: string;
}>}) {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || 'action';

    return (
        <main className="mt-12 max-w-5xl mx-auto">
            <SearchMovie></SearchMovie>
            <h1 className="text-2xl font-bold text-center my-2">{searchParams?.search != undefined ? `Results for ${searchParams.search}` : 'Best Movies'}</h1>
            <Suspense key={searchParams?.search} fallback={<MoviesSkeleton/>}>
                <Movies search={search}/>
            </Suspense>
        </main>
    )
}