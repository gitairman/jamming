import React from 'react';

function SearchResults({resultsToDisplay}) {
    const formattedSearchResults = resultsToDisplay.map((result) => (

    )
    );


    return (
        <div>
            <Tracklist arrayOftracks={formattedSearchResults}/>
        </div>
    );
}

export default SearchResults;