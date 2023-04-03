import React, { FC } from 'react';
import { ICharacter } from 'types';
import './Modal.scss';

type ModalProps = {
  character: ICharacter;
  closeModal: () => void;
};

const Modal: FC<ModalProps> = (props) => {
  const { character, closeModal } = props;
  return (
    <div className="modal" onClick={closeModal} role="modal">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__image-wrapper">
          <img className="modal__image" src={character.image} alt={character.name} />
        </div>
        <div className="modal__info">
          <h3 className="modal__name">{character.name}</h3>
          <div className="modal__species">Type: {character.type ? character.type : 'no info'}</div>
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
