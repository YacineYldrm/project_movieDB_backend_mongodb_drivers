import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { router } from "./src/router/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(morgan("dev")); 
app.use(cors());

app.use("/api/movies", router.moviesRouter );

app.listen(PORT, () => console.log("Server is listening at port: ", PORT));