import React, {useState} from 'react'

function Playlist(playlist, setPlaylist) {
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
                    {playlist.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.genre}</td>
                                <td><button>-</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
    )
}

export default Playlist