import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

const AddNewMovie = () => {

    const [ newMovie, setNewMovie ] = useState({});

    useEffect(() => {
        console.log(newMovie);
    },[newMovie])

    // add new movie to database (collection: movies)
    const submitNewMovie = async () => {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/movies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMovie)
        }); 
        const result = await response.json()
        console.log(result);
    }

    return <>
    <Header/>
    <article>
        <form className="edit_form_wrapper">
            <input onChange={(e) => setNewMovie({...newMovie, title: e.target.value})} type="text" placeholder="Title" />
            <input onChange={(e) => setNewMovie({...newMovie, year: Number(e.target.value)})} type="number" placeholder="Year"/>
            <input onChange={(e) => setNewMovie({...newMovie, director: e.target.value})} type="text" placeholder="director"/>
            <input onChange={(e) => setNewMovie({...newMovie, genres: e.target.value.split(",")})} type="text" placeholder="e.g. comedy, western, fantasy"/>
            <input onChange={(e) => setNewMovie({...newMovie, imdb: {...newMovie.imdb, rating: Number(e.target.value) }})} type="number" placeholder="rating"/>
            <input onChange={(e) => setNewMovie({...newMovie, poster: e.target.value.toString()})} type="text" placeholder="poster url"/>
            <input onChange={(e) => setNewMovie({...newMovie, runtime: Number(e.target.value)})} type="number" placeholder="e.g. 164"/>
            <textarea onChange={(e) => setNewMovie({...newMovie, plot: e.target.value})} rows={10} cols={40} placeholder="plot"/>
        </form>
        <button onClick={submitNewMovie}>Submit</button>
    </article>
    </>;
}
 
export default AddNewMovie;