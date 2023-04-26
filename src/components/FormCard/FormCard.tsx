import React, { FC } from 'react';
import { ICharacter } from '@/types';
import './FormCard.scss';

type FormCardProps = {
  key: number;
  character: ICharacter;
};
const FormCard: FC<FormCardProps> = (props) => {
  const { character } = props;
  const date = new Date(character.created);
  return (
    <div className="form-card" role="formcard">
      <div className="form-card__image-wrapper">
        <img className="form-card__image" src={character.image} alt={character.name} />
      </div>
      <h3 className="form-card__name">{character.name}</h3>
      <div className="form-card__content">
        <div className="form-card__species">Species: {character.species}</div>
        <div className="form-card__status">Status: {character.status}</div>
        <div className="form-card__gender">Gender: {character.gender}</div>
        <div className="form-card__gender">Created: {date.toLocaleDateString()}</div>
        <div className="form-card__favourite"></div>
      </div>
    </div>
  );
};

export default FormCard;
