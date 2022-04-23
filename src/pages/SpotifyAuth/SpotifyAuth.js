import React, { useEffect } from "react";
import Playlist from "../components/Playlist/Playlist";
import "./SpotifyAuth.css";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "https://lanify.vercel.app/SpotifyAuth";
const SPACE_DELIMITER = "%20";
const SCOPES = [
    "user-read-currently-playing",
    "playlist-modify-private",
    "user-read-playback-state"
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
//Processing Token
const returnedSpotifyAuth = (hash) => {
    const stringAfterHash = hash.substring(1);
    const paramsInUrl = stringAfterHash.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});
    return paramsSplitUp;
};

const SpotifyAuth = () => {
    useEffect(() => {
        if (window.location.hash) {
            const { access_token, expires_in, token_type } =
            returnedSpotifyAuth(window.location.hash);
            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    });

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };
    return (
        <div class="Spotify-Login h-500 center-v center-h">
            <button onClick={handleLogin}>login to Spotify</button>
            <Playlist />
        </div>
    );
};

export default SpotifyAuth;