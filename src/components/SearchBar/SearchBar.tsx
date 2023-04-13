import React, { FC, useRef } from 'react';
import './SearchBar.scss';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setSearchString } from 'store/reducers/searchReducer';

const SearchBar: FC = () => {
  const searchString = useAppSelector((state) => state.search.searchString);
  const dispatch = useAppDispatch();
  const searchStringRef = useRef<HTMLInputElement>(null);

  const handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchStringRef.current) {
      const searcthStr = searchStringRef.current.value;
      dispatch(setSearchString(searcthStr));
    }
  };

  return (
    <form className="search" onSubmit={handleFormSumbit}>
      <div className="search__block">
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Search..."
          defaultValue={searchString}
          ref={searchStringRef}
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
