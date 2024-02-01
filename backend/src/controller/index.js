import { addNewMovieCtrl } from "./addNewMovieCtrl.js";
import { deleteMovieCtrl } from "./deleteMovieCtrl.js";
import { editMovieCtrl } from "./editMovieCtrl.js";
import { getAllMoviesCtrl } from "./getAllMoviesCtrl.js";
import { searchMovieByTitleCtrl } from "./searchMovieByTitleCtrl.js";

export const moviesCtrl = {
    getAllMoviesCtrl,
    searchMovieByTitleCtrl,
    addNewMovieCtrl,
    deleteMovieCtrl,
    editMovieCtrl
};