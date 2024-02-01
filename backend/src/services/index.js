import { addNewMovie } from "./addNewMovie.js";
import { deleteMovie } from "./deleteMovie.js";
import { editMovie } from "./editMovie.js";
import { getAllMovies } from "./getAllMovies.js";
import { searchMovieByTitle } from "./searchMovieByTitle.js";


export const moviesServices = {
    getAllMovies,
    searchMovieByTitle,
    addNewMovie,
    deleteMovie,
    editMovie
};