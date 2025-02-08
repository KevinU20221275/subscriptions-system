import { MovieNonMapped } from "./definitions";

export const mappedMovies = (movies: Array<MovieNonMapped>) => {
    if (!movies) {
        return [];
    }

    return movies.map(movie => {
        return {
            title: movie.Title,
            year: movie.Year,
            imdbID: movie.imdbID,
            type: movie.Type,
            poster: movie.Poster
        }
    })
}