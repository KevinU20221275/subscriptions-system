import { mappedMovies } from "./utils";

const API_KEY = '7b843886';

export const fetchMovies = async (search : string) => {
    try {  
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        const data = await response.json();
        if (data.Response === 'False') {
            return undefined;
        }

        return mappedMovies(data.Search);
    } catch (error) {
        console.error(error);
    }
}
