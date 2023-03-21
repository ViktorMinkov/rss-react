import CardList from 'components/CardList';
import Form from 'components/Form';
import React from 'react';
import { ICard } from 'types';
import './FormPage.scss';

type FormPageProps = Record<string, never>;
type FormPageState = {
  characters: ICard[];
};

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  createCharacter(character: ICard) {
    this.setState((state: FormPageState) => ({
      characters: [...state.characters, character],
    }));
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="form-page">
        <h1 className="form-page__title">Form page</h1>
        <Form createCharacter={(character: ICard) => this.createCharacter(character)} />
        <div className="form-page__cards">
          <CardList data={characters} />
        </div>
      </div>
    );
  }
}

export default FormPage;
