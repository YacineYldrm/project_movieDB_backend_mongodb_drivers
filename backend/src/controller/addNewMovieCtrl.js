import { moviesServices } from "../services/index.js";

export const addNewMovieCtrl = async (req, res) => {
    const newMovie = req.body;
    try{
        const addedMovie = await moviesServices.addNewMovie(newMovie);
        res.json({success: true, result: addedMovie});
    }catch(err){
        res.json({success: false, error: err});
    };  
};