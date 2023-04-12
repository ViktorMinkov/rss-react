import Form from 'components/Form';
import Popup from 'components/Popup';
import React, { useState } from 'react';
import { ICharacter } from 'types';
import './FormPage.scss';
import FormCard from 'components/FormCard/FormCard';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setCharacters } from 'store/reducers/formReducer';

const FormPage = () => {
  // const [characters, setCharacters] = useState<ICharacter[]>([]);
  const characters = useAppSelector((state) => state.form.characters);
  const dispatch = useAppDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const createCharacter = (character: ICharacter) => {
    setIsPopupOpen(true);
    // setCharacters([...characters, character]);
    dispatch(setCharacters(character));
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 1000);
  };

  return (
    <div className="form-page">
      <h1 className="form-page__title">Form page</h1>
      <Form createCharacter={(character: ICharacter) => createCharacter(character)} />
      <div className="form-page__cards">
        {characters.length > 0 ? (
          characters.map((character) => <FormCard key={character.id} character={character} />)
        ) : (
          <div className="form-page__cards_empty">No data</div>
        )}
      </div>
      <Popup text={'Character is created succesfully 👌'} isPopupOpen={isPopupOpen} />
    </div>
  );
};

export default FormPage;
