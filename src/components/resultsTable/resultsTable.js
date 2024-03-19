import React, {useState} from 'react'


function ResultsTable({searchInput, playlist, setPlaylist}) {
    const musicData = [
        {title: "Now I Lay Thee Down",
        artist: "Machine Head",
        genre: "Metal"},
        {title: "Through Struggle",
        artist: "As I Lay Dying",
        genre: "Metal"},
    ];

    const searchResults = musicData.filter((music) => {
        if (searchInput.length > 0) {
            return (
                music.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                music.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
                music.genre.toLowerCase().includes(searchInput.toLowerCase())
            );
        };
    });

    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((song, index) => {
                    return (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td><button onClick={() => setPlaylist([...playlist, song])}>+</button></td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}

export default ResultsTable