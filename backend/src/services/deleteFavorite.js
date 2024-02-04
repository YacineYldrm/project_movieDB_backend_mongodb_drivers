import { DAO } from "../data-access/index.js"

export const deleteFavorite = async (movieId) => {
    const deletedFavorite = await DAO.findAndDeleteById("favorites", movieId);
    return deletedFavorite;  
};