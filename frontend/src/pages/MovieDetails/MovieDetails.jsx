import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const MovieDetails = () => {

    const [ movie, setMovie ] = useState({});
    const [ movieLoaded, setMovieLoaded ] = useState(false);
    const [ newPosterURL, setNewPosterURL ] = useState('');
    const { movieId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequest = async (id) => {
            const response = await fetch(`http://localhost:3001/api/movies/${id}`);
            const result = await response.json()
            setMovie(result.result);
            setMovieLoaded(!movieLoaded)
        }
        fetchRequest(movieId);
    },[]);

    // fix poster url
    useEffect(() => {
        const fixPoster = () => {
            if(movie?.poster === undefined || movie?.poster === null ){
                setNewPosterURL("https://cdn4.vectorstock.com/i/1000x1000/12/33/movie-time-poster-design-vector-20651233.jpg")
                return;
            }else {
                const fixedPoster = movie.poster?.replace('http', 'https')
                setNewPosterURL(fixedPoster);
            };
        };
        fixPoster();
    }, [movieLoaded]);

    // add movie to favorites
    const addToFavorites = async () => {
        const response = await fetch(`http://localhost:3001/api/favorites/${movie?._id}`, {
            method: 'PATCH'
        });
        const result = await response.json();
        navigate('/favorites');
        console.log(result);

    };

    // replace poster url on error
    const onImageError = (e) => {
    e.target.src = "https://cdn4.vectorstock.com/i/1000x1000/12/33/movie-time-poster-design-vector-20651233.jpg"
    };

    return <>
        <Navbar/>
        <main className="movie_detail_wrapper">
            <section>

            <h2>{movie?.title}</h2>
            <p>{movie?.year} | {movie?.director}</p>
            <button onClick={addToFavorites} className="favorites_button">Add to Favorites</button>
            <article>
                <img src={newPosterURL} alt={`A poster from the movie ${movie?.title}`} onError={onImageError} />
                <div>
                    {movie.genres?.map((genre, id) => (
                        <button key={id} className="genre_button">{genre.toString().trim()}</button>
                    ))}
                    <h2>Story</h2>
                    <p>{movie?.plot}</p>
                </div>
                <div>
                    <p>Rating: {movie.imdb?.rating} </p>
                    <p>Duration: {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}min</p>
                </div> 
            </article>
            </section>

        </main>
    </>
}
 
export default MovieDetails;