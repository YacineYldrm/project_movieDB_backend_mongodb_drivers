import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MoviesList/MovieList';
import './Home.scss'

const Home = () => {

    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const fetchRequest = async () => {
            const response = await fetch('http://localhost:3001/api/movies');
            const result = await response.json();
            setMovies(result.result);
        };
        fetchRequest();
    }, []);

    return <>
    <Header src={"home"} setMovies={setMovies}/>
    <main className='home_main_wrapper'>
        <h1>All Movies</h1>
        <MovieList movies={movies} src={'home'}/>
    </main>
    </>
}
 
export default Home;
