import React from 'react';
import './Searchbar.css'; 

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Find A Tutor By Class..."
        onChange={onChange}
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
