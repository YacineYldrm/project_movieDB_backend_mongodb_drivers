import { useEffect, useState } from 'react';
import './MovieCard.scss'
import { Link } from 'react-router-dom';

const MovieCard = ({id, poster, title, director, src}) => {

    const [ newPosterURL, setNewPosterURL ] = useState('');

    // fix poster url
    useEffect(() => {
        const fixPoster = () => {
            if(poster === undefined || poster === null ){
                setNewPosterURL("https://cdn4.vectorstock.com/i/1000x1000/12/33/movie-time-poster-design-vector-20651233.jpg")
                return;
            }else {
                const fixedPoster = poster?.replace('http', 'https')
                setNewPosterURL(fixedPoster);
            };
        };
        fixPoster();
    }, []);

    // remove from favorites

    const removeHandler = async () => {
        const response = await fetch(import.meta.env.VITE_API_URL + `/api/favorites/delete/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        window.location.reload();
    };

    // replace poster url on error
    
    const onImageError = (e) => {
    e.target.src = "https://cdn4.vectorstock.com/i/1000x1000/12/33/movie-time-poster-design-vector-20651233.jpg"
    };

    return (
        <article className='movie_card_wrapper'> 
            <Link key={id} to={src === "home" ? `/movie/${id}` : `/favorites/${id}`}>
                <div className='image_wrapper'>
                    <img src={newPosterURL} alt={`A poster from the movie ${title}`} onError={onImageError} />
                </div>
                <h3>{title}</h3>
                <h4>{director}</h4>
            </Link> 
            {src === 'home' ? null : <button onClick={removeHandler} className='favorites_button'>Remove from Favorites</button> }
        </article>
        )
};
 
export default MovieCard;