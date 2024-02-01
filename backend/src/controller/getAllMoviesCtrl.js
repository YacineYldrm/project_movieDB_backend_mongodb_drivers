import { moviesServices } from "../services/index.js";

export const getAllMoviesCtrl = async (_, res) => {
    try {
        const allMovies = await moviesServices.getAllMovies();
        res.json({success: true, result: allMovies});
    } catch (err) {
        res.json({success: false, error: err});
    };
};