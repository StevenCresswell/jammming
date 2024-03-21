import React, {useState} from 'react'

function SearchBar({searchInput, setSearchInput, handleSearch}) {

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    
    return (
        <div>
            <input
            type="search"
            placeholder="Search by title, artist, album or genre"
            onChange={handleChange}
            value={searchInput} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar