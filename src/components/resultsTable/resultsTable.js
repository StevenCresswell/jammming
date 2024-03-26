import React from 'react'
import './resultsTable.css'


function ResultsTable({searchResults, playlist, setPlaylist}) {
    /*const musicData = [
        {title: "Now I Lay Thee Down",
        artist: "Machine Head",
        album: "The Blackening",
        genre: "Metal"},
        {title: "Through Struggle",
        artist: "As I Lay Dying",
        album: "Through Struggle",
        genre: "Metal"},
    ];

    const searchResults = musicData.filter((music) => {
        if (searchInput.length > 0) {
            return (
                music.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                music.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
                music.genre.toLowerCase().includes(searchInput.toLowerCase()) ||
                music.album.toLowerCase().includes(searchInput.toLowerCase())
            );
        };
    });
*/
    return (
        <div class="resultsTable">
            <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                </tr>
            </thead>
            <tbody>
                {searchResults && searchResults.map((track) => {
                    return (
                        <tr key={track.id}>
                            <td>{track.name}</td>
                            <td>{track.album}</td>
                            <td>{track.artist}</td>
                            <td><button class="end-row-button" onClick={() => setPlaylist([...playlist, track])}>+</button></td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}

export default ResultsTable