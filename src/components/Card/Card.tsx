import React, { FC } from 'react';
import { ICharacter } from '@/types';
import './Card.scss';
import { useAppDispatch } from '@/store/hooks';
import { fetchCharacterByID, setIsModalOpen } from '@/store/reducers/homePageReducer';

type CardProps = {
  key: number;
  character: ICharacter;
};
const Card: FC<CardProps> = (props) => {
  const { character } = props;
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(fetchCharacterByID(character.id));
    dispatch(setIsModalOpen(true));
  };

  return (
    <>
      <div className="card" onClick={openModal} role="card">
        <div className="card__image-wrapper">
          <img className="card__image" src={character.image} alt={character.name} />
        </div>
        <h3 className="card__name">{character.name}</h3>
      </div>
    </>
  );
};

export default Card;
