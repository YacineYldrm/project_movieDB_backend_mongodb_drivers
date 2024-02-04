import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MovieList from "../../components/MoviesList/MovieList";

const Favorites = () => {

    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const fetchRequest = async () => {
            const response = await fetch('http://localhost:3001/api/favorites');
            const result = await response.json();
            setMovies(result.result);
        };
        fetchRequest();
    }, []);

    return <>
    <Header src={"favorites"} setMovies={setMovies}/>
    <main className='home_main_wrapper'>
        <h1>My Favorites</h1>
        <MovieList movies={movies}/>
    </main>
    </>
}
 
export default Favorites;