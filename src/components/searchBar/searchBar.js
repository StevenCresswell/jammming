import React, {useState} from 'react'

function SearchBar({searchInput, setSearchInput}) {

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    
    return (
        <div>
            <input
            type="search"
            placeholder="Search by title, artist or genre"
            onChange={handleChange}
            value={searchInput} />
            

        </div>
    )
}

export default SearchBar