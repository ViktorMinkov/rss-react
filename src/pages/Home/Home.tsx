import CardList from 'components/CardList';
import SearchBar from 'components/SearchBar';
import React, { useEffect, useState } from 'react';
import './Home.scss';
import { getCharacters } from 'api';
import { ICharacter } from 'types';
import Loader from 'components/Loader';

const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    setIsFetching(true);
    const data = await getCharacters();
    const characters = data.results;
    setCharacters(characters);
    setIsFetching(false);
  };

  return (
    <div className="home">
      <h1 className="home__title">Home Page</h1>
      <section className="home__search">
        <SearchBar />
      </section>
      <section className="home__cards">
        {isFetching ? <Loader /> : <CardList characters={characters} />}
      </section>
    </div>
  );
};

export default Home;
