import React from 'react'
import './searchBar.css'

function SearchBar({searchInput, setSearchInput, handleSearch}) {

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    
    return (
        <div class="searchBar">
            <input
            type="search"
            placeholder="Search by title, artist or album"
            onChange={handleChange}
            value={searchInput} />
            <br />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar