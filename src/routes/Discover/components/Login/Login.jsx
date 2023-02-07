import "./style.css";
import homeImage from "../../../../assets/images/home.png";
import { useEffect } from "react";
import Discover from "../Discover";

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private`;
export default function Login() {

    const actualUrl = window.location.href;

    useEffect( () => {
        console.log( actualUrl.slice(28) );
        if ( actualUrl.slice(28) != '' ) {
            return (
                <>
                    <Discover/>
                </>
            );
        } else {
            console.log( 'false' );
        }
    }, [] );
    const handleLoginClick = () => {
        window.location.replace(spotifyUrl);
    }

    return (
        <div className="home-container">
            <div className="home-left-child">
                <h3>Bienvenido de nuevo</h3>
                <h6>identifícate para encontrar tu música favorita</h6>
                <button onClick={handleLoginClick}>Iniciar sesion</button>
            </div>
            <div className="home-right-child" style={{ backgroundImage: `url(${homeImage})` }} />
        </div>
    );

}
