import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieEditor from "../../components/MovieEditor/MovieEditor";
import Navbar from "../../components/Navbar/Navbar";

const FavoriteDetails = () => {

    const [ movie, setMovie ] = useState({});
    const [ movieLoaded, setMovieLoaded ] = useState(false);
    const [ newPosterURL, setNewPosterURL ] = useState('');
    const [ editorMode, setEditorMode ] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchRequest = async (id) => {
            const response = await fetch(`http://localhost:3001/api/favorites/${id}`);
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

    // remove from favorites
    const removeHandler = async () => {
        const response = await fetch(`http://localhost:3001/api/favorites/delete/${movie?._id}`, {
            method: "DELETE"
        });
        const result = await response.json();
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
            <button onClick={removeHandler} className="favorites_button">Remove From Favorites</button>
            <button onClick={() => setEditorMode(true)} className="edit_button">Edit Movie</button>
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
            {editorMode ? <MovieEditor movie={movie}/> : null }
            
            </section>

        </main>
    </>
}
 
export default FavoriteDetails;