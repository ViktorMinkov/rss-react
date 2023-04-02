import React, { FC } from 'react';
import { ICharacter } from 'types';
import './Card.scss';

type CardProps = {
  key: number;
  character: ICharacter;
};
const Card: FC<CardProps> = (props) => {
  const { character } = props;
  const date = new Date(character.created);
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={character.image} alt={character.name} />
      </div>
      <h3 className="card__name">{character.name}</h3>
      <div className="card__content">
        <div className="card__species">Species: {character.species}</div>
        <div className="card__status">Status: {character.status}</div>
        <div className="card__gender">Gender: {character.gender}</div>
        <div className="card__gender">Created: {date.toLocaleDateString()}</div>
        <div className="card__favourite"></div>
      </div>
    </div>
  );
};

export default Card;
