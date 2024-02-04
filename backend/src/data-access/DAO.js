import { ObjectId } from "mongodb";
import { getDb } from "./db.js";

// ===========================================================================
//                             get all movies
// ===========================================================================

export const getAll = async (collectionName) => {
    const db = await getDb();
    const allMovies = await db.collection(collectionName).find().toArray();
    // console.log(allMovies);
    return allMovies;
};

// ===========================================================================
//                             get movie by id
// ===========================================================================

export const getById = async (collectionName, id) => {
    const db = await getDb();
    const movie = await db.collection(collectionName).findOne({ _id: ObjectId.createFromHexString(id)});
    console.log(movie);
    return movie;
};

// ===========================================================================
//                             search by user input
// ===========================================================================

export const searchByKeyword = async (collectionName, userInput) => {
    const db = await getDb();
    const movie = await db.collection(collectionName).find({title: {$regex: userInput, $options: 'i'}}).toArray();
    return movie;
};

// ===========================================================================
                            // find and delete by id
// ===========================================================================

export const findAndDeleteById = async (collectionName, id) => {
    const db = await getDb();
    const movie = await db.collection(collectionName).findOneAndDelete({_id: ObjectId.createFromHexString(id)});
    console.log(movie);
    return movie;
};

// ===========================================================================
//                          Add movie to collection
// ===========================================================================

export const addMovie = async (collectionName, document) => {
    const db = await getDb();
    const newMovie = await db.collection(collectionName).insertOne(document);
    console.log(document);
    return document;
};

// ===========================================================================
//                              Edit movie
// ===========================================================================

export const editMovie = async (collectionName, document) => {
    const db = await getDb();
    const documentId = document._id;
    delete document._id;
    const editedMovie = await db.collection(collectionName).findOneAndReplace({_id: ObjectId.createFromHexString(documentId)}, document, { returnDocument: "after"});
    return editedMovie;
};

// ===========================================================================
//                              add favorites
// ===========================================================================

export const addMovieToFavorites = async (collectionName, id) => {
    const db = await getDb();
    const movie = await db.collection(collectionName).aggregate([{$match: {_id: ObjectId.createFromHexString(id)}}, {$merge: "favorites"}]).toArray();
    return movie;
};