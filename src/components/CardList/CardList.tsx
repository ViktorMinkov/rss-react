import Card from 'components/Card';
import React from 'react';
import data from 'utils/data';
import './CardList.scss';

class CardList extends React.Component {
  render() {
    return (
      <>
        {data.length > 0 ? (
          data.map((character) => <Card key={character.id} character={character} />)
        ) : (
          <div className="card-list_empty">No data</div>
        )}
      </>
    );
  }
}

export default CardList;
