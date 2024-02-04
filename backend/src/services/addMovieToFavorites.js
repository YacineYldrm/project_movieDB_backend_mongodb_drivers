import { DAO } from "../data-access/index.js"

export const addMovieToFavorites = async (movieId) => {
    const movie = await DAO.addMovieToFavorites("movies", movieId);
    return movie;
}; 