import './App.css';
import SearchBar from "./components/searchBar/searchBar";
import ResultsTable from './components/resultsTable/resultsTable';
import Playlist from './components/playlist/playlist';
import Spotify from './components/Spotify/spotify';
import React, {useState} from 'react'

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
  Spotify.getAccessToken()
  return (
    <div className="App">
      <h1 class="title">Jammming</h1>
      <div class="Inner-Workings-Container">
        <div class="Inner-Workings">
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch}/>
          <div class="tableContainer">
          <ResultsTable searchResults={searchResults} playlist={playlist} setPlaylist={setPlaylist} />
          <Playlist playlist={playlist} setPlaylist={setPlaylist} playlistName={playlistName} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;