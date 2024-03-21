import React, {useState} from 'react'

function Playlist( {playlist, setPlaylist, playlistName, setPlaylistName} ) {
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
        <div>
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
                                <td>{song.title}</td>
                                <td>{song.album}</td>
                                <td>{song.artist}</td>
                                <td><button onClick={() => handleRemoval(index)}>-</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td><button onClick={handleClear}>Clear Playlist</button></td>
                        <td><button>Save to Spotify</button></td>
                    </tr>
                </tfoot>
            </table>
    </div>
    )
}

export default Playlist