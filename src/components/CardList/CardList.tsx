import React, { FC } from 'react';
import Card from '@/components/Card';
import { ICharacter } from '@/types';

type CardListProps = {
  characters: ICharacter[];
};

const CardList: FC<CardListProps> = (props) => {
  const { characters } = props;
  return (
    <>
      {characters.length > 0 &&
        characters.map((character) => <Card key={character.id} character={character} />)}
    </>
  );
};

export default CardList;
