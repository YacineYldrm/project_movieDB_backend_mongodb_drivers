import { Link } from "react-router-dom";
import fb_logo from "/fb_logo.svg"
import yt_logo from "/yt_logo.svg"
import heart_logo from "/heart_logo.svg"
import './footer.scss'

const Footer = () => {
    return <footer className="footer_wrapper">
        <Link>Imprint</Link>
        <div>
            <p>Made with love in heart and popcorn in tummy. </p>
            <img src={heart_logo} alt="heart image" />
        </div>
        <div>
            <Link to="https://www.youtube.com/" target="_blank"><img src={yt_logo} alt="youtube logo" /></Link>
            <Link to="https://www.facebook.com/" target="_blank"><img src={fb_logo} alt="facebook logo" /></Link>
        </div>
    </footer>
}
 
export default Footer;