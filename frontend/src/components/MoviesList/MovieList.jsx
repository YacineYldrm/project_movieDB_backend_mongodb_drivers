import './MovieList.scss'
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({ src, movies }) => {

    return (
        <section className="movie_gallery_wrapper">
            {movies?.length > 0 ? movies?.map((movie) => 
                <MovieCard
                key={movie._id}
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                director={movie.director}
                src={src === "home" ? "home" : "favorites"} 
                />
            ) : 
            <>
                <div>
                    <h2>Title not found 👀</h2>
                    <Link onClick={() => window.location.reload()}>All Movies</Link> 
                </div>
            </> 
        }
        </section>) 
}

export default MovieList;