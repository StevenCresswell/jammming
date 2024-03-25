import './App.css';
import SearchBar from "./components/searchBar/searchBar";
import ResultsTable from './components/resultsTable/resultsTable';
import Playlist from './components/playlist/playlist';
import Spotify from './components/Spotify/spotify';
import React, {useState, useEffect} from 'react'

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  const handleSearch = async () => {
    const results = await Spotify.search(searchInput)
    setSearchResults(results)
  }

  const savePlaylist = () => {
  const trackUris = playlist.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylist([]);
    });
  };

  return (
    <div className="App">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch}/>
      <ResultsTable searchResults={searchResults} playlist={playlist} setPlaylist={setPlaylist} />
      <Playlist playlist={playlist} setPlaylist={setPlaylist} playlistName={playlistName} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist}/>
    </div>
  );
}

export default App;