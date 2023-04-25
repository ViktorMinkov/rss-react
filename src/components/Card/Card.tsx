import React, { FC, useState } from 'react';
import { ICharacter } from '@/types';
import './Card.scss';
import Modal from '@/components/Modal';
import { useAppDispatch } from '@/store/hooks';
import { fetchCharacterByID } from '@/store/reducers/homePageReducer';

type CardProps = {
  key: number;
  character: ICharacter;
};
const Card: FC<CardProps> = (props) => {
  const { character } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(fetchCharacterByID(character.id));
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={openModal} role="card">
        <div className="card__image-wrapper">
          <img className="card__image" src={character.image} alt={character.name} />
        </div>
        <h3 className="card__name">{character.name}</h3>
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card;
