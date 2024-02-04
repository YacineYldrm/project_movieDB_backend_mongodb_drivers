import Navbar from '../Navbar/Navbar';
import './Header.scss'

const Header = ({ src, setMovies }) => {
    return <header>
        <Navbar src={src} setMovies={setMovies}/>
        <h1>MovieMagicDatabase has it all. 
            But you can still <span>add</span> to it.
        </h1>
    </header>;
}
 
export default Header;