import React from 'react';
import './search-bar.styles.css';

function SearchBar(props) {
    return(
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder={props.placeholder} onChange={props.handleSearch}/>
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;