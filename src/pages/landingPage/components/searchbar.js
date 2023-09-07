import React, { useState } from "react";
import styles from "./searchBar.module.css";
import { searchData, defaultData } from "../../../services/searchUtils";

function SearchBar({ onSearch, updateQueryResults }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = async () => {
        const searchResults = await searchData(searchQuery);
        updateQueryResults(searchResults);
    };

    const handleSearchAll  = async () => {
        const searchResults = await defaultData();
        updateQueryResults(searchResults);
    };

    return (
        <div>
        <div className={styles.divSearchBar}>
            
            <input
                type="text"
                placeholder="Search for tutors by class ID ... " 
                value={searchQuery}
                onChange={handleChange}
            />
            <button className={styles.searchButton} onClick={handleSearch}>
                Search
            </button>
            <button className={styles.searchButton}  onClick={handleSearchAll}>
                See All Tutors
            </button>
        </div>
        </div>
    );
}

export default SearchBar;
