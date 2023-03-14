import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <SearchBar />
        <div className="home__cards">Cards</div>
      </div>
    );
  }
}

export default Home;
