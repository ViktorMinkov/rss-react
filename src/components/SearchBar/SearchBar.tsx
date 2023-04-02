import React, { FC, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

// type SearchBarProps = {
//   filterCharacters: (data: string) => void;
// };

const SearchBar: FC = () => {
  const [searchString, setSearchString] = useState(localStorage.getItem('searchString') || '');
  const searchStringRef = useRef(searchString);

  useEffect(() => {
    const searchStrFromLS = localStorage.getItem('searchString') || '';
    setSearchString(searchStrFromLS);

    return () => {
      localStorage.setItem('searchString', searchStringRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setSearchString(target.value);
    searchStringRef.current = target.value;
  };

  const handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="search" onClick={(event) => handleFormSumbit(event)}>
      <div className="search__block">
        <input
          className="search__input"
          name="search"
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
