import './App.css';
import SearchBar from "./components/searchBar/searchBar";
import ResultsTable from './components/resultsTable/resultsTable';
import Playlist from './components/playlist/playlist';
import React, {useState} from 'react'

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [playlist, setPlaylist] = useState([]);
  return (
    <div className="App">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <ResultsTable searchInput={searchInput} playlist={playlist} setPlaylist={setPlaylist}/>
      <Playlist playlist={playlist} setPlaylist={setPlaylist} />
    </div>
  );
}

export default App;