import { DAO } from "../data-access/index.js"

export const deleteMovie = async (movieId) => {
    const deletedMovie = await DAO.findAndDeleteById("movies", movieId);
    return deletedMovie;
}