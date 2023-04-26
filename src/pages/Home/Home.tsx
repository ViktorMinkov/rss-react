import CardList from '@/components/CardList';
import SearchBar from '@/components/SearchBar';
import React, { useEffect } from 'react';
import './Home.scss';
import Loader from '@/components/Loader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCharacters } from '@/store/reducers/homePageReducer';
import Modal from '@/components/Modal';

const Home = () => {
  const { searchString, characters, isLoading, errorMsg } = useAppSelector(
    (state) => state.homePageSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(searchString));
  }, [searchString, dispatch]);

  return (
    <div className="home">
      <h1 className="home__title">Home Page</h1>
      <section className="home__search">
        <SearchBar />
      </section>
      <section className="home__cards">
        {errorMsg && <h3 className="home__error">{errorMsg}</h3>}
        {isLoading && <Loader />}
        {!errorMsg && !isLoading && characters && <CardList characters={characters} />}
      </section>
      <Modal />
    </div>
  );
};

export default Home;
