import { services } from "../services/index.js";

export const addMovieToFavoritesCtrl = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await services.addMovieToFavorites(movieId);
        console.log(movie);
        res.json({success: true, result: movie});
    } catch (err) {
        res.json({success: false, error: err});
    };
};