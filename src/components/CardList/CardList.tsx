import Card from 'components/Card';
import React, { FC } from 'react';
import { ICard } from 'types';
import './CardList.scss';

type CardListProps = {
  data: ICard[];
};

const CardList: FC<CardListProps> = (props) => {
  const { data } = props;
  return (
    <>
      {data.length > 0 ? (
        data.map((character) => <Card key={character.id} character={character} />)
      ) : (
        <div className="card-list_empty">No data</div>
      )}
    </>
  );
};

export default CardList;
