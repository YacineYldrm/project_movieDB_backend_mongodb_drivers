import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { useState } from 'react';
import fav_star from '/fav_star.svg'

const Navbar = ({ src, setMovies }) => {

    const [ keyInput, setKeyInput ] = useState('');
    const navigate = useNavigate();

    const handleTitleSearch = async () => {
        if (keyInput.length > 1) {
            const response = await fetch(import.meta.env.VITE_API_URL + `/api/movies/search/${keyInput}`);
            const result = await response.json();
            setMovies(result.result);
            setKeyInput('')
            console.log(result);
        } else {
            console.log("Search for title");
        }
    };

    const reloadHome = () => {
        if( src === "home")
        {
            window.location.reload();
        }else {
            navigate('/');
        }
    };

    return <nav>
        <div>
            <Link onClick={() => reloadHome()} to='/'>MMDb</Link>
            <Link to='/favorites'><img src={fav_star} alt="" /></Link>
        </div>
        <div>
            <input onChange={(e) => setKeyInput(e.target.value)} value={keyInput} type="text" placeholder='e.g. The Godfather' />
            <button onClick={handleTitleSearch}>Submit</button>
        </div>
        <div>
            <Link to='/add_your_movie'>Add your own</Link>
        </div>

    </nav>;
}
 
export default Navbar;