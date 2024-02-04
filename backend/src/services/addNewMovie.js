import { DAO } from "../data-access/index.js";
import { generateMovie } from "../domain/generateMovie.js";

export const addNewMovie = async (newMovie) => {
    console.log("!!!!!!!Services!!!!!!!!", newMovie);
    const generatedMovie = generateMovie(newMovie);
    console.log("!!!!!!GENERATED!!!!!!!!!!", generatedMovie);
    const addedMovie = await DAO.addMovie("movies", generatedMovie);
    return addedMovie;
};