import React from 'react';
import styles from './Tracklist.module.css';

function Tracklist() {
    const mockResults = [
        {
            name: "song1",
            artist: "artist1",
            album: "album1",
            id: "12345"
        },
        {
            name: "song2",
            artist: "artist2",
            album: "album2",
            id: "54321"
        }
    ];

    const tracklist = mockResults.map((song) => (
        <ul key={song.id} className={styles.song}>
            <li>Song: {song.name}</li>
            <li>Artist: {song.artist}</li>
            <li>Album: {song.album}</li>
        </ul>
    )
    );

    return (
    <div>
        {tracklist}
    </div>
    );
}

export default Tracklist;