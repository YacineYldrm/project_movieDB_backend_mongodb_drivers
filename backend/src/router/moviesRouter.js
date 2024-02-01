import express  from "express";
import { moviesCtrl } from "../controller/index.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesCtrl.getAllMoviesCtrl);

moviesRouter.get("/search/:keyInput", moviesCtrl.searchMovieByTitleCtrl);

moviesRouter.post("/", express.json(), moviesCtrl.addNewMovieCtrl);

moviesRouter.delete("/delete/:movieId", moviesCtrl.deleteMovieCtrl);

moviesRouter.put("/edit", express.json(), moviesCtrl.editMovieCtrl)

export default moviesRouter;



