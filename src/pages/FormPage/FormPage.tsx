import CardList from 'components/CardList';
import Form from 'components/Form';
import Popup from 'components/Popup';
import React from 'react';
import { ICard } from 'types';
import './FormPage.scss';

type FormPageProps = Record<string, never>;
type FormPageState = {
  characters: ICard[];
  isPopupOpen: boolean;
};

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      characters: [],
      isPopupOpen: false,
    };
  }

  createCharacter(character: ICard) {
    this.setState((state: FormPageState) => ({
      isPopupOpen: true,
      characters: [...state.characters, character],
    }));
    setTimeout(() => {
      this.setState({ isPopupOpen: false });
    }, 1000);
  }

  render() {
    const { characters, isPopupOpen } = this.state;
    return (
      <div className="form-page">
        <h1 className="form-page__title">Form page</h1>
        <Form createCharacter={(character: ICard) => this.createCharacter(character)} />
        <div className="form-page__cards">
          <CardList data={characters} />
        </div>
        <Popup text={'Character is created succesfully 👌'} isPopupOpen={isPopupOpen} />
      </div>
    );
  }
}

export default FormPage;
