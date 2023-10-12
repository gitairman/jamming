import React from 'react';

function Playlist() {
    const [playlists, setPlaylists] = ([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [playlistName, setPlaylistName] = useState("");

    function handleNewPlaylist() {
        if (!playlists.includes(playlistName)) {
            playlists.push({
                name: playlistName,
                tracks: []
            });
        } else {
            alert(`${playlistName} already exists, please try a different name`);
            setPlaylistName("");
        }
    }

    function handleNewPlaylistNameInput({ target }) {
        setPlaylistName(target.value);
    }

    return (
        <>
            <div>
                <label for="newPlaylist">Playlist Name: </label>
                <input id="newPlaylistInput" type="text" onChange={handleNewPlaylistNameInput} value={playlistName} />
                <button id="newPlaylistBtn" onClick={handleNewPlaylist} >Create new Playlist</button>
            </div>
            <div>

                <Tracklist tracksToDisplay={playlistTracks} />
            </div>
        </>
    );
}