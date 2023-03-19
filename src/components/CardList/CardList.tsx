import Card from 'components/Card';
import React from 'react';
import { ICard } from 'types';
import './CardList.scss';

type CardListProps = {
  data: ICard[];
};

class CardList extends React.Component<CardListProps> {
  render() {
    const { data } = this.props;
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
