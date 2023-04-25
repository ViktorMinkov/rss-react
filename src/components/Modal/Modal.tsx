import React, { FC } from 'react';
import { ICharacter } from 'types';
import './Modal.scss';
import { useAppSelector } from 'store/hooks';

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const Modal: FC<ModalProps> = (props) => {
  const { isModalOpen, closeModal } = props;
  const character = useAppSelector((state) => state.homePageSlice.character) as ICharacter;

  return (
    <div className={isModalOpen ? 'modal open' : 'modal'} onClick={closeModal} role="modal">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__image-wrapper">
          <img className="modal__image" src={character.image} alt={character.name} />
        </div>
        <div className="modal__info">
          <h3 className="modal__name">{character.name}</h3>
          <div className="modal__species">Type: {character.type ? character.type : 'No info'}</div>
          <div className="modal__species">Species: {character.species}</div>
          <div className="modal__status">Status: {character.status}</div>
          <div className="modal__gender">Gender: {character.gender}</div>
        </div>
        <div className="modal__close" onClick={closeModal} role="closeCross"></div>
      </div>
    </div>
  );
};

export default Modal;
