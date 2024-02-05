import { useEffect, useState } from "react";

const MovieEditor = ({ movie }) => {

    const [ editedMovie, setEditedMovie ] = useState(movie);

    useEffect(() => {
        console.log(editedMovie);
    }, [editedMovie]);

    const submitEditedMovie = async () => {
        await fetch(import.meta.env.VITE_API_URL + '/api/favorites/edit', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedMovie)
        });
        console.log("Submit succeeded");
    };

    return <article>
        <form className="edit_form_wrapper">
            <input onChange={(e) => setEditedMovie({...editedMovie, title: e.target.value})} type="text" defaultValue={editedMovie.title} />
            <input onChange={(e) => setEditedMovie({...editedMovie, year: Number(e.target.value)})} type="number" defaultValue={editedMovie.year}/>
            <input onChange={(e) => setEditedMovie({...editedMovie, director: e.target.value})} type="text" defaultValue={editedMovie.director}/>
            <input onChange={(e) => setEditedMovie({...editedMovie, genres: e.target.value.split(",")})} type="text" defaultValue={editedMovie.genres}/>
            <input onChange={(e) => setEditedMovie({...editedMovie, 'imdb.rating': Number(e.target.value)})} type="number" defaultValue={editedMovie.imdb?.rating}/>
            <input onChange={(e) => setEditedMovie({...editedMovie, poster: e.target.value})} type="text" defaultValue={editedMovie.poster}/>
            <textarea onChange={(e) => setEditedMovie({...editedMovie, plot: e.target.value})} rows={10} cols={40} defaultValue={editedMovie.plot}/>
        </form>
        <button onClick={submitEditedMovie}>Submit</button>
    </article>
}
 
export default MovieEditor;