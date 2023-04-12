import React, { FC, useRef } from 'react';
import './SearchBar.scss';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setSearchString } from 'store/reducers/searchReducer';

type SearchBarProps = {
  fetchCharacters: (data: string) => void;
};

const SearchBar: FC<SearchBarProps> = (props) => {
  const searchString = useAppSelector((state) => state.search.searchString);
  const dispatch = useAppDispatch();
  const searchStringRef = useRef(searchString);
  const { fetchCharacters } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    dispatch(setSearchString(target.value));
    searchStringRef.current = target.value;
  };

  const handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchString(searchStringRef.current));
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
