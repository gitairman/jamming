import React, { useState } from 'react';
import SearchResults from './SearchResults';


function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [searchBy, setSearchBy] = useState("All");
    const [searchResults, setSearchResults] = useState({});

    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }
    function handleSearchBy(e) {
        setSearchBy(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();

        //send request to Spotify

        setSearchResults();
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label for="searchbar">Search by </label>
                    <select name="searchBy" id="searchBy" onChange={handleSearchBy}>
                        <option value="searchAll">All</option>
                        <option value="searchSong">Song</option>
                        <option value="searchArtist">Artist</option>
                        <option value="searchAlbum">Album</option>
                    </select>
                    <input id="searchbar" type="text" value={searchInput} onChange={handleSearchInput} />
                    <input type="submit" value="Go!">
                </form>
            </div>
            <SearchResults resultsToDisplay={searchResults} />
        </>
    );
}

export default SearchBar;