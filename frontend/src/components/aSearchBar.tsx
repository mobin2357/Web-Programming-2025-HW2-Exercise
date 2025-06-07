import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  // const [inputVal, setInputVal] = useState('');
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert("You searched for " + query);
    // todo: search for the given form
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
