import Card from 'components/Card';
import React, { FC } from 'react';
import { ICharacter } from 'types';
import './CardList.scss';

type CardListProps = {
  characters: ICharacter[];
};

const CardList: FC<CardListProps> = (props) => {
  const { characters } = props;
  return (
    <>
      {characters.length ? (
        characters.map((character) => <Card key={character.id} character={character} />)
      ) : (
        <div className="card-list_empty">No data</div>
      )}
    </>
  );
};

export default CardList;
