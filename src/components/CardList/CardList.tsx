import Card from 'components/Card';
import React from 'react';
import data from 'utils/data';

class CardList extends React.Component {
  render() {
    return (
      <>
        {data.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </>
    );
  }
}

export default CardList;
