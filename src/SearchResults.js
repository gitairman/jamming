import React from 'react';

function SearchResults({ resultsToDisplay }) {
    const formattedSearchResults = resultsToDisplay.map((result) => (

    )
    );


    return (
        <>
            <Tracklist tracksToDisplay={formattedSearchResults} />
        </>
    );
}

export default SearchResults;