import { moviesServices } from "../services/index.js";

export const deleteMovieCtrl = async (req, res) => {
    const movieId = req.params.movieId;
    try{
        const removedMovie = await moviesServices.deleteMovie(movieId);
        res.json({success: true, result: removedMovie});
    }catch(err){
        res.json({success: false, error: err});
    };
}