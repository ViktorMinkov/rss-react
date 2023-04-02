import CardList from 'components/CardList';
import Form from 'components/Form';
import Popup from 'components/Popup';
import React, { useState } from 'react';
import { ICharacter } from 'types';
import './FormPage.scss';

const FormPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const createCharacter = (character: ICharacter) => {
    setIsPopupOpen(true);
    setCharacters([...characters, character]);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 1000);
  };

  return (
    <div className="form-page">
      <h1 className="form-page__title">Form page</h1>
      <Form createCharacter={(character: ICharacter) => createCharacter(character)} />
      <div className="form-page__cards">
        <CardList characters={characters} />
      </div>
      <Popup text={'Character is created succesfully 👌'} isPopupOpen={isPopupOpen} />
    </div>
  );
};

export default FormPage;
