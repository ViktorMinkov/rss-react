import CardList from 'components/CardList';
import SearchBar from 'components/SearchBar';
import React from 'react';
import data from 'utils/data';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__title">Home Page</h1>
        <section className="home__search">
          <SearchBar />
        </section>
        <section className="home__cards">
          <CardList data={data} />
        </section>
      </div>
    );
  }
}

export default Home;
