import React, { FC, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
  fetchCharacters: (data: string) => void;
};

const SearchBar: FC<SearchBarProps> = (props) => {
  const [searchString, setSearchString] = useState(localStorage.getItem('searchString') || '');
  const searchStringRef = useRef(searchString);
  const { fetchCharacters } = props;

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
    fetchCharacters(searchString);
  };

  return (
    <form className="search" onSubmit={handleFormSumbit}>
      <div className="search__block">
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Search..."
          value={searchString}
          onChange={handleChange}
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
