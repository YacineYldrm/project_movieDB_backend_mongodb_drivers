import { DAO } from "../data-access/index.js";

export const addNewMovie = async (newMovie) => {
    console.log("services", newMovie);
    const addedMovie = await DAO.addMovie("movies", newMovie);
    return addedMovie;
};