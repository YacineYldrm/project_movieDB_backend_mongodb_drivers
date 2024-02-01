import { moviesServices } from "../services/index.js";

export const editMovieCtrl = async (req, res) => {
    const editedMovie = req.body;
    try {
        const result = await moviesServices.editMovie(editedMovie);
        res.json({success: true, result: result})
    } catch (err) {
        console.log(err);
        res.json({success: false, error: err});        
    }
}