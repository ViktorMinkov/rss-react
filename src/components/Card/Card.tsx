import React, { FC, useState } from 'react';
import { ICharacter } from 'types';
import './Card.scss';
import Modal from 'components/Modal';

type CardProps = {
  key: number;
  character: ICharacter;
};
const Card: FC<CardProps> = (props) => {
  const { character } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
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
      {isModalOpen && <Modal character={character} closeModal={closeModal} />}
    </>
  );
};

export default Card;
