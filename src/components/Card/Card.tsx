import React from 'react';
import { ICard } from 'types';
import './Card.scss';

type CardProps = {
  key: number;
  character: ICard;
};
class Card extends React.Component<CardProps> {
  render() {
    const { character } = this.props;
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
          <div className="card__favourite"></div>
        </div>
      </div>
    );
  }
}

export default Card;
