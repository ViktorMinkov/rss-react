import Card from 'components/Card';
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
  render() {
    const { characters } = this.state;
    return (
      <div className="form-page">
        <h1 className="form-page__title">Form page</h1>
        <Form />
        <div className="form-page__cards">
          {characters.length > 0 ? (
            characters.map((character, index) => <Card key={index} character={character} />)
          ) : (
            <div className="form-page__cards_empty">No data...</div>
          )}
        </div>
      </div>
    );
  }
}

export default FormPage;
