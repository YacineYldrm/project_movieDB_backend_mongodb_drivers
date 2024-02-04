import { DAO } from "../data-access/index.js"

export const editMovie = async (editedMovie) => {
    const generatedMovie = editedMovie;
    const result = await DAO.editMovie("favorites", generatedMovie);
    return result;
};