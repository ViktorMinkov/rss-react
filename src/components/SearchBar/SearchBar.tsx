import React, { FC, useEffect, useState } from 'react';
import './SearchBar.scss';

// type SearchBarProps = Record<string, never>;
// type SearchBarState = {
//   searchString: string;
// };

const SearchBar: FC = () => {
  const [searchString, setSearchString] = useState(localStorage.getItem('searchString') || '');

  useEffect(() => {
    localStorage.setItem('searchString', searchString);
  }, [searchString]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setSearchString(target.value);
  };

  const handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="search" onClick={(event) => handleFormSumbit(event)}>
      <div className="search__block">
        <input
          className="search__input"
          type="text"
          placeholder="Search..."
          value={searchString}
          onChange={(event) => handleChange(event)}
        />
        <div className="search__icon"></div>
      </div>
      <button className="search__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
