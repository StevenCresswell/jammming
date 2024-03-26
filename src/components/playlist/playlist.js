import React from 'react'
import './playlist.css'

function Playlist( {playlist, setPlaylist, playlistName, setPlaylistName, savePlaylist} ) {
    const handleClear = () => {
        setPlaylist([])
    }
    const handleRemoval = (index) => {
        setPlaylist(playlist.filter((_, i) => i !== index))
    }
    const handleChange = (e) => {
        setPlaylistName(e.target.value)
    }
    return (
        <div class="playlist">
            <input
            type="text"
            placeholder="My Playlist"
            onChange={handleChange}
            value={playlistName} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>   
                    </tr>
                </thead>
                <tbody>
                    {playlist.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.name}</td>
                                <td>{song.album}</td>
                                <td>{song.artist}</td>
                                <td><button class="end-row-button" onClick={() => handleRemoval(index)}>-</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div class="buttonContainer">
                <button onClick={handleClear}>Clear Playlist</button>
                <button onClick={savePlaylist}>Save to Spotify</button>
            </div>
    </div>
    )
}

export default Playlist