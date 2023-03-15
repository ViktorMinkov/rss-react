import CardList from 'components/CardList';
import SearchBar from 'components/SearchBar';
import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="home__search">
          <SearchBar />
        </section>
        <section className="home__cards">
          <CardList />
        </section>
      </div>
    );
  }
}

export default Home;
