import React, { useState } from 'react';
import { MdKeyboardReturn, MdSearch } from 'react-icons/md';

import './search-form.css';

const SearchForm = ({ fruits, filteredFruits, setFilteredFruits }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let searchFiltered;

    if (filteredFruits.length === 0) setFilteredFruits(fruits);

    if (!searchInput) {
      alert('Please enter a fruit to search for');
      return;
    }

    let allFruitsCopy = [...fruits];
    searchFiltered = allFruitsCopy.filter((searchedFruit) => {
      let fruitsInSmallLetters = searchedFruit.name.toLowerCase();
      if (fruitsInSmallLetters.includes(searchInput.toLowerCase())) return searchedFruit;
    });

    if (searchFiltered.length === 0) {
      alert('The fruit was not found');
      setFilteredFruits(allFruitsCopy);
    } else {
      setFilteredFruits(searchFiltered);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="search-container">
        <MdSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for a fruit..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="return-btn" type="submit">
          <MdKeyboardReturn />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
