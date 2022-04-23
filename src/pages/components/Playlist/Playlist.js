import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const Playlist = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

useEffect(() => {
    if (localStorage.getItem("accessToken")) {
        setToken(localStorage.getItem("accessToken"));
    }
}, []);

const Playlist = () => {
    axios
        .get(PLAYLISTS_ENDPOINT, {
        headers: {
            Authorization: "Bearer " + token,
        },
        })
        .then((response) => {
        setData(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    };

return (
    <>
    <button onClick={Playlist}>Get Playlists</button>
    {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
    );
};

export default Playlist;