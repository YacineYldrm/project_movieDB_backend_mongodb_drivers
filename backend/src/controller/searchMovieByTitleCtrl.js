import { moviesServices } from "../services/index.js";

export const searchMovieByTitleCtrl = async (req, res) => {
    const movieTitle = req.params.keyInput;
    try {
        const matchedMovieTitles = await moviesServices.searchMovieByTitle(movieTitle);
        res.json({success: true, result: matchedMovieTitles});
    } catch (err) {
        res.json({success: false, error: err});
    };
};